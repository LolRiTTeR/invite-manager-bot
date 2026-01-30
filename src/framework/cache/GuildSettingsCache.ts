import { guildDefaultSettings, guildSettingsInfo, GuildSettingsObject, toDbValue } from '../../settings';
import { GuildSettingsKey } from '../models/GuildSetting';

import { Cache } from './Cache';

export class GuildSettingsCache extends Cache<GuildSettingsObject> {
	private static lastErrorAt = 0;
	private static suppressedErrors = 0;

	public async init() {
		// NO-OP
	}

	protected async _get(guildId: string): Promise<GuildSettingsObject> {
		try {
			const set = await this.client.db.getGuildSettings(guildId);
			return { ...guildDefaultSettings, ...(set ? set.value : null) };
		} catch (err: any) {
			this.logDbError(err, guildId);
			return { ...guildDefaultSettings };
		}
	}

	public async setOne<K extends GuildSettingsKey>(
		guildId: string,
		key: K,
		value: GuildSettingsObject[K]
	): Promise<GuildSettingsObject[K]> {
		const set = await this.get(guildId);
		const dbVal = toDbValue(guildSettingsInfo[key], value);

		// Check if the value changed
		if (set[key] !== dbVal) {
			set[key] = dbVal;

			// Save into DB
			await this.client.db.saveGuildSettings({ guildId, value: set });
		}

		return dbVal;
	}

	private logDbError(err: any, guildId: string) {
		const now = Date.now();
		const minIntervalMs = 60_000;
		if (now - GuildSettingsCache.lastErrorAt < minIntervalMs) {
			GuildSettingsCache.suppressedErrors += 1;
			return;
		}
		GuildSettingsCache.lastErrorAt = now;
		if (GuildSettingsCache.suppressedErrors > 0) {
			console.log(
				`[GuildSettingsCache] suppressed ${GuildSettingsCache.suppressedErrors} db errors in last ${minIntervalMs /
					1000}s`
			);
			GuildSettingsCache.suppressedErrors = 0;
		}
		const code = err?.code ? ` code=${err.code}` : '';
		const msg = err?.message ? err.message : String(err);
		console.log(`[GuildSettingsCache] db error for guild=${guildId}${code}: ${msg}`);
	}
}
