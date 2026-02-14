# Configs

There are many config options that can be set. You don't have to set all of them. If you just added the bot, just run `!setup`, which will guide you through the most important ones.

## Overview

### 一般

| Setting | Description |
|---|---|
| [前綴](#prefix) | 用來觸發機器人指令的前綴。
| [語言](#lang) | 機器人的語言
| [記錄頻道](#logchannel) | 機器人動作紀錄的頻道。
| [獲取更新](#getupdates) | 啟用來接收 InviteManager 的開發更新。
| [指令頻道](#channels) | 機器人將會回應指令的頻道。
| [忽略的頻道](#ignoredchannels) | 機器人將會忽略指令的頻道。

### 邀請數量



#### 一般

| Setting | Description |
|---|---|
| [加入身分組](#joinroles) | 當加入時指派給所有成員的身分組。

#### 加入

| Setting | Description |
|---|---|
| [訊息](#joinmessage) | 當有人加入伺服器時發送的訊息。
| [訊息](#joinmessagevanity) | 當有人使用個性化網址加入伺服器時發送的訊息。
| [訊息頻道](#joinmessagechannel) | 加入訊息發送的頻道。

#### 離開

| Setting | Description |
|---|---|
| [訊息](#leavemessage) | 當有人離開伺服器時發送的訊息。
| [訊息](#leavemessagevanity) | 當有人使用個性化網址加入伺服器之後離開時發送的訊息。
| [訊息頻道](#leavemessagechannel) | 離開訊息發送的頻道。
| [自動減去](#autosubtractleaves) | 當被邀請的使用者離開時自動從邀請者移除邀請數量。
| [自動減去門檻](#autosubtractleavethreshold) | 使用者在伺服器停留多少時間可以計算成邀請，以秒為單位。

#### 排行榜

| Setting | Description |
|---|---|
| [格式](#leaderboardstyle) | 排行榜顯示的格式。
| [隱藏離開成員](#hideleftmembersfromleaderboard) | 從排行榜隱藏離開伺服器的成員。

#### 假邀請

| Setting | Description |
|---|---|
| [自動減去](#autosubtractfakes) | 自動減去假邀請數量。

#### 等級

| Setting | Description |
|---|---|
| [指派格式](#rankassignmentstyle) | 如何獎勵使用者的等級。
| [公告頻道](#rankannouncementchannel) | 使用者收到一個新等級時的公告頻道。
| [公告訊息](#rankannouncementmessage) | 使用者收到一個新等級時的訊息。

### 審核



#### 驗證碼

| Setting | Description |
|---|---|
| [啟用](#captchaverificationonjoin) | 驗證碼是否啟用驗證。
| [歡迎訊息](#captchaverificationwelcomemessage) | 一位使用者在加入伺服器之後將收到的訊息來指示他們輸入驗證碼。
| [成功訊息](#captchaverificationsuccessmessage) | 將會發送給使用者的歡迎訊息在他成功驗證之後。
| [失敗訊息](#captchaverificationfailedmessage) | 發送給使用者的訊息如果他輸入一個無效的驗證碼。
| [驗證延遲時間](#captchaverificationtimeout) | 必須成功輸入驗證碼的時間。
| [啟用紀錄](#captchaverificationlogenabled) | 驗證過程是否會被記錄。

#### 一般

| Setting | Description |
|---|---|
| [啟用](#automodenabled) | 自動審核訊息（也可以開啟或關閉指定規則，此設置必須打開來啟用任何規則）。
| [審核的頻道](#automodmoderatedchannels) | 想要審核的頻道列表（這類似一份白名單，留白會審核所有頻道，或使用 `autoModIgnoredChannels` 來忽略一些頻道）。
| [審核的身分組](#automodmoderatedroles) | 想要審核的身分組列表（這類似一份白名單，留白會審核所有身分組，或使用 `autoModIgnoredRoles` 來忽略一些身分組）。
| [忽略的頻道](#automodignoredchannels) | 自動審核時忽略的頻道。
| [忽略的身分組](#automodignoredroles) | 任何成員有這些身分組將不會被自動審核。
| [靜音的身分組](#mutedrole) | 給予靜音的身分組。確認已拒絕 "發送訊息" 權限。
| [老成員禁用](#automoddisabledforoldmembers) | 禁用自動審核成員如果他們已在您的伺服器好長一段時間。
| [老成員門檻](#automoddisabledforoldmembersthreshold) | 考慮是 '老' 成員所需在伺服器內的時間。

#### 紀錄

| Setting | Description |
|---|---|
| [啟用紀錄](#automodlogenabled) | 紀錄機器人的任何審核動作。
| [審核紀錄頻道](#modlogchannel) | 將張貼審核紀錄的頻道。
| [刪除機器人訊息](#automoddeletebotmessage) | 自動刪除機器人自己的訊息（保持您乾淨的聊天室）。
| [刪除機器人訊息延遲時間](#automoddeletebotmessagetimeoutinseconds) | 刪除機器人訊息的延遲時間。
| [刪除停權訊息](#modpunishmentbandeletemessage) | 是否自動刪除 "停權" 的懲罰訊息。
| [刪除踢出訊息](#modpunishmentkickdeletemessage) | 是否自動刪除 "踢出" 的懲罰訊息。
| [刪除暫時停權訊息](#modpunishmentsoftbandeletemessage) | 是否自動刪除 "暫時停權" 的懲罰訊息。
| [刪除警告訊息](#modpunishmentwarndeletemessage) | 是否自動刪除 "警告" 的懲罰訊息。
| [刪除靜音訊息](#modpunishmentmutedeletemessage) | 是否自動刪除 "靜音" 的懲罰訊息。

#### 邀請數量

| Setting | Description |
|---|---|
| [啟用](#automodinvitesenabled) | 自動掃描有 Discord 邀請連結的訊息然後移除他們。

#### 連結

| Setting | Description |
|---|---|
| [啟用](#automodlinksenabled) | 自動移除有連結的訊息（您可以設定白名單和黑名單）。
| [白名單](#automodlinkswhitelist) | 允許使用者張貼的連結列表。
| [黑名單](#automodlinksblacklist) | 使用者將不能張貼的一些黑名單連結。
| [追蹤重新導向](#automodlinksfollowredirects) | 啟用此來解決重新導向連結。

#### 禁止的文字

| Setting | Description |
|---|---|
| [啟用](#automodwordsenabled) | 是否自動審核黑名單的文字。
| [黑名單](#automodwordsblacklist) | 禁止的文字列表。

#### 大寫

| Setting | Description |
|---|---|
| [啟用](#automodallcapsenabled) | 自動審核許多大寫的訊息。
| [最少字數](#automodallcapsmincharacters) | 要考慮進行審核訊息的最少字數（設定 '3' 將會忽略 'OK' ）。
| [大寫百分比](#automodallcapspercentagecaps) | 訊息內會觸發大寫規則的字數百分比。

#### 拷貝訊息

| Setting | Description |
|---|---|
| [啟用](#automodduplicatetextenabled) | 自動審核拷貝訊息（複製貼上的垃圾訊息）。
| [以秒為單位的時間範圍](#automodduplicatetexttimeframeinseconds) | 考慮是拷貝訊息的時間範圍。

#### 垃圾訊息

| Setting | Description |
|---|---|
| [啟用](#automodquickmessagesenabled) | 自動審核使用者在短時間內發送大量訊息。
| [# 訊息數量](#automodquickmessagesnumberofmessages) | 時間範圍內觸發規則的發送訊息數量。
| [以秒為單位的時間範圍](#automodquickmessagestimeframeinseconds) | 時間範圍內允許一位使用者發送的最大訊息數量。

#### 提及

| Setting | Description |
|---|---|
| [啟用](#automodmentionusersenabled) | 自動審核提及數量過多的使用者訊息。
| [最多 # 個提及](#automodmentionusersmaxnumberofmentions) | 一位成員在一則訊息內可以提及的最大使用者數量。
| [啟用](#automodmentionrolesenabled) | 自動審核提及過多身分組的訊息。
| [最多 # 個提及](#automodmentionrolesmaxnumberofmentions) | 一位成員在一則訊息內可以提及的最大身分組數量。

#### 表情符號

| Setting | Description |
|---|---|
| [啟用](#automodemojisenabled) | 自動審核數量過多的表情符號訊息。
| [最多 # 個表情符號](#automodemojismaxnumberofemojis) | 在觸發規則前一則訊息所允許的最大表情數量。
| [啟用](#automodhoistenabled) | 自動給成員暱稱如果他們嘗試提升（使用特殊文字來出現在使用者列表頂端）。

### 音樂



#### 音樂

| Setting | Description |
|---|---|
| [音樂音量](#musicvolume) | 當機器人加入一個語音頻道時的預設音量。

#### 公告

| Setting | Description |
|---|---|
| [公告下一首歌曲](#announcenextsong) | 是否應該在語音頻道裡公告下一首歌曲。
| [公告音量](#announcementvoice) | 公告下一首歌曲的音量。

#### 減小音樂

| Setting | Description |
|---|---|
| [說話時減小音樂](#fademusicontalk) | 如果啟用，當人們說話時音樂會減低。
| [延遲結束減小音樂](#fademusicenddelay) | 沒人說話多少秒讓音量恢復正常的延遲時間。

#### 平臺

| Setting | Description |
|---|---|
| [預設音樂平臺](#defaultmusicplatform) | 當沒有明確選擇平臺時用來搜尋 / 播放的平臺。
| [禁用音樂平臺](#disabledmusicplatforms) | 禁用然後不能用來播放音樂的音樂平臺。

<a name=prefix></a>

---
## 前綴

用來觸發機器人指令的前綴。

Type: `String`

Default: `!`

Reset to default:
`!config prefix default`

Examples:

`!config prefix +`

`!config prefix >`



<a name=lang></a>

---
## 語言

機器人的語言

Type: `Enum<Lang>`

Default: `en`

Reset to default:
`!config lang default`

Possible values: `ar`, `bg`, `cs`, `de`, `el`, `en`, `es`, `fr`, `hu`, `id_ID`, `it`, `ja`, `lt`, `nl`, `pl`, `pt`, `pt_BR`, `ro`, `ru`, `sr`, `tr`, `zh_CN`, `zh_TW`

Example:

`!config lang ar`



<a name=logChannel></a>

---
## 記錄頻道

機器人動作紀錄的頻道。

Type: `Channel`

Default: `null`

Reset to default:
`!config logChannel default`

Examples:

`!config logChannel #channel`



<a name=getUpdates></a>

---
## 獲取更新

啟用來接收 InviteManager 的開發更新。

Type: `Boolean`

Default: `true`

Reset to default:
`!config getUpdates default`

Enable:

`!config getUpdates true`

Disable:

`!config getUpdates false`



<a name=channels></a>

---
## 指令頻道

機器人將會回應指令的頻道。

Type: `Channel[]`

Default: ``

Reset to default:
`!config channels default`



<a name=ignoredChannels></a>

---
## 忽略的頻道

機器人將會忽略指令的頻道。

Type: `Channel[]`

Default: ``

Reset to default:
`!config ignoredChannels default`



<a name=joinRoles></a>

---
## 加入身分組

當加入時指派給所有成員的身分組。

Type: `Role[]`

Default: ``

Reset to default:
`!config joinRoles default`



<a name=joinMessage></a>

---
## 訊息

當有人加入伺服器時發送的訊息。

Type: `String`

Default: `{memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

Reset to default:
`!config joinMessage default`



<a name=joinMessageVanity></a>

---
## 訊息

當有人使用個性化網址加入伺服器時發送的訊息。

Type: `String`

Default: `{memberMention} **joined** using the vanity invite code **{inviteCode}**`

Reset to default:
`!config joinMessageVanity default`



<a name=joinMessageChannel></a>

---
## 訊息頻道

加入訊息發送的頻道。

Type: `Channel`

Default: `null`

Reset to default:
`!config joinMessageChannel default`

Examples:

`!config joinMessageChannel #general`

`!config joinMessageChannel #joins`



<a name=leaveMessage></a>

---
## 訊息

當有人離開伺服器時發送的訊息。

Type: `String`

Default: `{memberName} **left**; Invited by **{inviterName}**`

Reset to default:
`!config leaveMessage default`

Examples:

`!config leaveMessage `

`!config leaveMessage `



<a name=leaveMessageVanity></a>

---
## 訊息

當有人使用個性化網址加入伺服器之後離開時發送的訊息。

Type: `String`

Default: `{memberName} **left** after {joinedAt:duration} on this server`

Reset to default:
`!config leaveMessageVanity default`



<a name=leaveMessageChannel></a>

---
## 訊息頻道

離開訊息發送的頻道。

Type: `Channel`

Default: `null`

Reset to default:
`!config leaveMessageChannel default`

Examples:

`!config leaveMessageChannel #general`

`!config leaveMessageChannel #leaves`



<a name=leaderboardStyle></a>

---
## 格式

排行榜顯示的格式。

Type: `Enum<LeaderboardStyle>`

Default: `normal`

Reset to default:
`!config leaderboardStyle default`

Possible values: `normal`, `table`, `mentions`

Example:

`!config leaderboardStyle normal`



<a name=hideLeftMembersFromLeaderboard></a>

---
## 隱藏離開成員

從排行榜隱藏離開伺服器的成員。

Type: `Boolean`

Default: `false`

Reset to default:
`!config hideLeftMembersFromLeaderboard default`

Enable:

`!config hideLeftMembersFromLeaderboard true`

Disable:

`!config hideLeftMembersFromLeaderboard false`



<a name=autoSubtractFakes></a>

---
## 自動減去

自動減去假邀請數量。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractFakes default`

Enable:

`!config autoSubtractFakes true`

Disable:

`!config autoSubtractFakes false`



<a name=autoSubtractLeaves></a>

---
## 自動減去

當被邀請的使用者離開時自動從邀請者移除邀請數量。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractLeaves default`

Enable:

`!config autoSubtractLeaves true`

Disable:

`!config autoSubtractLeaves false`



<a name=autoSubtractLeaveThreshold></a>

---
## 自動減去門檻

使用者在伺服器停留多少時間可以計算成邀請，以秒為單位。

Type: `Number`

Default: `600`

Reset to default:
`!config autoSubtractLeaveThreshold default`

Examples:

`!config autoSubtractLeaveThreshold 60`

`!config autoSubtractLeaveThreshold 3600`



<a name=rankAssignmentStyle></a>

---
## 指派格式

如何獎勵使用者的等級。

Type: `Enum<RankAssignmentStyle>`

Default: `all`

Reset to default:
`!config rankAssignmentStyle default`

Possible values: `all`, `highest`, `onlyAdd`

Example:

`!config rankAssignmentStyle all`



<a name=rankAnnouncementChannel></a>

---
## 公告頻道

使用者收到一個新等級時的公告頻道。

Type: `Channel`

Default: `null`

Reset to default:
`!config rankAnnouncementChannel default`

Examples:

`!config rankAnnouncementChannel `

`!config rankAnnouncementChannel `



<a name=rankAnnouncementMessage></a>

---
## 公告訊息

使用者收到一個新等級時的訊息。

Type: `String`

Default: `Congratulations, **{memberMention}** has reached the **{rankName}** rank!`

Reset to default:
`!config rankAnnouncementMessage default`

Examples:

`!config rankAnnouncementMessage `

`!config rankAnnouncementMessage `



<a name=captchaVerificationOnJoin></a>

---
## 啟用

驗證碼是否啟用驗證。

Type: `Boolean`

Default: `false`

Reset to default:
`!config captchaVerificationOnJoin default`

Enable:

`!config captchaVerificationOnJoin true`

Disable:

`!config captchaVerificationOnJoin false`



<a name=captchaVerificationWelcomeMessage></a>

---
## 歡迎訊息

一位使用者在加入伺服器之後將收到的訊息來指示他們輸入驗證碼。

Type: `String`

Default: `Welcome to the server **{serverName}**! For extra protection, new members are required to enter a captcha.`

Reset to default:
`!config captchaVerificationWelcomeMessage default`

Examples:

`!config captchaVerificationWelcomeMessage Welcome, please enter the captcha below!`



<a name=captchaVerificationSuccessMessage></a>

---
## 成功訊息

將會發送給使用者的歡迎訊息在他成功驗證之後。

Type: `String`

Default: `You have successfully entered the captcha. Welcome to the server!`

Reset to default:
`!config captchaVerificationSuccessMessage default`

Examples:

`!config captchaVerificationSuccessMessage Thanks for entering the captcha, enjoy our server!`



<a name=captchaVerificationFailedMessage></a>

---
## 失敗訊息

發送給使用者的訊息如果他輸入一個無效的驗證碼。

Type: `String`

Default: `You did not enter the captha right within the specified time.We're sorry, but we have to kick you from the server. Feel free to join again.`

Reset to default:
`!config captchaVerificationFailedMessage default`

Examples:

`!config captchaVerificationFailedMessage Looks like you are not human :(. You can join again and try again later if this was a mistake!`



<a name=captchaVerificationTimeout></a>

---
## 驗證延遲時間

必須成功輸入驗證碼的時間。

Type: `Number`

Default: `180`

Reset to default:
`!config captchaVerificationTimeout default`

Examples:

`!config captchaVerificationTimeout 60`

`!config captchaVerificationTimeout 600`



<a name=captchaVerificationLogEnabled></a>

---
## 啟用紀錄

驗證過程是否會被記錄。

Type: `Boolean`

Default: `true`

Reset to default:
`!config captchaVerificationLogEnabled default`

Enable:

`!config captchaVerificationLogEnabled true`

Disable:

`!config captchaVerificationLogEnabled false`



<a name=autoModEnabled></a>

---
## 啟用

自動審核訊息（也可以開啟或關閉指定規則，此設置必須打開來啟用任何規則）。

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModEnabled default`

Enable:

`!config autoModEnabled true`

Disable:

`!config autoModEnabled false`



<a name=autoModModeratedChannels></a>

---
## 審核的頻道

想要審核的頻道列表（這類似一份白名單，留白會審核所有頻道，或使用 `autoModIgnoredChannels` 來忽略一些頻道）。

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModModeratedChannels default`

Examples:

`!config autoModModeratedChannels #general`

`!config autoModModeratedChannels #support,#help`



<a name=autoModModeratedRoles></a>

---
## 審核的身分組

想要審核的身分組列表（這類似一份白名單，留白會審核所有身分組，或使用 `autoModIgnoredRoles` 來忽略一些身分組）。

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModModeratedRoles default`

Examples:

`!config autoModModeratedRoles @NewMembers`

`!config autoModModeratedRoles @Newbies,@Starters`



<a name=autoModIgnoredChannels></a>

---
## 忽略的頻道

自動審核時忽略的頻道。

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModIgnoredChannels default`

Examples:

`!config autoModIgnoredChannels #general`

`!config autoModIgnoredChannels #off-topic,#nsfw`



<a name=autoModIgnoredRoles></a>

---
## 忽略的身分組

任何成員有這些身分組將不會被自動審核。

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModIgnoredRoles default`

Examples:

`!config autoModIgnoredRoles @TrustedMembers`

`!config autoModIgnoredRoles @Moderators,@Staff`



<a name=mutedRole></a>

---
## 靜音的身分組

給予靜音的身分組。確認已拒絕 "發送訊息" 權限。

Type: `Role`

Default: `null`

Reset to default:
`!config mutedRole default`

Examples:

`!config mutedRole @muted`



<a name=autoModDisabledForOldMembers></a>

---
## 老成員禁用

禁用自動審核成員如果他們已在您的伺服器好長一段時間。

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModDisabledForOldMembers default`

Enable:

`!config autoModDisabledForOldMembers true`

Disable:

`!config autoModDisabledForOldMembers false`



<a name=autoModDisabledForOldMembersThreshold></a>

---
## 老成員門檻

考慮是 '老' 成員所需在伺服器內的時間。

Type: `Number`

Default: `604800`

Reset to default:
`!config autoModDisabledForOldMembersThreshold default`

Examples:

`!config autoModDisabledForOldMembersThreshold 604800` (1 week)``

`!config autoModDisabledForOldMembersThreshold 2419200` (1 month)``



<a name=autoModLogEnabled></a>

---
## 啟用紀錄

紀錄機器人的任何審核動作。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLogEnabled default`

Enable:

`!config autoModLogEnabled true`

Disable:

`!config autoModLogEnabled false`



<a name=modLogChannel></a>

---
## 審核紀錄頻道

將張貼審核紀錄的頻道。

Type: `Channel`

Default: `null`

Reset to default:
`!config modLogChannel default`

Examples:

`!config modLogChannel #channel`

`!config modLogChannel #logs`



<a name=autoModDeleteBotMessage></a>

---
## 刪除機器人訊息

自動刪除機器人自己的訊息（保持您乾淨的聊天室）。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDeleteBotMessage default`

Enable:

`!config autoModDeleteBotMessage true`

Disable:

`!config autoModDeleteBotMessage false`



<a name=autoModDeleteBotMessageTimeoutInSeconds></a>

---
## 刪除機器人訊息延遲時間

刪除機器人訊息的延遲時間。

Type: `Number`

Default: `5`

Reset to default:
`!config autoModDeleteBotMessageTimeoutInSeconds default`

Examples:

`!config autoModDeleteBotMessageTimeoutInSeconds 5`

`!config autoModDeleteBotMessageTimeoutInSeconds 10`



<a name=modPunishmentBanDeleteMessage></a>

---
## 刪除停權訊息

是否自動刪除 "停權" 的懲罰訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentBanDeleteMessage default`

Enable:

`!config modPunishmentBanDeleteMessage true`

Disable:

`!config modPunishmentBanDeleteMessage false`



<a name=modPunishmentKickDeleteMessage></a>

---
## 刪除踢出訊息

是否自動刪除 "踢出" 的懲罰訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentKickDeleteMessage default`

Enable:

`!config modPunishmentKickDeleteMessage true`

Disable:

`!config modPunishmentKickDeleteMessage false`



<a name=modPunishmentSoftbanDeleteMessage></a>

---
## 刪除暫時停權訊息

是否自動刪除 "暫時停權" 的懲罰訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentSoftbanDeleteMessage default`

Enable:

`!config modPunishmentSoftbanDeleteMessage true`

Disable:

`!config modPunishmentSoftbanDeleteMessage false`



<a name=modPunishmentWarnDeleteMessage></a>

---
## 刪除警告訊息

是否自動刪除 "警告" 的懲罰訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentWarnDeleteMessage default`

Enable:

`!config modPunishmentWarnDeleteMessage true`

Disable:

`!config modPunishmentWarnDeleteMessage false`



<a name=modPunishmentMuteDeleteMessage></a>

---
## 刪除靜音訊息

是否自動刪除 "靜音" 的懲罰訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentMuteDeleteMessage default`

Enable:

`!config modPunishmentMuteDeleteMessage true`

Disable:

`!config modPunishmentMuteDeleteMessage false`



<a name=autoModInvitesEnabled></a>

---
## 啟用

自動掃描有 Discord 邀請連結的訊息然後移除他們。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModInvitesEnabled default`

Enable:

`!config autoModInvitesEnabled true`

Disable:

`!config autoModInvitesEnabled false`



<a name=autoModLinksEnabled></a>

---
## 啟用

自動移除有連結的訊息（您可以設定白名單和黑名單）。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksEnabled default`

Enable:

`!config autoModLinksEnabled true`

Disable:

`!config autoModLinksEnabled false`



<a name=autoModLinksWhitelist></a>

---
## 白名單

允許使用者張貼的連結列表。

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksWhitelist default`

Examples:

`!config autoModLinksWhitelist discordbots.org`

`!config autoModLinksWhitelist youtube.com,twitch.com`



<a name=autoModLinksBlacklist></a>

---
## 黑名單

使用者將不能張貼的一些黑名單連結。

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksBlacklist default`

Examples:

`!config autoModLinksBlacklist google.com`

`!config autoModLinksBlacklist twitch.com,youtube.com`



<a name=autoModLinksFollowRedirects></a>

---
## 追蹤重新導向

啟用此來解決重新導向連結。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksFollowRedirects default`

Enable:

`!config autoModLinksFollowRedirects true`

Disable:

`!config autoModLinksFollowRedirects false`



<a name=autoModWordsEnabled></a>

---
## 啟用

是否自動審核黑名單的文字。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModWordsEnabled default`

Enable:

`!config autoModWordsEnabled true`

Disable:

`!config autoModWordsEnabled false`



<a name=autoModWordsBlacklist></a>

---
## 黑名單

禁止的文字列表。

Type: `String[]`

Default: ``

Reset to default:
`!config autoModWordsBlacklist default`

Examples:

`!config autoModWordsBlacklist gay`

`!config autoModWordsBlacklist stupid,fuck`



<a name=autoModAllCapsEnabled></a>

---
## 啟用

自動審核許多大寫的訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModAllCapsEnabled default`

Enable:

`!config autoModAllCapsEnabled true`

Disable:

`!config autoModAllCapsEnabled false`



<a name=autoModAllCapsMinCharacters></a>

---
## 最少字數

要考慮進行審核訊息的最少字數（設定 '3' 將會忽略 'OK' ）。

Type: `Number`

Default: `10`

Reset to default:
`!config autoModAllCapsMinCharacters default`

Examples:

`!config autoModAllCapsMinCharacters 5`

`!config autoModAllCapsMinCharacters 15`



<a name=autoModAllCapsPercentageCaps></a>

---
## 大寫百分比

訊息內會觸發大寫規則的字數百分比。

Type: `Number`

Default: `70`

Reset to default:
`!config autoModAllCapsPercentageCaps default`

Examples:

`!config autoModAllCapsPercentageCaps 50`

`!config autoModAllCapsPercentageCaps 90`



<a name=autoModDuplicateTextEnabled></a>

---
## 啟用

自動審核拷貝訊息（複製貼上的垃圾訊息）。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDuplicateTextEnabled default`

Enable:

`!config autoModDuplicateTextEnabled true`

Disable:

`!config autoModDuplicateTextEnabled false`



<a name=autoModDuplicateTextTimeframeInSeconds></a>

---
## 以秒為單位的時間範圍

考慮是拷貝訊息的時間範圍。

Type: `Number`

Default: `60`

Reset to default:
`!config autoModDuplicateTextTimeframeInSeconds default`

Examples:

`!config autoModDuplicateTextTimeframeInSeconds 5`

`!config autoModDuplicateTextTimeframeInSeconds 20`



<a name=autoModQuickMessagesEnabled></a>

---
## 啟用

自動審核使用者在短時間內發送大量訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModQuickMessagesEnabled default`

Enable:

`!config autoModQuickMessagesEnabled true`

Disable:

`!config autoModQuickMessagesEnabled false`



<a name=autoModQuickMessagesNumberOfMessages></a>

---
## # 訊息數量

時間範圍內觸發規則的發送訊息數量。

Type: `Number`

Default: `5`

Reset to default:
`!config autoModQuickMessagesNumberOfMessages default`

Examples:

`!config autoModQuickMessagesNumberOfMessages 5`

`!config autoModQuickMessagesNumberOfMessages 10`



<a name=autoModQuickMessagesTimeframeInSeconds></a>

---
## 以秒為單位的時間範圍

時間範圍內允許一位使用者發送的最大訊息數量。

Type: `Number`

Default: `3`

Reset to default:
`!config autoModQuickMessagesTimeframeInSeconds default`

Examples:

`!config autoModQuickMessagesTimeframeInSeconds 2`

`!config autoModQuickMessagesTimeframeInSeconds 10`



<a name=autoModMentionUsersEnabled></a>

---
## 啟用

自動審核提及數量過多的使用者訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionUsersEnabled default`

Enable:

`!config autoModMentionUsersEnabled true`

Disable:

`!config autoModMentionUsersEnabled false`



<a name=autoModMentionUsersMaxNumberOfMentions></a>

---
## 最多 # 個提及

一位成員在一則訊息內可以提及的最大使用者數量。

Type: `Number`

Default: `5`

Reset to default:
`!config autoModMentionUsersMaxNumberOfMentions default`

Examples:

`!config autoModMentionUsersMaxNumberOfMentions 2`

`!config autoModMentionUsersMaxNumberOfMentions 5`



<a name=autoModMentionRolesEnabled></a>

---
## 啟用

自動審核提及過多身分組的訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionRolesEnabled default`

Enable:

`!config autoModMentionRolesEnabled true`

Disable:

`!config autoModMentionRolesEnabled false`



<a name=autoModMentionRolesMaxNumberOfMentions></a>

---
## 最多 # 個提及

一位成員在一則訊息內可以提及的最大身分組數量。

Type: `Number`

Default: `3`

Reset to default:
`!config autoModMentionRolesMaxNumberOfMentions default`

Examples:

`!config autoModMentionRolesMaxNumberOfMentions 2`

`!config autoModMentionRolesMaxNumberOfMentions 5`



<a name=autoModEmojisEnabled></a>

---
## 啟用

自動審核數量過多的表情符號訊息。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModEmojisEnabled default`

Enable:

`!config autoModEmojisEnabled true`

Disable:

`!config autoModEmojisEnabled false`



<a name=autoModEmojisMaxNumberOfEmojis></a>

---
## 最多 # 個表情符號

在觸發規則前一則訊息所允許的最大表情數量。

Type: `Number`

Default: `5`

Reset to default:
`!config autoModEmojisMaxNumberOfEmojis default`

Examples:

`!config autoModEmojisMaxNumberOfEmojis 5`

`!config autoModEmojisMaxNumberOfEmojis 10`



<a name=autoModHoistEnabled></a>

---
## 啟用

自動給成員暱稱如果他們嘗試提升（使用特殊文字來出現在使用者列表頂端）。

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModHoistEnabled default`

Enable:

`!config autoModHoistEnabled true`

Disable:

`!config autoModHoistEnabled false`



<a name=musicVolume></a>

---
## 音樂音量

當機器人加入一個語音頻道時的預設音量。

Type: `Number`

Default: `100`

Reset to default:
`!config musicVolume default`



<a name=announceNextSong></a>

---
## 公告下一首歌曲

是否應該在語音頻道裡公告下一首歌曲。

Type: `Boolean`

Default: `false`

Reset to default:
`!config announceNextSong default`

Enable:

`!config announceNextSong true`

Disable:

`!config announceNextSong false`



<a name=announcementVoice></a>

---
## 公告音量

公告下一首歌曲的音量。

Type: `Enum<AnnouncementVoice>`

Default: `Joanna`

Reset to default:
`!config announcementVoice default`

Possible values: `Joanna`, `Salli`, `Kendra`, `Kimberly`, `Ivy`, `Matthew`, `Justin`, `Joey`

Example:

`!config announcementVoice Joanna`



<a name=fadeMusicOnTalk></a>

---
## 說話時減小音樂

如果啟用，當人們說話時音樂會減低。

Type: `Boolean`

Default: `true`

Reset to default:
`!config fadeMusicOnTalk default`

Enable:

`!config fadeMusicOnTalk true`

Disable:

`!config fadeMusicOnTalk false`



<a name=fadeMusicEndDelay></a>

---
## 延遲結束減小音樂

沒人說話多少秒讓音量恢復正常的延遲時間。

Type: `Number`

Default: `1`

Reset to default:
`!config fadeMusicEndDelay default`



<a name=defaultMusicPlatform></a>

---
## 預設音樂平臺

當沒有明確選擇平臺時用來搜尋 / 播放的平臺。

Type: `Enum<MusicPlatformTypes>`

Default: `youtube`

Reset to default:
`!config defaultMusicPlatform default`



<a name=disabledMusicPlatforms></a>

---
## 禁用音樂平臺

禁用然後不能用來播放音樂的音樂平臺。

Type: `Enum<MusicPlatformTypes>[]`

Default: `soundcloud`

Reset to default:
`!config disabledMusicPlatforms default`

