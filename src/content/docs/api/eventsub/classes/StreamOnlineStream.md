---
editUrl: false
next: false
prev: false
title: "StreamOnlineStream"
---

## Extends

- [`BaseStream`](/api/eventsub/classes/basestream/)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new StreamOnlineStream(connection, subscription, id, type, started_at)

```ts
new StreamOnlineStream<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
   id: string, 
   type: StreamTypes, 
started_at: string): StreamOnlineStream<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> |
| `id` | `string` |
| `type` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) |
| `started_at` | `string` |

#### Returns

[`StreamOnlineStream`](/api/eventsub/classes/streamonlinestream/)\<`K`\>

#### Overrides

[`BaseStream`](/api/eventsub/classes/basestream/).[`constructor`](/api/eventsub/classes/basestream/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineStream.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseStream`](/api/eventsub/classes/basestream/).`connection` |
| `id` | `public` | `string` | [`BaseStream`](/api/eventsub/classes/basestream/).`id` |
| `startedAt` | `public` | `Date` | [`BaseStream`](/api/eventsub/classes/basestream/).`startedAt` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> | [`BaseStream`](/api/eventsub/classes/basestream/).`subscription` |
| `type` | `public` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) | [`BaseStream`](/api/eventsub/classes/basestream/).`type` |
