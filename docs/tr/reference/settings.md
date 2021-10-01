# Configs

There are many config options that can be set. You don't have to set all of them. If you just added the bot, just run `!setup`, which will guide you through the most important ones.

## Overview

### Genel

| Setting                                        | Description                                                              |
| ---------------------------------------------- | ------------------------------------------------------------------------ |
| [Prefix](#prefix)                              | Bot komutlarını tetiklemek için kullanılan prefix.                       |
| [Dil](#lang)                                   | Botun dili                                                               |
| [Log kanalı](#logchannel)                      | Bot işlemlerinin günlüğe kaydedildiği kanal.                             |
| [Yükselt.](#getupdates)                        | InviteManager hakkında geliştirme güncellemelerini almayı etkinleştirin. |
| [Komut kanalları](#channels)                   | Botun komutlara tepki vereceği kanallar.                                 |
| [Görmezden gelinen kanallar](#ignoredchannels) | Botun komutları görmezden geleceği kanallar.                             |

### Davetler

#### Genel

| Setting                       | Description                           |
| ----------------------------- | ------------------------------------- |
| [Katılma rolleri](#joinroles) | Katılırken tüm üyelere atanan roller. |

#### Gelenler

| Setting                             | Description                                                        |
| ----------------------------------- | ------------------------------------------------------------------ |
| [Mesaj](#joinmessage)               | Birisi sunucuya katıldığında gönderilen mesaj.                     |
| [Mesaj](#joinmessagevanity)         | Birisi özel URL kullanarak sunucuya katıldığında gönderilen mesaj. |
| [Mesaj Kanalı](#joinmessagechannel) | Katılmadaki iletinin gönderildiği kanal                            |

#### Ayrılanlar

| Setting                                               | Description                                                                                            |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Mesaj](#leavemessage)                                | Birisi sunucudan çıktığında gönderilen mesaj.                                                          |
| [Mesaj](#leavemessagevanity)                          | Birisi özel URL ile katıldıktan sonra sunucudan ayrıldığında gönderilen mesaj.                         |
| [Mesaj Kanalı](#leavemessagechannel)                  | Ayrılma mesajının gönderildiği kanal.                                                                  |
| [Otomatik Çıkarma](#autosubtractleaves)               | Kullanıcın yaptığı davetten gelen kullanıcı ayrıldığında kullanıcın otomatik olarak daveti kaldırılır. |
| [Otomatik Çıkarma Eşiği](#autosubtractleavethreshold) | Davetiyenin sayması için bir kullanıcının sunucuda kalması gereken saniye cinsinden süre.              |

#### Liderlik Tablosu

| Setting                                                  | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- |
| [Stil](#leaderboardstyle)                                | Skor tablosunun görüntü stili.                           |
| [Soldaki üyeleri gizle](#hideleftmembersfromleaderboard) | Liderlik tablosundan sunucudan ayrılan üyeleri gizleyin. |

#### Sahte

| Setting                                | Description                             |
| -------------------------------------- | --------------------------------------- |
| [Otomatik Çıkarma](#autosubtractfakes) | Sahte davetleri otomatik olarak çıkarın |

#### Rütbeler

| Setting                                   | Description                                              |
| ----------------------------------------- | -------------------------------------------------------- |
| [Atama Stili](#rankassignmentstyle)       | Rütbeler kullanıcılara nasıl ödüllendirilir.             |
| [Duyuru Kanalı](#rankannouncementchannel) | Yeni bir rütbe alan kullanıcıların duyurulduğu kanal.    |
| [Duyuru Mesajı](#rankannouncementmessage) | Bir kullanıcı yeni bir rütbe aldığında gönderilen mesaj. |

### Moderasyon

#### Doğrulama

| Setting                                                | Description                                                                                   |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| [Etkin](#captchaverificationonjoin)                    | Captcha doğrulamanın etkin olup olmadığı.                                                     |
| [Karşılama mesajı](#captchaverificationwelcomemessage) | Kullanıcının bir sunucuya katıldıktan ve captcha'ya girmesini istedikten sonra alacağı mesaj. |
| [Başarı Mesajı](#captchaverificationsuccessmessage)    | Başarılı bir şekilde doğrulandıktan sonra kullanıcıya gönderilecek hoş geldiniz mesajı.       |
| [Başarısız Mesaj](#captchaverificationfailedmessage)   | Geçersiz bir captcha girerse, kullanıcıya mesaj gönderilir.                                   |
| [Doğrulama Zaman Aşımı](#captchaverificationtimeout)   | Captcha'nın başarıyla girilmesi gereken süre.                                                 |
| [Log Etkin](#captchaverificationlogenabled)            | Doğrulama girişimlerinin yapılıp yapılmadığı günlüğe kaydedilir.                              |

#### Genel

| Setting                                                      | Description                                                                                                                                                                             |
| ------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Etkin](#automodenabled)                                     | Mesajları otomatik olarak denetle (belirli kurallar da açılabilir veya kapatılabilir, HERHANGİ bir kuralın çalışması için bunun AÇIK olması gerekir).                                   |
| [Yönetilen Kanallar](#automodmoderatedchannels)              | Denetlenen kanalların listesi (bu bir beyaz liste görevi görür, tüm kanalları denetlemek için boş bırakın veya belirli kanalları yok saymak için "autoModIgnoredChannels"ı kullanın).   |
| [Moderatör Rolü](#automodmoderatedroles)                     | Denetlenen rollerin listesi (bu, beyaz liste olarak işlev görür, tüm rolleri denetlemek için boş bırakın veya belirli rolleri yok saymak için `autoModIgnoredRoles` komutunu kullanın). |
| [Görmezden gelinen kanallar](#automodignoredchannels)        | Otomatik olarak denetlenirken yoksayılan kanallar.                                                                                                                                      |
| [Görmezden gelinen roller](#automodignoredroles)             | Bu rollere sahip üyeler otomatik olarak denetlenmez.                                                                                                                                    |
| [Susturulmuş üyenin alacağı rol](#mutedrole)                 | Susturulmuş olan kişilere verilen rol. Bu rolün "Mesaj Gönder" izninin reddedildiğinden emin olun.                                                                                      |
| [Eski Üyeler için Devre Dışı](#automoddisabledforoldmembers) | Uzun süredir sunucunuzda bulunan üyeler için otomatik denetleme devre dışı bırakıldı.                                                                                                   |
| [Eski Üyeler Eşiği](#automoddisabledforoldmembersthreshold)  | Bir üyenin 'eski' olarak kabul edilmesi için sunucunuzda olması gereken süre.                                                                                                           |

#### Giriş yapmak

| Setting                                                                  | Description                                                                 |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| [Günlük Etkin](#automodlogenabled)                                       | Botun yaptığı tüm denetleme eylemlerini günlüğe kaydedin.                   |
| [Mod Günlük Kanalı](#modlogchannel)                                      | Denetleme günlüklerinin yayınlanacağı kanal.                                |
| [Bot Mesajlarını Sil](#automoddeletebotmessage)                          | Botların kendi mesajlarını otomatik olarak silin (sohbetinizi temiz tutar). |
| [Bot Mesajı Zaman Aşımını Sil](#automoddeletebotmessagetimeoutinseconds) | Bot mesajlarının silindiği zaman aşımı.                                     |
| [Yasaklama Mesajını Sil](#modpunishmentbandeletemessage)                 | "Ban" mesajlarının otomatik olarak silinip silinmeyeceği.                   |
| [Kick Mesajını Sil](#modpunishmentkickdeletemessage)                     | "Kick" mesajlarının otomatik olarak silinip silinmeyeceği.                  |
| [Softban Mesajlarını Sil](#modpunishmentsoftbandeletemessage)            | "Softban" mesajlarının otomatik olarak silinip silinmeyeceği.               |
| [Uyarı Mesajlarını Sil.](#modpunishmentwarndeletemessage)                | "Uyarı" ceza mesajlarının otomatik olarak silinip silinmeyeceği.            |
| [Susturma Mesajlarını Sil.](#modpunishmentmutedeletemessage)             | "Mute" mesajlarının otomatik olarak silinip silinmeyeceği.                  |

#### Davetler

| Setting                         | Description                                                                           |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| [Etkin](#automodinvitesenabled) | Discord Sunucu davet bağlantıları için iletileri otomatik olarak tarayın ve kaldırın. |

#### Bağlantılar

| Setting                                              | Description                                                                                            |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| [Etkin](#automodlinksenabled)                        | Bağlantı içeren mesajları otomatik olarak kaldırın (bir beyaz liste ve kara liste oluşturabilirsiniz). |
| [Beyaz liste](#automodlinkswhitelist)                | Kullanıcıların yayın göndermesine izin verilen bağlantıların listesi.                                  |
| [Kara liste](#automodlinksblacklist)                 | Kullanıcıların yayınlayamayacağı belirli bağlantıları kara listeye alın.                               |
| [Yönlendirmeleri İzle](#automodlinksfollowredirects) | Bağlantılara yönelik yönlendirmeleri çözmek için bunu etkinleştirin.                                   |

#### Yasaklı Kelimeler.

| Setting                              | Description                                                                  |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| [Etkin](#automodwordsenabled)        | Kara listeye alınan kelimelerin otomatik olarak denetlenip denetlenmeyeceği. |
| [Kara liste](#automodwordsblacklist) | Yasaklanan kelimelerin listesi.                                              |

#### Büyük Harfler

| Setting                                          | Description                                                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| [Etkin](#automodallcapsenabled)                  | BÜYÜK HARFLERLE mesajları otomatik olarak yönetin.                                                                  |
| [Min. karakterler](#automodallcapsmincharacters) | Bir iletideki denetleme için dikkate alınması gereken minimum karakter miktarı ('3'e ayarlamak 'Tamam'ı yok sayar). |
| [Yüzde CAP'ler](#automodallcapspercentagecaps)   | Kuralın tetiklenmesi için CAP olması gereken mesaj karakterlerinin yüzdesi.                                         |

#### Çift Mesajlar

| Setting                                                           | Description                                                             |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Etkin](#automodduplicatetextenabled)                             | Yinelenen iletileri otomatik olarak denetleyin (kopyala-yapıştır spam). |
| [Saniyede Zaman Aralığı](#automodduplicatetexttimeframeinseconds) | Hangi iletilerin kopya olarak kabul edileceği zaman dilimi.             |

#### spam

| Setting                                                           | Description                                                                      |
| ----------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [Etkin](#automodquickmessagesenabled)                             | Kısa sürede çok sayıda mesaj gönderen kullanıcıları otomatik olarak denetleyin.  |
| [Mesaj Sayısı](#automodquickmessagesnumberofmessages)             | Kuralı tetiklemek için zaman aralığı içinde gönderilmesi gereken ileti sayısı.   |
| [Saniyede Zaman Aralığı](#automodquickmessagestimeframeinseconds) | Bir kullanıcının maksimum miktarda mesaj göndermesine izin verilen zaman dilimi. |

#### Bahsetmeler

| Setting                                                          | Description                                                                |
| ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Etkin](#automodmentionusersenabled)                             | Aşırı miktarda kullanıcıdan bahseden iletileri otomatik olarak denetleyin. |
| [Maks. Bahsetme Sayısı](#automodmentionusersmaxnumberofmentions) | Bir üyenin bir mesajda bahsedebileceği maksimum kullanıcı sayısı.          |
| [Etkin](#automodmentionrolesenabled)                             | Aşırı miktarda rolden bahseden iletileri otomatik olarak denetleyin.       |
| [Maks. Bahsetme Sayısı](#automodmentionrolesmaxnumberofmentions) | Bir üyenin bir mesajda bahsedebileceği maksimum rol miktarı.               |

#### Emojiler

| Setting                                                  | Description                                                                                                                                  |
| -------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| [Etkin](#automodemojisenabled)                           | Aşırı miktarda emoji içeren iletileri otomatik olarak denetleyin.                                                                            |
| [Maksimum Emoji Sayısı](#automodemojismaxnumberofemojis) | Kuralı tetiklemeden önce bir iletinin sahip olabileceği maksimum emoji miktarı.                                                              |
| [Etkin](#automodhoistenabled)                            | Kaldırmaya çalışırlarsa üyelere otomatik olarak takma adlar verin (kullanıcı listesinin en üstünde görünmek için özel karakterler kullanın). |

### Müzik

#### Müzik

| Setting                          | Description                                                          |
| -------------------------------- | -------------------------------------------------------------------- |
| [Müzik Ses Düzeyi](#musicvolume) | Bot bir ses kanalına katıldığında ayarlanan varsayılan ses seviyesi. |

#### Duyuru

| Setting                                     | Description                                                         |
| ------------------------------------------- | ------------------------------------------------------------------- |
| [Sıradaki Şarkıyı Duyur](#announcenextsong) | Bir sonraki şarkının sesli kanalda duyurulması gerekip gerekmediği. |
| [Duyuru Sesi](#announcementvoice)           | Sonraki şarkı duyurularında kullanılan ses.                         |

#### Soluk Müzik

| Setting                                          | Description                                                                     |
| ------------------------------------------------ | ------------------------------------------------------------------------------- |
| [Konuşurken Müziği Azalt](#fademusicontalk)      | Etkinleştirilirse, insanlar konuşurken müzik kısılır.                           |
| [Fade Müzik Bitiş Gecikmesi](#fademusicenddelay) | Sesin normale dönmesi için kimsenin konuşmasının gerekmediği sürenin gecikmesi. |

#### Platformu

| Setting                                               | Description                                                                           |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [Varsayılan Müzik Platformu](#defaultmusicplatform)   | Açıkça hiçbir platform seçilmediğinde müzik aramak/oynatmak için kullanılan platform. |
| [Engelli Müzik Platformları](#disabledmusicplatforms) | Devre dışı bırakılan ve müzik çalmak için kullanılamayan müzik platformları.          |

<a name=prefix></a>

---

## Prefix

Bot komutlarını tetiklemek için kullanılan prefix.

Type: `String`

Default: `!`

Reset to default:
`!config prefix default`

Examples:

`!config prefix +`

`!config prefix >`

<a name=lang></a>

---

## Dil

Botun dili

Type: `Enum<Lang>`

Default: `en`

Reset to default:
`!config lang default`

Possible values: `ar`, `bg`, `cs`, `de`, `el`, `en`, `es`, `fr`, `hu`, `id_ID`, `it`, `ja`, `lt`, `nl`, `pl`, `pt`, `pt_BR`, `ro`, `ru`, `sr`, `tr`, `zh_CN`, `zh_TW`

Example:

`!config lang ar`

<a name=logChannel></a>

---

## Log kanalı

Bot işlemlerinin günlüğe kaydedildiği kanal.

Type: `Channel`

Default: `null`

Reset to default:
`!config logChannel default`

Examples:

`!config logChannel #channel`

<a name=getUpdates></a>

---

## Yükselt.

InviteManager hakkında geliştirme güncellemelerini almayı etkinleştirin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config getUpdates default`

Enable:

`!config getUpdates true`

Disable:

`!config getUpdates false`

<a name=channels></a>

---

## Komut kanalları

Botun komutlara tepki vereceği kanallar.

Type: `Channel[]`

Default: ``

Reset to default:
`!config channels default`

<a name=ignoredChannels></a>

---

## Görmezden gelinen kanallar

Botun komutları görmezden geleceği kanallar.

Type: `Channel[]`

Default: ``

Reset to default:
`!config ignoredChannels default`

<a name=joinRoles></a>

---

## Katılma rolleri

Katılırken tüm üyelere atanan roller.

Type: `Role[]`

Default: ``

Reset to default:
`!config joinRoles default`

<a name=joinMessage></a>

---

## Mesaj

Birisi sunucuya katıldığında gönderilen mesaj.

Type: `String`

Default: `{memberMention} **joined**; Invited by **{inviterName}** (**{numInvites}** invites)`

Reset to default:
`!config joinMessage default`

<a name=joinMessageVanity></a>

---

## Mesaj

Birisi özel URL kullanarak sunucuya katıldığında gönderilen mesaj.

Type: `String`

Default: `{memberMention} **joined** using the vanity invite code **{inviteCode}**`

Reset to default:
`!config joinMessageVanity default`

<a name=joinMessageChannel></a>

---

## Mesaj Kanalı

Katılmadaki iletinin gönderildiği kanal

Type: `Channel`

Default: `null`

Reset to default:
`!config joinMessageChannel default`

Examples:

`!config joinMessageChannel #general`

`!config joinMessageChannel #joins`

<a name=leaveMessage></a>

---

## Mesaj

Birisi sunucudan çıktığında gönderilen mesaj.

Type: `String`

Default: `{memberName} **left**; Invited by **{inviterName}**`

Reset to default:
`!config leaveMessage default`

Examples:

`!config leaveMessage`

`!config leaveMessage`

<a name=leaveMessageVanity></a>

---

## Mesaj

Birisi özel URL ile katıldıktan sonra sunucudan ayrıldığında gönderilen mesaj.

Type: `String`

Default: `{memberName} **left** after {joinedAt:duration} on this server`

Reset to default:
`!config leaveMessageVanity default`

<a name=leaveMessageChannel></a>

---

## Mesaj Kanalı

Ayrılma mesajının gönderildiği kanal.

Type: `Channel`

Default: `null`

Reset to default:
`!config leaveMessageChannel default`

Examples:

`!config leaveMessageChannel #general`

`!config leaveMessageChannel #leaves`

<a name=leaderboardStyle></a>

---

## Stil

Skor tablosunun görüntü stili.

Type: `Enum<LeaderboardStyle>`

Default: `normal`

Reset to default:
`!config leaderboardStyle default`

Possible values: `normal`, `table`, `mentions`

Example:

`!config leaderboardStyle normal`

<a name=hideLeftMembersFromLeaderboard></a>

---

## Soldaki üyeleri gizle

Liderlik tablosundan sunucudan ayrılan üyeleri gizleyin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config hideLeftMembersFromLeaderboard default`

Enable:

`!config hideLeftMembersFromLeaderboard true`

Disable:

`!config hideLeftMembersFromLeaderboard false`

<a name=autoSubtractFakes></a>

---

## Otomatik Çıkarma

Sahte davetleri otomatik olarak çıkarın

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractFakes default`

Enable:

`!config autoSubtractFakes true`

Disable:

`!config autoSubtractFakes false`

<a name=autoSubtractLeaves></a>

---

## Otomatik Çıkarma

Kullanıcın yaptığı davetten gelen kullanıcı ayrıldığında kullanıcın otomatik olarak daveti kaldırılır.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoSubtractLeaves default`

Enable:

`!config autoSubtractLeaves true`

Disable:

`!config autoSubtractLeaves false`

<a name=autoSubtractLeaveThreshold></a>

---

## Otomatik Çıkarma Eşiği

Davetiyenin sayması için bir kullanıcının sunucuda kalması gereken saniye cinsinden süre.

Type: `Number`

Default: `600`

Reset to default:
`!config autoSubtractLeaveThreshold default`

Examples:

`!config autoSubtractLeaveThreshold 60`

`!config autoSubtractLeaveThreshold 3600`

<a name=rankAssignmentStyle></a>

---

## Atama Stili

Rütbeler kullanıcılara nasıl ödüllendirilir.

Type: `Enum<RankAssignmentStyle>`

Default: `all`

Reset to default:
`!config rankAssignmentStyle default`

Possible values: `all`, `highest`, `onlyAdd`

Example:

`!config rankAssignmentStyle all`

<a name=rankAnnouncementChannel></a>

---

## Duyuru Kanalı

Yeni bir rütbe alan kullanıcıların duyurulduğu kanal.

Type: `Channel`

Default: `null`

Reset to default:
`!config rankAnnouncementChannel default`

Examples:

`!config rankAnnouncementChannel`

`!config rankAnnouncementChannel`

<a name=rankAnnouncementMessage></a>

---

## Duyuru Mesajı

Bir kullanıcı yeni bir rütbe aldığında gönderilen mesaj.

Type: `String`

Default: `Congratulations, **{memberMention}** has reached the **{rankName}** rank!`

Reset to default:
`!config rankAnnouncementMessage default`

Examples:

`!config rankAnnouncementMessage`

`!config rankAnnouncementMessage`

<a name=captchaVerificationOnJoin></a>

---

## Etkin

Captcha doğrulamanın etkin olup olmadığı.

Type: `Boolean`

Default: `false`

Reset to default:
`!config captchaVerificationOnJoin default`

Enable:

`!config captchaVerificationOnJoin true`

Disable:

`!config captchaVerificationOnJoin false`

<a name=captchaVerificationWelcomeMessage></a>

---

## Karşılama mesajı

Kullanıcının bir sunucuya katıldıktan ve captcha'ya girmesini istedikten sonra alacağı mesaj.

Type: `String`

Default: `Welcome to the server **{serverName}**! For extra protection, new members are required to enter a captcha.`

Reset to default:
`!config captchaVerificationWelcomeMessage default`

Examples:

`!config captchaVerificationWelcomeMessage Welcome, please enter the captcha below!`

<a name=captchaVerificationSuccessMessage></a>

---

## Başarı Mesajı

Başarılı bir şekilde doğrulandıktan sonra kullanıcıya gönderilecek hoş geldiniz mesajı.

Type: `String`

Default: `You have successfully entered the captcha. Welcome to the server!`

Reset to default:
`!config captchaVerificationSuccessMessage default`

Examples:

`!config captchaVerificationSuccessMessage Thanks for entering the captcha, enjoy our server!`

<a name=captchaVerificationFailedMessage></a>

---

## Başarısız Mesaj

Geçersiz bir captcha girerse, kullanıcıya mesaj gönderilir.

Type: `String`

Default: `You did not enter the captha right within the specified time.We're sorry, but we have to kick you from the server. Feel free to join again.`

Reset to default:
`!config captchaVerificationFailedMessage default`

Examples:

`!config captchaVerificationFailedMessage Looks like you are not human :(. You can join again and try again later if this was a mistake!`

<a name=captchaVerificationTimeout></a>

---

## Doğrulama Zaman Aşımı

Captcha'nın başarıyla girilmesi gereken süre.

Type: `Number`

Default: `180`

Reset to default:
`!config captchaVerificationTimeout default`

Examples:

`!config captchaVerificationTimeout 60`

`!config captchaVerificationTimeout 600`

<a name=captchaVerificationLogEnabled></a>

---

## Log Etkin

Doğrulama girişimlerinin yapılıp yapılmadığı günlüğe kaydedilir.

Type: `Boolean`

Default: `true`

Reset to default:
`!config captchaVerificationLogEnabled default`

Enable:

`!config captchaVerificationLogEnabled true`

Disable:

`!config captchaVerificationLogEnabled false`

<a name=autoModEnabled></a>

---

## Etkin

Mesajları otomatik olarak denetle (belirli kurallar da açılabilir veya kapatılabilir, HERHANGİ bir kuralın çalışması için bunun AÇIK olması gerekir).

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModEnabled default`

Enable:

`!config autoModEnabled true`

Disable:

`!config autoModEnabled false`

<a name=autoModModeratedChannels></a>

---

## Yönetilen Kanallar

Denetlenen kanalların listesi (bu bir beyaz liste görevi görür, tüm kanalları denetlemek için boş bırakın veya belirli kanalları yok saymak için "autoModIgnoredChannels"ı kullanın).

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModModeratedChannels default`

Examples:

`!config autoModModeratedChannels #general`

`!config autoModModeratedChannels #support,#help`

<a name=autoModModeratedRoles></a>

---

## Moderatör Rolü

Denetlenen rollerin listesi (bu, beyaz liste olarak işlev görür, tüm rolleri denetlemek için boş bırakın veya belirli rolleri yok saymak için `autoModIgnoredRoles` komutunu kullanın).

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModModeratedRoles default`

Examples:

`!config autoModModeratedRoles @NewMembers`

`!config autoModModeratedRoles @Newbies,@Starters`

<a name=autoModIgnoredChannels></a>

---

## Görmezden gelinen kanallar

Otomatik olarak denetlenirken yoksayılan kanallar.

Type: `Channel[]`

Default: ``

Reset to default:
`!config autoModIgnoredChannels default`

Examples:

`!config autoModIgnoredChannels #general`

`!config autoModIgnoredChannels #off-topic,#nsfw`

<a name=autoModIgnoredRoles></a>

---

## Görmezden gelinen roller

Bu rollere sahip üyeler otomatik olarak denetlenmez.

Type: `Role[]`

Default: ``

Reset to default:
`!config autoModIgnoredRoles default`

Examples:

`!config autoModIgnoredRoles @TrustedMembers`

`!config autoModIgnoredRoles @Moderators,@Staff`

<a name=mutedRole></a>

---

## Susturulmuş üyenin alacağı rol

Susturulmuş olan kişilere verilen rol. Bu rolün "Mesaj Gönder" izninin reddedildiğinden emin olun.

Type: `Role`

Default: `null`

Reset to default:
`!config mutedRole default`

Examples:

`!config mutedRole @muted`

<a name=autoModDisabledForOldMembers></a>

---

## Eski Üyeler için Devre Dışı

Uzun süredir sunucunuzda bulunan üyeler için otomatik denetleme devre dışı bırakıldı.

Type: `Boolean`

Default: `false`

Reset to default:
`!config autoModDisabledForOldMembers default`

Enable:

`!config autoModDisabledForOldMembers true`

Disable:

`!config autoModDisabledForOldMembers false`

<a name=autoModDisabledForOldMembersThreshold></a>

---

## Eski Üyeler Eşiği

Bir üyenin 'eski' olarak kabul edilmesi için sunucunuzda olması gereken süre.

Type: `Number`

Default: `604800`

Reset to default:
`!config autoModDisabledForOldMembersThreshold default`

Examples:

`!config autoModDisabledForOldMembersThreshold 604800` (1 week)``

`!config autoModDisabledForOldMembersThreshold 2419200` (1 month)``

<a name=autoModLogEnabled></a>

---

## Günlük Etkin

Botun yaptığı tüm denetleme eylemlerini günlüğe kaydedin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLogEnabled default`

Enable:

`!config autoModLogEnabled true`

Disable:

`!config autoModLogEnabled false`

<a name=modLogChannel></a>

---

## Mod Günlük Kanalı

Denetleme günlüklerinin yayınlanacağı kanal.

Type: `Channel`

Default: `null`

Reset to default:
`!config modLogChannel default`

Examples:

`!config modLogChannel #channel`

`!config modLogChannel #logs`

<a name=autoModDeleteBotMessage></a>

---

## Bot Mesajlarını Sil

Botların kendi mesajlarını otomatik olarak silin (sohbetinizi temiz tutar).

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDeleteBotMessage default`

Enable:

`!config autoModDeleteBotMessage true`

Disable:

`!config autoModDeleteBotMessage false`

<a name=autoModDeleteBotMessageTimeoutInSeconds></a>

---

## Bot Mesajı Zaman Aşımını Sil

Bot mesajlarının silindiği zaman aşımı.

Type: `Number`

Default: `5`

Reset to default:
`!config autoModDeleteBotMessageTimeoutInSeconds default`

Examples:

`!config autoModDeleteBotMessageTimeoutInSeconds 5`

`!config autoModDeleteBotMessageTimeoutInSeconds 10`

<a name=modPunishmentBanDeleteMessage></a>

---

## Yasaklama Mesajını Sil

"Ban" mesajlarının otomatik olarak silinip silinmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentBanDeleteMessage default`

Enable:

`!config modPunishmentBanDeleteMessage true`

Disable:

`!config modPunishmentBanDeleteMessage false`

<a name=modPunishmentKickDeleteMessage></a>

---

## Kick Mesajını Sil

"Kick" mesajlarının otomatik olarak silinip silinmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentKickDeleteMessage default`

Enable:

`!config modPunishmentKickDeleteMessage true`

Disable:

`!config modPunishmentKickDeleteMessage false`

<a name=modPunishmentSoftbanDeleteMessage></a>

---

## Softban Mesajlarını Sil

"Softban" mesajlarının otomatik olarak silinip silinmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentSoftbanDeleteMessage default`

Enable:

`!config modPunishmentSoftbanDeleteMessage true`

Disable:

`!config modPunishmentSoftbanDeleteMessage false`

<a name=modPunishmentWarnDeleteMessage></a>

---

## Uyarı Mesajlarını Sil.

"Uyarı" ceza mesajlarının otomatik olarak silinip silinmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentWarnDeleteMessage default`

Enable:

`!config modPunishmentWarnDeleteMessage true`

Disable:

`!config modPunishmentWarnDeleteMessage false`

<a name=modPunishmentMuteDeleteMessage></a>

---

## Susturma Mesajlarını Sil.

"Mute" mesajlarının otomatik olarak silinip silinmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config modPunishmentMuteDeleteMessage default`

Enable:

`!config modPunishmentMuteDeleteMessage true`

Disable:

`!config modPunishmentMuteDeleteMessage false`

<a name=autoModInvitesEnabled></a>

---

## Etkin

Discord Sunucu davet bağlantıları için iletileri otomatik olarak tarayın ve kaldırın.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModInvitesEnabled default`

Enable:

`!config autoModInvitesEnabled true`

Disable:

`!config autoModInvitesEnabled false`

<a name=autoModLinksEnabled></a>

---

## Etkin

Bağlantı içeren mesajları otomatik olarak kaldırın (bir beyaz liste ve kara liste oluşturabilirsiniz).

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksEnabled default`

Enable:

`!config autoModLinksEnabled true`

Disable:

`!config autoModLinksEnabled false`

<a name=autoModLinksWhitelist></a>

---

## Beyaz liste

Kullanıcıların yayın göndermesine izin verilen bağlantıların listesi.

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksWhitelist default`

Examples:

`!config autoModLinksWhitelist discordbots.org`

`!config autoModLinksWhitelist youtube.com,twitch.com`

<a name=autoModLinksBlacklist></a>

---

## Kara liste

Kullanıcıların yayınlayamayacağı belirli bağlantıları kara listeye alın.

Type: `String[]`

Default: ``

Reset to default:
`!config autoModLinksBlacklist default`

Examples:

`!config autoModLinksBlacklist google.com`

`!config autoModLinksBlacklist twitch.com,youtube.com`

<a name=autoModLinksFollowRedirects></a>

---

## Yönlendirmeleri İzle

Bağlantılara yönelik yönlendirmeleri çözmek için bunu etkinleştirin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModLinksFollowRedirects default`

Enable:

`!config autoModLinksFollowRedirects true`

Disable:

`!config autoModLinksFollowRedirects false`

<a name=autoModWordsEnabled></a>

---

## Etkin

Kara listeye alınan kelimelerin otomatik olarak denetlenip denetlenmeyeceği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModWordsEnabled default`

Enable:

`!config autoModWordsEnabled true`

Disable:

`!config autoModWordsEnabled false`

<a name=autoModWordsBlacklist></a>

---

## Kara liste

Yasaklanan kelimelerin listesi.

Type: `String[]`

Default: ``

Reset to default:
`!config autoModWordsBlacklist default`

Examples:

`!config autoModWordsBlacklist gay`

`!config autoModWordsBlacklist stupid,fuck`

<a name=autoModAllCapsEnabled></a>

---

## Etkin

BÜYÜK HARFLERLE mesajları otomatik olarak yönetin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModAllCapsEnabled default`

Enable:

`!config autoModAllCapsEnabled true`

Disable:

`!config autoModAllCapsEnabled false`

<a name=autoModAllCapsMinCharacters></a>

---

## Min. karakterler

Bir iletideki denetleme için dikkate alınması gereken minimum karakter miktarı ('3'e ayarlamak 'Tamam'ı yok sayar).

Type: `Number`

Default: `10`

Reset to default:
`!config autoModAllCapsMinCharacters default`

Examples:

`!config autoModAllCapsMinCharacters 5`

`!config autoModAllCapsMinCharacters 15`

<a name=autoModAllCapsPercentageCaps></a>

---

## Yüzde CAP'ler

Kuralın tetiklenmesi için CAP olması gereken mesaj karakterlerinin yüzdesi.

Type: `Number`

Default: `70`

Reset to default:
`!config autoModAllCapsPercentageCaps default`

Examples:

`!config autoModAllCapsPercentageCaps 50`

`!config autoModAllCapsPercentageCaps 90`

<a name=autoModDuplicateTextEnabled></a>

---

## Etkin

Yinelenen iletileri otomatik olarak denetleyin (kopyala-yapıştır spam).

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModDuplicateTextEnabled default`

Enable:

`!config autoModDuplicateTextEnabled true`

Disable:

`!config autoModDuplicateTextEnabled false`

<a name=autoModDuplicateTextTimeframeInSeconds></a>

---

## Saniyede Zaman Aralığı

Hangi iletilerin kopya olarak kabul edileceği zaman dilimi.

Type: `Number`

Default: `60`

Reset to default:
`!config autoModDuplicateTextTimeframeInSeconds default`

Examples:

`!config autoModDuplicateTextTimeframeInSeconds 5`

`!config autoModDuplicateTextTimeframeInSeconds 20`

<a name=autoModQuickMessagesEnabled></a>

---

## Etkin

Kısa sürede çok sayıda mesaj gönderen kullanıcıları otomatik olarak denetleyin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModQuickMessagesEnabled default`

Enable:

`!config autoModQuickMessagesEnabled true`

Disable:

`!config autoModQuickMessagesEnabled false`

<a name=autoModQuickMessagesNumberOfMessages></a>

---

## Mesaj Sayısı

Kuralı tetiklemek için zaman aralığı içinde gönderilmesi gereken ileti sayısı.

Type: `Number`

Default: `5`

Reset to default:
`!config autoModQuickMessagesNumberOfMessages default`

Examples:

`!config autoModQuickMessagesNumberOfMessages 5`

`!config autoModQuickMessagesNumberOfMessages 10`

<a name=autoModQuickMessagesTimeframeInSeconds></a>

---

## Saniyede Zaman Aralığı

Bir kullanıcının maksimum miktarda mesaj göndermesine izin verilen zaman dilimi.

Type: `Number`

Default: `3`

Reset to default:
`!config autoModQuickMessagesTimeframeInSeconds default`

Examples:

`!config autoModQuickMessagesTimeframeInSeconds 2`

`!config autoModQuickMessagesTimeframeInSeconds 10`

<a name=autoModMentionUsersEnabled></a>

---

## Etkin

Aşırı miktarda kullanıcıdan bahseden iletileri otomatik olarak denetleyin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionUsersEnabled default`

Enable:

`!config autoModMentionUsersEnabled true`

Disable:

`!config autoModMentionUsersEnabled false`

<a name=autoModMentionUsersMaxNumberOfMentions></a>

---

## Maks. Bahsetme Sayısı

Bir üyenin bir mesajda bahsedebileceği maksimum kullanıcı sayısı.

Type: `Number`

Default: `5`

Reset to default:
`!config autoModMentionUsersMaxNumberOfMentions default`

Examples:

`!config autoModMentionUsersMaxNumberOfMentions 2`

`!config autoModMentionUsersMaxNumberOfMentions 5`

<a name=autoModMentionRolesEnabled></a>

---

## Etkin

Aşırı miktarda rolden bahseden iletileri otomatik olarak denetleyin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModMentionRolesEnabled default`

Enable:

`!config autoModMentionRolesEnabled true`

Disable:

`!config autoModMentionRolesEnabled false`

<a name=autoModMentionRolesMaxNumberOfMentions></a>

---

## Maks. Bahsetme Sayısı

Bir üyenin bir mesajda bahsedebileceği maksimum rol miktarı.

Type: `Number`

Default: `3`

Reset to default:
`!config autoModMentionRolesMaxNumberOfMentions default`

Examples:

`!config autoModMentionRolesMaxNumberOfMentions 2`

`!config autoModMentionRolesMaxNumberOfMentions 5`

<a name=autoModEmojisEnabled></a>

---

## Etkin

Aşırı miktarda emoji içeren iletileri otomatik olarak denetleyin.

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModEmojisEnabled default`

Enable:

`!config autoModEmojisEnabled true`

Disable:

`!config autoModEmojisEnabled false`

<a name=autoModEmojisMaxNumberOfEmojis></a>

---

## Maksimum Emoji Sayısı

Kuralı tetiklemeden önce bir iletinin sahip olabileceği maksimum emoji miktarı.

Type: `Number`

Default: `5`

Reset to default:
`!config autoModEmojisMaxNumberOfEmojis default`

Examples:

`!config autoModEmojisMaxNumberOfEmojis 5`

`!config autoModEmojisMaxNumberOfEmojis 10`

<a name=autoModHoistEnabled></a>

---

## Etkin

Kaldırmaya çalışırlarsa üyelere otomatik olarak takma adlar verin (kullanıcı listesinin en üstünde görünmek için özel karakterler kullanın).

Type: `Boolean`

Default: `true`

Reset to default:
`!config autoModHoistEnabled default`

Enable:

`!config autoModHoistEnabled true`

Disable:

`!config autoModHoistEnabled false`

<a name=musicVolume></a>

---

## Müzik Ses Düzeyi

Bot bir ses kanalına katıldığında ayarlanan varsayılan ses seviyesi.

Type: `Number`

Default: `100`

Reset to default:
`!config musicVolume default`

<a name=announceNextSong></a>

---

## Sıradaki Şarkıyı Duyur

Bir sonraki şarkının sesli kanalda duyurulması gerekip gerekmediği.

Type: `Boolean`

Default: `true`

Reset to default:
`!config announceNextSong default`

Enable:

`!config announceNextSong true`

Disable:

`!config announceNextSong false`

<a name=announcementVoice></a>

---

## Duyuru Sesi

Sonraki şarkı duyurularında kullanılan ses.

Type: `Enum<AnnouncementVoice>`

Default: `Joanna`

Reset to default:
`!config announcementVoice default`

Possible values: `Joanna`, `Salli`, `Kendra`, `Kimberly`, `Ivy`, `Matthew`, `Justin`, `Joey`

Example:

`!config announcementVoice Joanna`

<a name=fadeMusicOnTalk></a>

---

## Konuşurken Müziği Azalt

Etkinleştirilirse, insanlar konuşurken müzik kısılır.

Type: `Boolean`

Default: `true`

Reset to default:
`!config fadeMusicOnTalk default`

Enable:

`!config fadeMusicOnTalk true`

Disable:

`!config fadeMusicOnTalk false`

<a name=fadeMusicEndDelay></a>

---

## Fade Müzik Bitiş Gecikmesi

Sesin normale dönmesi için kimsenin konuşmasının gerekmediği sürenin gecikmesi.

Type: `Number`

Default: `1`

Reset to default:
`!config fadeMusicEndDelay default`

<a name=defaultMusicPlatform></a>

---

## Varsayılan Müzik Platformu

Açıkça hiçbir platform seçilmediğinde müzik aramak/oynatmak için kullanılan platform.

Type: `Enum<MusicPlatformTypes>`

Default: `soundcloud`

Reset to default:
`!config defaultMusicPlatform default`

<a name=disabledMusicPlatforms></a>

---

## Engelli Müzik Platformları

Devre dışı bırakılan ve müzik çalmak için kullanılamayan müzik platformları.

Type: `Enum<MusicPlatformTypes>[]`

Default: ``

Reset to default:
`!config disabledMusicPlatforms default`
