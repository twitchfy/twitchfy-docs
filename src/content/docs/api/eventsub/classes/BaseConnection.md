---
editUrl: false
next: false
prev: false
title: "BaseConnection"
---

The base class for all the connections.

## Extends

- [`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/)\<`U`\>

## Extended by

- [`Conduit`](/api/eventsub/classes/conduit/)
- [`WebhookConnection`](/api/eventsub/classes/webhookconnection/)
- [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)

## Type parameters

| Type parameter |
| :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |
| `U` *extends* [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/) \| [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/) \| [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/) |

## Constructors

### new BaseConnection()

```ts
new BaseConnection<K, U>(options: BaseConnectionOptions<K>): BaseConnection<K, U>
```

Builds up a BaseConnection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`BaseConnectionOptions`](/api/eventsub/type-aliases/baseconnectionoptions/)\<`K`\> | The options of the connection. |

#### Returns

[`BaseConnection`](/api/eventsub/classes/baseconnection/)\<`K`, `U`\>

#### Overrides

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`constructor`](/api/eventsub/classes/eventsubeventemitter/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:74

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `clientId` | `readonly` | `string` | The client ID of the connection. |
| `clientSecret` | `readonly` | `string` | The client secret of the connection. |
| `debug` | `public` | `boolean` | Whether the connection is in debug mode or not. |
| `helixClient` | `readonly` | `HelixClient` | The Helix client used by the connection for making API Requests. |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | The logger of the connection. |
| `maintainSubscriptions` | `readonly` | `boolean` | Whether the connection should maintain the subscriptions or not between each start. |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<`K`\> | The storage adapter used by the connection for storing subscriptions. |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<`K`, [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The subscriptions of the connection. You will only receive events for this subscriptions. |

## Methods

### addListener()

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`addListener`](/api/eventsub/classes/eventsubeventemitter/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

#### addListener(eventName, listener)

```ts
addListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`addListener`](/api/eventsub/classes/eventsubeventemitter/#addlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### emit()

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<U>, K, U>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\> |

##### Returns

`boolean`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`emit`](/api/eventsub/classes/eventsubeventemitter/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:37

#### emit(eventName, args)

```ts
emit<K>(eventName: K, ...args: InternalGetAsyncEventEmitterEventParameters<AsyncEventEmitter<U>, K, U>): boolean
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `InternalGetAsyncEventEmitterEventParameters`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\> |

##### Returns

`boolean`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`emit`](/api/eventsub/classes/eventsubeventemitter/#emit)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:38

***

### eventNames()

```ts
eventNames(): (string | symbol)[] & keyof AsyncEventEmitterPredefinedEvents[] & keyof U[]
```

#### Returns

(`string` \| `symbol`)[] & keyof `AsyncEventEmitterPredefinedEvents`[] & keyof `U`[]

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`eventNames`](/api/eventsub/classes/eventsubeventemitter/#eventnames)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`getMaxListeners`](/api/eventsub/classes/eventsubeventemitter/#getmaxlisteners)

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
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`number`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:40

***

### listeners()

#### listeners(eventName)

```ts
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listeners`](/api/eventsub/classes/eventsubeventemitter/#listeners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:33

#### listeners(eventName)

```ts
listeners<K>(eventName: K): Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>[]
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

`Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\>[]

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listeners`](/api/eventsub/classes/eventsubeventemitter/#listeners)

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

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:124

***

### off()

#### off(eventName, listener)

```ts
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`off`](/api/eventsub/classes/eventsubeventemitter/#off)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

#### off(eventName, listener)

```ts
off<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`off`](/api/eventsub/classes/eventsubeventemitter/#off)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:26

***

### on()

#### on(eventName, listener)

```ts
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

#### on(eventName, listener)

```ts
on<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### once()

#### once(eventName, listener)

```ts
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

#### once(eventName, listener)

```ts
once<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

***

### prependListener()

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependListener`](/api/eventsub/classes/eventsubeventemitter/#prependlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:41

#### prependListener(eventName, listener)

```ts
prependListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependListener`](/api/eventsub/classes/eventsubeventemitter/#prependlistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:42

***

### prependOnceListener()

#### prependOnceListener(eventName, listener)

```ts
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependOnceListener`](/api/eventsub/classes/eventsubeventemitter/#prependoncelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:43

#### prependOnceListener(eventName, listener)

```ts
prependOnceListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependOnceListener`](/api/eventsub/classes/eventsubeventemitter/#prependoncelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:44

***

### rawListeners()

#### rawListeners(eventName)

```ts
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>[]
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

##### Returns

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>[]

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`rawListeners`](/api/eventsub/classes/eventsubeventemitter/#rawlisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:35

#### rawListeners(eventName)

```ts
rawListeners<K>(eventName: K): InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>[]
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

`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>[]

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`rawListeners`](/api/eventsub/classes/eventsubeventemitter/#rawlisteners)

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
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `K` |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeAllListeners`](/api/eventsub/classes/eventsubeventemitter/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27

#### removeAllListeners(event)

```ts
removeAllListeners<K>(event?: K): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeAllListeners`](/api/eventsub/classes/eventsubeventemitter/#removealllisteners)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeAllListeners`](/api/eventsub/classes/eventsubeventemitter/#removealllisteners)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeAllListeners`](/api/eventsub/classes/eventsubeventemitter/#removealllisteners)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:30

***

### removeListener()

#### removeListener(eventName, listener)

```ts
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeListener`](/api/eventsub/classes/eventsubeventemitter/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:23

#### removeListener(eventName, listener)

```ts
removeListener<K>(eventName: K, listener: Exclude<InternalAsyncEventEmitterInternalListenerForEvent<AsyncEventEmitter<U>, K, U>["listener"], undefined>): this
```

##### Type parameters

| Type parameter |
| :------ |
| `K` *extends* `string` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | `Exclude`\<`InternalAsyncEventEmitterInternalListenerForEvent`\<`AsyncEventEmitter`\<`U`\>, `K`, `U`\>\[`"listener"`\], `undefined`\> |

##### Returns

`this`

##### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeListener`](/api/eventsub/classes/eventsubeventemitter/#removelistener)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:24

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`setMaxListeners`](/api/eventsub/classes/eventsubeventemitter/#setmaxlisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:31

***

### subscribe()

```ts
abstract subscribe<T>(options: SubscriptionOptions<T>): Promise<SubscriptionType<T, K>>
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

`Promise`\<[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>\>

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:100

***

### subscribeAll()

```ts
abstract subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<SubscriptionType<T, K>[]>
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

`Promise`\<[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>[]\>

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:106

***

### waitForAllListenersToComplete()

```ts
waitForAllListenersToComplete(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`waitForAllListenersToComplete`](/api/eventsub/classes/eventsubeventemitter/#waitforalllistenerstocomplete)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once-1)

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:52
