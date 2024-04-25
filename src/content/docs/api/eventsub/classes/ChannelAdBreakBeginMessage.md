---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelAdBreakBeginMessage(connection, subscription, data)

```ts
new ChannelAdBreakBeginMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelAdBreakBegin, K>, 
data: ChannelAdBreakBeginEvent): ChannelAdBreakBeginMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> |
| `data` | [`ChannelAdBreakBeginEvent`](/api/eventsub/interfaces/channeladbreakbeginevent/) |

#### Returns

[`ChannelAdBreakBeginMessage`](/api/eventsub/classes/channeladbreakbeginmessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginMessage.ts:16

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelAdBreakBeginBroadcaster`](/api/eventsub/classes/channeladbreakbeginbroadcaster/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `duration` | `public` | `number` | - |
| `isAutomatic` | `public` | `boolean` | - |
| `requester` | `public` | [`ChannelAdBreakBeginRequester`](/api/eventsub/classes/channeladbreakbeginrequester/)\<`K`\> | - |
| `startedAt` | `public` | `Date` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
