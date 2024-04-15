---
editUrl: false
next: false
prev: false
title: "Subscription"
---

## Extended by

- [`WebhookSubscription`](WebhookSubscription.md)
- [`WebSocketSubscription`](WebSocketSubscription.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Constructors

### new Subscription(options, data)

```ts
new Subscription<T>(options: SubscriptionOptions<T>, data: PostEventSubSubscription): Subscription<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`SubscriptionOptions`](../type-aliases/SubscriptionOptions.md)\<`T`\> |
| `data` | `PostEventSubSubscription` |

#### Returns

[`Subscription`](Subscription.md)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/structures/Subscription.ts:25](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/Subscription.ts#L25)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `cost` | `readonly` | `number` |
| `createdAt` | `readonly` | `Date` |
| `id` | `readonly` | `string` |
| `nonce` | `public` | `string` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](../interfaces/SubscriptionTypeOptions.md)\[`T`\] |
| `status` | `public` | `string` |
| `type` | `readonly` | `T` |
| `version` | `readonly` | `string` |
