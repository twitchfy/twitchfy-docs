---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesMessage"
---

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

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> |
| `data` | [`ChannelChatClearUserMessagesEvent`](/api/eventsub/interfaces/channelchatclearusermessagesevent/) |

#### Returns

[`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessages.ts:13

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClearUserMessages`, `K`\> | - |
| `connection` | `public` | `K` | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |
| `user` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClearUserMessages`, `K`\> | - |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is SubscriptionMessages<K>[U]
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

`this is SubscriptionMessages<K>[U]`

#### Inherited from

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`checkSubscriptionType`](/api/eventsub/classes/basesubscriptionmessage/#checksubscriptiontype)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:11
