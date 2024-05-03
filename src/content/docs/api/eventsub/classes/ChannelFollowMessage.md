---
editUrl: false
next: false
prev: false
title: "ChannelFollowMessage"
---

The message received by the ChannelFollow event.

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.ChannelFollow`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelFollowMessage(connection, subscription, data)

```ts
new ChannelFollowMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelFollow, K>, 
data: ChannelFollowEvent): ChannelFollowMessage<K>
```

Builds up a ChannelFollow message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | The subscription which trigger this message. |
| `data` | [`ChannelFollowEvent`](/api/eventsub/interfaces/channelfollowevent/) | The event data received with the subscription. |

#### Returns

[`ChannelFollowMessage`](/api/eventsub/classes/channelfollowmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowMessage.ts:33

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelFollow`, `K`\> | The broadcaster of the channel who was followed. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `followedAt` | `readonly` | `Date` | The Date object when the follow occurred. | - |
| `follower` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelFollow`, `K`\> | The follower who followed the channel. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | The subscription which trigger this message. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

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
