# Security-Audit (Stand: 2026-01-17)

## Umfang
- Runtime- und Dev-Abhaengigkeiten (npm audit)
- Manuelle Pfadpruefung fuer Runtime-Exponierung
- Codepunkte: eval, externe Requests, Secrets

## Methode
- npm audit (inkl. npm audit fix ohne --force)
- Sichtung der betroffenen Abhaengigkeitsketten
- Bewertung nach Runtime/Dev und realer Nutzung

## Zusammenfassung
- npm audit: 13 offene Vulnerabilities (7 moderate, 6 high)
- Runtime-relevant: node-fetch (iheart), ws (eris-lavalink)
- Dev-only: got (docsify-cli), marked (docsify)

## Bereits umgesetzt
- Direktabhaengigkeiten aktualisiert (z. B. @sentry/node, docsify, docsify-cli)
- Chart-Stack aktualisiert (chart.js 4, chartjs-node-canvas 5, canvas 3) und tar-Risiko beseitigt
- npm audit fix ohne --force ausgefuehrt
- Musikservice deaktiviert (keine Verbindungen/Requests), Music-Commands bleiben blockiert
- Build und Lint laufen (Lint nur Warnungen)

## Offene Risiken (bewertet)
### Runtime
- ws via eris-lavalink (^3.1.0)
  - Risiko: DoS bei sehr vielen HTTP-Headern waehrend WS-Handshake
  - Exponierung: Musikservice deaktiviert, keine Verbindungen
  - Fix: Nur per Update/Fork von eris-lavalink oder Bibliothekswechsel

- node-fetch via isomorphic-fetch -> iheart
  - Risiko: Weitergabe sicherer Header an untrusted Targets
  - Exponierung: Musikservice deaktiviert, keine Requests
  - Fix: Kein Patch verfuegbar, nur Austausch der Bibliothek

### Dev-only
- got via docsify-cli -> update-notifier
  - Risiko: Dev-CLI, keine Runtime-Exponierung
  - Fix: Nur mit Breaking-Update im CLI-Stack

- marked via docsify
  - Risiko: Docs-Generierung, keine Runtime-Exponierung
  - Fix: Abhaengig von docsify Release

## Empfohlene naechste Schritte
- Bei Reaktivierung von Musik: Lavaplayer-Client evaluieren (maintained) und iHeart ersetzen/isolieren
- Offene Risiken dokumentiert lassen und regelmaessig neu bewerten
- Secrets: config.json bleibt in .gitignore; keine Secrets committen

## Massnahmen/Risiko-Abschnitt (Entscheidung)
- Breaking-Updates aktuell nicht erzwungen, da Nutzen < Risiko und Musik deaktiviert
- Offene Risiken bleiben dokumentiert, Monitoring empfohlen
