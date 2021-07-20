# Beispiele

## Normal

```text
!config joinMessage {memberMention} ist dem Server **beigetreten**; Eingeladen von **{inviterName}** (**{numInvites}** invites)
```

```text
!config leaveMessage {memberName} hat den Server nach {joinedAt:duration} **verlassen**; Eingeladen von **{inviterName}**
```

## Embed (Premium)

### Beitrittsnachricht

<!-- tabs:start -->

#### ** Screenshot **

![Eingebettete Beitrittsnachricht](../../../assets/invite-manager-join-message-premium.png)

#### ** Code **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} ist beigetreten!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account erstellt", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "Erster Beitritt", "value": "{firstJoin:date}", "inline": true }, { "name": "Anzahl an Beitritten", "value": "{numJoins}", "inline": true }, { "name": "Eingeladen von", "value": "{inviterMention}\n{numInvites} (regulär: {numRegularInvites}, bonus: {numBonusInvites}, gefälscht: {numFakeInvites}, verlassen: {numLeaveInvites})" }, { "name": "Einladungscode", "value": "{inviteCode} im Channel {channelMention}" }, { "name": "Anzahl an Mitgliedern", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Verlassensnachricht

<!-- tabs:start -->

#### ** Screenshot **

![Eingebettete Verlassensnachricht](../../../assets/invite-manager-leave-message-premium.png)

#### ** Code **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} hat den Server verlassen!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Verbrachte Zeit", "value": "{joinedAt:duration}", "inline": true }, { "name": "Erster Beitritt", "value": "{firstJoin:date}", "inline": true }, { "name": "Anzahl an Beitritten", "value": "{numJoins}", "inline": true }, { "name": "Eingeladen von", "value": "{inviterMention}\n{numInvites} (regulär: {numRegularInvites}, bonus: {numBonusInvites}, gefälscht: {numFakeInvites}, verlassen: {numLeaveInvites})" }, { "name": "Einladungscode", "value": "{inviteCode} im Channel {channelMention}" }, { "name": "Anzahl an Mitgliedern", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->
