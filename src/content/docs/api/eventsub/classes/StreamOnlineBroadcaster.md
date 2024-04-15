---
editUrl: false
next: false
prev: false
title: "StreamOnlineBroadcaster"
---

## Extends

- [`BaseBroadcaster`](BaseBroadcaster.md)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new StreamOnlineBroadcaster(connection, subscription, id, login, displayName)

```ts
new StreamOnlineBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
   id: string, 
   login: string, 
displayName: string): StreamOnlineBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`StreamOnlineBroadcaster`](StreamOnlineBroadcaster.md)\<`K`\>

#### Overrides

[`BaseBroadcaster`](BaseBroadcaster.md).[`constructor`](BaseBroadcaster.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineBroadcaster.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineBroadcaster.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](BaseBroadcaster.md).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> | [`BaseBroadcaster`](BaseBroadcaster.md).`subscription` |
