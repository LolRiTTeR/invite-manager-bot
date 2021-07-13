# Bestrafungen

### Was sind Bestrafungen?

Bestrafungen sind Aktionen wie `ban`, `kick` oder `mute` welche einem Benutzer gegeben werden wenn er Regeln bricht. Du kannst Benutzer entweder direkt über einen Befehl bestrafen, oder du kannst Bestrafungen definieren die nach einer gewissen Anzahl an Strikes automatisch vergeben werden.

### Wie kann ich einen Benutzer bestrafen nachdem er eine gewisse Anzahl an Strikes erreicht hat?

Mit dem `punishmentconfig` Befehl kannst du definieren wie viele Strikes eine Bestrafung geben soll.

```text
!punishmentconfig <punishmentType> <numberOfStrikesNeeded>
```

Liste mit allen verfügbaren Bestrafungen:

- ban
- softban
- kick
- mute
- warn

Wenn du also einen Benutzer nach 5 Strikes kicken möchtest, dann musst du folgenden Befehl verwenden

```text
!punishmentconfig kick 5
```

Wenn du eine Bestrafung über `punishmentconfig` löschen möchtest, dann must du einfach die Strikes auf `0` setzen:

```text
!punishmentconfig kick 0
```

Um alle Bestrafungsoptionen zu sehen nutze nur den Befehl ohne ein Argument anzugeben:

```text
!punishmentconfig
```
