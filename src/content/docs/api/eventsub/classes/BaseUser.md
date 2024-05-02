---
editUrl: false
next: false
prev: false
title: "BaseUser"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseUser(connection, subscription, data)

```ts
new BaseUser<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
data: BaseUserData): BaseUser<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
| `data` | [`BaseUserData`](/api/eventsub/interfaces/baseuserdata/) |

#### Returns

[`BaseUser`](/api/eventsub/classes/baseuser/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseUser.ts:13

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `displayName` | `public` | `string` | - |
| `id` | `public` | `string` | - |
| `login` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
