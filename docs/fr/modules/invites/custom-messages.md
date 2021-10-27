(Sauter à [placeholders](#placeholders))

# Message personnalisé

---

## Tu peux personnaliser les messages de bienvenue et de départ selon plusieurs paramètres.

Tu peux régler un message personnalisé d'arrivée ou de bienvenue en configurant ce paramètre :

```
!config joinMessage Ceci est ton message personnalisé d'arrivée ! Il sera envoyé à chaque fois que quelqu'un rejoint ton serveur.
```

ou

```
!config leaveMessage Ceci est ton message personnalisé de départ ! Il sera envoyé à chaque fois que quelqu'un quitte ton serveur.
```

Un tel message ne fais évidemment aucun sens. Tu devrais le personnaliser avec des informations sur le nouveau membre, l'invitant ou le serveur. Regarde ci-dessous pour tous les placeholders disponibles.

Donc si on veut que le message dise

`Bienvenue @Andy ! Tu as été invité par Valandur, qui a maintenant 3 invitations ! Amuse-toi bien sur notre serveur !`

on peut facilement faire ça en remplaçant tous les noms et nombres par des placeholders :

`Bienvenue {memberMention} ! Tu as été invité par {inviterName}, qui a maintenant {numInvites} invitations ! Amuse-toi bien sur notre serveur !`

Et tu peux maintenant faire `!config joinMessage <message from above>` pour configurer le message. Notre bot remplacera automatiquement les placeholders à chaque fois que quelqu'un rejoint.

> [!NOTE|style:flat]
> Les utilisateurs premium peuvent également utiliser des embeds dans leur messages d'arrivée et de départ. [Plus d'infos ici](./examples.md)

Merci de regarder [la page d'exemples](./examples.md) pour voir quels types de messages tu peux faire !

### Placeholders

|                          | join                                               | leave                                              | exemple | description                        |
| :----------------------- | :------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------------- | :-------------------------------------------------------------------------------- |
| {memberName}             | oui | oui | Andy                                                   | Le nom du membre qui vient de rejoindre ton serveur discord            |
| {memberId}               | oui | oui | 436844634                                              | L'ID discord du membre qui vient de rejoindre ton serveur              |
| {memberMention}          | oui | non  | @Andy                                                  | La mention du membre qui vient de rejoindre ton serveur discord (la personne sera mentionnée).         |
| {memberFullName}         | oui | oui | Andy\#1801                                             | Le nom d'utilisateur et le discriminant de l'utilisateur qui vient de rejoindre ton serveur        |
| {memberImage}            | oui | oui | \[URL\]                                                | L'URL de l'avatar du membre           |
| {inviterName}            | oui | oui | Andy                                                   | Le nom de l'invitant           |
| {inviterId}              | oui | oui | 241929953                                              | L'ID discord de l'invitant             |
| {inviterMention}         | oui | oui | @Andy                                                  | La mention de l'invitant (la personne sera mentionnée)        |
| {inviterFullName}        | oui | oui | Andy\#1801                                             | Le nom d'utilisateur et le discriminant de l'invitant       |
| {inviterImage}           | oui | oui | \[URL\]                                                | L'URL de l'avatar de l'invitant          |
| {numInvites}             | oui | oui | 12                                                     | Le nombre d'invitations que l'invitant a au total            |
| {numRegularInvites}      | oui | oui | 7                                                      | Le nombre d'invitations normales que l'invitant a      |
| {numBonusInvites}        | oui | oui | 5                                                      | Le nombre d'invitations bonus de l'invitant (qui ont été assignées manuellement)       |
| {numFakeInvites}         | oui | oui | 3                                                      | Le nombre de fausses invitations que l'invitant a        |
| {numLeaveInvites}        | oui | oui | 6                                                      | Le nombre d'invitations supprimées car le membre a quitté de nouveau.       |
| {memberCount}            | oui | oui | 42                                                     | Le nombre de membres que ton serveur a au total           |
| {numJoins}               | oui | oui | 3                                                      | Le nombre de fois où l'utilisateur a rejoint le serveur              |
| {channelName}            | oui | oui | general                                                | Le nom du salon où le code d'invitation a été créé           |
| {channelMention}         | oui | oui | \#general                                              | Le mention du salon où le code d'invitation a été créé        |
| {inviteCode}             | oui | oui | fgSr30s                                                | Code d'invitation utilisé            |
| {memberCreated:date}     | oui | oui | 25.09.2016                                             | Date de création de l'utilisateur discord     |
| {memberCreated:duration} | oui | oui | 5 weeks                                                | Durée depuis la création de l'utilisateur discord |
| {memberCreated:timeAgo}  | oui | oui | 2 day ago                                              | Heure de création de l'utilisateur discord  |
| {firstJoin:date}         | oui | oui | 11.12.2017                                             | Date à laquelle l'utilisateur a rejoint pour la première fois         |
| {firstJoin:duration}     | oui | oui | 4 days                                                 | Durée depuis que l'utilisateur a rejoint pour la première fois     |
| {firstJoin:timeAgo}      | oui | oui | 1 week ago                                             | Heure à laquelle l'utilisateur a rejoint pour la première fois      |
| {previousJoin:date}      | oui | non  | 02.04.2018                                             | Date à laquelle l'utilisateur a rejoint pour la dernière fois      |
| {previousJoin:duration}  | oui | non  | 2 months                                               | Durée depuis que l'utilisateur a rejoint pour la dernière fois  |
| {previousJoin:timeAgo}   | oui | non  | 1 second ago                                           | Heure à laquelle l'utilisateur a rejoint pour la dernière fois   |
| {joinedAt:date}          | non  | oui | 17.05.2018                                             | Date à laquelle l'utilisateur a rejoint          |
| {joinedAt:duration}      | non  | oui | 3 minutes                                              | Durée depuis que l'utilisateur a rejoint      |
| {joinedAt:timeAgo}       | non  | oui | 2 minutes ago                                          | Heure à laquelle l'utilisateur a rejoint       |
