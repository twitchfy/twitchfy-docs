---
editUrl: false
next: false
prev: false
title: "ChannelUpdateMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelUpdateMessage(connection, subscription, data)

```ts
new ChannelUpdateMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelUpdate, K>, 
data: ChannelUpdateEvent): ChannelUpdateMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelUpdate`, `K`\> |
| `data` | [`ChannelUpdateEvent`](../interfaces/ChannelUpdateEvent.md) |

#### Returns

[`ChannelUpdateMessage`](ChannelUpdateMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateMessage.ts:21

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelUpdateBroadcaster`](ChannelUpdateBroadcaster.md)\<`K`\> | - |
| `category` | `public` | [`ChannelUpdateCategory`](ChannelUpdateCategory.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `labels` | `public` | `string` | - |
| `language` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelUpdate`, `K`\> | [`Base`](Base.md).`subscription` |
| `title` | `public` | `string` | - |
