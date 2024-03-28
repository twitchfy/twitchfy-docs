---
editUrl: false
next: false
prev: false
title: "ChannelFollowMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelFollowMessage(connection, subscription, data)

```ts
new ChannelFollowMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelFollow, K>, 
data: ChannelFollowEvent): ChannelFollowMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> |
| `data` | [`ChannelFollowEvent`](../interfaces/ChannelFollowEvent.md) |

#### Returns

[`ChannelFollowMessage`](ChannelFollowMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowMessage.ts:16

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelFollowBroadcaster`](ChannelFollowBroadcaster.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `followedAt` | `public` | `Date` | - |
| `follower` | `public` | [`ChannelFollowUser`](ChannelFollowUser.md)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> | [`Base`](Base.md).`subscription` |
