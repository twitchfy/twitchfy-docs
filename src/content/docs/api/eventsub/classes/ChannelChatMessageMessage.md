---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatMessageMessage(connection, subscription, data)

```ts
new ChannelChatMessageMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
data: ChannelChatMessageEvent): ChannelChatMessageMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](/api/eventsub/interfaces/channelchatmessageevent/) |

#### Returns

[`ChannelChatMessageMessage`](/api/eventsub/classes/channelchatmessagemessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessage.ts:15](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessage.ts#L15)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatMessageMessageBroadcaster`](/api/eventsub/classes/channelchatmessagemessagebroadcaster/)\<`K`\> | - |
| `chatter` | `public` | [`ChannelChatMessageMessageChatter`](/api/eventsub/classes/channelchatmessagemessagechatter/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `message` | `public` | [`ChannelMessage`](/api/eventsub/classes/channelmessage/)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
