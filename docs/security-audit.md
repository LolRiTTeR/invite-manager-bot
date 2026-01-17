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
- npm audit: 11 offene Vulnerabilities (7 moderate, 4 high)
- Runtime-relevant: node-fetch (iheart)
- Dev-only: got (docsify-cli), marked (docsify)

## Bereits umgesetzt
- Direktabhaengigkeiten aktualisiert (z. B. @sentry/node, docsify, docsify-cli)
- Chart-Stack aktualisiert (chart.js 4, chartjs-node-canvas 5, canvas 3) und tar-Risiko beseitigt
- npm audit fix ohne --force ausgefuehrt
- Musikservice deaktiviert (keine Verbindungen/Requests), Music-Commands nicht mehr registriert
- eris-lavalink entfernt, ws-Risiko entfiel
- Build und Lint laufen (Lint nur Warnungen)

## Offene Risiken (bewertet)
### Runtime
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
