---
editUrl: false
next: false
prev: false
title: "ChannelChatClearMessage"
---

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

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> |
| `data` | [`ChannelChatClearEvent`](/api/eventsub/interfaces/channelchatclearevent/) |

#### Returns

[`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts:11

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelChatClear`, `K`\> | - |
| `connection` | `public` | `K` | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

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
