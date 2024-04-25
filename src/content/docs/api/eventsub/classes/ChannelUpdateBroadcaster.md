---
editUrl: false
next: false
prev: false
title: "ChannelUpdateBroadcaster"
---

## Extends

- [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelUpdateBroadcaster(connection, subscription, id, login, displayName)

```ts
new ChannelUpdateBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelUpdate, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelUpdateBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelUpdateBroadcaster`](/api/eventsub/classes/channelupdatebroadcaster/)\<`K`\>

#### Overrides

[`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).[`constructor`](/api/eventsub/classes/basebroadcaster/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateBroadcaster.ts:8](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateBroadcaster.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`subscription` |
