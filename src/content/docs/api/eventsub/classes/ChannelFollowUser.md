---
editUrl: false
next: false
prev: false
title: "ChannelFollowUser"
---

## Extends

- [`BaseUser`](BaseUser.md)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelFollowUser(connection, subscription, id, login, displayName)

```ts
new ChannelFollowUser<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelFollow, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelFollowUser<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelFollowUser`](ChannelFollowUser.md)\<`K`\>

#### Overrides

[`BaseUser`](BaseUser.md).[`constructor`](BaseUser.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowUser.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseUser`](BaseUser.md).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](BaseUser.md).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](BaseUser.md).`id` |
| `login` | `public` | `string` | [`BaseUser`](BaseUser.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelFollow`, `K`\> | [`BaseUser`](BaseUser.md).`subscription` |
