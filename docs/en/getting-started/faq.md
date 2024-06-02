# FAQs

## How do I change the prefix of the bot?

You can do `!config prefix -` to change the prefix.

If you don't know your current prefix, you can do `@InviteManager config prefix` to see the prefix.

## Limitation: No advanced tracking before the bot joins

Advanced tracking (who invited who) only works after you have invited the bot. The bot will still know everyones invite count after you invite it, don't worry. Just the additional information is missing and can only be collected for members who join after you invited the bot.

## I've donated on Patreon, how do I receive my perks?

§ {start.faq.patreon.description}

## How do I set join and leave messages?

Set the channel by doing

`!config joinMessageChannel #channel`

or

`!config leaveMessageChannel #channel`.

After doing that, new joins and leaves will be posted to that channel.

## Can I customize the join and leave messages?

Absolutely! You can change the message by doing for example

`!config joinMessage {memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

or

`!config leaveMessage {memberName} **left**; Invited by **{inviterName}**`.

There are many placeholders available. You can see the full list on the '[Custom Messages](/en/modules/invites/custom-messages.md)' page.

## What are bonus invites?

Bonus invites are invites that can be given to members by an admin.

You can either increase or decrease the number of invites.
You can also give a reason why you did it, like if someone was helpful or if someone broke the rules.

`!add-invites @user 5 Was very helpful`

to remove someones invites, use a negative number eg:

`!add-invites @user -5 Broke the rules`

Use negative number eg. -5 to decrease the value of someone.

You can see how why someone has bonus invites by doing `!info @user`

## How do I change the language?

To change the language you can use:
`!config lang {countryCode}`
`!config lang en`

You can use the [i18n language code table](https://i18ns.com/languagecode.html) to get the 2 letter language code for your country.

The bot is not 100% translated.

## What are 'Ranks' and how can I use them?

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## How can I disable the bot in all but one/some channels?

Take away the read message permissions in the channels where you don't want the bot to reply.

## Is there a premium version of this bot, or can I run my own bot?

We do have our [**Patreon page**](https://patreon.com/invitemanagerbots) where you can subscribe to our patreon and see our packages of custom bots.

You are able to host your own instance by using the [**source code**](https://github.com/LolRiTTeR/invite-manager-bot), but you will **not** receive official support from us.

## Why are some people missing on the leaderboard?

Please use the command

`!config hideLeftMembersFromLeaderboard false`

to show all members on the leaderboard.

## How do I clear all invites for my server?

You can do

`!clearInvites`

to clear everyone's invites.

And do `!help clearInvites` for more command details.
