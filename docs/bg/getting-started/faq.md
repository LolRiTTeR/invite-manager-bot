# Ч.З.В.

## Как да сменя префикса на бота?

Трябва да напишете `!config prefix -` за да смените префикса.

Ако не знаете сегашният ви префикс, може да напишете `@InviteManager config prefix` , за да видите префикса.

## Как да сложа съобщение за илизане и влизане?

Задайте канала по следния начин

`!config joinMessageChannel #channel`

или

`!config leaveMessageChannel #channel`.

След като направите това, новите влизания и излизания ще бъдат изпращани в този канал.

## Мога ли да персонализирам съобщенията за излизане и влизане?

Абсолютно! Може да смените съобщението на примерно

`!config joinMessage {memberMention} **влезе**; Поканен от **{inviterName}** (**{numInvites}** покани)`

or

`!config leaveMessage {memberName} **излезе**; Поканен от **{inviterName}**`.

Има още много начини. Може да видите целият лист от '[Custom Messages](/bg/modules/invites/custom-messages.md)' .

## Какво представляват "Ranks" и как мога да ги използвам?

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## Как мога да деактивирам бота във всички, освен един / някои канали?

Махнете правата "Read Messages" в каналите, в които не искате бота да отговаря.

## Ограничение: Без разширено проследяване преди да се присъедини бота.

Разширено проследяване (кой, кого е поканил) работи, когато сте поканили бота. Бота ще знае поканите на всеки, след като сте го поканили, но не се притеснявайте. Само допълнителна информация липсва и може да бъде събрана само за членове, които се присъединяват след като сте поканили бот.
