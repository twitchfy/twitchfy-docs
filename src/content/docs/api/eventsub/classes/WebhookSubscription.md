---
editUrl: false
next: false
prev: false
title: "WebhookSubscription"
---

## Extends

- [`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

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
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> |
| `data` | `PostEventSubSubscription` |
| `secret` | `string` |

#### Returns

[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>

#### Overrides

[`Subscription`](/api/eventsub/classes/subscription/).[`constructor`](/api/eventsub/classes/subscription/#constructors)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:19

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `callbacks` | `public` | [`WebhookSubscriptionCallbackManager`](/api/eventsub/classes/webhooksubscriptioncallbackmanager/)\<`T`\> | - |
| `connection` | `readonly` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) | - |
| `cost` | `readonly` | `number` | [`Subscription`](/api/eventsub/classes/subscription/).`cost` |
| `createdAt` | `readonly` | `Date` | [`Subscription`](/api/eventsub/classes/subscription/).`createdAt` |
| `id` | `readonly` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`id` |
| `nonce` | `public` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`nonce` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] | [`Subscription`](/api/eventsub/classes/subscription/).`options` |
| `secret` | `readonly` | `string` | - |
| `status` | `public` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`status` |
| `type` | `readonly` | `T` | [`Subscription`](/api/eventsub/classes/subscription/).`type` |
| `version` | `readonly` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`version` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is WebhookSubscription<U>
```

#### Type parameters

| Type parameter |
| :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

`this is WebhookSubscription<U>`

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:41

***

### delete()

```ts
delete(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:45

***

### onMessage()

```ts
onMessage(callback: WebhookSubscriptionCallback<T>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebhookSubscriptionCallback`](/api/eventsub/type-aliases/webhooksubscriptioncallback/)\<`T`\> |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscription.ts:35
