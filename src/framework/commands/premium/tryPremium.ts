import { Message } from 'eris';
import moment from 'moment';

import { IMClient } from '../../../client';
import { BotCommand, CommandGroup, PromptResult } from '../../../types';
import { Command, Context } from '../Command';

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: BotCommand.tryPremium,
			aliases: ['try', 'try-premium'],
			group: CommandGroup.Premium,
			guildOnly: true,
			defaultAdminOnly: true
		});
	}

	public async action(
		message: Message,
		args: any[],
		flags: {},
		{ guild, settings, t, isPremium }: Context
	): Promise<any> {
		const prefix = settings.prefix;
		const embed = this.createEmbed();

		embed.title = t('cmd.tryPremium.title');
		embed.description = t('cmd.tryPremium.currentlyActive');

		return this.sendReply(message, embed);
	}
}
