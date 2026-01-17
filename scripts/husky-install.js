const { existsSync } = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

if (process.env.HUSKY === '0') {
	process.exit(0);
}

const bin = path.resolve(__dirname, '../node_modules/husky/lib/bin.js');
if (!existsSync(bin)) {
	process.exit(0);
}

const res = spawnSync(process.execPath, [bin, 'install'], { stdio: 'inherit' });
process.exit(res.status ?? 0);
