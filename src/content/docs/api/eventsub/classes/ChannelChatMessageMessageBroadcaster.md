---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessageBroadcaster"
---

## Extends

- [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatMessageMessageBroadcaster(connection, subscription, id, login, dislayName)

```ts
new ChannelChatMessageMessageBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
   id: string, 
   login: string, 
dislayName: string): ChannelChatMessageMessageBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `dislayName` | `string` |

#### Returns

[`ChannelChatMessageMessageBroadcaster`](/api/eventsub/classes/channelchatmessagemessagebroadcaster/)\<`K`\>

#### Overrides

[`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).[`constructor`](/api/eventsub/classes/basebroadcaster/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessageBroadcaster.ts:6

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`subscription` |
