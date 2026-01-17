import { Guild } from 'eris';

import { IMService } from '../../framework/services/Service';
type DisabledMusicConnection = {
	playAnnouncement: (voice: string, message: string, channel: unknown) => Promise<void>;
};

type DisabledMusicItem = unknown;

export class MusicService extends IMService {
	public enabled: boolean = false;
	public platforms: any = null;

	public getMusicConnectionGuildIds(): string[] {
		return [];
	}

	public async init() {
		// NO-OP: music service disabled
	}

	public async onClientReady() {
		await super.onClientReady();
	}

	public async loadMusicNodes() {
		// NO-OP: music service disabled
	}

	public async getMusicConnection(_guild: Guild): Promise<DisabledMusicConnection> {
		throw new Error('Music service is disabled.');
	}

	public async removeConnection(_guild: Guild) {
		// NO-OP: music service disabled
	}

	public createPlayingEmbed(_item: DisabledMusicItem) {
		return this.client.msg.createEmbed({
			author: null,
			title: 'Music disabled',
			fields: []
		});
	}

	public async getLyrics(_item: DisabledMusicItem): Promise<{ start: number; dur: number; text: string }[]> {
		return [];
	}

	public formatTime(timeInSeconds: number) {
		const h = Math.floor(timeInSeconds / 3600);
		const m = Math.floor((timeInSeconds - 3600 * h) / 60);
		const s = Math.floor(timeInSeconds - h * 3600 - m * 60);

		const durationParts = [];

		if (h > 0) {
			durationParts.push(h.toString().padStart(2, '0'));
		}

		durationParts.push(m.toString().padStart(2, '0'));
		durationParts.push(s.toString().padStart(2, '0'));

		return durationParts.join(':');
	}

	public async getAnnouncementUrl(_voice: string, _message: string): Promise<string> {
		return '';
	}

	public async resolveTracks(_url: string): Promise<any[]> {
		return [];
	}

	public async getGuildSettings(guildId: string) {
		return this.client.cache.guilds.get(guildId);
	}
}
