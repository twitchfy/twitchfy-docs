---
editUrl: false
next: false
prev: false
title: "StreamOnlineStream"
---

## Extends

- [`BaseStream`](BaseStream.md)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new StreamOnlineStream(connection, subscription, id, type, started_at)

```ts
new StreamOnlineStream<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
   id: string, 
   type: StreamTypes, 
started_at: string): StreamOnlineStream<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> |
| `id` | `string` |
| `type` | [`StreamTypes`](../type-aliases/StreamTypes.md) |
| `started_at` | `string` |

#### Returns

[`StreamOnlineStream`](StreamOnlineStream.md)\<`K`\>

#### Overrides

[`BaseStream`](BaseStream.md).[`constructor`](BaseStream.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineStream.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineStream.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseStream`](BaseStream.md).`connection` |
| `id` | `public` | `string` | [`BaseStream`](BaseStream.md).`id` |
| `startedAt` | `public` | `Date` | [`BaseStream`](BaseStream.md).`startedAt` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> | [`BaseStream`](BaseStream.md).`subscription` |
| `type` | `public` | [`StreamTypes`](../type-aliases/StreamTypes.md) | [`BaseStream`](BaseStream.md).`type` |
