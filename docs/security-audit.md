# Security Audit (As of: 2026-01-17)

## Scope

- Runtime and dev dependencies (npm audit)
- Manual path check for runtime exposure
- Code points: eval, external requests, secrets

## Method

- npm audit (including npm audit fix without --force)
- Review of affected dependency chains
- Rating by runtime/dev and real usage

## Summary

- npm audit: 8 open vulnerabilities (7 moderate, 1 high)
- Runtime relevant: no open findings from npm audit
- Dev-only: got (docsify-cli), marked (docsify)

## Already done

- Direct dependencies updated (e.g. @sentry/node, docsify, docsify-cli)
- Chart stack updated (chart.js 4, chartjs-node-canvas 5, canvas 3) and tar risk removed
- npm audit fix without --force executed
- Music service disabled (no connections/requests), music commands no longer registered
- eris-lavalink removed, ws risk eliminated
- Remaining music modules removed and dependencies cleaned up
- Build and lint pass (lint warnings only)

## Open risks (assessed)

### Runtime

- No open runtime risks from npm audit.

### Dev-only

- got via docsify-cli -> update-notifier
  - Risk: dev CLI, no runtime exposure
  - Fix: only with a breaking update in the CLI stack

- marked via docsify
  - Risk: docs generation, no runtime exposure
  - Fix: depends on docsify release

## Recommended next steps

- If music is re-enabled: evaluate a maintained Lava player client and replace or isolate iHeart
- Keep open risks documented and review regularly
- Secrets: keep config.json in .gitignore; do not commit secrets

## Actions/Risk decision

- Breaking updates not forced for now because benefit < risk and music is disabled
- Open risks remain documented; monitoring recommended
