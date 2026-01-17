const { existsSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

if (process.env.HUSKY === '0') {
	process.exit(0);
}

const binCandidates = [
	path.resolve(__dirname, '../node_modules/husky/bin.js'),
	path.resolve(__dirname, '../node_modules/husky/lib/bin.js')
];
const bin = binCandidates.find((candidate) => existsSync(candidate));
if (!bin) {
	process.exit(0);
}

const res = spawnSync(process.execPath, [bin, 'install'], { stdio: 'inherit' });
process.exit(res.status ?? 0);
