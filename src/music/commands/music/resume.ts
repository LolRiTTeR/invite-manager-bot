import { Message } from 'eris';

import { IMClient } from '../../../client';
import { Command, Context } from '../../../framework/commands/Command';
import { CommandGroup, MusicCommand } from '../../../types';

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: MusicCommand.resume,
			aliases: ['start'],
			group: CommandGroup.Music,
			guildOnly: true,
			defaultAdminOnly: false,
			premiumOnly: true
		});
	}

	public async action(message: Message, args: any[], flags: {}, { t, guild }: Context): Promise<any> {
		return;
		const conn = await this.client.music.getMusicConnection(guild);
		if (!conn.isConnected()) {
			await this.sendReply(message, t('music.notConnected'));
			return;
		}

		if (conn.isPaused()) {
			conn.resume();
			await this.sendEmbed(message.channel, ':arrow_forward: ' + t('music.resumed'));
		} else {
			conn.pause();
			await this.sendEmbed(message.channel, ':pause_button: ' + t('music.paused'));
		}
	}
}
