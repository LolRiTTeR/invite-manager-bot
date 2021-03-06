import { Invite } from 'eris';

import { Context } from '../commands/Command';

import { Resolver } from './Resolver';

const codeRegex = /^(?:(?:https?:\/\/)?discord.gg\/)?(.*)$/;

export class InviteCodeResolver extends Resolver {
	public async resolve(value: string, { t }: Context): Promise<Invite<'withoutCount'>> {
		if (!value) {
			return;
		}

		let inv: Invite<'withoutCount'>;
		if (codeRegex.test(value)) {
			const id = value.match(codeRegex)[1];
			inv = await this.client.getInvite(id);
		}
		if (!inv) {
			throw Error(t(`resolvers.invitecode.notFound`));
		}

		return inv;
	}
}
