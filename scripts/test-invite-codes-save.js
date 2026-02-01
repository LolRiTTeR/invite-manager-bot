/* eslint-disable no-console */
const path = require('path');

function loadTests() {
	try {
		// Prefer compiled output so we test what will run in production.
		const mod = require(path.join(__dirname, '..', 'bin', 'invites', 'services', 'Tracking'));
		if (!mod.__test__) {
			throw new Error('Missing __test__ exports from Tracking');
		}
		return mod.__test__;
	} catch (err) {
		throw new Error(
			`Failed to load compiled Tracking module. Run "npm run build" first. Original error: ${err.message}`
		);
	}
}

function assert(condition, message) {
	if (!condition) {
		throw new Error(message);
	}
}

function makeInvite({ code, uses = 0, maxUses = 0 }) {
	return {
		code,
		uses,
		maxUses,
		createdAt: Date.now(),
		channel: null,
		maxAge: 0,
		temporary: false,
		inviter: null
	};
}

function run() {
	const { buildInviteCodesToSave, splitInviteCodeBatches } = loadTests();

	// splitInviteCodeBatches
	assert(splitInviteCodeBatches([], 10).length === 0, 'Empty batches should return []');
	assert(splitInviteCodeBatches([1, 2, 3], 1).length === 3, 'Batch size 1 should split all');
	const batches = splitInviteCodeBatches([1, 2, 3, 4, 5], 2);
	assert(batches.length === 3, 'Batch size 2 should create 3 batches');
	assert(batches[0].length === 2 && batches[1].length === 2 && batches[2].length === 1, 'Batch sizes incorrect');
	const fallbackBatches = splitInviteCodeBatches([1, 2, 3], 0);
	assert(fallbackBatches.length === 3, 'Batch size 0 should fall back to 1');

	// buildInviteCodesToSave
	const guildId = 'guild-1';
	const cached = { a: { uses: 1, maxUses: 0 }, b: { uses: 2, maxUses: 5 } };
	const invs = [
		makeInvite({ code: 'a', uses: 1, maxUses: 0 }),
		makeInvite({ code: 'b', uses: 3, maxUses: 5 }),
		makeInvite({ code: 'c', uses: 0, maxUses: 0 })
	];
	const toSave = buildInviteCodesToSave(invs, cached, guildId);
	const codes = toSave.map((i) => i.code).sort();
	assert(codes.includes('b'), 'Changed uses should be saved');
	assert(codes.includes('c'), 'New code should be saved');
	assert(!codes.includes('a'), 'Unchanged code should not be saved');

	const allNew = buildInviteCodesToSave([makeInvite({ code: 'x', uses: 1, maxUses: 0 })], {}, guildId);
	assert(allNew.length === 1 && allNew[0].code === 'x', 'All new invites should be saved');

	console.log('OK: invite code save diff + batching tests passed');
}

run();
