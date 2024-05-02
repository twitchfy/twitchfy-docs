---
editUrl: false
next: false
prev: false
title: "BaseSubscriptionMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new BaseSubscriptionMessage(connection, subscription)

```ts
new BaseSubscriptionMessage<T, K>(connection: K, subscription: SubscriptionType<T, K>): BaseSubscriptionMessage<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |

#### Returns

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:7

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is SubscriptionMessages<K>[U]
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

`this is SubscriptionMessages<K>[U]`

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:11
