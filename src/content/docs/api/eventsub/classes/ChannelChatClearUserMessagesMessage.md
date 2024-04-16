---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatClearUserMessagesMessage(connection, subscription, data)

```ts
new ChannelChatClearUserMessagesMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClearUserMessages, K>, 
data: ChannelChatClearUserMessagesEvent): ChannelChatClearUserMessagesMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> |
| `data` | [`ChannelChatClearUserMessagesEvent`](/api/eventsub/interfaces/channelchatclearusermessagesevent/) |

#### Returns

[`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessages.ts:14](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessages.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatClearUserMessagesBroadcaster`](/api/eventsub/classes/channelchatclearusermessagesbroadcaster/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `user` | `public` | [`ChannelChatClearUserMessagesUser`](/api/eventsub/classes/channelchatclearusermessagesuser/)\<`K`\> | - |
