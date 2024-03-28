---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginRequester"
---

## Extends

- [`BaseRequester`](BaseRequester.md)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelAdBreakBeginRequester(connection, subscription, id, login, displayName)

```ts
new ChannelAdBreakBeginRequester<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelAdBreakBegin, K>, 
   id: string, 
   login: string, 
displayName: string): ChannelAdBreakBeginRequester<K>
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

[`ChannelAdBreakBeginRequester`](ChannelAdBreakBeginRequester.md)\<`K`\>

#### Overrides

[`BaseRequester`](BaseRequester.md).[`constructor`](BaseRequester.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginRequester.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseRequester`](BaseRequester.md).`connection` |
| `displayName` | `public` | `string` | [`BaseRequester`](BaseRequester.md).`displayName` |
| `id` | `public` | `string` | [`BaseRequester`](BaseRequester.md).`id` |
| `login` | `public` | `string` | [`BaseRequester`](BaseRequester.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelAdBreakBegin`, `K`\> | [`BaseRequester`](BaseRequester.md).`subscription` |
