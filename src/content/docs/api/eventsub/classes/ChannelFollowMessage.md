---
editUrl: false
next: false
prev: false
title: "ChannelFollowMessage"
---

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

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> |
| `data` | [`ChannelFollowEvent`](/api/eventsub/interfaces/channelfollowevent/) |

#### Returns

[`ChannelFollowMessage`](/api/eventsub/classes/channelfollowmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowMessage.ts:15

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelFollow`, `K`\> | - |
| `connection` | `public` | `K` | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `followedAt` | `public` | `Date` | - |
| `follower` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelFollow`, `K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

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
