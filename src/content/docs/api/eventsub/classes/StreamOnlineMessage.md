---
editUrl: false
next: false
prev: false
title: "StreamOnlineMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new StreamOnlineMessage(connection, subscription, data)

```ts
new StreamOnlineMessage<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
data: StreamOnlineEvent): StreamOnlineMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> |
| `data` | [`StreamOnlineEvent`](../interfaces/StreamOnlineEvent.md) |

#### Returns

[`StreamOnlineMessage`](StreamOnlineMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineMessage.ts:14

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`StreamOnlineBroadcaster`](StreamOnlineBroadcaster.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `stream` | `public` | [`StreamOnlineStream`](StreamOnlineStream.md)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`StreamOnline`, `K`\> | [`Base`](Base.md).`subscription` |
