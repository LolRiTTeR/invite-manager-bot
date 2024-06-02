# FAQ

## Wie ändere ich den Prefix des Bots?

Du kannst `!config prefix -` ausführen, um den Prefix zu ändern.

Wenn du deinen aktuellen Prefix nicht kennst, kannst du `@InviteManager config prefix` ausführen, um den Prefix zu sehen.

## Einschränkung: Kein Tracking bevor der Bot beigetreten ist

Das Tracking (wer wen eingeladen hat) funktioniert nur, nachdem du den Bot eingeladen hast. Der Bot weiß auch nach der Einladung noch von jedem die Anzahl der Einladungen, keine Sorge. Nur die zusätzlichen Informationen fehlen und können nur für die Mitglieder gesammelt werden, die erst nach der Einladung des Bots beitreten.

## start.faq.patreon.title

§ {start.faq.patreon.description}

## Wie stelle ich Join und Leave Nachrichten ein?

Stelle den Channel mit folgendem Command

`!config joinMessageChannel #channel`

oder

`!config leaveMessageChannel #channel` ein.

Danach werden neue Join und Leave Nachrichten in diesem Channel gepostet.

## Kann ich die Join und Leave Nachrichten verändern?

Allerdings! Du kannst die Nachricht ändern folgendermaßen individualisieren:

`!config joinMessage {memberMention} *ist beigetreten**; Eingeladen von **{inviterName}** (**{numInvites}** invites)`

oder

`!config leaveMessage {memberName} **hat den Server verlassen**; Eingeladen von **{inviterName}**`.

Es sind viele Platzhalter verfügbar. Du kannst die vollständige Liste auf der Seite '[Individuelle Nachrichten](/de/modules/invites/custom-messages.md)' sehen.

## start.faq.bonusinvites.title

start.faq.bonusinvites.description

## start.faq.language.title

start.faq.language.description

## Was sind 'Ränge' und wie kann ich sie benutzen?

Ränge werden verwendet um Benutzern rollen zuzuweisen, wenn diese eine gewisse Anzahl an Einladungen erreicht haben. Wenn du zum Beispiel eine Rolle namens `@Anfänger` hast und du willst, dass Benutzer mit 5 oder mehr Einladungen diese Rolle bekommen, dann musst du mit `!add-rank @Anfänger 5 (Und fallst du willst, mit einer Beschreibung hier)` den Rang erstellen. Sobald jemand 5 Einladungen erreicht wird ihm automatisch die Rolle zugewiesen.

## Wie kann ich den Bot in allen bis auf einen oder einige Channel deaktivieren?

Nimm dem Bot die Rechte zum Lesen von Nachrichten in den Channeln, in denen der Bot nicht antworten soll, weg.

## start.faq.premiumbot.title

start.faq.premiumbot.description

## start.faq.leaderboard.title

start.faq.leaderboard.description

## start.faq.clearinvites.title

start.faq.clearinvites.description
