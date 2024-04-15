---
editUrl: false
next: false
prev: false
title: "Base"
---

## Extended by

- [`ChannelAdBreakBeginMessage`](ChannelAdBreakBeginMessage.md)
- [`ChannelChatClearMessage`](ChannelChatClearMessage.md)
- [`ChannelChatClearUserMessagesMessage`](ChannelChatClearUserMessagesMessage.md)
- [`ChannelFollowMessage`](ChannelFollowMessage.md)
- [`ChannelUpdateCategory`](ChannelUpdateCategory.md)
- [`ChannelUpdateMessage`](ChannelUpdateMessage.md)
- [`ChannelChatMessageMessage`](ChannelChatMessageMessage.md)
- [`StreamOnlineMessage`](StreamOnlineMessage.md)
- [`BaseBroadcaster`](BaseBroadcaster.md)
- [`BaseRequester`](BaseRequester.md)
- [`BaseStream`](BaseStream.md)
- [`BaseUser`](BaseUser.md)
- [`BaseMessage`](BaseMessage.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new Base(connection, subscription)

```ts
new Base<T, K>(connection: K, subscription: SubscriptionType<T, K>): Base<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |

#### Returns

[`Base`](Base.md)\<`T`, `K`\>

#### Source

[twitchapi/packages/eventsub/src/structures/messages/Base.ts:12](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/Base.ts#L12)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | `K` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |
