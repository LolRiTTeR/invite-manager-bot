# FAQ

## Comment je change le préfixe du bot ?

Tu peux faire `!config prefix -` pour changer le préfixe.

Si tu ne connais pas ton préfixe actuel, tu peux utiliser `@InviteManager config prefix` pour afficher le préfixe.

## Comment je définis les messages d'arrivée et de départ ?

Définis le salon en faisant 
`!config joinMessageChannel #channel` ou

`!config leaveMessageChannel #channel`.
Après cela, les prochains messages seront affichées sur ce salon.

## Est-ce que je peux personnaliser les messages d'arrivée et de départ ?

Absolument ! Tu peux changer le message en faisant par exemple
`!config joinMessage {memberMention} **a rejoint**; Invité par **{inviterName}** (**{numInvites}** invitations)`

 ou

`!config leaveMessage {memberName} **à quitté**; Invité par **{inviterName}**`.

Il existe de nombreux placeholders disponibles. Tu peux voir la liste complète sur la page '[Messages personnalisés](/fr/modules/invites/custom-messages.md)'.

## Qu'est-ce que 'Ranks' et comment puis-je les utiliser ?

Les rangs sont utilisés pour attribuer des rôles aux personnes lorsqu'elles atteignent un certain nombre d'invitations. Par exemple, si tu as un rôle appelé `@Débutant` et que tu veux que des personnes qui ont 5 invitations ou plus soient ajoutées à ce rôle, tu dois créer un rang comme ceci : `!add-rank @Débutant 5 (et si tu veux une description ici)`. Dès que quelqu'un aura 5 invitations, il sera automatiquement ajouté à ce rôle !

## Comment puis-je désactiver le bot dans tous les salons sauf quelques-uns ?

Supprime les autorisations de lecture dans les salons où tu ne souhaites pas que le bot réponde.

## Limitation : Pas de suivi avancé avant que le bot ne sois ajouté

Le suivi avancé (qui a invité qui) ne fonctionne qu'après que vous ayez invité le bot. Le bot saura toujours le nombre d'invitations de tout le monde après l'invitation, ne vous inquiétez pas. Seules les informations supplémentaires sont manquantes et ne peuvent être collectées que pour les membres qui rejoignent après que vous ayez invité le bot.
