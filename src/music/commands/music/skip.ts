import { Message } from 'eris';

import { IMClient } from '../../../client';
import { Command, Context } from '../../../framework/commands/Command';
import { NumberResolver } from '../../../framework/resolvers';
import { CommandGroup, MusicCommand } from '../../../types';

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: MusicCommand.skip,
			aliases: ['next'],
			args: [
				{
					name: 'amount',
					required: false,
					resolver: new NumberResolver(client, 1)
				}
			],
			group: CommandGroup.Music,
			guildOnly: true,
			defaultAdminOnly: false,
			premiumOnly: true
		});
	}

	public async action(message: Message, [amount]: [number], flags: {}, { t, guild }: Context): Promise<any> {
		await this.sendReply(message, 'This command is disabled');
		return;

		const conn = await this.client.music.getMusicConnection(guild);
		if (!conn.isPlaying()) {
			await this.sendReply(message, t('music.notPlaying'));
			return;
		}

		let oldItem = conn.getNowPlaying();

		await conn.skip(amount || 0);

		let item = conn.getNowPlaying();

		if (item && oldItem.id !== item.id) {
			const embed = this.client.music.createPlayingEmbed(item);
			embed.author.name = `Skipped by ${embed.author.name} - Now playing`;
			await this.sendEmbed(message.channel, embed);
		} else {
			await this.sendEmbed(message.channel, ':stop_button: ' + t('music.endOfQueue'));
		}
	}
}
