(跳至 [預留參數](#placeholders))

# 自訂訊息

---

## 您可以運用多個參數自訂加入和離開訊息。

您可以自訂加入或離開訊息如下：

```
!config joinMessage This is your custom join message! It will be posted every time someone joins your server.
```

或

```
!config leaveMessage This is your custom leave message! It will be posted every time someone leaves your server.
```

這樣的訊息顯然沒有意義。 您應該使用有關加入成員、邀請成員或伺服器的資訊對其進行個性化設定。 請參閱以下可用的預留參數列表。

所以如果想要的訊息如下：

`Welcome @Andy! You were invited by Valandur, who now has 3 invites! Have fun on our server!`

可以透過用預留參數替換所有名稱和數字來輕鬆做到：

`Welcome {memberMention}! You were invited by {inviterName}, who now has {numInvites} invites! Have fun on our server!`

所以您可以使用 `!config joinMessage <message from above>` 來設定加入訊息。當有人加入時，機器人會自動替換預留參數。

> [!NOTE|style:flat]
> 高級會員還可以使用嵌入式加入和離開訊息。 [詳細資訊](./examples.md)

請參閱 [範例網頁](./examples.md) 來了解您可以使用哪種訊息！

### 預留參數

|                          | join                                               | leave                                              | 範例 | 描述                        |
| :----------------------- | :------------------------------------------------- | :------------------------------------------------- | :----------------------------------------------------- | :-------------------------------------------------------------------------------- |
| {memberName}             | 是 | 是 | Andy                                                   | 加入成員的名稱            |
| {memberId}               | 是 | 是 | 436844634                                              | 加入成員的 ID              |
| {memberMention}          | 是 | 否  | @Andy                                                  | 提及加入成員（該成員會被@）         |
| {memberFullName}         | 是 | 是 | Andy\#1801                                             | 加入成員的完整名稱        |
| {memberImage}            | 是 | 是 | \[URL\]                                                | 加入成員的頭像連結           |
| {inviterName}            | 是 | 是 | Andy                                                   | 邀請成員的名稱           |
| {inviterId}              | 是 | 是 | 241929953                                              | 邀請成員的 ID             |
| {inviterMention}         | 是 | 是 | @Andy                                                  | 提及邀請成員（該成員會被@）        |
| {inviterFullName}        | 是 | 是 | Andy\#1801                                             | 邀請成員的完整名稱       |
| {inviterImage}           | 是 | 是 | \[URL\]                                                | 邀請成員的頭像連結          |
| {numInvites}             | 是 | 是 | 12                                                     | 邀請成員的所有邀請數量            |
| {numRegularInvites}      | 是 | 是 | 7                                                      | 邀請成員的普通邀請數量     |
| {numBonusInvites}        | 是 | 是 | 5                                                      | 邀請成員的獎勵邀請數量（手動指派）       |
| {numFakeInvites}         | 是 | 是 | 3                                                      | 邀請成員的假邀請數量        |
| {numLeaveInvites}        | 是 | 是 | 6                                                      | 邀請成員的離開邀請數量       |
| {memberCount}            | 是 | 是 | 42                                                     | 伺服器的所有成員數           |
| {numJoins}               | 是 | 是 | 3                                                      | 成員加入伺服器的次數              |
| {channelName}            | 是 | 是 | general                                                | 產生邀請連結的頻道名稱           |
| {channelMention}         | 是 | 是 | \#general                                              | 提及產生邀請連結的頻道        |
| {inviteCode}             | 是 | 是 | fgSr30s                                                | 使用的邀請代碼            |
| {memberCreated:date}     | 是 | 是 | 25.09.2016                                             | 成員創立帳號的日期     |
| {memberCreated:duration} | 是 | 是 | 5 weeks                                                | 成員創立帳號的期間 |
| {memberCreated:timeAgo}  | 是 | 是 | 2 day ago                                              | 成員創立帳號距今多久  |
| {firstJoin:date}         | 是 | 是 | 11.12.2017                                             | 成員第一次加入伺服器的日期         |
| {firstJoin:duration}     | 是 | 是 | 4 days                                                 | 成員第一次加入伺服器的期間     |
| {firstJoin:timeAgo}      | 是 | 是 | 1 week ago                                             | 成員第一次加入伺服器距今多久      |
| {previousJoin:date}      | 是 | 否  | 02.04.2018                                             | 成員上一次加入伺服器的日期      |
| {previousJoin:duration}  | 是 | 否  | 2 months                                               | 成員上一次加入伺服器的期間  |
| {previousJoin:timeAgo}   | 是 | 否  | 1 second ago                                           | 成員上一次加入伺服器距今多久   |
| {joinedAt:date}          | 否  | 是 | 17.05.2018                                             | 成員加入伺服器的日期          |
| {joinedAt:duration}      | 否  | 是 | 3 minutes                                              | 成員加入伺服器的期間      |
| {joinedAt:timeAgo}       | 否  | 是 | 2 minutes ago                                          | 成員加入伺服器距今多久       |
