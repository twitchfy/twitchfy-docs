---
editUrl: false
next: false
prev: false
title: "ConduitSubscription"
---

A subscription created within a Conduit.

## Extends

- [`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new ConduitSubscription(conduit, options, data)

```ts
new ConduitSubscription<T>(
   conduit: Conduit, 
   options: SubscriptionOptions<T>, 
data: PostEventSubSubscription): ConduitSubscription<T>
```

Builds up a ConduitSubscription.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `conduit` | [`Conduit`](/api/eventsub/classes/conduit/) | The Conduit that created this subscription. |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> | The options for the subscription. |
| `data` | `PostEventSubSubscription` | The data from the API. |

#### Returns

[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<`T`\>

#### Overrides

[`Subscription`](/api/eventsub/classes/subscription/).[`constructor`](/api/eventsub/classes/subscription/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:30

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `callbacks` | `readonly` | [`ConduitSubscriptionCallbackManager`](/api/eventsub/classes/conduitsubscriptioncallbackmanager/)\<`T`\> | The callback manager for this subscription. | - |
| `conduit` | `readonly` | [`Conduit`](/api/eventsub/classes/conduit/) | The Conduit that created this subscription. | - |
| `cost` | `readonly` | `number` | The cost of the subscription. If the subscription doesn't needs an authorization this could be 1 (or 0 if the target user has authorized within your application) if not it will be 0. Maximum accumulated cost for webhooks subscriptions is 10000 while for websocket subscriptions is 3. | [`Subscription`](/api/eventsub/classes/subscription/).`cost` |
| `createdAt` | `readonly` | `Date` | The date when the subscription was created. | [`Subscription`](/api/eventsub/classes/subscription/).`createdAt` |
| `id` | `readonly` | `string` | The ID of the subscription. | [`Subscription`](/api/eventsub/classes/subscription/).`id` |
| `nonce` | `public` | `string` | The nonce of the subscription. An unique identifier which you can set to separate same type subscriptions. | [`Subscription`](/api/eventsub/classes/subscription/).`nonce` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] | The options used to create the subscription. | [`Subscription`](/api/eventsub/classes/subscription/).`options` |
| `status` | `public` | `string` | The status of the subscription. Normally is 'enabled'. | [`Subscription`](/api/eventsub/classes/subscription/).`status` |
| `type` | `readonly` | `T` | The type of the subscription. | [`Subscription`](/api/eventsub/classes/subscription/).`type` |
| `version` | `readonly` | `string` | The version of the subscription. This version is the latest version of the subscription type. | [`Subscription`](/api/eventsub/classes/subscription/).`version` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is ConduitSubscription<U>
```

Checks if the subscription is of a certain type.

#### Type parameters

| Type parameter |
| :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type to check. |

#### Returns

`this is ConduitSubscription<U>`

Whether the subscription is of the type.

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:57

***

### delete()

```ts
delete(): Promise<void>
```

Deletes the subscription.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:65

***

### onMessage()

```ts
onMessage(callback: ConduitSubscriptionCallback<T>): void
```

Adds a callback to the subscription, which will be executed when a message of this subscription is received.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`ConduitSubscriptionCallback`](/api/eventsub/type-aliases/conduitsubscriptioncallback/)\<`T`\> |  |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:46
