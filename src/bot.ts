import { getCurrentScope, init } from '@sentry/node';
import https from 'https';
import chalk from './util/chalk';
import { InvManConfig } from './framework/models/Config';

import { IMClient } from './client';

const pkg = require('../package.json');
const config = require('../config.json');

config.newConfig = new InvManConfig();

// First two arguments are "node" and "<filename>"
if (process.argv.length < 5) {
	console.error('-------------------------------------');
	console.error('Syntax: bot.js <token> <shardId> <shardCount> (<instance>)');
	console.error('-------------------------------------');
	process.exit(1);
}
const rawParams = process.argv.slice(2);
const args = rawParams.filter((a) => !a.startsWith('--'));
const flags = rawParams.filter((f) => f.startsWith('--'));

const type = config.bot.type;
const token = args[0];
const shardId = Number(args[1]);
const shardCount = Number(args[2]);
const instance = args[3] || type;

// Initialize sentry
init({
	dsn: config.sentryDsn,
	release: pkg.version,
	environment: process.env.NODE_ENV || 'production'
});
const scope = getCurrentScope();
scope.setTag('botType', type);
scope.setTag('instance', instance);
scope.setTag('shard', `${shardId}/${shardCount}`);

process.on('unhandledRejection', (reason: any, p: any) => {
	console.error('Unhandled Rejection at: Promise', p, 'reason:', reason);
});

const main = async () => {
	console.log(chalk.green('-------------------------------------'));
	console.log(
		chalk.green(
			`This is shard ${chalk.blue(`${shardId}/${shardCount}`)} of ${chalk.blue(type)} instance ${chalk.blue(instance)}`
		)
	);
	console.log(chalk.green('-------------------------------------'));

	const client = new IMClient({
		version: pkg.version,
		token,
		type,
		instance,
		shardId,
		shardCount,
		flags,
		config
	});

	console.log(chalk.green('-------------------------------------'));
	console.log(chalk.green('Starting bot...'));
	console.log(chalk.green('-------------------------------------'));

	await client.init();

	console.log(chalk.green('-------------------------------------'));
	console.log(chalk.green('Waiting for start ticket...'));
	console.log(chalk.green('-------------------------------------'));

	await client.waitForStartupTicket();

	await logGatewaySessionLimit(token);

	console.log(chalk.green('-------------------------------------'));
	console.log(chalk.green('Connecting to discord...'));
	console.log(chalk.green('-------------------------------------'));
	await client.connect();
};

main().catch((err) => console.error(err));

type GatewayBotResponse = {
	session_start_limit?: {
		remaining?: number;
		reset_after?: number;
		max_concurrency?: number;
	};
};

const logGatewaySessionLimit = async (token: string) => {
	const limit = await fetchGatewaySessionLimit(token);
	console.log(chalk.green('-------------------------------------'));
	if (!limit) {
		console.log(chalk.yellow('Gateway session start limit unavailable.'));
		console.log(chalk.green('-------------------------------------'));
		return;
	}

	const resetAfterMs = Math.max(0, Math.round(limit.resetAfter));
	const resetAfterSec = Math.floor(resetAfterMs / 1000);
	const resetAfter = formatHms(resetAfterSec);
	console.log(chalk.green('Gateway session start limit'));
	console.log(chalk.green(`Remaining: ${chalk.blue(limit.remaining)}`));
	console.log(chalk.green(`Reset after: ${chalk.blue(resetAfter)}`));
	console.log(chalk.green(`Max concurrency: ${chalk.blue(limit.maxConcurrency)}`));
	console.log(chalk.green('-------------------------------------'));
};

const formatHms = (totalSeconds: number): string => {
	const seconds = Math.max(0, totalSeconds);
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secs = seconds % 60;
	const pad = (value: number) => String(value).padStart(2, '0');
	return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
};

const fetchGatewaySessionLimit = (token: string): Promise<{ remaining: number; resetAfter: number; maxConcurrency: number } | null> => {
	return new Promise((resolve) => {
		const req = https.request(
			{
				method: 'GET',
				hostname: 'discord.com',
				path: '/api/v9/gateway/bot',
				headers: {
					Authorization: `Bot ${token}`,
					'User-Agent': 'InviteManager (gateway-check)'
				}
			},
			(res) => {
				let raw = '';
				res.on('data', (chunk) => {
					raw += chunk.toString();
				});
				res.on('end', () => {
					if (res.statusCode !== 200) {
						return resolve(null);
					}
					try {
						const parsed = JSON.parse(raw) as GatewayBotResponse;
						const limit = parsed.session_start_limit;
						if (!limit) {
							return resolve(null);
						}
						resolve({
							remaining: Number.isFinite(limit.remaining) ? Number(limit.remaining) : 0,
							resetAfter: Number.isFinite(limit.reset_after) ? Number(limit.reset_after) : 0,
							maxConcurrency: Number.isFinite(limit.max_concurrency) ? Number(limit.max_concurrency) : 1
						});
					} catch {
						resolve(null);
					}
				});
			}
		);
		req.on('error', () => resolve(null));
		req.end();
	});
};
