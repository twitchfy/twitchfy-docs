---
editUrl: false
next: false
prev: false
title: "WebhookConnection"
---

A Webhook Connection.

## Extends

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>

## Constructors

### new WebhookConnection()

```ts
new WebhookConnection(options: WebhookConnectionOptions, server?: Express): WebhookConnection
```

Builds up a new WebhookConnection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/) | The options for the connection. |
| `server`? | `Express` | The express server used for receiving Twitch data. |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`constructor`](/api/eventsub/classes/baseconnection/#constructors)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:62

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | The base URL for the webhook callback. | - |
| `clientId` | `readonly` | `string` | The client ID of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientId` |
| `clientSecret` | `readonly` | `string` | The client secret of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientSecret` |
| `debug` | `public` | `boolean` | Whether the connection is in debug mode or not. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`debug` |
| `dropSubsAtStart` | `readonly` | `boolean` | Whether to drop subscriptions at start. This will delete all subscriptions that are currently active within the client (only webhook created) to avoid duplicated subscriptions if any storage was set. | - |
| `helixClient` | `readonly` | `HelixClient` | The Helix client used by the connection for making API Requests. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`helixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | The logger of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | Whether the connection should maintain the subscriptions or not between each start. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`maintainSubscriptions` |
| `secret` | `readonly` | `string` | The secret used for creating subscriptions within this connection. | - |
| `server` | `readonly` | `Express` | The express server used for receiving Twitch data. | - |
| `startServer` | `readonly` | `boolean` | Whether to start the server when the connection is started. | - |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\> | The storage adapter used by the connection for storing subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`storage` |
| `subscriptionRoute` | `readonly` | `string` | <p>The route for receiving Twitch messages.</p><p>**Default**</p><code>/subscriptions</code> | - |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The subscriptions of the connection. You will only receive events for this subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`subscriptions` |

## Accessors

### appToken

```ts
get appToken(): TokenAdapter<"app", boolean>
```

The app token used for the connection.

#### Returns

[`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:168

***

### url

```ts
get url(): string
```

The URL for the webhook callback. This is a join between the base url and the subscription route.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:86

## Methods

### addListener()

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### emit()

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\> |

##### Returns

`boolean`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:37

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\> |

##### Returns

`boolean`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:38

***

### eventNames()

```ts
eventNames(): (string | symbol)[] & keyof AsyncEventEmitterPredefinedEvents[] & keyof WebhookEvents[]
```

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`eventNames`](/api/eventsub/classes/baseconnection/#eventnames)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:45

***

### getMaxListeners()

```ts
getMaxListeners(): number
```

#### Returns

`number`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`getMaxListeners`](/api/eventsub/classes/baseconnection/#getmaxlisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:32

***

### listenerCount()

#### listenerCount(eventName)

```ts
listenerCount<K>(eventName: K): number
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`number`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:39

#### listenerCount(eventName)

```ts
listenerCount(eventName: string | symbol): number
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

##### Returns

`number`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:40

***

### listeners()

#### listeners(eventName)

```ts
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:33

#### listeners(eventName)

```ts
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:34

***

### makeDebug()

```ts
makeDebug(...args: any[]): void
```

Makes a debug log

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`makeDebug`](/api/eventsub/classes/baseconnection/#makedebug)

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:113

***

### makeWarn()

```ts
makeWarn(...args: any[]): void
```

Makes a warn log

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`makeWarn`](/api/eventsub/classes/baseconnection/#makewarn)

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:124

***

### off()

#### off(eventName, listener)

```ts
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

#### off(eventName, listener)

```ts
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:26

***

### on()

#### on(eventName, listener)

```ts
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

#### on(eventName, listener)

```ts
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### once()

#### once(eventName, listener)

```ts
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

#### once(eventName, listener)

```ts
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

***

### post()

```ts
post(
   headers: IncomingHttpHeaders, 
   body: any, 
   verification: (challenge: string) => any, 
   success: () => any, 
invalidSignature?: () => any): Promise<any>
```

Used for handling incoming Twitch requests in your custom non-Express server.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `headers` | `IncomingHttpHeaders` | The headers of the request. |
| `body` | `any` | The body of the request. |
| `verification` | (`challenge`: `string`) => `any` | A callback to be called when the request is a webhook callback verification and you need to send the challenge. |
| `success` | () => `any` | A callback to be called when the handling has suceeded. You will need to send a 200 status in the response after that. |
| `invalidSignature`? | () => `any` | A callback which is executed when the signature that has been sent by the requester is incorrect. |

#### Returns

`Promise`\<`any`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:181

***

### prependListener()

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:41

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:42

***

### prependOnceListener()

#### prependOnceListener(eventName, listener)

```ts
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:43

#### prependOnceListener(eventName, listener)

```ts
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:44

***

### rawListeners()

#### rawListeners(eventName)

```ts
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:35

#### rawListeners(eventName)

```ts
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:36

***

### removeAllListeners()

#### removeAllListeners(event)

```ts
removeAllListeners<K>(event: K): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `K` |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27

#### removeAllListeners(event)

```ts
removeAllListeners<K>(event?: K): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:28

#### removeAllListeners(event)

```ts
removeAllListeners(event: string | symbol): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:29

#### removeAllListeners(event)

```ts
removeAllListeners(event?: string | symbol): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `string` \| `symbol` |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:30

***

### removeListener()

#### removeListener(eventName, listener)

```ts
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:23

#### removeListener(eventName, listener)

```ts
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebhookEvents>, K, WebhookEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>, `K`, [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:24

***

### setAuth()

```ts
setAuth(appToken: TokenAdapter<"app", boolean>): WebhookConnection
```

Sets a new app token for the connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> | The new app token. |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

The connection.

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:158

***

### setMaxListeners()

```ts
setMaxListeners(n: number): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`setMaxListeners`](/api/eventsub/classes/baseconnection/#setmaxlisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:31

***

### start()

```ts
start(port?: number, callback?: () => void): Promise<boolean>
```

Starts the Webhook Connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `port`? | `number` | The port to start the server at if the startServer option is set to true. |
| `callback`? | () => `void` | A callback to be called when the server is started if the startServer option is set to true. |

#### Returns

`Promise`\<`boolean`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:143

***

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<WebhookSubscription<T>>
```

Subscribe to an EventSub event.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> | The options of the subscription. |

#### Returns

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribe`](/api/eventsub/classes/baseconnection/#subscribe)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:90

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<WebhookSubscription<T>[]>
```

Subscribe to multiple EventSub events.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\>[] | The options of the subscriptions. |

#### Returns

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribeAll`](/api/eventsub/classes/baseconnection/#subscribeall)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:111

***

### waitForAllListenersToComplete()

```ts
waitForAllListenersToComplete(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`waitForAllListenersToComplete`](/api/eventsub/classes/baseconnection/#waitforalllistenerstocomplete)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:46

***

### listenerCount()

#### listenerCount(emitter, eventName)

```ts
static listenerCount<EventMap, EventName>(emitter: AsyncEventEmitter<EventMap>, eventName: EventName | keyof AsyncEventEmitterPredefinedEvents): number
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `EventMap` *extends* `object` | - |
| `EventName` *extends* `PropertyKey` | keyof `EventMap` \| keyof AsyncEventEmitterPredefinedEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`EventMap`\> |
| `eventName` | `EventName` \| keyof AsyncEventEmitterPredefinedEvents |

##### Returns

`number`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:49

#### listenerCount(emitter, eventName)

```ts
static listenerCount(emitter: AsyncEventEmitter<any>, eventName: string | symbol): number
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`any`\> |
| `eventName` | `string` \| `symbol` |

##### Returns

`number`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:50

***

### on()

#### on(emitter, eventName, options)

```ts
static on<EventMap, EventName>(
   emitter: AsyncEventEmitter<EventMap>, 
   eventName: EventName, 
options?: AbortableMethods): AsyncGenerator<InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<EventMap>, EventName, EventMap>, void, unknown>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `EventMap` *extends* `object` | - |
| `EventName` *extends* `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventMap` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`EventMap`\> |
| `eventName` | `EventName` |
| `options`? | `AbortableMethods` |

##### Returns

`AsyncGenerator`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>, `void`, `unknown`\>

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:53

#### on(emitter, eventName, options)

```ts
static on(
   emitter: AsyncEventEmitter<any>, 
   eventName: string | symbol, 
options?: AbortableMethods): AsyncGenerator<any[], void, unknown>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`any`\> |
| `eventName` | `string` \| `symbol` |
| `options`? | `AbortableMethods` |

##### Returns

`AsyncGenerator`\<`any`[], `void`, `unknown`\>

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:54

***

### once()

#### once(emitter, eventName, options)

```ts
static once<EventMap, EventName>(
   emitter: AsyncEventEmitter<EventMap>, 
   eventName: EventName, 
options?: AbortableMethods): Promise<InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<EventMap>, EventName, EventMap>>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `EventMap` *extends* `object` | - |
| `EventName` *extends* `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventMap` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`EventMap`\> |
| `eventName` | `EventName` |
| `options`? | `AbortableMethods` |

##### Returns

`Promise`\<`InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`EventMap`\>, `EventName`, `EventMap`\>\>

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:51

#### once(emitter, eventName, options)

```ts
static once(
   emitter: AsyncEventEmitter<any>, 
   eventName: string | symbol, 
options?: AbortableMethods): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `AsyncEventEmitter`\<`any`\> |
| `eventName` | `string` \| `symbol` |
| `options`? | `AbortableMethods` |

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:52
