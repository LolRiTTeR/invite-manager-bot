# Avertissements

## Que sont les avertissements ?

Les avertissements sont des points que les utilisateurs ont en commettant une infraction aux règles. À chaque fois qu'un utilisateur reçoit un avertissement, il reçoit également un message pour lui dire combien d'avertissements il a et pourquoi les a-t-il eu. Quand un utilisateur atteint un certain nombre d'avertissements, il se verra remettre un **sanction**.

## Que sont les infractions ?

Les infractions sont des règles de modération automatique que tu peux activer ou désactiver sur ton serveur. Pour l'instant, seulement ces infractions existent :

- [invites](strikes.md#invites)
- [links](strikes.md#links)
- [words](strikes.md#words)
- [allCaps](strikes.md#allcaps)
- [duplicateText](strikes.md#duplicatetext)
- [quickMessages](strikes.md#quickmessages)
- [mentionUsers](strikes.md#mentionusers)
- [mentionRoles](strikes.md#mentionroles)
- [emojis](strikes.md#emojis)

Pour chacune de ces infractions, tu peux définir combien d'avertissements seront donnés si quelqu'un l'enfreint. Tu peux le faire en utilisant la commande `strikeconfig` :

```text
!strikeconfig <violationType><numberOfStrikes>
```


Par exemple, si tu veux que les utilisateurs reçoivent `2` avertissements lorsqu'ils enfreignent la règle `invites`, tu devrais utiliser cette commande :

```text
!strikeconfig invites 2
```


Tu peux vérifier la configuration actuelle en faisant :

```text
!strikeconfig
```

## Liste détaillées des infractions

### invites

Cette infraction est déclenchée lorsqu'un utilisateur poste un lien d'invitation vers un autre serveur discord.

Exemple :

`!strikeconfig invites 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig invites 0`

**Options de configuration :**

- [autoModInvitesEnabled](../../reference/settings?id=enabled-2)

### links

Cette infraction est déclenchée lorsqu'un utilisateur poste un lien.

Exemple :

`!strikeconfig links 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig links 0`

**Options de configuration :**

- [autoModLinksEnabled](../../reference/settings?id=enabled-3)
- [autoModLinksWhitelist](../../reference/settings?id=whitelist)
- [autoModLinksBlacklist](../../reference/settings?id=blacklist)
- [autoModLinksFollowRedirects](../../reference/settings?id=follow-redirects)

### words

Cette infraction est déclenchée lorsqu'un utilisateur envoie un mot blacklisté.

Exemple :

`!strikeconfig words 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig words 0`

**Options de configuration :**

- [autoModWordsEnabled](../../reference/settings?id=enabled-4)
- [autoModWordsBlacklist](../../reference/settings?id=blacklist-1)

### allCaps

Cette infraction est déclenchée lorsqu'un utilisateur envoie un message principalement en MAJUSCULES.

Exemple :

`!strikeconfig allCaps 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig allCaps 0`

**Options de configuration :**

- [autoModAllCapsEnabled](../../reference/settings?id=enabled-5)
- [autoModAllCapsMinCharacters](../../reference/settings?id=min-characters)
- [autoModAllCapsPercentageCaps](../../reference/settings?id=percentage-caps)

### duplicateText

Cette infraction est déclenchée lorsqu'un utilisateur envoie le même texte plusieurs fois.

Exemple :

`!strikeconfig duplicateText 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig duplicateText 0`

**Options de configuration :**

- [autoModDuplicateTextEnabled](../../reference/settings?id=enabled-6)
- [autoModDuplicateTextTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds)

### quickMessages

Cette infraction est déclenchée lorsqu'un utilisateur envoie rapidement des messages.

Exemple :

`!strikeconfig quickMessages 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig quickMessages 0`

**Options de configuration :**

- [autoModQuickMessagesEnabled](../../reference/settings?id=enabled-7)
- [autoModQuickMessagesNumberOfMessages](../../reference/settings?id=-of-messages)
- [autoModQuickMessagesTimeframeInSeconds](../../reference/settings?id=timeframe-in-seconds-1)

### mentionUsers

Cette infraction est déclenchée lorsqu'un utilisateur mentionne plusieurs utilisateurs.

Exemple :

`!strikeconfig mentionUsers 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig mentionUsers 0`

**Options de configuration :**

- [autoModMentionUsersEnabled](../../reference/settings?id=enabled-8)
- [autoModMentionUsersMaxNumberOfMentions](../../reference/settings?id=max-of-mentions)

### mentionRoles

Cette infraction est déclenchée lorsqu'un utilisateur mentionne plusieurs rôles.

Exemple :

`!strikeconfig mentionRoles 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig mentionRoles 0`

**Options de configuration :**

- [autoModMentionRolesEnabled](../../reference/settings?id=enabled-9)
- [autoModMentionRolesMaxNumberOfMentions](../../reference/settings?id=max-of-mentions-1)

### emojis

Cette infraction est déclenchée lorsqu'un utilisateur envoie plusieurs emojis

Exemple :

`!strikeconfig emojis 1`

Pour supprimer la configuration d'avertissement :

`!strikeconfig emojis 0`

**Options de configuration :**

- [autoModEmojisEnabled](../../reference/settings?id=enabled-10)
- [autoModEmojisMaxNumberOfEmojis](../../reference/settings?id=max-of-emojis)
