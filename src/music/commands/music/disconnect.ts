import { Message } from 'eris';

import { IMClient } from '../../../client';
import { Command, Context } from '../../../framework/commands/Command';
import { CommandGroup, MusicCommand } from '../../../types';

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: MusicCommand.disconnect,
			aliases: ['dc'],
			group: CommandGroup.Music,
			guildOnly: true,
			defaultAdminOnly: false,
			premiumOnly: true
		});
	}

	public async action(message: Message, args: any[], flags: {}, { t, guild }: Context): Promise<any> {
		await this.sendReply(message, 'Sorry, the `music` module is currently disabled.');
		return;
		const conn = await this.client.music.getMusicConnection(guild);
		if (!conn.isConnected()) {
			await this.sendReply(message, t('music.notConnected'));
			return;
		}

		await conn.disconnect();
		await this.sendEmbed(message.channel, ':thumbsup: ' + t('music.disconnected'));
	}
}
