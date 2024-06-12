export class InvManConfig {
	prefix: string;
	dev_token: string;
	bot: InvManBot;
	links?: InvManLinks;
	constructor() {
		this.dev_token = ''; // ??
		this.prefix = '!'; // default prefix
		this.bot = {
			type: 'Custom',
			owner_id: '216749228087705610', // required if type is "Custom"
			bot_devs: ['216749228087705610']
		};
	}

	getData() {
		return this;
	}
}

export interface InvManBot {
	type: InvManBotTypes;
	owner_id?: string; // required if type is "Custom"
	ids?: InvManBotIds;
	bot_devs?: string[];
}

export type InvManBotTypes = 'Normal' | 'Pro' | 'Custom';

export interface InvManBotIds {
	regular?: string;
	pro?: string;
}

export interface InvManLinks {
	add?: string;
	support?: string;
	website?: string;
	patreon?: string;
}
