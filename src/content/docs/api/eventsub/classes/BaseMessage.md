---
editUrl: false
next: false
prev: false
title: "BaseMessage"
---

The message sent by the ChannelChatMessage event.

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseMessage(connection, subscription, data)

```ts
new BaseMessage<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
data: ChannelChatMessageEvent): BaseMessage<T, K>
```

Builds up a BaseMessage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. |
| `data` | [`ChannelChatMessageEvent`](/api/eventsub/interfaces/channelchatmessageevent/) | The event data received with the subscription. |

#### Returns

[`BaseMessage`](/api/eventsub/classes/basemessage/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseMessage.ts:55

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `bits` | `readonly` | `number` | The number of bits sent with the message. | - |
| `channelRewardId` | `readonly` | `string` | The ID of the channel points reward used to send the message. Null if the message was not sent using a channel points reward. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`Base`](/api/eventsub/classes/base/).`connection` |
| `content` | `readonly` | `string` | The content of the message. | - |
| `fragments` | `readonly` | [`Fragment`](/api/eventsub/classes/fragment/)\<[`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/)\>[] | The fragments of the message. | - |
| `id` | `readonly` | `string` | The ID of the message. | - |
| `reply` | `readonly` | [`MessageReply`](/api/eventsub/classes/messagereply/) | The reply to the message. Null if there is no reply. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `type` | `readonly` | [`MessageTypes`](/api/eventsub/type-aliases/messagetypes/) | The type of the message. | - |
