# 範例

## 一般式訊息

```text
!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)
```

```text
!config leaveMessage {memberName} **left** after {joinedAt:duration} on this server; Invited by **{inviterName}**
```

## 一般式訊息（個性化網址）

```text
!config joinMessageVanity {memberMention} **joined** using the vanity invite code **{inviteCode}**
```

```text
!config leaveMessageVanity {memberName} **left** after {joinedAt:duration} on this server
```

## 嵌入式訊息

### 加入訊息

<!-- tabs:start -->

#### ** 截圖 **

![嵌入式加入訊息](../../../assets/invite-manager-join-message-premium.png)

#### ** 代碼 **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### 加入訊息（個性化網址）

<!-- tabs:start -->

#### ** 截圖 **

![嵌入式加入訊息（個性化網址）](../../../assets/invite-manager-join-message-vanity-premium.png)

#### ** 代碼 **

```text
!config joinMessageVanity { "color": "#5cd65c", "author": { "name": "{memberName} joined!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Account created", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### 離開訊息

<!-- tabs:start -->

#### ** 截圖 **

![嵌入式離開訊息](../../../assets/invite-manager-leave-message-premium.png)

#### ** 代碼 **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Invited by", "value": "{inviterMention}\n{numInvites} (regular: {numRegularInvites}, bonus: {numBonusInvites}, fake: {numFakeInvites}, leave: {numLeaveInvites})" }, { "name": "Invite Code", "value": "{inviteCode} in channel {channelMention}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### 離開訊息（個性化網址）

<!-- tabs:start -->

#### ** 截圖 **

![嵌入式離開訊息（個性化網址）](../../../assets/invite-manager-leave-message-vanity-premium.png)

#### ** 代碼 **

```text
!config leaveMessageVanity { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->
