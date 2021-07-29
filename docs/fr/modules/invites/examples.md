# Exemples

## Normal

```text
!config joinMessage {memberMention} **a rejoint**; Invité par **{inviterName}** (**{numInvites}** invitations)
```

```text
!config leaveMessage {memberName} **a quitté** après {joinedAt:duration} sur ce serveur; Invité par **{inviterName}**
```

## modules.invites.examples.headlines.normalVanity

modules.invites.examples.content.normalCodeVanity

## Embed (Premium)

### Message d'arrivée

<!-- tabs:start -->

#### ** Capture d'écran **

![Embed d'arrivée](../../../assets/invite-manager-join-message-premium.png)

#### ** Code **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} a rejoint !", "icon_url": "{memberImage}" }, "fields": [ { "name": "Compte créé", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "Première arrivée", "value": "{firstJoin:date}", "inline": true }, { "name": "Nombre d'arrivées", "value": "{numJoins}", "inline": true }, { "name": "Invité par", "value": "{inviterMention}\n{numInvites} (normales : {numRegularInvites}, bonus : {numBonusInvites}, fausses : {numFakeInvites}, partis : {numLeaveInvites})" }, { "name": "Code d'invitation", "value": "{inviteCode} dans {channelMention}" }, { "name": "Nombre total de membres", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### modules.invites.examples.headlines.joinMessageVanity

<!-- tabs:start -->

#### ** Capture d'écran **

![modules.invites.examples.headlines.joinEmbedVanity](../../../assets/TBD)

#### ** Code **

modules.invites.examples.content.joinMessageCodeVanity

<!-- tabs:end -->

### Message de départ

<!-- tabs:start -->

#### ** Capture d'écran **

![Embed de départ](../../../assets/invite-manager-leave-message-premium.png)

#### ** Code **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} a quitté!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Temps sur le serveur", "value": "{joinedAt:duration}", "inline": true }, { "name": "Première arrivée", "value": "{firstJoin:date}", "inline": true }, { "name": "Nombre d'arrivées", "value": "{numJoins}", "inline": true }, { "name": "Invité par", "value": "{inviterMention}\n{numInvites} (normales : {numRegularInvites}, bonus : {numBonusInvites}, fausses : {numFakeInvites}, partis : {numLeaveInvites})" }, { "name": "Code d'invitation", "value": "{inviteCode} dans {channelMention}" }, { "name": "Nombre total de membres", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### modules.invites.examples.headlines.leaveMessageVanity

<!-- tabs:start -->

#### ** Capture d'écran **

![modules.invites.examples.headlines.leaveEmbedVanity](../../../assets/TBD)

#### ** Code **

modules.invites.examples.content.leaveMessageCodeVanity

<!-- tabs:end -->
