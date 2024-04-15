---
editUrl: false
next: false
prev: false
title: "ChannelChatClearMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelChatClear`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatClearMessage(connection, subscription, data)

```ts
new ChannelChatClearMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClear, K>, 
data: ChannelChatClearEvent): ChannelChatClearMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClear`, `K`\> |
| `data` | [`ChannelChatClearEvent`](../interfaces/ChannelChatClearEvent.md) |

#### Returns

[`ChannelChatClearMessage`](ChannelChatClearMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts:11](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatClearBroadcaster`](ChannelChatClearBroadcaster.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClear`, `K`\> | [`Base`](Base.md).`subscription` |
