---
editUrl: false
next: false
prev: false
title: "BaseRequester"
---

## Extends

- [`Base`](Base.md)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new BaseRequester(connection, subscription, id, login, displayName)

```ts
new BaseRequester<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
   id: string, 
   login: string, 
displayName: string): BaseRequester<T, K>
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

[`BaseRequester`](BaseRequester.md)\<`T`, `K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/BaseRequester.ts:13

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `displayName` | `public` | `string` | - |
| `id` | `public` | `string` | - |
| `login` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> | [`Base`](Base.md).`subscription` |
