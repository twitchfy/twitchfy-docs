---
editUrl: false
next: false
prev: false
title: "ChannelFollowBroadcaster"
---

## Extends

- [`BaseBroadcaster`](BaseBroadcaster.md)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelFollowBroadcaster(connection, subscription, id, login, displayName)

```ts
new ChannelFollowBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelFollow, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelFollowBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelFollowBroadcaster`](ChannelFollowBroadcaster.md)\<`K`\>

#### Overrides

[`BaseBroadcaster`](BaseBroadcaster.md).[`constructor`](BaseBroadcaster.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowBroadcaster.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowBroadcaster.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](BaseBroadcaster.md).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> | [`BaseBroadcaster`](BaseBroadcaster.md).`subscription` |
