---
editUrl: false
next: false
prev: false
title: "EventSubEventEmitter"
---

The EventSub Event Emitter of any type of connection.

## Extends

- `AsyncEventEmitter`\<`U`\>

## Extended by

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)

## Type parameters

| Type parameter |
| :------ |
| `U` *extends* [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/) \| [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/) \| [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/) |

## Constructors

### new EventSubEventEmitter()

```ts
new EventSubEventEmitter<U>(): EventSubEventEmitter<U>
```

Builds up a EventSub Event Emitter.

#### Returns

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/)\<`U`\>

#### Overrides

`AsyncEventEmitter<U>.constructor`

#### Source

twitchfy/packages/eventsub/src/structures/BaseConnection.ts:20

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

`AsyncEventEmitter.addListener`

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

`AsyncEventEmitter.addListener`

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

`AsyncEventEmitter.emit`

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

`AsyncEventEmitter.emit`

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

`AsyncEventEmitter.eventNames`

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

`AsyncEventEmitter.getMaxListeners`

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

`AsyncEventEmitter.listenerCount`

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

`AsyncEventEmitter.listenerCount`

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

`AsyncEventEmitter.listeners`

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

`AsyncEventEmitter.listeners`

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:34

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

`AsyncEventEmitter.off`

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

`AsyncEventEmitter.off`

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

`AsyncEventEmitter.on`

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

`AsyncEventEmitter.on`

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

`AsyncEventEmitter.once`

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

`AsyncEventEmitter.once`

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

`AsyncEventEmitter.prependListener`

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

`AsyncEventEmitter.prependListener`

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

`AsyncEventEmitter.prependOnceListener`

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

`AsyncEventEmitter.prependOnceListener`

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

`AsyncEventEmitter.rawListeners`

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

`AsyncEventEmitter.rawListeners`

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

`AsyncEventEmitter.removeAllListeners`

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

`AsyncEventEmitter.removeAllListeners`

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

`AsyncEventEmitter.removeAllListeners`

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

`AsyncEventEmitter.removeAllListeners`

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

`AsyncEventEmitter.removeListener`

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

`AsyncEventEmitter.removeListener`

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

`AsyncEventEmitter.setMaxListeners`

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:31

***

### waitForAllListenersToComplete()

```ts
waitForAllListenersToComplete(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`AsyncEventEmitter.waitForAllListenersToComplete`

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

`AsyncEventEmitter.listenerCount`

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

`AsyncEventEmitter.listenerCount`

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

`AsyncEventEmitter.on`

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

`AsyncEventEmitter.on`

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

`AsyncEventEmitter.once`

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

`AsyncEventEmitter.once`

##### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.4.6/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:52
