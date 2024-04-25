---
editUrl: false
next: false
prev: false
title: "ChannelFollowUser"
---

## Extends

- [`BaseUser`](/api/eventsub/classes/baseuser/)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelFollowUser`](/api/eventsub/classes/channelfollowuser/)\<`K`\>

#### Overrides

[`BaseUser`](/api/eventsub/classes/baseuser/).[`constructor`](/api/eventsub/classes/baseuser/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowUser.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseUser`](/api/eventsub/classes/baseuser/).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`id` |
| `login` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | [`BaseUser`](/api/eventsub/classes/baseuser/).`subscription` |
