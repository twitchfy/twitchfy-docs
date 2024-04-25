---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginRequester"
---

## Extends

- [`BaseRequester`](/api/eventsub/classes/baserequester/)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |

#### Returns

[`ChannelAdBreakBeginRequester`](/api/eventsub/classes/channeladbreakbeginrequester/)\<`K`\>

#### Overrides

[`BaseRequester`](/api/eventsub/classes/baserequester/).[`constructor`](/api/eventsub/classes/baserequester/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginRequester.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseRequester`](/api/eventsub/classes/baserequester/).`connection` |
| `displayName` | `public` | `string` | [`BaseRequester`](/api/eventsub/classes/baserequester/).`displayName` |
| `id` | `public` | `string` | [`BaseRequester`](/api/eventsub/classes/baserequester/).`id` |
| `login` | `public` | `string` | [`BaseRequester`](/api/eventsub/classes/baserequester/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> | [`BaseRequester`](/api/eventsub/classes/baserequester/).`subscription` |
