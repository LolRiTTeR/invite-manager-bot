# FAQs

## botのプレフィックスを変更するにはどうすればよいですか？

プレフィックスを変更するには `!config prefix -`を実行します。

現在のプレフィックスがわからない場合は`@InviteManager config prefix` を実行してプレフィックスを確認できます。

## 参加および退出のメッセージを設定するにはどうすればよいですか？

チャンネルを設定するには

`!config joinMessageChannel #channel`

または

`!config leaveMessageChannel #channel`.

を実行すると新しい参加と退出がそのチャンネルに投稿されます。

## 参加と退出メッセージをカスタマイズできますか？

もちろん！ たとえば、次のようにしてメッセージを変更できます

`!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

または

`!config leaveMessage {memberName} **left**; Invited by **{inviterName}**`.

利用可能な多くのプレースホルダーがあります。 完全なリストは'[Custom Messages](/ja/modules/invites/custom-messages.md)' ページで確認できます。

## 'ランク' とは何ですか？どのように使用できますか？

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## 1つまたはいくつかのチャンネルでbotを無効にするにはどうすればよいですか？

botに返信させたくないチャンネルのメッセージの読み取り許可を取り除きます。

## 制限：ボットが参加する前に高度な追跡はありません

高度な追跡（誰が誰を招待したか）は、botを招待した後にのみ機能します。 botは、招待しても全員の招待がカウントされることを引き続き認識します。心配しないでください。 追加情報のみが欠落しており、ボットを招待した後に参加したメンバーについてのみ収集できます。
