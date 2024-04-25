---
editUrl: false
next: false
prev: false
title: "BaseBroadcaster"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseBroadcaster.ts:13

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `displayName` | `public` | `string` | - |
| `id` | `public` | `string` | - |
| `login` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
