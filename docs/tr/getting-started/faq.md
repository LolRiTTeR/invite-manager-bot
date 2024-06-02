# FAQs

## Botun ön ekini nasıl değiştirebilirim?

Öneki değiştirmek için `!config prefix -` yapabilirsiniz.

Geçerli önekinizi bilmiyorsanız, öneki görmek için`@InviteManager config prefix` komtunu kullanabilirsiniz.

## Limitation: No advanced tracking before the bot joins

Gelişmiş izleme (kim kimi davet ettiğinde) yalnızca botu davet ettikten sonra çalışır. Bot, herkesin davet ettikten sonra sayımı davet ettiğini bilecek, endişelenmeyin. Yalnızca ek bilgiler eksiktir ve yalnızca botu davet ettikten sonra katılan üyeler için toplanabilir.

## start.faq.patreon.title

§ {start.faq.patreon.description}

## Katılma ve ayrılma mesajlarını nasıl ayarlarım?

Yaparak kanalı ayarlayın

`!config joinMessageChannel #kanal`

ya da

`!config leaveMessageChannel #kanal`.

Bunu yaptıktan sonra yeni katılmalar ve ayrılmalar o kanala gönderilecek.

## Can I customize the join and leave messages?

Kesinlikle! Mesajı yaparak örneğin değiştirebilirsiniz

`! config joinMessage {memberMention} ** katıldı **; ** {inviterName} ** tarafından davet edildi (** {numInvites} ** davet yaptı) `

ya da

`! config leaveMessage {memberName} ** ayrıldı **; ** {inviterName} ** `tarafından davet edilmişti.

Kullanılabilecek çok sayıda yer tutucu var. Listenin tamamını '[Custom Messages](/tr/modules/invites/custom-messages.md)' sayfasında görebilirsiniz.

## start.faq.bonusinvites.title

start.faq.bonusinvites.description

## start.faq.language.title

start.faq.language.description

## What are 'Ranks' and how can I use them?

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## Bir / bazı kanallar dışındaki tüm botları nasıl devre dışı bırakabilirim?

Botun yanıt vermesini istemediğiniz kanallarda okunan mesaj izinlerini kaldırın.

## start.faq.premiumbot.title

start.faq.premiumbot.description

## start.faq.leaderboard.title

start.faq.leaderboard.description

## start.faq.clearinvites.title

start.faq.clearinvites.description
