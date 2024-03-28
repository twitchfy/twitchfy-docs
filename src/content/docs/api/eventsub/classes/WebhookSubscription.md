---
editUrl: false
next: false
prev: false
title: "WebhookSubscription"
---

## Extends

- [`Subscription`](Subscription.md)\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Constructors

### new WebhookSubscription(connection, options, data, secret)

```ts
new WebhookSubscription<T>(
   connection: WebhookConnection, 
   options: SubscriptionOptions<T>, 
   data: PostEventSubSubscription, 
secret: string): WebhookSubscription<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebhookConnection`](WebhookConnection.md) |
| `options` | [`SubscriptionOptions`](../type-aliases/SubscriptionOptions.md)\<`T`\> |
| `data` | `PostEventSubSubscription` |
| `secret` | `string` |

#### Returns

[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>

#### Overrides

[`Subscription`](Subscription.md).[`constructor`](Subscription.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:19](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscription.ts#L19)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `callbacks` | `public` | [`WebhookSubscriptionCallbackManager`](WebhookSubscriptionCallbackManager.md)\<`T`\> | - |
| `connection` | `readonly` | [`WebhookConnection`](WebhookConnection.md) | - |
| `cost` | `readonly` | `number` | [`Subscription`](Subscription.md).`cost` |
| `createdAt` | `readonly` | `Date` | [`Subscription`](Subscription.md).`createdAt` |
| `id` | `readonly` | `string` | [`Subscription`](Subscription.md).`id` |
| `nonce` | `public` | `string` | [`Subscription`](Subscription.md).`nonce` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](../interfaces/SubscriptionTypeOptions.md)\[`T`\] | [`Subscription`](Subscription.md).`options` |
| `secret` | `readonly` | `string` | - |
| `status` | `public` | `string` | [`Subscription`](Subscription.md).`status` |
| `type` | `readonly` | `T` | [`Subscription`](Subscription.md).`type` |
| `version` | `readonly` | `string` | [`Subscription`](Subscription.md).`version` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is WebhookSubscription<U>
```

#### Type parameters

| Type parameter |
| :------ |
| `U` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

`this is WebhookSubscription<U>`

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:41](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscription.ts#L41)

***

### delete()

```ts
delete(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:45](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscription.ts#L45)

***

### onMessage()

```ts
onMessage(callback: WebhookSubscriptionCallback<T>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebhookSubscriptionCallback`](../type-aliases/WebhookSubscriptionCallback.md)\<`T`\> |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:35](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscription.ts#L35)
