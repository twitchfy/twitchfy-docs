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

[twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowUser.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowUser.ts#L7)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseUser`](/api/eventsub/classes/baseuser/).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`id` |
| `login` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | [`BaseUser`](/api/eventsub/classes/baseuser/).`subscription` |
