---
editUrl: false
next: false
prev: false
title: "ChannelChatClearMessage"
---

The message received by the ChannelChatClear event.

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.ChannelChatClear`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatClearMessage(connection, subscription, data)

```ts
new ChannelChatClearMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClear, K>, 
data: ChannelChatClearEvent): ChannelChatClearMessage<K>
```

Builds up a ChannelChatClear message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> | The subscription which trigger this message. |
| `data` | `ChannelChatClearEvent` | The event data received with the subscription. |

#### Returns

[`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts:23

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClear`, `K`\> | The broadcaster of the channel where the chat was cleared. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> | The subscription which trigger this message. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

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
