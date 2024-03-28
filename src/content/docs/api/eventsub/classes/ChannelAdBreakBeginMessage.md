---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

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
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelAdBreakBegin`, `K`\> |
| `data` | [`ChannelAdBreakBeginEvent`](../interfaces/ChannelAdBreakBeginEvent.md) |

#### Returns

[`ChannelAdBreakBeginMessage`](ChannelAdBreakBeginMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginMessage.ts:16

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelAdBreakBeginBroadcaster`](ChannelAdBreakBeginBroadcaster.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `duration` | `public` | `number` | - |
| `isAutomatic` | `public` | `boolean` | - |
| `requester` | `public` | [`ChannelAdBreakBeginRequester`](ChannelAdBreakBeginRequester.md)\<`K`\> | - |
| `startedAt` | `public` | `Date` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelAdBreakBegin`, `K`\> | [`Base`](Base.md).`subscription` |
