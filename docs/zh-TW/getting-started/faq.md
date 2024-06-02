# 常見問答

## 我該如何更改機器人的指令前綴？

您可以使用 `!config prefix -` 來更改前綴指令。

如果您不知道目前的前綴指令，則可以使用 `@InviteManager config prefix` 來得知。

## 限制：在機器人加入伺服器以前無法追蹤。

追蹤（誰邀請誰）只會在您邀請機器人後才開始運作。在您邀請了它之後，機器人將持續追蹤所有人的邀請數量，請放心。額外資訊只能在您邀請機器人後開始收集。

## start.faq.patreon.title

start.faq.patreon.description

## 我該如何設定加入和離開訊息？

設定頻道請用

`!config joinMessageChannel #channel`

或

`!config leaveMessageChannel #channel`。

設定完之後，新的加入和離開訊息就會顯示在該頻道。

## 我可以自訂加入和離開訊息嗎？

完全可以！您可以更改的範例如下：

`!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

或

`!config leaveMessage {memberName} **left**; Invited by **{inviterName}**`。

有很多預留參數是可用的。你可以在 [自訂訊息](/zh-TW/modules/invites/custom-messages.md) 頁面找到完整的清單。

## start.faq.bonusinvites.title

start.faq.bonusinvites.description

## start.faq.language.title

start.faq.language.description

## 甚麼是等級？我可以怎麼使用它們？

等級是在人們達到一定的邀請數量時自動指派身分組。舉例來說，如果您有一個身分組叫 `@Beginner` 然後您希望擁有 5 以上邀請數量的人被新增到身分組，您可以新增一個等級如下： `!add-rank @Beginner 5 (如果您需要一個描述)` 。當有人達到 5 個邀請時，他就會自動被新增到身分組！

## 我可以在所有的頻道除了其中一個/一些禁用機器人？

在您不想要機器人回覆的頻道取消機器人的閱讀訊息權限。

## start.faq.premiumbot.title

start.faq.premiumbot.description

## start.faq.leaderboard.title

start.faq.leaderboard.description

## start.faq.clearinvites.title

start.faq.clearinvites.description
