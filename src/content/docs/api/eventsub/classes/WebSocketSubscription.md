---
editUrl: false
next: false
prev: false
title: "WebSocketSubscription"
---

## Extends

- [`Subscription`](Subscription.md)\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Constructors

### new WebSocketSubscription(connection, options, data)

```ts
new WebSocketSubscription<T>(
   connection: WebSocketConnection, 
   options: SubscriptionOptions<T>, 
data: PostEventSubSubscription): WebSocketSubscription<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebSocketConnection`](WebSocketConnection.md) |
| `options` | [`SubscriptionOptions`](../type-aliases/SubscriptionOptions.md)\<`T`\> |
| `data` | `PostEventSubSubscription` |

#### Returns

[`WebSocketSubscription`](WebSocketSubscription.md)\<`T`\>

#### Overrides

[`Subscription`](Subscription.md).[`constructor`](Subscription.md#constructors)

#### Source

twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:17

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `callbacks` | `public` | [`WebSocketSubscriptionCallbackManager`](WebSocketSubscriptionCallbackManager.md)\<`T`\> | - |
| `connection` | `readonly` | [`WebSocketConnection`](WebSocketConnection.md) | - |
| `cost` | `readonly` | `number` | [`Subscription`](Subscription.md).`cost` |
| `createdAt` | `readonly` | `Date` | [`Subscription`](Subscription.md).`createdAt` |
| `id` | `readonly` | `string` | [`Subscription`](Subscription.md).`id` |
| `nonce` | `public` | `string` | [`Subscription`](Subscription.md).`nonce` |
| `options` | `readonly` | [`SubscriptionTypeOptions`](../interfaces/SubscriptionTypeOptions.md)\[`T`\] | [`Subscription`](Subscription.md).`options` |
| `status` | `public` | `string` | [`Subscription`](Subscription.md).`status` |
| `type` | `readonly` | `T` | [`Subscription`](Subscription.md).`type` |
| `version` | `readonly` | `string` | [`Subscription`](Subscription.md).`version` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is WebSocketSubscription<U>
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

`this is WebSocketSubscription<U>`

#### Source

twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:37

***

### delete()

```ts
delete(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:41

***

### onMessage()

```ts
onMessage(callback: WebSocketSubscriptionCallback<T>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](../type-aliases/WebSocketSubscriptionCallback.md)\<`T`\> |

#### Returns

`void`

#### Source

twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:31
