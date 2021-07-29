# Примери

## Нормално

```text
!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)
```

```text
!config leaveMessage {memberName} **left** after {joinedAt:duration} on this server; Invited by **{inviterName}**
```

## Normal (Vanity)

```text
!config joinMessageVanity {memberMention} **joined** using the vanity invite code **{inviteCode}**
```

```text
!config leaveMessageVanity {memberName} **left** after {joinedAt:duration} on this server
```

## Embed

### Join Message

<!-- tabs:start -->

#### ** Екранна снимка **

![Join Embed](../../../assets/invite-manager-join-message-premium.png)

#### ** Код **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Join Message (Vanity)

<!-- tabs:start -->

#### ** Екранна снимка **

![Join Embed (Vanity)](../../../assets/invite-manager-join-message-vanity-premium.png)

#### ** Код **

```text
!config joinMessageVanity { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Leave Message

<!-- tabs:start -->

#### ** Екранна снимка **

![Leave Embed](../../../assets/invite-manager-leave-message-premium.png)

#### ** Код **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Leave Message (Vanity)

<!-- tabs:start -->

#### ** Екранна снимка **

![Leave Embed (Vanity)](../../../assets/invite-manager-leave-message-vanity-premium.png)

#### ** Код **

```text
!config leaveMessageVanity { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->
