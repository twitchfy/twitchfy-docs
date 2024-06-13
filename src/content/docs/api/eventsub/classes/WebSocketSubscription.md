---
editUrl: false
next: false
prev: false
title: "WebSocketSubscription"
---

A subscription created within a WebSocketConnection.

## Extends

- [`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new WebSocketSubscription()

```ts
new WebSocketSubscription<T>(
   connection: WebSocketConnection, 
   options: SubscriptionOptions<T>, 
data: PostEventSubSubscription): WebSocketSubscription<T>
```

Builds up a new WebSocketSubscription.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The connection used for this subscription. |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> | The options for the subscription. |
| `data` | `PostEventSubSubscription` | The data for the subscription. |

#### Returns

[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<`T`\>

#### Overrides

[`Subscription`](/api/eventsub/classes/subscription/).[`constructor`](/api/eventsub/classes/subscription/#constructors)

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:32

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `callbacks` | `readonly` | [`WebSocketSubscriptionCallbackManager`](/api/eventsub/classes/websocketsubscriptioncallbackmanager/)\<`T`\> | The callback manager for this subscription. | - |
| `connection` | `readonly` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The connection used for this subscription. | - |
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
checkSubscriptionType<U>(type: U): this is WebSocketSubscription<U>
```

Checks if the subscription is of a specific type.

#### Type parameters

| Type parameter |
| :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type to check. |

#### Returns

`this is WebSocketSubscription<U>`

Whether the subscription is of the type.

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:62

***

### delete()

```ts
delete(): Promise<void>
```

Deletes the subscription.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:69

***

### onMessage()

```ts
onMessage(callback: WebSocketSubscriptionCallback<T>): void
```

Adds a new callback to the subscription. This callback will be executed when a message within this subscription is received.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](/api/eventsub/type-aliases/websocketsubscriptioncallback/)\<`T`\> | The callback to add. |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:51
