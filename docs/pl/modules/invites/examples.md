# Przykłady

## Normalny

```text
!config joinMessage {memberMention} **dołączył**; Został zaproszony przez **{inviterName}** (**{numInvites}** zaproszeń)
```

```text
!config leaveMessage {memberName} **wyszedł** będąc przez {joinedAt:duration} na tym serwerze; Zaproszony przez**{inviterName}**
```

## Normalny (Vanity)

```text
!config joinMessageVanity {memberMention} **dołączył** używając zaproszenie vanity **{inviteCode}**
```

```text
!config leaveMessageVanity {memberName} **wyszedł** będąc przez {joinedAt:duration} na serwerze
```

## Embed

### Wiadomość Dołączenia

<!-- tabs:start -->

#### ** Screenshot **

![Embed dołączenia](../../../assets/invite-manager-join-message-premium.png)

#### ** Kod **

```text
!config joinMessage { "color": "#5cd65c", "author": { "name": "{memberName} dołączył!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Data stworzenia konta", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "Pierwsze dołączenie", "value": "{firstJoin:date}", "inline": true }, { "name": "Ilość dołączeń", "value": "{numJoins}", "inline": true }, { "name": "Zaproszony przez", "value": "{inviterMention}\n{numInvites} (normalne: {numRegularInvites}, nonusowe: {numBonusInvites}, nieprawdziwe: {numFakeInvites}, opuszczenia: {numLeaveInvites})" }, { "name": "Kod zaproszenia", "value": "{inviteCode} na kanale {channelMention}" }, { "name": "Łączna ilośc użytkowników", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Wiadomośc Dołączenia (Vanity)

<!-- tabs:start -->

#### ** Screenshot **

![Embed dołączenia (Vanity)](../../../assets/invite-manager-join-message-vanity-premium.png)

#### ** Kod **

```text
!config joinMessageVanity { "color": "#5cd65c", "author": { "name": "{memberName} dołączył!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Data stworzenia konta", "value": "{memberCreated:timeAgo}", "inline": true }, { "name": "Pierwsze dołączenie", "value": "{firstJoin:date}", "inline": true }, { "name": "Ilość dołączeń", "value": "{numJoins}", "inline": true }, { "name": "Vanity kod zaproszenia", "value": "{inviteCode}" }, { "name": "Łączna ilość użytkowników", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Wiadomośc wyjścia

<!-- tabs:start -->

#### ** Screenshot **

![Embed Wyjścia](../../../assets/invite-manager-leave-message-premium.png)

#### ** Kod **

```text
!config leaveMessage { "color": "#d65c5c", "author": { "name": "{memberName} wyszedł!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Czas na serwerze", "value": "{joinedAt:duration}", "inline": true }, { "name": "Pierwsze dołączenie", "value": "{firstJoin:date}", "inline": true }, { "name": "Ilość dołączeń", "value": "{numJoins}", "inline": true }, { "name": "Zaproszony przez", "value": "{inviterMention}\n{numInvites} (normalne: {numRegularInvites}, bonusowe: {numBonusInvites}, nieprawdziwe: {numFakeInvites}, opuszczenia: {numLeaveInvites})" }, { "name": "Kod zaproszenia", "value": "{inviteCode} na kanale {channelMention}" }, { "name": "Łączna ilość użytkowników", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->

### Wiadomość wyjścia (Vanity)

<!-- tabs:start -->

#### ** Screenshot **

![Embed Wyjścia (Vanity)](../../../assets/invite-manager-leave-message-vanity-premium.png)

#### ** Kod **

```text
!config leaveMessageVanity { "color": "#d65c5c", "author": { "name": "{memberName} left!", "icon_url": "{memberImage}" }, "fields": [ { "name": "Time on server", "value": "{joinedAt:duration}", "inline": true }, { "name": "First joined", "value": "{firstJoin:date}", "inline": true }, { "name": "Number of joins", "value": "{numJoins}", "inline": true }, { "name": "Vanity Invite Code", "value": "{inviteCode}" }, { "name": "Total Member Count", "value": "{memberCount}" } ] }
```

<!-- tabs:end -->
