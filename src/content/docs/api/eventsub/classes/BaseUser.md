---
editUrl: false
next: false
prev: false
title: "BaseUser"
---

## Extends

- [`Base`](Base.md)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new BaseUser(connection, subscription, id, login, displayName)

```ts
new BaseUser<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
   id: string, 
   login: string, 
displayName: string): BaseUser<T, K>
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

[`BaseUser`](BaseUser.md)\<`T`, `K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/BaseUser.ts:13

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `displayName` | `public` | `string` | - |
| `id` | `public` | `string` | - |
| `login` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> | [`Base`](Base.md).`subscription` |
