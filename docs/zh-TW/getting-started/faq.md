# 常見問題

## 我如何更改機器人的前綴指令？

您可以用`!config prefix -`來更改前綴指令。

如果您不知道目前的前綴指令，您可以用`@InviteManager config prefix`來得知前綴指令。

## 我如何設定加入和離開訊息？

設定頻道用

`!config joinMessageChannel #channel`

或

`!config leaveMessageChannel #channel`。

設定完之後，新的加入和離開訊息將被顯示在該頻道。

## 我可以製作加入和離開訊息嗎？

絕對可以！你可以更改訊息操作範例

`!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

或

`!config leaveMessage {memberName} **left**; Invited by **{inviterName}**`。

有很多預留字是可用的。你可以看到完整的清單在'[自定義訊息](/zh-TW/modules/invites/custom-messages.md)'頁面。

## 甚麼是「等級」然後我要如何使用它們？

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## 我要如何禁用機器人在所有的頻道但可以使用在其中一個/一些？

取消機器人的閱讀訊息權限在那些您不想要機器人回應的頻道。

## 限制：沒有高級追蹤在機器人加入以前。

高級追蹤（誰邀請誰）只運作在當您邀請機器人之後。機器人將持續知道所有人的邀請數量在您邀請了它之後，不必擔心。只有額外訊息的缺失而且加入的成員可以被收集當您邀請機器人之後。
