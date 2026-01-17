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
else
	echo "nvm not found; install Node 24 and retry." >&2
	exit 1
fi

if ! command -v pkg-config >/dev/null 2>&1; then
	echo "Missing pkg-config. Install canvas build dependencies before running this script." >&2
	exit 1
fi

node -v
npm -v

npm ci
npm run build
npm run lint
npm run i18n
