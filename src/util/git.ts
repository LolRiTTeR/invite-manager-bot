import fs from 'fs';
import path from 'path';

export type GitInfo = {
	commit: string | null;
	ref: string | null;
	short: string | null;
};

const readTextFile = (filePath: string): string | null => {
	try {
		return fs.readFileSync(filePath, 'utf8');
	} catch {
		return null;
	}
};

const readPackedRef = (gitDir: string, ref: string): string | null => {
	const packedPath = path.join(gitDir, 'packed-refs');
	const packed = readTextFile(packedPath);
	if (!packed) {
		return null;
	}
	const lines = packed.split('\n');
	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#') || trimmed.startsWith('^')) {
			continue;
		}
		const parts = trimmed.split(' ');
		if (parts.length < 2) {
			continue;
		}
		const [hash, refName] = parts;
		if (refName === ref) {
			return hash;
		}
	}
	return null;
};

export const readGitInfo = (repoRoot: string = process.cwd()): GitInfo => {
	const gitDir = path.join(repoRoot, '.git');
	const headPath = path.join(gitDir, 'HEAD');
	const head = readTextFile(headPath);
	if (!head) {
		return { commit: null, ref: null, short: null };
	}
	const trimmed = head.trim();
	if (!trimmed) {
		return { commit: null, ref: null, short: null };
	}
	if (trimmed.startsWith('ref:')) {
		const ref = trimmed.replace(/^ref:\s+/, '').trim();
		const refPath = path.join(gitDir, ref);
		const refHash = readTextFile(refPath);
		const commit = refHash ? refHash.trim().split(' ')[0] : readPackedRef(gitDir, ref);
		const short = commit ? commit.slice(0, 7) : null;
		return { commit: commit || null, ref, short };
	}
	const commit = trimmed.split(' ')[0];
	const short = commit ? commit.slice(0, 7) : null;
	return { commit, ref: null, short };
};
