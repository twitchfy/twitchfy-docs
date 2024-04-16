---
editUrl: false
next: false
prev: false
title: "ChannelMessage"
---

## Extends

- [`BaseMessage`](/api/eventsub/classes/basemessage/)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelMessage(connection, subscription, data)

```ts
new ChannelMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
data: ChannelChatMessageEvent): ChannelMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](/api/eventsub/interfaces/channelchatmessageevent/) |

#### Returns

[`ChannelMessage`](/api/eventsub/classes/channelmessage/)\<`K`\>

#### Overrides

[`BaseMessage`](/api/eventsub/classes/basemessage/).[`constructor`](/api/eventsub/classes/basemessage/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelMessage.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelMessage.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `bits` | `public` | `number` | [`BaseMessage`](/api/eventsub/classes/basemessage/).`bits` |
| `channelRewardId` | `public` | `string` | [`BaseMessage`](/api/eventsub/classes/basemessage/).`channelRewardId` |
| `connection` | `public` | `K` | [`BaseMessage`](/api/eventsub/classes/basemessage/).`connection` |
| `content` | `public` | `string` | [`BaseMessage`](/api/eventsub/classes/basemessage/).`content` |
| `fragments` | `public` | [`Fragment`](/api/eventsub/classes/fragment/)\<[`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/)\>[] | [`BaseMessage`](/api/eventsub/classes/basemessage/).`fragments` |
| `id` | `public` | `string` | [`BaseMessage`](/api/eventsub/classes/basemessage/).`id` |
| `reply` | `public` | [`MessageReply`](/api/eventsub/classes/messagereply/) | [`BaseMessage`](/api/eventsub/classes/basemessage/).`reply` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> | [`BaseMessage`](/api/eventsub/classes/basemessage/).`subscription` |
| `type` | `public` | [`MessageTypes`](/api/eventsub/type-aliases/messagetypes/) | [`BaseMessage`](/api/eventsub/classes/basemessage/).`type` |
