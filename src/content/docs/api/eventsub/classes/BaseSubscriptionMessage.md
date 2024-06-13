---
editUrl: false
next: false
prev: false
title: "BaseSubscriptionMessage"
---

The base class for all the subscription messages.

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Extended by

- [`ChannelAdBreakBeginMessage`](/api/eventsub/classes/channeladbreakbeginmessage/)
- [`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)
- [`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)
- [`ChannelFollowMessage`](/api/eventsub/classes/channelfollowmessage/)
- [`ChannelUpdateMessage`](/api/eventsub/classes/channelupdatemessage/)
- [`ChannelChatMessageMessage`](/api/eventsub/classes/channelchatmessagemessage/)
- [`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseSubscriptionMessage()

```ts
new BaseSubscriptionMessage<T, K>(connection: K, subscription: SubscriptionType<T, K>): BaseSubscriptionMessage<T, K>
```

Builds up a BaseSubscriptionMessage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. |

#### Returns

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:15

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`Base`](/api/eventsub/classes/base/).`connection` |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. | [`Base`](/api/eventsub/classes/base/).`subscription` |

## Methods

### checkMessageType()

```ts
checkMessageType<U>(type: U): this is SubscriptionMessages<K>[U]
```

Checks whether the message is of a certain type.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type to check. |

#### Returns

`this is SubscriptionMessages<K>[U]`

Whether the message is of the type.

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:24
