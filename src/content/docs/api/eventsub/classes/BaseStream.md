---
editUrl: false
next: false
prev: false
title: "BaseStream"
---

## Extends

- [`Base`](Base.md)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new BaseStream(connection, subscription, id, type, started_at)

```ts
new BaseStream<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
   id: string, 
   type: StreamTypes, 
started_at: string): BaseStream<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |
| `id` | `string` |
| `type` | [`StreamTypes`](../type-aliases/StreamTypes.md) |
| `started_at` | `string` |

#### Returns

[`BaseStream`](BaseStream.md)\<`T`, `K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/BaseStream.ts:14](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/messages/BaseStream.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `id` | `public` | `string` | - |
| `startedAt` | `public` | `Date` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> | [`Base`](Base.md).`subscription` |
| `type` | `public` | [`StreamTypes`](../type-aliases/StreamTypes.md) | - |
