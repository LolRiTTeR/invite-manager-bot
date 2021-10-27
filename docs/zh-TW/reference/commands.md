# Commands

To get a list of available commands, do !help on your server.

## Arguments & Flags

Most commands accept arguments and/or flags.  
According to the **Type** of the argument or flag you can provide different values.

### 布林值

此值預計是 `true` 或 `false` 。您也可以使用 `yes` 和  `no` 。

### 數字

此值預計是一個數字

### 列舉

此值預計是一個指定的有效值。

> 根據指令會有不同的有效值。使用 `!help <command>` （例如： `!help addRank` ）來獲取指令的詳細資訊和列舉的有效值。

### 邀請代碼

此值預計是一個 Discord 邀請代碼。

> 您可以只貼 `https://discord.gg/` 後面的部分來防止 Discord 建立一個預覽。

### 使用者

此值預計是一位 Discord 使用者。您可以使用以下任何一種方式來提供一位使用者：

- 提及使用者： `@Valandur`
- 使用他們的 ID ： `102785693046026240`
- 使用他們的名稱： `Valandur`
- 使用他們的名稱和識別碼： `Valandur#3581`
使用引號如果他們的名稱有空格： `"Valandur with a space"`

### 身分組

此值預計是一個 Discord 身分組。您可以使用以下任何一種方式來提供一個身分組：

- 提及身分組： `@Admin`
- 使用 ID ： `102785693046026240`
- 使用名稱： `Admin`
- 使用引號如果名稱有空格： `"Admin with a space"`

### 頻道

此值預計是一個 Discord 頻道。您可以使用以下任何一種方式來提供一個頻道：

- 提及頻道： `#general`
- 使用 ID： `409846838129197057`
- 使用名稱： `general`
- 使用引號如果名稱有空格： `"general with a space"`

### 指令

此值預計是此機器人的一個指令。您可以使用以下任何一種方式來提供一個指令：

- 使用指令名稱： `invites`
- 使用指令別名： `p`

### 文字

此值預計是文字。您可以使用引號（"引號文字"）如果文字有空格。

> 如果文字是最後一個值您就不需使用引號。

### 日期

此值預計是日期。您可以使用各種不同的格式，但是我們建議： `西元年-月份-日期`

### 期間

此值預計是一段期間。支援以下類型的期間：

- 秒： `s` （ `5s` = 5 秒）
- 分： `min` （ `3min` = 3 分）
- 時： `h` （ `4h` = 4 時）
- 天： `d` （ `2d` = 2 天）
- 週： `w` （ `1w` = 1 週）
- 月： `mo` （ `6mo` = 6 月）
- 年： `y` （ `10y` = 10 年）

## Overview

### Invites

| Command | Description | Usage |
|---|---|---|
| [addInvites](#addInvites) | 新增 / 移除一位成員的邀請數量。 | !addInvites \<user\> \<amount\> [reason]  |
| [clearInvites](#clearInvites) | 清除伺服器 / 一個使用者的邀請數量。 | !clearInvites [-d value\|--date=value] [-cb\|--clearBonus] [user]  |
| [createInvite](#createInvite) | 建立獨特的邀請代碼。 | !createInvite \<name\> [channel]  |
| [info](#info) | 顯示一位指定成員的資訊。 | !info \<user\> [details] [page]  |
| [inviteCodes](#inviteCodes) | 您所有的邀請代碼列表 | !inviteCodes  |
| [inviteDetails](#inviteDetails) | 顯示邀請的詳細資訊。 | !inviteDetails [user]  |
| [invites](#invites) | 顯示個人邀請數量。 | !invites [user]  |
| [leaderboard](#leaderboard) | 顯示最多邀請數量的成員。 | !leaderboard [page]  |
| [removeInvites](#removeInvites) | 移除一位使用者的指定邀請數量。 | !removeInvites \<user\> \<amount\> [reason]  |
| [restoreInvites](#restoreInvites) | 復原所有先前清除的邀請數量。 | !restoreInvites [user]  |
| [subtractFakes](#subtractFakes) | 移除所有使用者的假邀請數量。 | !subtractFakes  |
| [subtractLeaves](#subtractLeaves) | 移除所有使用者的離開邀請數量 | !subtractLeaves  |

### Ranks

| Command | Description | Usage |
|---|---|---|
| [addRank](#addRank) | 新增一個新的等級。 | !addRank \<role\> \<invites\> [info]  |
| [fixRanks](#fixRanks) | 刪除已刪除身分組的等級。 | !fixRanks  |
| [ranks](#ranks) | 顯示所有的等級。 | !ranks [page]  |
| [removeRank](#removeRank) | 移除一個等級。 | !removeRank \<rank\>  |

### Config

| Command | Description | Usage |
|---|---|---|
| [botConfig](#botConfig) | 顯示和更改機器人的設置選項。 | !botConfig [key] [value]  |
| [config](#config) | 顯示和更改伺服器的設置選項。 | !config [key] [value]  |
| [interactiveConfig](#interactiveConfig) | 互動式設置選項 | !interactiveConfig  |
| [inviteCodeConfig](#inviteCodeConfig) | 顯示和更改伺服器的邀請代碼設置選項。 | !inviteCodeConfig [key] [inviteCode] [value]  |
| [memberConfig](#memberConfig) | 顯示和更改伺服器的成員設置選項。 | !memberConfig [key] [user] [value]  |
| [permissions](#permissions) | 設置使用指令的權限。 | !permissions [cmd] [role]  |

### Info

| Command | Description | Usage |
|---|---|---|
| [botInfo](#botInfo) | 獲取關於機器人的一般資訊。 | !botInfo  |
| [credits](#credits) | 顯示開發團隊和貢獻開發人員。 | !credits  |
| [getBot](#getBot) | 機器人的邀請連結。 | !getBot  |
| [help](#help) | 顯示協助資訊。 | !help [command]  |
| [members](#members) | 顯示伺服器目前的成員數。 | !members  |
| [ping](#ping) | 檢測機器人延遲 | !ping  |
| [prefix](#prefix) | 顯示機器人目前的指令前綴。 | !prefix  |
| [setup](#setup) | 協助設定機器人和檢查問題（例如：缺少的權限） | !setup  |
| [support](#support) | 獲取我們的支援伺服器邀請連結。 | !support  |

### Premium

| Command | Description | Usage |
|---|---|---|
| [export](#export) | 輸出 InviteManager 的資料庫到 csv 表格。 | !export \<type\>  |
| [premium](#premium) | InviteManager 高級版的資訊。 | !premium [action]  |
| [tryPremium](#tryPremium) | 在有限的期間內免費試用 InviteManager 高級版。 | !tryPremium  |

### Moderation

| Command | Description | Usage |
|---|---|---|
| [ban](#ban) | 從伺服器停權一位成員。 | !ban [-d value\|--deleteMessageDays=value] \<user\> [reason]  |
| [caseDelete](#caseDelete) | 刪除一個指定案件。 | !caseDelete \<caseNumber\> [reason]  |
| [caseView](#caseView) | 檢視一個指定案件的資訊。 | !caseView \<caseNumber\>  |
| [check](#check) | 檢查使用者的違規事項和懲罰歷史記錄。 | !check \<user\>  |
| [clean](#clean) | 清除一個頻道中數個類型的訊息。 | !clean \<type\> [numberOfMessages]  |
| [cleanShort](#cleanShort) | 清除短訊息 | !cleanShort \<maxTextLength\> [numberOfMessages]  |
| [cleanText](#cleanText) | 刪除有關鍵字的訊息。 | !cleanText \<text\> [numberOfMessages]  |
| [kick](#kick) | 從伺服器踢出一位成員。 | !kick \<member\> [reason]  |
| [lockdown](#lockdown) | 封鎖一個指定頻道（防止特殊身分組以外的任何人發送訊息） | !lockdown [-t value\|--timeout=value] [channel]  |
| [mute](#mute) | 靜音一位使用者 | !mute [-d value\|--duration=value] \<user\> [reason]  |
| [punishmentConfig](#punishmentConfig) | 設置當收到一定數量記點時的懲罰。 | !punishmentConfig [punishment] [strikes] [args]  |
| [purge](#purge) | 在一個頻道中清除訊息。 | !purge \<quantity\> [user]  |
| [purgeUntil](#purgeUntil) | 在一個頻道中刪除一則指定訊息之後的所有訊息。 | !purgeUntil \<messageID\>  |
| [softBan](#softBan) | 從伺服器停權一位成員然後自動解除停權。 | !softBan [-d value\|--deleteMessageDays=value] \<user\> [reason]  |
| [strike](#strike) | 新增一位使用者的記點 | !strike \<member\> \<type\> \<amount\>  |
| [strikeConfig](#strikeConfig) | 設置各種不同的違規事項所收到的記點。 | !strikeConfig [violation] [strikes]  |
| [unban](#unban) | 解除停權一位使用者 | !unban \<user\> [reason]  |
| [unhoist](#unhoist) | 在所有名稱是特殊字元開頭的成員前面新增一個字元，所以他們會顯示在成員列表的最後。 | !unhoist  |
| [unmute](#unmute) | 解除靜音一位使用者 | !unmute \<user\>  |
| [warn](#warn) | 警告一位成員。 | !warn \<member\> [reason]  |

### Music

| Command | Description | Usage |
|---|---|---|
| [disconnect](#disconnect) | 從目前的語音頻道中斷連接機器人。 | !disconnect  |
| [lyrics](#lyrics) | 顯示目前正在播放歌曲的歌詞。 | !lyrics [-l\|--live]  |
| [mashup](#mashup) | 建立 2 首歌曲的混搭。 | !mashup \<videos\>  |
| [nowPlaying](#nowPlaying) | 顯示目前正在播放歌曲的資訊 | !nowPlaying [-p\|--pin]  |
| [pause](#pause) | 暫停目前的歌曲。 | !pause  |
| [play](#play) | 如果列表是空的會播放歌曲，否則它將會新增歌曲到列表的最後。 | !play [-p value\|--platform=value] [-n\|--next] \<link\>  |
| [queue](#queue) | 顯示列表裡的歌曲。 | !queue  |
| [repeat](#repeat) | 設定重複播放的歌曲。 | !repeat  |
| [resume](#resume) | 恢復播放目前的歌曲。 | !resume  |
| [rewind](#rewind) | 倒帶歌曲然後從頭開始。 | !rewind  |
| [search](#search) | 搜尋字詞然後讓您從結果中選擇一個。 | !search [-p value\|--platform=value] \<search\>  |
| [seek](#seek) | 跳過歌曲的指定部分。 | !seek [duration]  |
| [skip](#skip) | 跳過目前的歌曲然後播放列表裡的下一首歌曲。 | !skip [amount]  |
| [volume](#volume) | 如果有輸入值會設定音量，或是顯示目前的音量。 | !volume [volume]  |

### Other

| Command | Description | Usage |
|---|---|---|
| [graph](#graph) | 顯示伺服器各種不同的統計資訊圖表。 | !graph \<type\> [from] [to]  |

<a name='addInvites'></a>

---

## !addInvites

新增 / 移除一位成員的邀請數量。

### Usage

```text
!addInvites <user> <amount> [reason] 
```

### Aliases

- `!add-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 使用者將收到 / 失去獎勵邀請數量。|  |
| amount | [數字](#數字) | Yes | 將新增 / 移除使用者的邀請數量。使用負(-)數來減少邀請數量。|  |
| reason | [文字](#文字) | No | 新增 / 移除邀請數量的原因。|  |

### Examples

```text
!addInvites @User 5
```
  
```text
!addInvites "Name with space" -30 Removed for cheating
```


<a name='addRank'></a>

---

## !addRank

新增一個新的等級。

### Usage

```text
!addRank <role> <invites> [info] 
```

### Aliases

- `!add-rank`
- `!set-rank`
- `!setrank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| role | [身分組](#身分組) | Yes | 當達到等級時使用者將收到的身分組。|  |
| invites | [數字](#數字) | Yes | 需要達到等級的邀請數量。|  |
| info | [文字](#文字) | No | 使用者將看見的敘述，所以他們會更了解這個等級。|  |

### Examples

```text
!addRank @Role 5
```
  
```text
!addRank "Role with space" 10 Wow, already 10 people!
```


<a name='ban'></a>

---

## !ban

從伺服器停權一位成員。

### Usage

```text
!ban [-d value|--deleteMessageDays=value] <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 被停權的使用者。|  |
| reason | [文字](#文字) | No | 為甚麼使用者被停權。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;deleteMessageDays | &#x2011;d | [數字](#數字) | 如果指定時間將刪除被停權成員多少天以內的訊息。 |

### Examples



<a name='botConfig'></a>

---

## !botConfig

顯示和更改機器人的設置選項。

### Usage

```text
!botConfig [key] [value] 
```

### Aliases

- `!bot-config`
- `!botsetting`
- `!bot-setting`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [列舉](#列舉) | No | 您想要顯示 / 更改的機器人設置選項。| 使用以下其中一個值： `activityEnabled`, `activityMessage`, `activityStatus`, `activityType`, `activityUrl`, `embedDefaultColor` |
| value | [值](#值) | No | 新設定的值。|  |

### Examples

```text
!botConfig
```


<a name='botInfo'></a>

---

## !botInfo

獲取關於機器人的一般資訊。

### Usage

```text
!botInfo 
```

### Aliases

- `!bot-info`

### Examples

```text
!botInfo
```


<a name='caseDelete'></a>

---

## !caseDelete

刪除一個指定案件。

### Usage

```text
!caseDelete <caseNumber> [reason] 
```

### Aliases

- `!case-delete`
- `!deletecase`
- `!delete-case`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| caseNumber | [數字](#數字) | Yes | 案件編號|  |
| reason | [文字](#文字) | No | 移除此案件的原因。|  |

### Examples

```text
!caseDelete 5434 User apologized
```


<a name='caseView'></a>

---

## !caseView

檢視一個指定案件的資訊。

### Usage

```text
!caseView <caseNumber> 
```

### Aliases

- `!case-view`
- `!viewcase`
- `!view-case`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| caseNumber | [數字](#數字) | Yes | 案件編號|  |

### Examples

```text
!caseView 5434
```


<a name='check'></a>

---

## !check

檢查使用者的違規事項和懲罰歷史記錄。

### Usage

```text
!check <user> 
```

### Aliases

- `!history`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 被檢查的使用者。|  |

### Examples

```text
!check @User
```
  
```text
!check "User with space"
```


<a name='clean'></a>

---

## !clean

清除一個頻道中數個類型的訊息。

### Usage

```text
!clean <type> [numberOfMessages] 
```

### Aliases

- `!clear`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [列舉](#列舉) | Yes | 將被刪除的訊息類型。| 使用以下其中一個值： `bots`, `embeds`, `emojis`, `images`, `links`, `mentions`, `reacted`, `reactions` |
| numberOfMessages | [數字](#數字) | No | 被搜尋的訊息數量。|  |

### Examples



<a name='cleanShort'></a>

---

## !cleanShort

清除短訊息

### Usage

```text
!cleanShort <maxTextLength> [numberOfMessages] 
```

### Aliases

- `!clean-short`
- `!clearshort`
- `!clear-short`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| maxTextLength | [數字](#數字) | Yes | 將刪除所有短於此的訊息。|  |
| numberOfMessages | [數字](#數字) | No | 將被搜尋的訊息數量。|  |

### Examples



<a name='cleanText'></a>

---

## !cleanText

刪除有關鍵字的訊息。

### Usage

```text
!cleanText <text> [numberOfMessages] 
```

### Aliases

- `!clean-text`
- `!cleartext`
- `!clear-text`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| text | [文字](#文字) | Yes | 將刪除有這個字的訊息。|  |
| numberOfMessages | [數字](#數字) | No | 將被搜尋的訊息數量。|  |

### Examples



<a name='clearInvites'></a>

---

## !clearInvites

清除伺服器 / 一個使用者的邀請數量。

### Usage

```text
!clearInvites [-d value|--date=value] [-cb|--clearBonus] [user] 
```

### Aliases

- `!clear-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | No | 清除使用者所有的邀請數量。如果省略則清除所有的使用者。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;date | &#x2011;d | [日期](#日期) | 應該開始計算邀請數量的日期。預設值是今天。 |
| &#x2011;&#x2011;clearBonus | &#x2011;cb | [布林值](#布林值) | 新增此標記來清除獎勵邀請數量。否則獎勵邀數量不會改變。 |

### Examples

```text
!clearInvites
```
  
```text
!clearInvites @User
```
  
```text
!clearInvites -cb "User with space"
```


<a name='config'></a>

---

## !config

顯示和更改伺服器的設置選項。

### Usage

```text
!config [key] [value] 
```

### Aliases

- `!c`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [列舉](#列舉) | No | 您想要顯示 / 更改的設置選項。| 使用以下其中一個值： `announcementVoice`, `announceNextSong`, `autoModAllCapsEnabled`, `autoModAllCapsMinCharacters`, `autoModAllCapsPercentageCaps`, `autoModDeleteBotMessage`, `autoModDeleteBotMessageTimeoutInSeconds`, `autoModDisabledForOldMembers`, `autoModDisabledForOldMembersThreshold`, `autoModDuplicateTextEnabled`, `autoModDuplicateTextTimeframeInSeconds`, `autoModEmojisEnabled`, `autoModEmojisMaxNumberOfEmojis`, `autoModEnabled`, `autoModHoistEnabled`, `autoModIgnoredChannels`, `autoModIgnoredRoles`, `autoModInvitesEnabled`, `autoModLinksBlacklist`, `autoModLinksEnabled`, `autoModLinksFollowRedirects`, `autoModLinksWhitelist`, `autoModLogEnabled`, `autoModMentionRolesEnabled`, `autoModMentionRolesMaxNumberOfMentions`, `autoModMentionUsersEnabled`, `autoModMentionUsersMaxNumberOfMentions`, `autoModModeratedChannels`, `autoModModeratedRoles`, `autoModQuickMessagesEnabled`, `autoModQuickMessagesNumberOfMessages`, `autoModQuickMessagesTimeframeInSeconds`, `autoModWordsBlacklist`, `autoModWordsEnabled`, `autoSubtractFakes`, `autoSubtractLeaves`, `autoSubtractLeaveThreshold`, `captchaVerificationFailedMessage`, `captchaVerificationLogEnabled`, `captchaVerificationOnJoin`, `captchaVerificationSuccessMessage`, `captchaVerificationTimeout`, `captchaVerificationWelcomeMessage`, `channels`, `defaultMusicPlatform`, `disabledMusicPlatforms`, `fadeMusicEndDelay`, `fadeMusicOnTalk`, `getUpdates`, `hideLeftMembersFromLeaderboard`, `ignoredChannels`, `joinMessage`, `joinMessageChannel`, `joinMessageVanity`, `joinRoles`, `lang`, `leaderboardStyle`, `leaveMessage`, `leaveMessageChannel`, `leaveMessageVanity`, `logChannel`, `modLogChannel`, `modPunishmentBanDeleteMessage`, `modPunishmentKickDeleteMessage`, `modPunishmentMuteDeleteMessage`, `modPunishmentSoftbanDeleteMessage`, `modPunishmentWarnDeleteMessage`, `musicVolume`, `mutedRole`, `prefix`, `rankAnnouncementChannel`, `rankAnnouncementMessage`, `rankAssignmentStyle` |
| value | [值](#值) | No | 設置選項的新值。|  |

### Examples

```text
!config
```


<a name='createInvite'></a>

---

## !createInvite

建立獨特的邀請代碼。

### Usage

```text
!createInvite <name> [channel] 
```

### Aliases

- `!create-invite`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| name | [文字](#文字) | Yes | 邀請代碼的名字。|  |
| channel | [頻道](#頻道) | No | 已在頻道建立邀請代碼。使用目前的頻道作為預設值。|  |

### Examples

```text
!createInvite reddit
```
  
```text
!createInvite website #welcome
```


<a name='credits'></a>

---

## !credits

顯示開發團隊和貢獻開發人員。

### Usage

```text
!credits 
```

### Examples

```text
!credits
```


<a name='disconnect'></a>

---

## !disconnect

從目前的語音頻道中斷連接機器人。

### Usage

```text
!disconnect 
```

### Aliases

- `!dc`

### Examples

```text
!disconnect
```


<a name='export'></a>

---

## !export

輸出 InviteManager 的資料庫到 csv 表格。

### Usage

```text
!export <type> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [列舉](#列舉) | Yes | 您想要的輸出類型。| 使用以下其中一個值： `leaderboard` |

### Examples

```text
!export leaderboard
```


<a name='fixRanks'></a>

---

## !fixRanks

刪除已刪除身分組的等級。

### Usage

```text
!fixRanks 
```

### Aliases

- `!fix-ranks`

### Examples

```text
!fixRanks
```


<a name='getBot'></a>

---

## !getBot

機器人的邀請連結。

### Usage

```text
!getBot 
```

### Aliases

- `!get-bot`
- `!invite-bot`
- `!invitebot`

### Examples

```text
!getBot
```


<a name='graph'></a>

---

## !graph

顯示伺服器各種不同的統計資訊圖表。

### Usage

```text
!graph <type> [from] [to] 
```

### Aliases

- `!g`
- `!chart`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| type | [列舉](#列舉) | Yes | 圖表的顯示類型。| 使用以下其中一個值： `joins`, `joinsAndLeaves`, `leaves` |
| from | [日期](#日期) | No | 圖表的開始日期|  |
| to | [日期](#日期) | No | 圖表的最後日期|  |

### Examples

```text
!graph joins
```
  
```text
!graph leaves
```
  
```text
!graph usage
```


<a name='help'></a>

---

## !help

顯示協助資訊。

### Usage

```text
!help [command] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| command | [指令](#指令) | No | 獲取詳細資訊的指令。| 使用以下其中一個值： `addInvites`, `addRank`, `ban`, `botConfig`, `botInfo`, `caseDelete`, `caseView`, `check`, `clean`, `cleanShort`, `cleanText`, `clearInvites`, `config`, `createInvite`, `credits`, `disconnect`, `export`, `fixRanks`, `getBot`, `graph`, `help`, `info`, `interactiveConfig`, `inviteCodeConfig`, `inviteCodes`, `inviteDetails`, `invites`, `kick`, `leaderboard`, `lockdown`, `lyrics`, `mashup`, `memberConfig`, `members`, `mute`, `nowPlaying`, `pause`, `permissions`, `ping`, `play`, `prefix`, `premium`, `punishmentConfig`, `purge`, `purgeUntil`, `queue`, `ranks`, `removeInvites`, `removeRank`, `repeat`, `restoreInvites`, `resume`, `rewind`, `search`, `seek`, `setup`, `skip`, `softBan`, `strike`, `strikeConfig`, `subtractFakes`, `subtractLeaves`, `support`, `tryPremium`, `unban`, `unhoist`, `unmute`, `volume`, `warn` |

### Examples

```text
!help
```
  
```text
!help addRank
```


<a name='info'></a>

---

## !info

顯示一位指定成員的資訊。

### Usage

```text
!info <user> [details] [page] 
```

### Aliases

- `!showinfo`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 您想要顯示詳細資訊的使用者。|  |
| details | [列舉](#列舉) | No | 請求一位指定成員的詳細資訊。| 使用以下其中一個值： `bonus`, `members` |
| page | [數字](#數字) | No | 您想要顯示詳細資訊的頁面。您也可以使用反應來操控。|  |

### Examples

```text
!info @User
```
  
```text
!info "User with space"
```
  
```text
!info @User members
```
  
```text
!info @User bonus
```
  
```text
!info @User members 4
```


<a name='interactiveConfig'></a>

---

## !interactiveConfig

互動式設置選項

### Usage

```text
!interactiveConfig 
```

### Aliases

- `!ic`

### Examples

```text
!interactiveConfig
```


<a name='inviteCodeConfig'></a>

---

## !inviteCodeConfig

顯示和更改伺服器的邀請代碼設置選項。

### Usage

```text
!inviteCodeConfig [key] [inviteCode] [value] 
```

### Aliases

- `!invite-code-config`
- `!icc`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [列舉](#列舉) | No | 您想要顯示 / 更改的設置選項。| 使用以下其中一個值： `name`, `roles` |
| inviteCode | [邀請代碼](#邀請代碼) | No | 您想要更改配置選項的邀請代碼。|  |
| value | [值](#值) | No | 設置選項的新值。|  |

### Examples

```text
!inviteCodeConfig
```


<a name='inviteCodes'></a>

---

## !inviteCodes

您所有的邀請代碼列表

### Usage

```text
!inviteCodes 
```

### Aliases

- `!invitecode`
- `!invite-code`
- `!invite-codes`
- `!getinvitecode`
- `!get-invite-code`
- `!get-invite-codes`
- `!showinvitecode`
- `!show-invite-code`

### Examples

```text
!inviteCodes
```


<a name='inviteDetails'></a>

---

## !inviteDetails

顯示邀請的詳細資訊。

### Usage

```text
!inviteDetails [user] 
```

### Aliases

- `!invite-details`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | No | 您想要顯示詳細邀請資訊的使用者。|  |

### Examples

```text
!inviteDetails
```
  
```text
!inviteDetails @User
```
  
```text
!inviteDetails "User with space"
```


<a name='invites'></a>

---

## !invites

顯示個人邀請數量。

### Usage

```text
!invites [user] 
```

### Aliases

- `!invite`
- `!rank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | No | 您想要顯示邀請資訊的使用者。|  |

### Examples

```text
!invites
```
  
```text
!invites @User
```
  
```text
!invites "User with space"
```


<a name='kick'></a>

---

## !kick

從伺服器踢出一位成員。

### Usage

```text
!kick <member> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [成員](#成員) | Yes | 被踢出的成員。|  |
| reason | [文字](#文字) | No | 為甚麼踢出成員。|  |

### Examples



<a name='leaderboard'></a>

---

## !leaderboard

顯示最多邀請數量的成員。

### Usage

```text
!leaderboard [page] 
```

### Aliases

- `!top`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| page | [數字](#數字) | No | 排行榜的頁數。|  |

### Examples

```text
!leaderboard
```
  
```text
!leaderboard 1mo
```
  
```text
!leaderboard 30d 6
```


<a name='lockdown'></a>

---

## !lockdown

封鎖一個指定頻道（防止特殊身分組以外的任何人發送訊息）

### Usage

```text
!lockdown [-t value|--timeout=value] [channel] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| channel | [頻道](#頻道) | No | 您想要封鎖的頻道。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;timeout | &#x2011;t | [期間](#期間) | 自動結束封鎖的延遲時間。再執行指令一次來手動結束封鎖。 |

### Examples

```text
!lockdown
```


<a name='lyrics'></a>

---

## !lyrics

顯示目前正在播放歌曲的歌詞。

### Usage

```text
!lyrics [-l|--live] 
```

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;live | &#x2011;l | [布林值](#布林值) | 如果設定，歌詞將會與歌曲目前的時間同步。 |

### Examples

```text
!lyrics
```


<a name='mashup'></a>

---

## !mashup

建立 2 首歌曲的混搭。

### Usage

```text
!mashup <videos> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| videos | [文字](#文字) | Yes | 應該被混搭在一起的影片。|  |

### Examples



<a name='memberConfig'></a>

---

## !memberConfig

顯示和更改伺服器的成員設置選項。

### Usage

```text
!memberConfig [key] [user] [value] 
```

### Aliases

- `!member-config`
- `!memconf`
- `!mc`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| key | [列舉](#列舉) | No | 您想要顯示 / 更改的成員設置選項。| 使用以下其中一個值： `hideFromLeaderboard` |
| user | [使用者](#使用者) | No | 顯示 / 更改配置選項的成員。|  |
| value | [值](#值) | No | 設置選項的新值。|  |

### Examples

```text
!memberConfig
```


<a name='members'></a>

---

## !members

顯示伺服器目前的成員數。

### Usage

```text
!members 
```

### Aliases

- `!member`
- `!memberscount`

### Examples

```text
!members
```


<a name='mute'></a>

---

## !mute

靜音一位使用者

### Usage

```text
!mute [-d value|--duration=value] <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [成員](#成員) | Yes | 應該被靜音的使用者。|  |
| reason | [文字](#文字) | No | 靜音此使用者的原因。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;duration | &#x2011;d | [期間](#期間) | 靜音使用者的期間 |

### Examples



<a name='nowPlaying'></a>

---

## !nowPlaying

顯示目前正在播放歌曲的資訊

### Usage

```text
!nowPlaying [-p|--pin] 
```

### Aliases

- `!np`
- `!now-playing`

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;pin | &#x2011;p | [布林值](#布林值) | 釘選正在播放的訊息然後每一首新歌曲播放時自動更新。 |

### Examples

```text
!nowPlaying
```


<a name='pause'></a>

---

## !pause

暫停目前的歌曲。

### Usage

```text
!pause 
```

### Aliases

- `!stop`

### Examples

```text
!pause
```


<a name='permissions'></a>

---

## !permissions

設置使用指令的權限。

### Usage

```text
!permissions [cmd] [role] 
```

### Aliases

- `!perms`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| cmd | [指令](#指令) | No | 要設置權限的指令。| 使用以下其中一個值： `addInvites`, `addRank`, `ban`, `botConfig`, `botInfo`, `caseDelete`, `caseView`, `check`, `clean`, `cleanShort`, `cleanText`, `clearInvites`, `config`, `createInvite`, `credits`, `disconnect`, `export`, `fixRanks`, `getBot`, `graph`, `help`, `info`, `interactiveConfig`, `inviteCodeConfig`, `inviteCodes`, `inviteDetails`, `invites`, `kick`, `leaderboard`, `lockdown`, `lyrics`, `mashup`, `memberConfig`, `members`, `mute`, `nowPlaying`, `pause`, `permissions`, `ping`, `play`, `prefix`, `premium`, `punishmentConfig`, `purge`, `purgeUntil`, `queue`, `ranks`, `removeInvites`, `removeRank`, `repeat`, `restoreInvites`, `resume`, `rewind`, `search`, `seek`, `setup`, `skip`, `softBan`, `strike`, `strikeConfig`, `subtractFakes`, `subtractLeaves`, `support`, `tryPremium`, `unban`, `unhoist`, `unmute`, `volume`, `warn` |
| role | [身分組](#身分組) | No | 應該被授予或拒絕訪問指令的身分組。|  |

### Examples

```text
!permissions
```


<a name='ping'></a>

---

## !ping

檢測機器人延遲

### Usage

```text
!ping 
```

### Examples

```text
!ping
```


<a name='play'></a>

---

## !play

如果列表是空的會播放歌曲，否則它將會新增歌曲到列表的最後。

### Usage

```text
!play [-p value|--platform=value] [-n|--next] <link> 
```

### Aliases

- `!p`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| link | [文字](#文字) | Yes | 一首指定歌曲或一個搜尋字詞的連結。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;platform | &#x2011;p | [列舉](#列舉) | 選擇您想要播放歌曲的平臺。 |
| &#x2011;&#x2011;next | &#x2011;n | [布林值](#布林值) | 如果設定，它將會在下一首播放此歌曲而不是新增它到列表的最後。 |

### Examples



<a name='prefix'></a>

---

## !prefix

顯示機器人目前的指令前綴。

### Usage

```text
!prefix 
```

### Examples

```text
!prefix
```


<a name='premium'></a>

---

## !premium

InviteManager 高級版的資訊。

### Usage

```text
!premium [action] 
```

### Aliases

- `!patreon`
- `!donate`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| action | [列舉](#列舉) | No | 要執行的動作。無高級版資訊。 `check` 來檢查您的高級版狀態。 `activate` 在此伺服器激活您的高級版。| 使用以下其中一個值： `Activate`, `Check`, `Deactivate` |

### Examples

```text
!premium
```
  
```text
!premium check
```
  
```text
!premium activate
```
  
```text
!premium deactivate
```


<a name='punishmentConfig'></a>

---

## !punishmentConfig

設置當收到一定數量記點時的懲罰。

### Usage

```text
!punishmentConfig [punishment] [strikes] [args] 
```

### Aliases

- `!punishment-config`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| punishment | [列舉](#列舉) | No | 要使用的懲罰類型。| 使用以下其中一個值： `ban`, `kick`, `mute`, `softban`, `warn` |
| strikes | [數字](#數字) | No | 此懲罰要使用的記點數量。|  |
| args | [文字](#文字) | No | 附加於懲罰的值。|  |

### Examples

```text
!punishmentConfig
```


<a name='purge'></a>

---

## !purge

在一個頻道中清除訊息。

### Usage

```text
!purge <quantity> [user] 
```

### Aliases

- `!prune`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| quantity | [數字](#數字) | Yes | 多少則訊息應該被刪除。|  |
| user | [使用者](#使用者) | No | 被刪除訊息的使用者。|  |

### Examples



<a name='purgeUntil'></a>

---

## !purgeUntil

在一個頻道中刪除一則指定訊息之後的所有訊息。

### Usage

```text
!purgeUntil <messageID> 
```

### Aliases

- `!purge-until`
- `!prune-until`
- `!pruneu`
- `!purgeu`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| messageID | [文字](#文字) | Yes | 要被刪除的最後一則訊息 ID 。|  |

### Examples



<a name='queue'></a>

---

## !queue

顯示列表裡的歌曲。

### Usage

```text
!queue 
```

### Aliases

- `!q`

### Examples

```text
!queue
```


<a name='ranks'></a>

---

## !ranks

顯示所有的等級。

### Usage

```text
!ranks [page] 
```

### Aliases

- `!show-ranks`
- `!showranks`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| page | [數字](#數字) | No | 您想要顯示等級列表的頁數。|  |

### Examples

```text
!ranks
```


<a name='removeInvites'></a>

---

## !removeInvites

移除一位使用者的指定邀請數量。

### Usage

```text
!removeInvites <user> <amount> [reason] 
```

### Aliases

- `!remove-invites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 要被移除邀請數量的使用者。|  |
| amount | [數字](#數字) | Yes | 您想要移除的邀請數量。|  |
| reason | [文字](#文字) | No | 移除邀請數量的原因。|  |

### Examples

```text
!removeInvites @User 5
```
  
```text
!removeInvites "User with space" 23 Removed for cheating
```
  
```text
!removeInvites @User -6 Added for apologizing
```


<a name='removeRank'></a>

---

## !removeRank

移除一個等級。

### Usage

```text
!removeRank <rank> 
```

### Aliases

- `!remove-rank`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| rank | [身分組](#身分組) | Yes | 您想要移除等級的身分組。|  |

### Examples

```text
!removeRank @Role
```
  
```text
!removeRank "Role with space"
```


<a name='repeat'></a>

---

## !repeat

設定重複播放的歌曲。

### Usage

```text
!repeat 
```

### Aliases

- `!loop`

### Examples

```text
!repeat
```


<a name='restoreInvites'></a>

---

## !restoreInvites

復原所有先前清除的邀請數量。

### Usage

```text
!restoreInvites [user] 
```

### Aliases

- `!restore-invites`
- `!unclear-invites`
- `!unclearinvites`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | No | 復原使用者所有的邀請數量。如果省略則復原所有的使用者。|  |

### Examples

```text
!restoreInvites
```
  
```text
!restoreInvites @User
```
  
```text
!restoreInvites "User with space"
```


<a name='resume'></a>

---

## !resume

恢復播放目前的歌曲。

### Usage

```text
!resume 
```

### Aliases

- `!start`

### Examples

```text
!resume
```


<a name='rewind'></a>

---

## !rewind

倒帶歌曲然後從頭開始。

### Usage

```text
!rewind 
```

### Aliases

- `!replay`

### Examples

```text
!rewind
```


<a name='search'></a>

---

## !search

搜尋字詞然後讓您從結果中選擇一個。

### Usage

```text
!search [-p value|--platform=value] <search> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| search | [文字](#文字) | Yes | 搜尋字詞|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;platform | &#x2011;p | [列舉](#列舉) | 選擇您想要播放歌曲的平臺。 |

### Examples



<a name='seek'></a>

---

## !seek

跳過歌曲的指定部分。

### Usage

```text
!seek [duration] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| duration | [數字](#數字) | No | 歌曲要跳到的位置（從開始點，以秒計算）。|  |

### Examples

```text
!seek
```


<a name='setup'></a>

---

## !setup

協助設定機器人和檢查問題（例如：缺少的權限）

### Usage

```text
!setup 
```

### Aliases

- `!guide`
- `!test`
- `!testbot`
- `!test-bot`

### Examples

```text
!setup
```


<a name='skip'></a>

---

## !skip

跳過目前的歌曲然後播放列表裡的下一首歌曲。

### Usage

```text
!skip [amount] 
```

### Aliases

- `!next`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| amount | [數字](#數字) | No | 多少首歌曲將被跳過。|  |

### Examples

```text
!skip
```


<a name='softBan'></a>

---

## !softBan

從伺服器停權一位成員然後自動解除停權。

### Usage

```text
!softBan [-d value|--deleteMessageDays=value] <user> [reason] 
```

### Aliases

- `!soft-ban`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [成員](#成員) | Yes | 被停權的使用者。|  |
| reason | [文字](#文字) | No | 為甚麼停權成員。|  |

### Flags

| Flag | Short | Type | Description |
|---|---|---|---|
| &#x2011;&#x2011;deleteMessageDays | &#x2011;d | [數字](#數字) | 刪除此使用者多少天以內的訊息。 |

### Examples



<a name='strike'></a>

---

## !strike

新增一位使用者的記點

### Usage

```text
!strike <member> <type> <amount> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [成員](#成員) | Yes | 收到記點的成員|  |
| type | [列舉](#列舉) | Yes | 違規事項的類型| 使用以下其中一個值： `allCaps`, `duplicateText`, `emojis`, `hoist`, `invites`, `links`, `mentionRoles`, `mentionUsers`, `quickMessages`, `words` |
| amount | [數字](#數字) | Yes | 您想要新增的記點數量|  |

### Examples



<a name='strikeConfig'></a>

---

## !strikeConfig

設置各種不同的違規事項所收到的記點。

### Usage

```text
!strikeConfig [violation] [strikes] 
```

### Aliases

- `!strike-config`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| violation | [列舉](#列舉) | No | 違規事項的類型。| 使用以下其中一個值： `allCaps`, `duplicateText`, `emojis`, `hoist`, `invites`, `links`, `mentionRoles`, `mentionUsers`, `quickMessages`, `words` |
| strikes | [數字](#數字) | No | 記點的數量。|  |

### Examples

```text
!strikeConfig
```


<a name='subtractFakes'></a>

---

## !subtractFakes

移除所有使用者的假邀請數量。

### Usage

```text
!subtractFakes 
```

### Aliases

- `!subtract-fakes`
- `!subfakes`
- `!sf`

### Examples

```text
!subtractFakes
```


<a name='subtractLeaves'></a>

---

## !subtractLeaves

移除所有使用者的離開邀請數量

### Usage

```text
!subtractLeaves 
```

### Aliases

- `!subtract-leaves`
- `!subleaves`
- `!sl`

### Examples

```text
!subtractLeaves
```


<a name='support'></a>

---

## !support

獲取我們的支援伺服器邀請連結。

### Usage

```text
!support 
```

### Examples

```text
!support
```


<a name='tryPremium'></a>

---

## !tryPremium

在有限的期間內免費試用 InviteManager 高級版。

### Usage

```text
!tryPremium 
```

### Aliases

- `!try`
- `!try-premium`

### Examples

```text
!tryPremium
```


<a name='unban'></a>

---

## !unban

解除停權一位使用者

### Usage

```text
!unban <user> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [使用者](#使用者) | Yes | 應該被解除停權的使用者。|  |
| reason | [文字](#文字) | No | 解除停權此使用者的原因。|  |

### Examples



<a name='unhoist'></a>

---

## !unhoist

在所有名稱是特殊字元開頭的成員前面新增一個字元，所以他們會顯示在成員列表的最後。

### Usage

```text
!unhoist 
```

### Aliases

- `!dehoist`

### Examples

```text
!unhoist
```


<a name='unmute'></a>

---

## !unmute

解除靜音一位使用者

### Usage

```text
!unmute <user> 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| user | [成員](#成員) | Yes | 應該被解除靜音的使用者。|  |

### Examples



<a name='volume'></a>

---

## !volume

如果有輸入值會設定音量，或是顯示目前的音量。

### Usage

```text
!volume [volume] 
```

### Aliases

- `!vol`

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| volume | [數字](#數字) | No | 音量將被設定的值。|  |

### Examples

```text
!volume
```


<a name='warn'></a>

---

## !warn

警告一位成員。

### Usage

```text
!warn <member> [reason] 
```

### Arguments

| Argument | Type | Required | Description | Details |
|---|---|---|---|---|
| member | [成員](#成員) | Yes | 被警告的成員。|  |
| reason | [文字](#文字) | No | 為甚麼警告成員。|  |

### Examples



