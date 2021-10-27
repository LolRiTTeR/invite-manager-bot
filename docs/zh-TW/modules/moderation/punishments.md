# 懲罰

### 甚麼是懲罰？

懲罰是類似 `停權` 、 `踢出` 或 `靜音` 之類的動作，可以在使用者違反規定時給予。 您可以使用指令直接懲罰使用者，也可以自訂讓使用者達到一定數量的記點後受到懲處。

### 記點達到一定數量時，我可以怎麼懲處使用者？

使用 `punishmentconfig` 指令可以設定每種懲罰各自對應到的記點次數。

```text
!punishmentconfig <punishmentType> <numberOfStrikesNeeded>
```

可用的懲罰如下：

- 停權
- 暫時停權
- 踢出
- 靜音
- 警告

所以如果您想要踢出記點達到 5 次的使用者，您可以執行以下指令：

```text
!punishmentconfig kick 5
```

如果您想要刪除一項 `punishmentconfig` ，請設定記點次數為 `0` ，如下所示：

```text
!punishmentconfig kick 0
```

直接使用指令可確認所有的懲罰設定：

```text
!punishmentconfig
```
