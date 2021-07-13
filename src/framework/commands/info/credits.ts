import { Message } from 'eris';

import { IMClient } from '../../../client';
import { BotCommand, CommandGroup } from '../../../types';
import { Command, Context } from '../Command';

const admins: string[] = ['Alan Wen#3344', 'LolRiTTeR#1258'];

const managers: string[] = ['Menno#0002', 'Ｍｏｏｎ ?#2296', 'Astryx#4587', 'malok#0002'];

const mods: string[] = ['Gugu72#0016', 'Simplee.#5460', 'JWEi#9873'];

const staff: string[] = ['SPAZ#0001', 'Mob#4040'];

const graphic_designer: string[] = ['Danu#4422'];

const translators: string[] = ['• xFalcon#0061'];

export default class extends Command {
	public constructor(client: IMClient) {
		super(client, {
			name: BotCommand.credits,
			aliases: [],
			group: CommandGroup.Info,
			defaultAdminOnly: false,
			guildOnly: true
		});
	}

	public async action(message: Message, args: any[], flags: {}, { t }: Context): Promise<any> {
		const embed = this.createEmbed();

		embed.fields.push({
			name: t('cmd.credits.managers'),
			value: this.getList(managers)
		});

		embed.fields.push({
			name: t('cmd.credits.developers'),
			value: this.getList(admins)
		});

		embed.fields.push({
			name: t('cmd.credits.moderators'),
			value: this.getList(mods)
		});

		embed.fields.push({
			name: t('cmd.credits.staff'),
			value: this.getList(staff)
		});

		embed.fields.push({
			name: t('cmd.credits.designers'),
			value: this.getList(graphic_designer)
		});

		embed.fields.push({
			name: t('cmd.credits.translators'),
			value: this.getList(translators)
		});

		return this.sendReply(message, embed);
	}

	private getList<T>(array: T[]) {
		return this.shuffle(array).join('\n');
	}

	private shuffle<T>(array: T[]) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {
			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}
}
