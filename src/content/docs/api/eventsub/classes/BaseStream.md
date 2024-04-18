---
editUrl: false
next: false
prev: false
title: "BaseStream"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseStream(connection, subscription, id, type, started_at)

```ts
new BaseStream<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
   id: string, 
   type: StreamTypes, 
started_at: string): BaseStream<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
| `id` | `string` |
| `type` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) |
| `started_at` | `string` |

#### Returns

[`BaseStream`](/api/eventsub/classes/basestream/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/BaseStream.ts:14](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/structures/messages/BaseStream.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `id` | `public` | `string` | - |
| `startedAt` | `public` | `Date` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `type` | `public` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) | - |
