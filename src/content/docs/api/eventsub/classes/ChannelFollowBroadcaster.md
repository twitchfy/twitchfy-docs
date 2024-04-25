---
editUrl: false
next: false
prev: false
title: "ChannelFollowBroadcaster"
---

## Extends

- [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelFollowBroadcaster(connection, subscription, id, login, displayName)

```ts
new ChannelFollowBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelFollow, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelFollowBroadcaster<K>
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

[`ChannelFollowBroadcaster`](/api/eventsub/classes/channelfollowbroadcaster/)\<`K`\>

#### Overrides

[`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).[`constructor`](/api/eventsub/classes/basebroadcaster/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowBroadcaster.ts:8](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowBroadcaster.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`subscription` |
