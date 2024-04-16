---
editUrl: false
next: false
prev: false
title: "WebSocketSubscription"
---

## Extends

- [`Subscription`](/api/eventsub/classes/subscription/)\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

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
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> |
| `data` | `PostEventSubSubscription` |

#### Returns

[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<`T`\>

#### Overrides

[`Subscription`](/api/eventsub/classes/subscription/).[`constructor`](/api/eventsub/classes/subscription/#constructors)

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:17](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscription.ts#L17)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `callbacks` | `public` | [`WebSocketSubscriptionCallbackManager`](/api/eventsub/classes/websocketsubscriptioncallbackmanager/)\<`T`\> | - |
| `connection` | `readonly` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | - |
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
checkSubscriptionType<U>(type: U): this is WebSocketSubscription<U>
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

`this is WebSocketSubscription<U>`

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:37](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscription.ts#L37)

***

### delete()

```ts
delete(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscription.ts#L41)

***

### onMessage()

```ts
onMessage(callback: WebSocketSubscriptionCallback<T>): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](/api/eventsub/type-aliases/websocketsubscriptioncallback/)\<`T`\> |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscription.ts:31](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscription.ts#L31)
