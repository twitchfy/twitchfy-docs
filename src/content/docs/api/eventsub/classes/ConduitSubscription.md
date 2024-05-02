---
editUrl: false
next: false
prev: false
title: "ConduitSubscription"
---

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

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `conduit` | [`Conduit`](/api/eventsub/classes/conduit/) |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> |
| `data` | `PostEventSubSubscription` |

#### Returns

[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<`T`\>

#### Overrides

[`Subscription`](/api/eventsub/classes/subscription/).[`constructor`](/api/eventsub/classes/subscription/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:15

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `callbacks` | `public` | [`ConduitSubscriptionCallbackManager`](/api/eventsub/classes/conduitsubscriptioncallbackmanager/)\<`T`\> | - |
| `conduit` | `readonly` | [`Conduit`](/api/eventsub/classes/conduit/) | - |
| `cost` | `readonly` | `number` | [`Subscription`](/api/eventsub/classes/subscription/).`cost` |
| `createdAt` | `readonly` | `Date` | [`Subscription`](/api/eventsub/classes/subscription/).`createdAt` |
| `id` | `readonly` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`id` |
| `nonce` | `public` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`nonce` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] | [`Subscription`](/api/eventsub/classes/subscription/).`options` |
| `status` | `public` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`status` |
| `type` | `readonly` | `T` | [`Subscription`](/api/eventsub/classes/subscription/).`type` |
| `version` | `readonly` | `string` | [`Subscription`](/api/eventsub/classes/subscription/).`version` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is ConduitSubscription<U>
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

`this is ConduitSubscription<U>`

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:33

***

### delete()

```ts
delete(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:37

***

### onMessage()

```ts
onMessage(callback: ConduitSubscriptionCallback<T>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`ConduitSubscriptionCallback`](/api/eventsub/type-aliases/conduitsubscriptioncallback/)\<`T`\> |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscription.ts:27
