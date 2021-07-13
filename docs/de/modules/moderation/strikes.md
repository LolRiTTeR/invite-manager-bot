# Strikes

## Was sind Strikes?

Strikes sind Punkte, welcher ein Benutzer für das verstoßen von Serverregeln erhält. Jedes mal wenn ein Benutzer einen Strike bekommt wird ihm eine direkte Nachricht zugesandt, in der steht wie viele Strikes er bekam und warum er diese bekommen hat. Wenn ein Benutzer eine bestimmte Anzahl an Strikes erreicht erhält er eine **Bestrafung**

## Was sind Verstöße?

Verstöße sind Auto-Moderator-Regeln die du auf deinem Server aktivieren oder deaktivieren kannst. Aktuell existieren folgende Verstöße:

- [invites](strikes.md#invites)
- [links](strikes.md#links)
- [words](strikes.md#words)
- [allCaps](strikes.md#allcaps)
- [duplicateText](strikes.md#duplicatetext)
- [quickMessages](strikes.md#quickmessages)
- [mentionUsers](strikes.md#mentionusers)
- [mentionRoles](strikes.md#mentionroles)
- [emojis](strikes.md#emojis)

Für jede dieser Verstöße musst du festlegen wie viele Strikes vergeben werden, wenn jemand dagegen verstößt. Dies kannst du über den `strikeconfig` Befehl tun:

```text
!strikeconfig <violationType> <numberOfStrikes>
```

Wenn du zum Beispiel Benutzern `2` Strikes geben willst, wenn sie gegen die `invites` Regel verstoßen, dann musst du diesen Befehl nutzen:

```text
!strikeconfig invites 2
```

Du kannst die aktuelle Konfiguration hiermit überprüfen:

```text
!strikeconfig
```

## Detaillierte Liste mit Verstößen

### invites

Dieser Verstoß wird ausgelöst wenn ein Benutzer einen Link zu einem anderem Discord server sendet.

Beispiel:

`!strikeconfig invites 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig invites 0`

**Konfigurationseinstellungen:**

- [autoModInvitesEnabled](../../reference/settings?id=enabled-2)

### links

Dieser Verstoß wird ausgelöst wenn ein Benutzer einen Link sendet.

Beispiel:

`!strikeconfig links 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig links 0`

**Konfigurationsoptionen:**

- [autoModLinksEnabled](../../reference/settings?id=enabled-3)
- [autoModLinksWhitelist](../../reference/settings?id=whitelist)
- [autoModLinksBlacklist](../../reference/settings?id=blacklist)
- [autoModLinksFollowRedirects](../../reference/settings?id=follow-redirects)

### words

Dieser Verstoß wird ausgelöst wenn ein Benutzer ein verbotenes Wort sendet.

Beispiel:

`!strikeconfig words 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig words 0`

**Konfigurationsoptionen:**

- [autoModWordsEnabled](../../reference/settings?id=enabled-4)
- [autoModWordsBlacklist](../../reference/settings?id=blacklist-1)

### allCaps

Dieser Verstoß wird ausgelöst wenn ein Benutzer eine Nachricht sendet, die hauptsächlich GROß GESCHRIEBEN IST.

Beispiel:

`!strikeconfig allCaps 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig allCaps 0`

**Konfigurationsoptionen:**

- [autoModAllCapsEnabled](../../reference/settings?id=enabled-5)
- [autoModAllCapsMinCharacters](../../reference/settings?id=min-characters)
- [autoModAllCapsPercentageCaps](../../reference/settings?id=percentage-caps)

### duplicateText

Dieser Verstoß wird ausgelöst wenn ein Benutzer die selbe Nachricht mehrfach hintereinander sendet.

Beispiel:

`!strikeconfig duplicateText 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig duplicateText 0`

**Konfigurationsoptionen:**

- [autoModDuplicateTextEnabled](../../reference/settings?id=enabled-6)
- [autoModDuplicateTextTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds)

### quickMessages

Dieser Verstoß wird ausgelöst wenn ein Benutzer schnell hintereinander Nachrichten sendet.

Beispiel:

`!strikeconfig quickMessages 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig quickMessages 0`

**Konfigurationsoptionen:**

- [autoModQuickMessagesEnabled](../../reference/settings?id=enabled-7)
- [autoModQuickMessagesNumberOfMessages](../../reference/settings?id=-of-messages)
- [autoModQuickMessagesTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds-1)

### mentionUsers

Dieser Verstoß wird ausgelöst wenn ein Benutzer mehrere Benutzer gleichzeitig erwähnt.

Beispiel:

`!strikeconfig mentionUsers 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig mentionUsers 0`

**Konfigurationsoptionen:**

- [autoModMentionUsersEnabled](../../reference/settings?id=enabled-8)
- [autoModMentionUsersMaxNumberOfMentions](../../reference/settings?id=max-of-mentions)

### mentionRoles

Dieser Verstoß wird ausgelöst wenn ein Benutzer mehrere Rollen erwähnt.

Beispiel:

`!strikeconfig mentionRoles 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig mentionRoles 0`

**Konfigurationsoptionen:**

- [autoModMentionRolesEnabled](../../reference/settings?id=enabled-9)
- [autoModMentionRolesMaxNumberOfMentions](../../reference/settings?id=max-of-mentions-1)

### emojis

Dieser Verstoß wird ausgelöst wenn ein Benutzer mehrere Emojis versendet.

Beispiel:

`!strikeconfig emojis 1`

Um die Konfiguration wieder zu löschen, verwende:

`!strikeconfig emojis 0`

**Konfigurationsoptionen:**

- [autoModEmojisEnabled](../../reference/settings?id=enabled-10)
- [autoModEmojisMaxNumberOfEmojis](../../reference/settings?id=max-of-emojis)
