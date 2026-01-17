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
- npm audit: 15 offene Vulnerabilities (7 moderate, 8 high)
- Runtime-relevant: node-fetch (iheart), ws (eris-lavalink), tar (canvas/@mapbox/node-pre-gyp, Install-Time)
- Dev-only: got (docsify-cli), marked (docsify)

## Bereits umgesetzt
- Direktabhaengigkeiten aktualisiert (z. B. @sentry/node, docsify, docsify-cli)
- npm audit fix ohne --force ausgefuehrt
- Laufzeit-Block fuer Music-Commands und Eval-Restriktion vorhanden
- Build und Lint laufen (Lint nur Warnungen)

## Offene Risiken (bewertet)
### Runtime
- ws via eris-lavalink (^3.1.0)
  - Risiko: DoS bei sehr vielen HTTP-Headern waehrend WS-Handshake
  - Exponierung: Client-Verbindung zu Lavalink; Musikbefehle deaktiviert
  - Fix: Nur per Update/Fork von eris-lavalink oder Bibliothekswechsel

- node-fetch via isomorphic-fetch -> iheart
  - Risiko: Weitergabe sicherer Header an untrusted Targets
  - Exponierung: iHeart-Requests im Musikmodul; Musikbefehle deaktiviert
  - Fix: Kein Patch verfuegbar, nur Austausch der Bibliothek

- tar via canvas -> @mapbox/node-pre-gyp
  - Risiko: Install-Time (Tar-Parsing), Supply-Chain-/Build-Phase
  - Exponierung: Build/Install, nicht im Laufzeitpfad
  - Fix: Canvas Major-Update oder Prebuild-Chain-Wechsel

### Dev-only
- got via docsify-cli -> update-notifier
  - Risiko: Dev-CLI, keine Runtime-Exponierung
  - Fix: Nur mit Breaking-Update im CLI-Stack

- marked via docsify
  - Risiko: Docs-Generierung, keine Runtime-Exponierung
  - Fix: Abhaengig von docsify Release

## Empfohlene naechste Schritte
- Bei Reaktivierung von Musik: Lavaplayer-Client evaluieren (maintained) und iHeart ersetzen/isolieren
- Optional: Canvas Major-Update in separater Teststufe
- Offene Risiken dokumentiert lassen und regelmaessig neu bewerten
- Secrets: config.json bleibt in .gitignore; keine Secrets committen

## Massnahmen/Risiko-Abschnitt (Entscheidung)
- Breaking-Updates aktuell nicht erzwungen, da Nutzen < Risiko und Musik deaktiviert
- Offene Risiken bleiben dokumentiert, Monitoring empfohlen
