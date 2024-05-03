---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesMessage"
---

The message received by the ChannelChatClearUserMessages event.

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

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

Builds up a ChannelChatClearUserMessages message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | The subscription which trigger this message. |
| `data` | `ChannelChatClearUserMessagesEvent` | The event data received with the subscription. |

#### Returns

[`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessages.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClearUserMessages`, `K`\> | The broadcaster of the channel where the user chat messages were cleared. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | The subscription which trigger this message. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |
| `user` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClearUserMessages`, `K`\> | The user whose messages were cleared. | - |

## Methods

### checkMessageType()

```ts
checkMessageType<U>(type: U): this is SubscriptionMessages<K>[U]
```

Checks whether the message is of a certain type.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type to check. |

#### Returns

`this is SubscriptionMessages<K>[U]`

Whether the message is of the type.

#### Inherited from

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`checkMessageType`](/api/eventsub/classes/basesubscriptionmessage/#checkmessagetype)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:24
