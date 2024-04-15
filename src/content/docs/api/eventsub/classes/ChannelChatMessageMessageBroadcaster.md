---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessageBroadcaster"
---

## Extends

- [`BaseBroadcaster`](BaseBroadcaster.md)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatMessageMessageBroadcaster(connection, subscription, id, login, dislayName)

```ts
new ChannelChatMessageMessageBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
   id: string, 
   login: string, 
dislayName: string): ChannelChatMessageMessageBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `dislayName` | `string` |

#### Returns

[`ChannelChatMessageMessageBroadcaster`](ChannelChatMessageMessageBroadcaster.md)\<`K`\>

#### Overrides

[`BaseBroadcaster`](BaseBroadcaster.md).[`constructor`](BaseBroadcaster.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessageBroadcaster.ts:6](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessageBroadcaster.ts#L6)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](BaseBroadcaster.md).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> | [`BaseBroadcaster`](BaseBroadcaster.md).`subscription` |
