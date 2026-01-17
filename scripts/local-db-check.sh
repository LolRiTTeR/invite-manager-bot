#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

if [ -s "$HOME/.nvm/nvm.sh" ]; then
	# shellcheck disable=SC1090
	. "$HOME/.nvm/nvm.sh"
fi

if command -v nvm >/dev/null 2>&1; then
	nvm use >/dev/null
fi

node -e "const cfg=require('./config.json'); const dbs=cfg.databases||[]; const entry=dbs.find(d=>d.range&&d.range.from<=0&&d.range.to>=0)||dbs[0]; if(!entry){console.error('No databases configured'); process.exit(2);} const env={...process.env, MYSQL_PWD: entry.password||''}; const args=['-h', entry.host, '-P', String(entry.port||3306), '-u', entry.user, '--batch', '--skip-column-names', '-e', 'SELECT 1 AS ok;']; const {spawnSync}=require('child_process'); const res=spawnSync('mariadb', args, {stdio:'inherit', env}); process.exit(res.status??1);"
