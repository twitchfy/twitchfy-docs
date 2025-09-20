---
editUrl: false
next: false
prev: false
title: "WebSocketConnection"
---

The WebSocket connection used for EventSub.

## Extends

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/), [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>

## Constructors

### new WebSocketConnection()

```ts
new WebSocketConnection(options: WebSocketConnectionOptions): WebSocketConnection
```

Builds up a new WebSocketConnection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebSocketConnectionOptions`](/api/eventsub/type-aliases/websocketconnectionoptions/) | The options for the connection. |

#### Returns

[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`constructor`](/api/eventsub/classes/baseconnection/#constructors)

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:35

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `clientId` | `readonly` | `string` | The client ID of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientId` |
| `clientSecret` | `readonly` | `string` | The client secret of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientSecret` |
| `debug` | `public` | `boolean` | Whether the connection is in debug mode or not. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`debug` |
| `helixClient` | `readonly` | `HelixClient` | The Helix client used by the connection for making API Requests. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`helixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | The logger of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | Whether the connection should maintain the subscriptions or not between each start. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`maintainSubscriptions` |
| `proxy?` | `readonly` | `string` | The proxy url used for the connection. | - |
| `sessionId` | `public` | `string` | The session id of the connection. | - |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\> | The storage adapter used by the connection for storing subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`storage` |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/), [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The subscriptions of the connection. You will only receive events for this subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`subscriptions` |
| `ws` | `public` | [`WebSocket`](/api/eventsub/classes/websocket/) | The WebSocket client used for the connection. | - |

## Accessors

### userToken

```ts
get userToken(): UserTokenAdapter<boolean>
```

Gets the user token that is being used for the connection.

#### Returns

`UserTokenAdapter`\<`boolean`\>

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:123

## Methods

### addListener()

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### connect()

```ts
connect(): Promise<void>
```

Connects to the WebSocket server.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:54

***

### emit()

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\> |

##### Returns

`boolean`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:37

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\> |

##### Returns

`boolean`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:38

***

### eventNames()

```ts
eventNames(): (string | symbol)[] & keyof AsyncEventEmitterPredefinedEvents[] & keyof WebSocketEvents[]
```

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)[]

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
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

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
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:33

#### listeners(eventName)

```ts
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>[]
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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\>[]

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
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

#### off(eventName, listener)

```ts
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

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
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

#### on(eventName, listener)

```ts
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

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
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

#### once(eventName, listener)

```ts
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

***

### prependListener()

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:41

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

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
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:43

#### prependOnceListener(eventName, listener)

```ts
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

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
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>[]

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:35

#### rawListeners(eventName)

```ts
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>[]
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

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>[]

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
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

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
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

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
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:23

#### removeListener(eventName, listener)

```ts
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<WebSocketEvents>, K, WebSocketEvents>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<[`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>, `K`, [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:24

***

### setAuth()

```ts
setAuth(userToken: TokenAdapter<"implicit" | "code", boolean>): WebSocketConnection
```

Sets the user token for the connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"implicit"` \| `"code"`, `boolean`\> | The new user token to set. |

#### Returns

[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)

The connection.

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:113

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

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<WebSocketSubscription<T>>
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

`Promise`\<[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<`T`\>\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribe`](/api/eventsub/classes/baseconnection/#subscribe)

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:60

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<WebSocketSubscription<T>[]>
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

`Promise`\<[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribeAll`](/api/eventsub/classes/baseconnection/#subscribeall)

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketConnection.ts:81

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
