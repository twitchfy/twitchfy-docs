---
editUrl: false
next: false
prev: false
title: "ChannelFollowMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelFollow`, `K`\>

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

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowMessage.ts:16](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelFollow/ChannelFollowMessage.ts#L16)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelFollowBroadcaster`](/api/eventsub/classes/channelfollowbroadcaster/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `followedAt` | `public` | `Date` | - |
| `follower` | `public` | [`ChannelFollowUser`](/api/eventsub/classes/channelfollowuser/)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelFollow`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
