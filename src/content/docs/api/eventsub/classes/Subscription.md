---
editUrl: false
next: false
prev: false
title: "Subscription"
---

A base subscription. Used as a parent of every type of subscription.

## Extended by

- [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)
- [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)
- [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new Subscription()

```ts
new Subscription<T>(options: SubscriptionOptions<T>, data: PostEventSubSubscription): Subscription<T>
```

Builds up a Base Subscription.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> | The options for the subscription. |
| `data` | `PostEventSubSubscription` | The data from the API. |

#### Returns

[`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/structures/Subscription.ts:57

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `cost` | `readonly` | `number` | The cost of the subscription. If the subscription doesn't needs an authorization this could be 1 (or 0 if the target user has authorized within your application) if not it will be 0. Maximum accumulated cost for webhooks subscriptions is 10000 while for websocket subscriptions is 3. |
| `createdAt` | `readonly` | `Date` | The date when the subscription was created. |
| `id` | `readonly` | `string` | The ID of the subscription. |
| `nonce` | `public` | `string` | The nonce of the subscription. An unique identifier which you can set to separate same type subscriptions. |
| `options` | `readonly` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] | The options used to create the subscription. |
| `status` | `public` | `string` | The status of the subscription. Normally is 'enabled'. |
| `type` | `readonly` | `T` | The type of the subscription. |
| `version` | `readonly` | `string` | The version of the subscription. This version is the latest version of the subscription type. |
