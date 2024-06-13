---
editUrl: false
next: false
prev: false
title: "BaseUser"
---

The base class representing an user structure.

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseUser()

```ts
new BaseUser<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
data: BaseUserData): BaseUser<T, K>
```

Builds up a BaseUser.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. |
| `data` | [`BaseUserData`](/api/eventsub/interfaces/baseuserdata/) | The event data received with the subscription. |

#### Returns

[`BaseUser`](/api/eventsub/classes/baseuser/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseUser.ts:31

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`Base`](/api/eventsub/classes/base/).`connection` |
| `displayName` | `readonly` | `string` | The display name of the user. | - |
| `id` | `readonly` | `string` | The ID of the user. | - |
| `login` | `readonly` | `string` | The login name of the user. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. | [`Base`](/api/eventsub/classes/base/).`subscription` |
