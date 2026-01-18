import { captureException } from '@sentry/node';
import { Channel, ChannelModel, connect, Message as MQMessage } from 'amqplib';
import chalk from '../../util/chalk';
import { Message, TextChannel } from 'eris';
import moment from 'moment';

import { BotType, ChannelType, GuildPermission, ShardCommand } from '../../types';

import { IMService } from './Service';

const BOT_SHARDING = 16;
const ALLOWED_SUDO_COMMANDS = new Set(['leaderboard', 'invites', 'bot-info', 'prefix']);

interface ShardMessage {
	id: string;
	cmd: ShardCommand;

	[x: string]: any;
}

export class RabbitMqService extends IMService {
	private conn: ChannelModel;
	private connRetry: number = 0;

	private qNameStartup: string;
	private channelStartup: Channel;
	private startTicket: MQMessage;
	private waitingForTicket: boolean;

	private qNameInviteSync: string;
	private channelInviteSync: Channel;
	private inviteSyncTicket: MQMessage;
	private waitingForInviteSyncTicket: boolean;
	private inviteSyncSeeded: boolean;

	private qName: string;
	private channel: Channel;
	private channelRetry: number = 0;
	private msgQueue: any[] = [];

	public async init() {
		if (this.client.flags.includes('--no-rabbitmq')) {
			return;
		}

		await this.initConnection();
		await this.initChannel();
	}
	private async initConnection() {
		try {
			const conn = await connect(this.client.config.rabbitmq);
			this.conn = conn;
			this.conn.on('close', async (err) => {
				if (err) {
					console.error(err);
				}
				await this.shutdownConnection();

				setTimeout(() => this.initConnection(), this.connRetry * 30);
				this.connRetry++;
			});
		} catch (err) {
			console.error(err);

			await this.shutdownConnection();
			await this.initConnection();
		}
	}
	private async shutdownConnection() {
		await this.shutdownChannel();
		await this.shutdownInviteSyncChannel();

		if (this.conn) {
			try {
				await this.conn.close();
			} catch {
				// NO-OP
			}
			this.conn = null;
		}
	}

	private async initChannel() {
		if (!this.conn) {
			return;
		}

		this.connRetry = 0;
		this.qName = `shard-${this.client.instance}-${this.client.shardId}`;

		try {
			this.channel = await this.conn.createChannel();
			this.channel.on('close', async (err) => {
				if (err) {
					console.error(err);
				}
				await this.shutdownChannel();

				setTimeout(() => this.initChannel(), this.channelRetry * 30);
				this.channelRetry++;
			});

			while (this.msgQueue.length > 0) {
				await this.sendToManager(this.msgQueue.pop(), true);
			}

			await this.channel.prefetch(5);
			await this.channel.assertQueue(this.qName, { durable: false, autoDelete: true });
			await this.channel.assertExchange('shards', 'fanout', { durable: true });
			await this.channel.bindQueue(this.qName, 'shards', '');
			this.channel.consume(this.qName, (msg) => this.onShardCommand(msg), { noAck: false });

			this.channelRetry = 0;
		} catch (err) {
			console.error(err);

			await this.shutdownChannel();
			await this.initChannel();
		}
	}
	private async shutdownChannel() {
		if (this.channel) {
			try {
				await this.channel.close();
			} catch {
				// NO-OP
			}

			this.channel = null;
		}
	}

	private async shutdownInviteSyncChannel() {
		if (this.channelInviteSync) {
			try {
				await this.channelInviteSync.close();
			} catch {
				// NO-OP
			}

			this.channelInviteSync = null;
		}
	}

	public async waitForStartupTicket() {
		if (!this.conn) {
			console.log(chalk.yellow('No connection available, this is ok for single installations or in dev mode.'));
			console.log(chalk.yellow('Skipping start ticket...'));
			return;
		}

		// Don't do this for custom bots
		if (
			this.client.type === BotType.custom ||
			this.client.type === BotType.pro ||
			this.client.type === BotType.regular
		) {
			return;
		}

		// const startupSuffix = this.client.shardCount > BOT_SHARDING ? `-${this.client.shardId % BOT_SHARDING}` : '';
		const startupSuffix = '';
		this.qNameStartup = `shard-${this.client.instance}-start${startupSuffix}`;

		this.channelStartup = await this.conn.createChannel();
		this.channelStartup.on('close', async (err) => {
			this.waitingForTicket = false;

			// If we have a ticket we are probably closing the channel after startup is complete
			if (this.startTicket) {
				return;
			}

			if (err) {
				captureException(err);
				console.error(err);
			}

			console.error('Could not aquire startup ticket');
			process.exit(1);
		});

		await this.channelStartup.prefetch(1);
		await this.channelStartup.assertQueue(this.qNameStartup, { durable: true, autoDelete: false, maxPriority: 10 });

		// Reset the ticket
		this.startTicket = null;
		this.waitingForTicket = true;

		// Return a promise that resolves when we aquire a start ticket (a rabbitmq message)
		return new Promise<void>((resolve) => {
			// Start listening on the queue for one message (our start ticket)
			this.channelStartup.consume(
				this.qNameStartup,
				(msg) => {
					console.log(chalk.green(`Aquired start ticket!`));

					this.waitingForTicket = false;

					// Save the ticket so we can return it to the queue when our startup is done
					this.startTicket = msg;
					resolve();
				},
				{ noAck: false, priority: this.client.hasStarted ? 1 : 0 }
			);
		});
	}
	public async endStartup() {
		if (!this.channelStartup) {
			return;
		}

		// Nack the message, so that it gets returned to the queue for the next process to use
		this.channelStartup.nack(this.startTicket, false, true);

		// Close the channel because we don't want another ticket
		await this.channelStartup.close();
		this.channelStartup = null;

		this.startTicket = null;
	}

	private getInviteSyncSettings(): { globalMaxConcurrent: number; ticketShardId: number } {
		const raw = (this.client.config && this.client.config.inviteSync) || {};
		const readNumber = (value: unknown, fallback: number) =>
			typeof value === 'number' && Number.isFinite(value) ? value : fallback;

		const globalMaxConcurrent = Math.max(0, Math.floor(readNumber(raw.globalMaxConcurrent, 0)));
		const ticketShardId = Math.max(0, Math.floor(readNumber(raw.ticketShardId, 0)));

		return { globalMaxConcurrent, ticketShardId };
	}

	private getInviteSyncQueueName(): string {
		return `shard-${this.client.instance}-invite-sync`;
	}

	public async ensureInviteSyncTickets() {
		if (!this.conn) {
			return;
		}

		const { globalMaxConcurrent, ticketShardId } = this.getInviteSyncSettings();
		if (globalMaxConcurrent <= 0 || this.inviteSyncSeeded || this.client.shardId !== ticketShardId) {
			return;
		}

		const channel = await this.conn.createChannel();
		try {
			const qName = this.getInviteSyncQueueName();
			const { messageCount, consumerCount } = await channel.assertQueue(qName, { durable: true, autoDelete: false });

			if (messageCount === 0 && consumerCount === 0) {
				for (let i = 0; i < globalMaxConcurrent; i++) {
					channel.sendToQueue(qName, Buffer.from(JSON.stringify({ ticket: i + 1 })), { persistent: true });
				}
				console.log(chalk.green(`Seeded ${globalMaxConcurrent} invite sync tickets`));
			}
		} catch (err) {
			console.error(err);
		} finally {
			try {
				await channel.close();
			} catch {
				// NO-OP
			}
		}

		this.inviteSyncSeeded = true;
	}

	public async waitForInviteSyncTicket() {
		if (!this.conn) {
			console.log(chalk.yellow('No connection available, invite sync tickets disabled.'));
			return;
		}

		const { globalMaxConcurrent } = this.getInviteSyncSettings();
		if (globalMaxConcurrent <= 0) {
			return;
		}

		this.qNameInviteSync = this.getInviteSyncQueueName();
		this.channelInviteSync = await this.conn.createChannel();
		this.channelInviteSync.on('close', async (err) => {
			this.waitingForInviteSyncTicket = false;

			if (this.inviteSyncTicket) {
				return;
			}

			if (err) {
				captureException(err);
				console.error(err);
			}

			console.error('Could not acquire invite sync ticket');
			process.exit(1);
		});

		await this.channelInviteSync.prefetch(1);
		await this.channelInviteSync.assertQueue(this.qNameInviteSync, { durable: true, autoDelete: false });

		this.inviteSyncTicket = null;
		this.waitingForInviteSyncTicket = true;

		return new Promise<void>((resolve) => {
			this.channelInviteSync.consume(
				this.qNameInviteSync,
				(msg) => {
					if (!msg) {
						return;
					}
					console.log(chalk.green('Acquired invite sync ticket!'));
					this.waitingForInviteSyncTicket = false;
					this.inviteSyncTicket = msg;
					resolve();
				},
				{ noAck: false }
			);
		});
	}

	public async endInviteSync() {
		if (!this.channelInviteSync) {
			return;
		}

		if (this.inviteSyncTicket) {
			this.channelInviteSync.nack(this.inviteSyncTicket, false, true);
		}

		await this.channelInviteSync.close();
		this.channelInviteSync = null;
		this.inviteSyncTicket = null;
		this.waitingForInviteSyncTicket = false;
	}

	public async sendToManager(message: { id: string; [x: string]: any }, isResend: boolean = false) {
		if (!this.conn) {
			console.log('Send message to RabbitMQ', JSON.stringify(message, null, 2));
			return;
		}

		if (!this.channel) {
			if (!isResend) {
				this.msgQueue.push(message);
			}
			return;
		}

		this.channel.sendToQueue(
			'manager',
			Buffer.from(
				JSON.stringify({
					timestamp: moment().unix(),
					type: this.client.type,
					instance: this.client.instance,
					shardId: this.client.shardId,
					shardCount: this.client.shardCount,
					service: 'bot',
					...message
				})
			)
		);
	}

	public async sendStatusToManager(err?: Error, requestId?: string) {
		await this.sendToManager({
			id: requestId || 'status',
			cmd: ShardCommand.STATUS,
			state: this.waitingForTicket
				? 'waiting'
				: !this.client.hasStarted
					? 'init'
					: !!this.startTicket
						? 'starting'
						: 'running',
			startedAt: this.client.startedAt?.toString(),
			gateway: this.client.gatewayConnected,
			guilds: this.client.guilds.size,
			error: err ? err.message : null,
			tracking: this.getTrackingStatus(),
			music: this.getMusicStatus(),
			cache: this.getCacheSizes()
		});
	}

	private async onShardCommand(msg: MQMessage) {
		const content = JSON.parse(msg.content.toString()) as ShardMessage;
		const cmd = content.cmd;

		const guildId = content.guildId;
		const guild = this.client.guilds.get(guildId);

		console.log(`RECEIVED SHARD COMMAND: ${JSON.stringify(content)}`);

		this.channel.ack(msg, false);

		const sendResponse = (message: { [x: string]: any }) =>
			this.sendToManager({
				id: content.id,
				cmd: content.cmd,
				...message
			});

		switch (cmd) {
			case ShardCommand.STATUS:
				await this.sendStatusToManager(undefined, content.id);
				break;

			case ShardCommand.CUSTOM:
				const self = await this.client.getSelf();

				await sendResponse({
					self,
					guilds: this.client.guilds.map((g) => ({
						id: g.id,
						name: g.name,
						icon: g.iconURL,
						memberCount: g.memberCount
					}))
				});
				break;

			case ShardCommand.CACHE:
				await sendResponse(this.getCacheSizes());
				break;

			case ShardCommand.DIAGNOSE:
				if (!guild) {
					return sendResponse({
						error: `Guild ${guildId} not found`
					});
				}

				const sets = await this.client.cache.guilds.get(guildId);
				const perms = guild.members.get(this.client.user.id).permissions.json;

				let joinChannelPerms: { [key: string]: boolean } = {};
				if (sets.joinMessageChannel) {
					const joinChannel = guild.channels.get(sets.joinMessageChannel);
					if (joinChannel) {
						joinChannelPerms = joinChannel.permissionsOf(this.client.user.id).json;
					} else {
						joinChannelPerms = { 'Invalid channel': true };
					}
				} else {
					joinChannelPerms = { 'Not set': true };
				}

				let leaveChannelPerms: { [key: string]: boolean } = {};
				if (sets.leaveMessageChannel) {
					const leaveChannel = guild.channels.get(sets.leaveMessageChannel);
					if (leaveChannel) {
						leaveChannelPerms = leaveChannel.permissionsOf(this.client.user.id).json;
					} else {
						leaveChannelPerms = { 'Invalid channel': true };
					}
				} else {
					leaveChannelPerms = { 'Not set': true };
				}

				let annChannelPerms: { [key: string]: boolean } = {};
				if (sets.rankAnnouncementChannel) {
					const annChannel = guild.channels.get(sets.rankAnnouncementChannel);
					if (annChannel) {
						annChannelPerms = annChannel.permissionsOf(this.client.user.id).json;
					} else {
						annChannelPerms = { 'Invalid channel': true };
					}
				} else {
					annChannelPerms = { 'Not set': true };
				}

				const owner = await this.client.getRESTUser(guild.ownerID).catch(() => {});

				const premium = await this.client.cache.premium.get(guildId);

				const disabled = this.client.disabledGuilds.has(guildId);

				await sendResponse({
					owner,
					premium,
					disabled,
					settings: sets,
					perms,
					joinChannelPerms,
					leaveChannelPerms,
					announceChannelPerms: annChannelPerms
				});
				break;

			case ShardCommand.ROLE_INFO:
				if (!guild) {
					return sendResponse({
						error: `Guild ${guildId} not found`
					});
				}

				const roleIds = Array.isArray(content.roleIds) ? (content.roleIds as string[]) : [];
				const roles = roleIds.map((id) => {
					const role = guild.roles.get(id);
					return {
						id,
						exists: !!role,
						name: role?.name,
						position: role?.position,
						color: role?.color
					};
				});

				await sendResponse({ roles });
				break;

			case ShardCommand.FLUSH_CACHE:
				const errors: string[] = [];
				const cacheNames = content.caches as string[];

				if (!content.caches) {
					Object.values(this.client.cache).forEach((c) => c.flush(guildId));
				} else {
					for (const cacheName of cacheNames) {
						const cache = this.client.cache[cacheName];
						if (cache) {
							cache.flush(guildId);
						} else {
							errors.push('Invalid cache name ' + cacheName);
						}
					}
				}
				await sendResponse({ error: errors.join('\n') });
				break;

			case ShardCommand.RELOAD_MUSIC_NODES:
				if (this.client.music.enabled) {
					await this.client.music.loadMusicNodes();
				}
				await sendResponse({});
				break;

			case ShardCommand.SUDO:
				if (!guild) {
					return sendResponse({ error: 'Guild not found' });
				}
				if (!content.command) {
					return sendResponse({ error: 'Missing command' });
				}

				const rawCmd = content.command.toString().trim();
				const cmdName = rawCmd.split(' ')[0].toLowerCase();
				if (!ALLOWED_SUDO_COMMANDS.has(cmdName)) {
					return sendResponse({ error: 'Command not allowed' });
				}

				const settings = await this.client.cache.guilds.get(guildId);
				const prefix = settings?.prefix || '!';

				const channel = guild.channels.find(
					(c) =>
						c.type === ChannelType.GUILD_TEXT &&
						(c as TextChannel).permissionsOf(this.client.user.id).has(GuildPermission.SEND_MESSAGES)
				);

				if (!channel) {
					return sendResponse({ error: 'No text channel available' });
				}

				const outputs: Array<{ content?: string; embed?: any }> = [];
				const sudoChannel = Object.create(channel) as TextChannel;
				sudoChannel.createMessage = async (payload: any) => {
					if (typeof payload === 'string') {
						outputs.push({ content: payload });
					} else if (payload) {
						if (payload.embed) {
							outputs.push({ embed: payload.embed });
						}
						if (payload.embeds && Array.isArray(payload.embeds)) {
							for (const emb of payload.embeds) {
								outputs.push({ embed: emb });
							}
						}
						if (payload.content) {
							outputs.push({ content: payload.content });
						}
					}
					return null as any;
				};

				const sudoAuthor = {
					id: content.userId || this.client.user.id,
					bot: false,
					username: 'Manager',
					discriminator: '0000'
				};

				const sudoMessage: any = {
					id: `sudo-${Date.now()}`,
					content: `${prefix}${rawCmd}`,
					author: sudoAuthor,
					channel: sudoChannel
				};
				sudoMessage.__sudo = true;

				await this.client.cmds.onMessage(sudoMessage as Message);
				await sendResponse({ outputs });
				break;

			case ShardCommand.LEAVE_GUILD:
				if (!guild) {
					return sendResponse({
						error: 'Guild not found'
					});
				}

				await guild.leave();
				await sendResponse({});
				break;

			case ShardCommand.OWNER_DM:
				try {
					const user = await this.client.getRESTUser(content.userId);
					const userChannel = await user.getDMChannel();
					await userChannel.createMessage(content.message);
					await sendResponse({ ok: true });
				} catch (e) {
					await sendResponse({ ok: false, error: e });
				}
				break;

			case ShardCommand.USER_DM:
				const dmChannel = guild.channels.get(content.channelId) as TextChannel;
				const sender = content.user;

				const embed = this.client.msg.createEmbed({
					author: {
						name: `${sender.username}#${sender.discriminator}`,
						url: sender.avatarURL
					},
					description: content.message
				});
				embed.fields.push({
					name: 'User ID',
					value: sender.id,
					inline: true
				});
				embed.fields.push({
					name: 'Initial message',
					value: content.isInitial,
					inline: true
				});

				await dmChannel.createMessage({
					embed
				});
				break;

			default:
				console.error(`UNKNOWN COMMAND: ${cmd}`);
		}
	}

	private getTrackingStatus() {
		return {
			pendingGuilds: this.client.tracking.pendingGuilds.size,
			initialPendingGuilds: this.client.tracking.initialPendingGuilds
		};
	}
	private getMusicStatus() {
		return {
			connections: this.client.music.getMusicConnectionGuildIds()
		};
	}
	private getCacheSizes() {
		const groupChannels = (this.client as any).groupChannels;
		let channelCount = (groupChannels ? groupChannels.size : 0) + this.client.dmChannels.size;
		let roleCount = 0;

		this.client.guilds.forEach((g) => {
			channelCount += g.channels.size;
			roleCount += g.roles.size;
		});

		return {
			guilds: this.client.guilds.size,
			users: this.client.users.size,
			channels: channelCount,
			roles: roleCount,
			ranks: this.client.cache.ranks.getSize(),
			settings: this.client.cache.guilds.getSize(),
			premium: this.client.cache.premium.getSize(),
			permissions: this.client.cache.permissions.getSize(),
			strikes: this.client.cache.strikes.getSize(),
			punishments: this.client.cache.punishments.getSize(),
			inviteCodes: this.client.cache.inviteCodes.getSize(),
			members: this.client.cache.members.getSize(),
			messages: this.client.mod.getMessageCacheSize()
		};
	}
	private getMetrics() {
		const req = this.client.requestHandler;

		return {
			wsEvents: this.client.stats.wsEvents,
			wsWarnings: this.client.stats.wsWarnings,
			wsErrors: this.client.stats.wsErrors,
			cmdProcessed: this.client.stats.cmdProcessed,
			cmdErrors: this.client.stats.cmdErrors,
			httpRequests: [...req.requestStats.entries()].map(([url, stats]) => ({ url, stats })),
			httpRequestsQueued: Object.keys(req.ratelimits)
				.filter((endpoint) => req.ratelimits[endpoint].queue.length > 0)
				.reduce((acc, endpoint) => acc.concat([{ endpoint, count: req.ratelimits[endpoint].queue.length }]), [])
		};
	}
}
