(Отиди на [placeholders](#placeholders))

# Персонализирани съобщения

---

## Можете да персонализирате join / leave съобщението с номер от параметрите.

You can set a custom join or leave message by setting the config:

```
!config joinMessage This is your custom join message! It will be posted every time someone joins your server.
```

or

```
!config leaveMessage This is your custom leave message! It will be posted every time someone leaves your server.
```

A message like that obviously doesn't make sense. You should personalise it with information about the new member, inviter or the server. Please see the list below for all available placeholders.

So if we want the message to say

`Welcome @Andy! You were invited by Valandur, who now has 3 invites! Have fun on our server!`

we can easily do that by replacing all the names and the number with placeholders:

`Welcome {memberMention}! You were invited by {inviterName}, who now has {numInvites} invites! Have fun on our server!`

So you can now do `!config joinMessage <message from above>` to set the message. Our bot will automatically replace the placeholders every time someone joins.

> [!NOTE|style:flat]
> Premium users can also use embeds in their join and leave messages. [More info here](./examples.md)

Please see the [examples page](./examples.md) to see what kind of messages you can make!

### Placeholders

|                          | join | leave | пример        | описание                                                                                |
| :----------------------- | :--- | :---- | :------------ | :-------------------------------------------------------------------------------------- |
| {memberName}             | да   | да    | Andy          | The name of the member that just joined your discord server                             |
| {memberId}               | да   | да    | 436844634     | The discord ID of the member that just joined your server                               |
| {memberMention}          | да   | не    | @Andy         | The mention of the member that just joined your discord server (person will be pinged). |
| {memberFullName}         | да   | да    | Andy\#1801    | The username and discriminator of the user that just joined your server                 |
| {memberImage}            | да   | да    | \[URL\]       | URL of the avatar of the member                                                         |
| {inviterName}            | да   | да    | Andy          | The name of the inviter                                                                 |
| {inviterId}              | да   | да    | 241929953     | The discord ID of the inviter                                                           |
| {inviterMention}         | да   | да    | @Andy         | The mention of the inviter (person will be pinged)                                      |
| {inviterFullName}        | да   | да    | Andy\#1801    | The username and discriminator of the inviter                                           |
| {inviterImage}           | да   | да    | \[URL\]       | URL of the avatar of the inviter                                                        |
| {numInvites}             | да   | да    | 12            | Number of invites the inviter has in total                                              |
| {numRegularInvites}      | да   | да    | 7             | Number of invites the inviter has through regular invites                               |
| {numBonusInvites}        | да   | да    | 5             | Number of invites the inviter has as a bonus (they were assigned manually)              |
| {numFakeInvites}         | да   | да    | 3             | Number of fake invites the inviter has                                                  |
| {numLeaveInvites}        | да   | да    | 6             | Number of invites that were removed because the member left again.                      |
| {memberCount}            | да   | да    | 42            | Number of members your server has in total                                              |
| {numJoins}               | да   | да    | 3             | Number of times the user has joined the server                                          |
| {channelName}            | да   | да    | general       | The name of the channel where the invite code was created                               |
| {channelMention}         | да   | да    | \#general     | Mention of the channel where the invite code was created                                |
| {inviteCode}             | да   | да    | fgSr30s       | Invite code used                                                                        |
| {memberCreated:date}     | да   | да    | 25.09.2016    | Date the discord user was created                                                       |
| {memberCreated:duration} | да   | да    | 5 weeks       | Duration since the discord user was created                                             |
| {memberCreated:timeAgo}  | да   | да    | 2 day ago     | Time the discord user was created                                                       |
| {firstJoin:date}         | да   | да    | 11.12.2017    | Date the user joined the server for the first time                                      |
| {firstJoin:duration}     | да   | да    | 4 days        | Duration since the user joined the server for the first time                            |
| {firstJoin:timeAgo}      | да   | да    | 1 week ago    | Time the user joined the server for the first time                                      |
| {previousJoin:date}      | да   | не    | 02.04.2018    | Date when the user joined the server the last time                                      |
| {previousJoin:duration}  | да   | не    | 2 months      | Duration since when the user joined the server the last time                            |
| {previousJoin:timeAgo}   | да   | не    | 1 second ago  | Time when the user joined the server the last time                                      |
| {joinedAt:date}          | не   | да    | 17.05.2018    | Date when the user joined                                                               |
| {joinedAt:duration}      | не   | да    | 3 minutes     | Duration since when the user joined                                                     |
| {joinedAt:timeAgo}       | не   | да    | 2 minutes ago | Time when the user joined                                                               |
