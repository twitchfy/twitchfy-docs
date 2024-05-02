---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessage"
---

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

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

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessage.ts:15

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatMessage`, `K`\> | - |
| `chatter` | `public` | `ChannelChatMessageChatter`\<`K`\> | - |
| `connection` | `public` | `K` | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `message` | `public` | [`BaseMessage`](/api/eventsub/classes/basemessage/)\<`ChannelChatMessage`, `K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

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
