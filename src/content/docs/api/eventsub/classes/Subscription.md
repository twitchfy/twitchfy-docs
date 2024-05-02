---
editUrl: false
next: false
prev: false
title: "Subscription"
---

## Extended by

- [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)
- [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)
- [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new Subscription(options, data)

```ts
new Subscription<T>(options: SubscriptionOptions<T>, data: PostEventSubSubscription): Subscription<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> |
| `data` | `PostEventSubSubscription` |

#### Returns

[`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/structures/Subscription.ts:25

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `cost` | `readonly` | `number` |
| `createdAt` | `readonly` | `Date` |
| `id` | `readonly` | `string` |
| `nonce` | `public` | `string` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] |
| `status` | `public` | `string` |
| `type` | `readonly` | `T` |
| `version` | `readonly` | `string` |
