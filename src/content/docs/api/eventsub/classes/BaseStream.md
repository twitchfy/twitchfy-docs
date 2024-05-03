---
editUrl: false
next: false
prev: false
title: "BaseStream"
---

The base class representing an stream structure.

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseStream(connection, subscription, data)

```ts
new BaseStream<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
data: BaseStreamData): BaseStream<T, K>
```

Builds up a BaseStream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. |
| `data` | [`BaseStreamData`](/api/eventsub/interfaces/basestreamdata/) | The event data received with the subscription. |

#### Returns

[`BaseStream`](/api/eventsub/classes/basestream/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseStream.ts:32

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`Base`](/api/eventsub/classes/base/).`connection` |
| `id` | `readonly` | `string` | The ID of the stream. | - |
| `startedAt` | `readonly` | `Date` | The Date object when the stream started. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which trigger this message. | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `type` | `readonly` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) | The type of the stream. Currently, it can only be 'live'. | - |
