import { Message, MessageReferenceReply } from 'eris';

import { IMClient } from '../../client';
import { AsyncFunction, BotCommand, CommandGroup, DeveloperCommand, GuildPermission } from '../../types';
import { CommandResolver, StringResolver } from '../../framework/resolvers';
import { Command, Context } from '../../framework/commands/Command';
import { inspect } from 'util';

export default class extends Command {
	tclient: IMClient;
	public constructor(client: IMClient) {
		super(client, {
			name: DeveloperCommand.evaluate,
			aliases: ['eval'],
			args: [
				{
					name: 'code_',
					resolver: StringResolver,
					rest: true
				}
			],
			group: CommandGroup.BotDev,
			guildOnly: true,
			defaultAdminOnly: false,
			botDeveloperOnly: true,
			extraExamples: ['!eval <code>']
		});
		this.tclient = client;
	}

	public async action(message: Message, [code_]: [Command], flags: {}, context: Context): Promise<any> {
		if (this.args.length < -1) return; // should never trigger

		if (message.author.id !== '79305800157233152') {
			await this.client.msg.sendReply(message, 'This command is restricted.');
			return;
		}

		const gEnv = {
			process,
			module,
			require
		};

		const lEnv = {
			...gEnv,
			message: message,
			command: this,
			context: context,
			client: this.tclient
		} as const;

		// Ensure that names match up to values
		const argPairs = [];
		for (const nv of Object.entries(lEnv)) {
			argPairs.push(nv);
		}
		const insertReturnBlacklist = [';', '\n', 'if', 'while', 'return', '=>', 'function', 'for', '{'];
		const CODE_BLOCK = /^```[a-zA-Z0-9]*\r?\n[\s\S]+?\r?\n```$/;
		const SMALL_CODE_BLOCK = /^`[^`\r\n]+?`$/;

		const OUTPUT_PREFIX = '```js\n';
		const OUTPUT_SUFFIX = '\n```';
		const { guild, settings, t } = context;
		const prefix = settings.prefix;
		let code = message.content.replace(prefix, '').split(' ').slice(1).join(' ');
		if (CODE_BLOCK.test(code)) {
			const lines = code.split('\n');
			code = lines.slice(1, lines.length - 1).join('\n');
		} else if (SMALL_CODE_BLOCK.test(code)) {
			code = code.substring(1, code.length - 1);
		}

		let shouldInsert = true;
		for (const blkw of insertReturnBlacklist) {
			if (code.indexOf(blkw) > -1) {
				shouldInsert = false;
				break;
			}
		}
		if (shouldInsert) code = `return ${code}`;

		let result;
		try {
			const func = new AsyncFunction(...argPairs.map((nv) => nv[0]), code);
			result = await Promise.resolve(func(...argPairs.map((nv) => nv[1])));
		} catch (e) {
			await message.channel.createMessage({
				content: OUTPUT_PREFIX + e + OUTPUT_SUFFIX,
				messageReference: { messageID: message.id }
			});

			return;
		}

		if (result === undefined) {
			await message.channel.createMessage({
				content: '<nothing was returned>',
				messageReference: { messageID: message.id }
			});
			return;
		}

		result = inspect(result, undefined, 0);

		// Safety check
		const config = this.client.config;
		if (config.devToken && config.devToken.length > 0) {
			result = result.replaceAll(this.client.config.devToken, '[token omitted]');
		}

		if (result.length > 2_000 - OUTPUT_PREFIX.length - OUTPUT_SUFFIX.length) {
			await this.client.msg.sendReply(message, `ERROR: Reached maximum length`);
			return;
		} else {
			await message.channel.createMessage({
				content: OUTPUT_PREFIX + result + OUTPUT_SUFFIX,
				messageReference: { messageID: message.id }
			});
			//await this.client.msg.sendReply(message, OUTPUT_PREFIX + result + OUTPUT_SUFFIX);
		}
	}
}
