---
editUrl: false
next: false
prev: false
title: "BaseBroadcaster"
---

## Extends

- [`Base`](Base.md)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new BaseBroadcaster(connection, subscription, id, login, displayName)

```ts
new BaseBroadcaster<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
   id: string, 
   login: string, 
displayName: string): BaseBroadcaster<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`BaseBroadcaster`](BaseBroadcaster.md)\<`T`, `K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/BaseBroadcaster.ts:13](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/BaseBroadcaster.ts#L13)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `displayName` | `public` | `string` | - |
| `id` | `public` | `string` | - |
| `login` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> | [`Base`](Base.md).`subscription` |
