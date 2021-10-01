# 記點

## 甚麼是記點？

使用者違反伺服器規定時會被記點。每次記點時，機器人會透過私訊發送通知，告知記點次數及原因。當使用者的記點達到一定次數時，將受到**懲罰**。

## 甚麼是違規事項？

您可以在您的伺服器選擇啟用或禁用違規事項。可自訂的違規事項如下：

- [邀請連結](strikes.md#invites)
- [一般連結](strikes.md#links)
- [特殊文字](strikes.md#words)
- [大量大寫](strikes.md#allcaps)
- [拷貝訊息](strikes.md#duplicatetext)
- [洗頻訊息](strikes.md#quickmessages)
- [提及使用者](strikes.md#mentionusers)
- [提及身分組](strikes.md#mentionroles)
- [表情符號](strikes.md#emojis)

您必須自訂記點次數如果有人違反上述規定。您可以使用 `strikeconfig` 指令：

```text
!strikeconfig <violationType> <numberOfStrikes>
```

舉例來說，如果您希望使用者違反 `邀請連結` 時被記點 `2` 次，您可以執行以下指令：

```text
!strikeconfig invites 2
```

直接使用指令可確認目前的設定：

```text
!strikeconfig
```

## 違規事項的詳細資訊

### invites

當使用者發送另一個伺服器的邀請連結時就會觸犯此規定。

例如：

`!strikeconfig invites 1`

刪除違規事項則請用：

`!strikeconfig invites 0`

**設置選項：**

- [自動審核邀請連結啟用](../../reference/settings?id=enabled-2)

### links

當使用者發送一般連結時就會觸犯此規定。

例如：

`!strikeconfig links 1`

刪除違規事項則請用：

`!strikeconfig links 0`

**設置選項：**

- [自動審核一般連結啟用](../../reference/settings?id=enabled-3)
- [自動審核一般連結白名單](../../reference/settings?id=whitelist)
- [自動審核一般連結黑名單](../../reference/settings?id=blacklist)
- [自動審核重新導向連結](../../reference/settings?id=follow-redirects)

### words

當使用者發送特殊文字時就會觸犯此規定。

例如：

`!strikeconfig words 1`

刪除違規事項則請用：

`!strikeconfig words 0`

**設置選項：**

- [自動審核特殊文字啟用](../../reference/settings?id=enabled-4)
- [自動審核特殊文字黑名單](../../reference/settings?id=blacklist-1)

### allCaps

當使用者發送大量大寫文字時就會觸犯此規定。

例如：

`!strikeconfig allCaps 1`

刪除違規事項則請用：

`!strikeconfig allCaps 0`

**設置選項：**

- [自動審核大量大寫啟用](../../reference/settings?id=enabled-5)
- [自動審核大量大寫最少字數](../../reference/settings?id=min-characters)
- [自動審核大量大寫百分比](../../reference/settings?id=percentage-caps)

### duplicateText

當使用者多次發送拷貝訊息時就會觸犯此規定。

例如：

`!strikeconfig duplicateText 1`

刪除違規事項則請用：

`!strikeconfig duplicateText 0`

**設置選項：**

- [自動審核拷貝訊息啟用](../../reference/settings?id=enabled-6)
- [自動審核拷貝訊息發送間隔](../../reference/settings?id=timeframe-in-seconds)

### quickMessages

當使用者快速發送洗頻訊息時就會觸犯此規定。

例如：

`!strikeconfig quickMessages 1`

刪除違規事項則請用：

`!strikeconfig quickMessages 0`

**設置選項：**

- [自動審核洗頻訊息啟用](../../reference/settings?id=enabled-7)
- [自動審核洗頻訊息數量](../../reference/settings?id=-of-messages)
- [自動審核洗頻訊息發送間隔](../../reference/settings?id=timeframe-in-seconds-1)

### mentionUsers

當使用者提及多個使用者時就會觸犯此規定。

例如：

`!strikeconfig mentionUsers 1`

刪除違規事項則請用：

`!strikeconfig mentionUsers 0`

**設置選項：**

- [自動審核提及使用者啟用](../../reference/settings?id=enabled-8)
- [自動審核提及使用者數量](../../reference/settings?id=max-of-mentions)

### mentionRoles

當使用者提及多個身分組時就會觸犯此規定。

例如：

`!strikeconfig mentionRoles 1`

刪除違規事項則請用：

`!strikeconfig mentionRoles 0`

**設置選項：**

- [自動審核提及身分組啟用](../../reference/settings?id=enabled-9)
- [自動審核提及身分組數量](../../reference/settings?id=max-of-mentions-1)

### emojis

當使用者發送多個表情符號時就會觸犯此規定。

例如：

`!strikeconfig emojis 1`

刪除違規事項則請用：

`!strikeconfig emojis 0`

**設置選項：**

- [自動審核表情符號啟用](../../reference/settings?id=enabled-10)
- [自動審核表情符號數量](../../reference/settings?id=max-of-emojis)
