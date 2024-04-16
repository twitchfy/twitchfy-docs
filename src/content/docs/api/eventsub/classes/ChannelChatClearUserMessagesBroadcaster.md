---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesBroadcaster"
---

## Extends

- [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatClearUserMessagesBroadcaster(connection, subscription, id, login, displayName)

```ts
new ChannelChatClearUserMessagesBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClearUserMessages, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelChatClearUserMessagesBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelChatClearUserMessagesBroadcaster`](/api/eventsub/classes/channelchatclearusermessagesbroadcaster/)\<`K`\>

#### Overrides

[`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).[`constructor`](/api/eventsub/classes/basebroadcaster/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessagesBroadcaster.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessagesBroadcaster.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/).`subscription` |
