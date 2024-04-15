---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatMessageMessage(connection, subscription, data)

```ts
new ChannelChatMessageMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
data: ChannelChatMessageEvent): ChannelChatMessageMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](../interfaces/ChannelChatMessageEvent.md) |

#### Returns

[`ChannelChatMessageMessage`](ChannelChatMessageMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessage.ts:15](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessage.ts#L15)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatMessageMessageBroadcaster`](ChannelChatMessageMessageBroadcaster.md)\<`K`\> | - |
| `chatter` | `public` | [`ChannelChatMessageMessageChatter`](ChannelChatMessageMessageChatter.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `message` | `public` | [`ChannelMessage`](ChannelMessage.md)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> | [`Base`](Base.md).`subscription` |
