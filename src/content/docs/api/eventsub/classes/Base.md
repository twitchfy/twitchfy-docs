---
editUrl: false
next: false
prev: false
title: "Base"
---

## Extended by

- [`ChannelUpdateCategory`](/api/eventsub/classes/channelupdatecategory/)
- [`BaseStream`](/api/eventsub/classes/basestream/)
- [`BaseUser`](/api/eventsub/classes/baseuser/)
- [`BaseMessage`](/api/eventsub/classes/basemessage/)
- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new Base(connection, subscription)

```ts
new Base<T, K>(connection: K, subscription: SubscriptionType<T, K>): Base<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |

#### Returns

[`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

#### Source

twitchfy/packages/eventsub/src/structures/messages/Base.ts:12

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | `K` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
