# 例子

## Normal

```text
!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)
```

```text
!config leaveMessage {memberName} **left** after {joinedAt:duration} on this server; Invited by **{inviterName}**
```

## modules.invites.examples.headlines.normalVanity

modules.invites.examples.content.normalCodeVanity

## Embed (Premium)

### Join Message

<!-- tabs:start -->

#### ** Screenshot **

![Join Embed](../../../assets/invite-manager-join-message-premium.png)

#### ** Code **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### modules.invites.examples.headlines.joinMessageVanity

<!-- tabs:start -->

#### ** Screenshot **

![modules.invites.examples.headlines.joinEmbedVanity](../../../assets/TBD)

#### ** Code **

modules.invites.examples.content.joinMessageCodeVanity

<!-- tabs:end -->

### Leave Message

<!-- tabs:start -->

#### ** Screenshot **

![Leave Embed](../../../assets/invite-manager-leave-message-premium.png)

#### ** Code **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### modules.invites.examples.headlines.leaveMessageVanity

<!-- tabs:start -->

#### ** Screenshot **

![modules.invites.examples.headlines.leaveEmbedVanity](../../../assets/TBD)

#### ** Code **

modules.invites.examples.content.leaveMessageCodeVanity

<!-- tabs:end -->
