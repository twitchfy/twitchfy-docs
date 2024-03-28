---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginBroadcaster"
---

## Extends

- [`BaseBroadcaster`](BaseBroadcaster.md)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelAdBreakBeginBroadcaster(connection, subscription, id, login, displayName)

```ts
new ChannelAdBreakBeginBroadcaster<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelAdBreakBegin, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelAdBreakBeginBroadcaster<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelAdBreakBegin`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelAdBreakBeginBroadcaster`](ChannelAdBreakBeginBroadcaster.md)\<`K`\>

#### Overrides

[`BaseBroadcaster`](BaseBroadcaster.md).[`constructor`](BaseBroadcaster.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginBroadcaster.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseBroadcaster`](BaseBroadcaster.md).`connection` |
| `displayName` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`displayName` |
| `id` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`id` |
| `login` | `public` | `string` | [`BaseBroadcaster`](BaseBroadcaster.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelAdBreakBegin`, `K`\> | [`BaseBroadcaster`](BaseBroadcaster.md).`subscription` |
