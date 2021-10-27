(Springe zu [platzhalter](#placeholders))

# Individuelle Nachricht

---

## Du kannst Beitritts- und Verlassensnachrichten mit unterschiedlichen Parametern anpassen.

Du kannst eine eigene Beitritts- oder Verlassensnachricht einstellen in dem du die Konfiguration änderst:

```
!config joinMessage Dies ist deine eigene Beitrittsnachricht! Sie wird jedes mal verschickt wenn jemand dem Server beitritt.
```

oder

```
!config leaveMessage Dies ist deine eigene Verlassensnachricht! Sie wird jedes mal verschickt wenn jemand den Server verlässt.
```

Eine derartige Nachricht macht natürlich keinen sinn. Du solltest sie mit Informationen über das eingeladene Mitglied, die Person die denjenigen eingeladen hat oder den Server personalisieren. In der unten angegebenen Liste kannst du alle Platzhalter finden.

Wenn also eine Nachricht sagen soll

`Willkommen @Andy! Du wurdest von Valandur eingeladen, welcher jetzt 3 Einladungen hat! Viel Spaß auf unserem Server!`

dann können wir das ganz simpel erreichen indem wir alle Namen und Zahlen mit Platzhaltern ersetzen:

`Willkommen {memberMention}! Du wurdest von {inviterName} eingeladen, welcher jetzt {numInvites} Einladungen hat! Viel Spaß auf unserem Server!`

Nun kannst du `!config joinMessage <message from above>` verwenden um die Konfiguration einzustellen. Unser Bot wird automatisch alle Platzhalter ersetzen wenn jemand beitritt.

> [!NOTE|style:flat]
> Premium Benutzer können eingebettete Beitritts- und Verlassensnachrichten verwenden. [Mehr Infos hier](./examples.md)

Bitte besuche die [Beispiele Seite](./examples.md) um herauszufinden welche Nachrichten du erstellen kannst!

### Platzhalter

|                          | join                                               | leave                                              | beispiel | beschreibung                        |
| :----------------------- | :------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------------- | :-------------------------------------------------------------------------------- |
| {memberName}             | ja | ja | Andy                                                   | Der Name des Mitgliedes welcher gerade deinem Server beigetreten ist            |
| {memberId}               | ja | ja | 436844634                                              | Die Discord ID des Mitgliedes welcher gerade deinem Server beigetreten ist              |
| {memberMention}          | ja | nein  | @Andy                                                  | Die Erwähnung des Mitgliedes welcher gerade deinem Server beigetreten ist (Person wird angepingt)         |
| {memberFullName}         | ja | ja | Andy\#1801                                             | Der Benutzername und Diskriminator des Nutzers welcher gerade deinem Server beigetreten ist        |
| {memberImage}            | ja | ja | \[URL\]                                                | Avatar URL des Mitgliedes           |
| {inviterName}            | ja | ja | Andy                                                   | Der Name der Person, die jemanden eingeladen hat           |
| {inviterId}              | ja | ja | 241929953                                              | Die Discord ID der Person, die jemanden eingeladen hat             |
| {inviterMention}         | ja | ja | @Andy                                                  | Die Erwähnung der Person, die jemanden eingeladen hat (Person wird angepingt)        |
| {inviterFullName}        | ja | ja | Andy\#1801                                             | Der Benutzername und Diskriminator der Person, die jemanden eingeladen hat       |
| {inviterImage}           | ja | ja | \[URL\]                                                | Avatar URL der Person, die jemanden eingeladen hat          |
| {numInvites}             | ja | ja | 12                                                     | Gesamte Anzahl an Einladungen der Person, die jemanden eingeladen hat            |
| {numRegularInvites}      | ja | ja | 7                                                      | Anzahl an regulären Einladungen der Person, die jemanden eingeladen hat     |
| {numBonusInvites}        | ja | ja | 5                                                      | Anzahl an Bonuseinladungen der Person, die jemanden eingeladen hat (Wurden manuell zugewiesen)       |
| {numFakeInvites}         | ja | ja | 3                                                      | Anzahl an gefälschten Einladungen der Person, die jemanden eingeladen hat        |
| {numLeaveInvites}        | ja | ja | 6                                                      | Anzahl an Einladungen die entfernt wurden, weil das Mitglied den Server verlassen hat       |
| {memberCount}            | ja | ja | 42                                                     | Gesamte Anzahl an Mitgliedern deines Servers           |
| {numJoins}               | ja | ja | 3                                                      | Anzahl, wie oft ein Benutzer dem Server schon beigetreten ist              |
| {channelName}            | ja | ja | general                                                | Der Name des Channels wo der Einladungscode generiert wurde           |
| {channelMention}         | ja | ja | \#general                                              | Erwähnung des Channels wo der Einladungscode generiert wurde        |
| {inviteCode}             | ja | ja | fgSr30s                                                | Benutzter Einladungscode            |
| {memberCreated:date}     | ja | ja | 25.09.2016                                             | Das Datum an welchem der Discord Benutzer erstellt wurde     |
| {memberCreated:duration} | ja | ja | 5 weeks                                                | Die Dauer seit der Discord Benutzer erstellt wurde |
| {memberCreated:timeAgo}  | ja | ja | 2 day ago                                              | Die Zeit an dem der Discord Benutzer erstellt wurde  |
| {firstJoin:date}         | ja | ja | 11.12.2017                                             | Das Datum an welchem der Benutzer den Server zum ersten mal betreten hat         |
| {firstJoin:duration}     | ja | ja | 4 days                                                 | Die Dauer seitdem der Discord Benutzer den Server zum ersten mal betreten hat     |
| {firstJoin:timeAgo}      | ja | ja | 1 week ago                                             | Die Zeit an dem der Benutzer den Server zum ersten mal betreten hat      |
| {previousJoin:date}      | ja | nein  | 02.04.2018                                             | Das Datum an welchem der Benutzer das letzte mal den Server betreten hat      |
| {previousJoin:duration}  | ja | nein  | 2 months                                               | Die Dauer seitdem der Benutzer den Server das letzte mal betreten hat  |
| {previousJoin:timeAgo}   | ja | nein  | 1 second ago                                           | Die Zeit an dem der Benutzer das letzte mal den Server betreten hat   |
| {joinedAt:date}          | nein  | ja | 17.05.2018                                             | Beitrittsdatum des Benutzers          |
| {joinedAt:duration}      | nein  | ja | 3 minutes                                              | Dauer seit des Beitrittes des Benutzers      |
| {joinedAt:timeAgo}       | nein  | ja | 2 minutes ago                                          | Zeit an dem der Benutzer beigetreten ist       |
