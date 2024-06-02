# FAQ

## Jak zmienić prefiks bota?

Możesz napisać `!config prefix -` żeby zmienić prefix.

Jeśli nie znasz swojego aktualnego prefixu użyj `@InviteManager config prefix` aby go zobaczyć

## Ograniczenie: Brak zaawansowanego śledzenia przed dołączeniem bota

Zaawansowane śledzenie (kto zaprosił kogo) działa tylko po zaproszeniu bota. Bot nadal będzie wiedział, że wszyscy zaproszeni liczą po zaproszeniu, nie martw się. Brakuje tylko dodatkowych informacji i można je gromadzić tylko dla członków, którzy dołączą po zaproszeniu bota.

## start.faq.patreon.title

start.faq.patreon.description

## Jak ustawić wiadomości na powitania i pożegnania?

Ustaw kanał wpisując:

`!config joinMessageChannel #kanał`

lub

`!config leaveMessageChannel #kanał`.

Po wykonaniu tej czynności nowe powitania i pożegnania zostaną opublikowane na tym kanale.

## Czy mogę dostosować wiadomości powitań i pożegnań?

Jasne! Możesz zmienić wiadomość, wykonując na przykład

`!config joinMessage {memberMention} **dołączył**; Został zaproszony przez **{inviterName}** (**{numInvites}** zaproszeń)`

lub

`!config leaveMessage {memberName} **wyszedł**; Został zaproszony przez **{inviterName}**`.

Jest wiele wartości których możesz użyć. Możesz zobaczyć pełną listę na stronie '[Własne wiadomości](/pl/modules/invites/custom-messages.md)'.

## start.faq.bonusinvites.title

start.faq.bonusinvites.description

## start.faq.language.title

start.faq.language.description

## Co to są "Rangi" i jak mogę ich używać?

Ranks are used to assign roles to people when they reach a certain amount of invites. For example, if you have a role called `@Beginner` and you want people who have 5 or more invites to be added to that role, you would have to create a rank for that like so: `!add-rank @Beginner 5 (and if you want a description here)`. As soon as someone has 5 invites, he will automatically be added to that role!

## Jak mogę wyłączyć bota we wszystkich kanałach oprócz jednego/niektórych?

Zabierz uprawnienie "Czytanie Wiadomości" na kanałach gdzie bot nie ma dawać odpowiedzi

## start.faq.premiumbot.title

start.faq.premiumbot.description

## start.faq.leaderboard.title

start.faq.leaderboard.description

## start.faq.clearinvites.title

start.faq.clearinvites.description
