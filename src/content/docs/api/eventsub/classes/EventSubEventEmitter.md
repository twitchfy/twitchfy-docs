---
editUrl: false
next: false
prev: false
title: "EventSubEventEmitter"
---

## Extends

- `AsyncEventEmitter`\<`U`\>

## Type parameters

| Type parameter |
| :------ |
| `U` extends [`WebhookEvents`](../interfaces/WebhookEvents.md) \| [`WebSocketEvents`](../interfaces/WebSocketEvents.md) |

## Constructors

### new EventSubEventEmitter()

```ts
new EventSubEventEmitter<U>(): EventSubEventEmitter<U>
```

#### Returns

[`EventSubEventEmitter`](EventSubEventEmitter.md)\<`U`\>

#### Overrides

`AsyncEventEmitter<U>.constructor`

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:14](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/BaseConnection.ts#L14)

## Methods

### addListener()

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.addListener`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

***

### emit()

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\] |

#### Returns

`boolean`

#### Inherited from

`AsyncEventEmitter.emit`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

***

### eventNames()

```ts
eventNames(): (keyof AsyncEventEmitterPredefinedEvents | keyof U)[]
```

#### Returns

(keyof AsyncEventEmitterPredefinedEvents \| keyof `U`)[]

#### Inherited from

`AsyncEventEmitter.eventNames`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

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

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:14

***

### listenerCount()

```ts
listenerCount<K>(eventName: K): number
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`number`

#### Inherited from

`AsyncEventEmitter.listenerCount`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### listeners()

```ts
listeners<K>(eventName: K): (...args: U[keyof U]) => Awaitable<void>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

(...`args`: `U`\[keyof `U`\]) => `Awaitable`\<`void`\>[]

#### Inherited from

`AsyncEventEmitter.listeners`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:15

***

### off()

```ts
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.off`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.on`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.once`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.prependListener`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.prependOnceListener`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### rawListeners()

```ts
rawListeners<K>(eventName: K): Listener<U[keyof U]>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`Listener`\<`U`\[keyof `U`\]\>[]

#### Inherited from

`AsyncEventEmitter.rawListeners`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:16

***

### removeAllListeners()

```ts
removeAllListeners<K>(event?: K): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.removeAllListeners`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

`AsyncEventEmitter.removeListener`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

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

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

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

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

***

### listenerCount()

```ts
static listenerCount<Emitter, EventNames, EventName>(emitter: Emitter, eventName: keyof AsyncEventEmitterPredefinedEvents | EventName): number
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Emitter` extends `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` | `Emitter` extends `AsyncEventEmitter`\<`Events`, `Events`\> ? `Events` : `never` |
| `EventName` extends `PropertyKey` | `EventNames` extends `never` ? `string` \| `symbol` : keyof `EventNames` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `Emitter` |
| `eventName` | keyof AsyncEventEmitterPredefinedEvents \| `EventName` |

#### Returns

`number`

#### Inherited from

`AsyncEventEmitter.listenerCount`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

***

### on()

```ts
static on<Emitter, EventNames, EventName, EventResult>(
   emitter: Emitter, 
   eventName: EventName, 
options?: AbortableMethods): AsyncGenerator<EventResult, void, unknown>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Emitter` extends `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` extends `Object` | `Emitter` extends `AsyncEventEmitter`\<`Events`, `any`\> ? `Events` : `Record`\<`PropertyKey`, `unknown`[]\> |
| `EventName` extends `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventNames` |
| `EventResult` extends `unknown`[] | `EventNames` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`EventName`\] : `EventNames`\[`EventName`\] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `Emitter` |
| `eventName` | `EventName` |
| `options`? | `AbortableMethods` |

#### Returns

`AsyncGenerator`\<`EventResult`, `void`, `unknown`\>

#### Inherited from

`AsyncEventEmitter.on`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:29

***

### once()

```ts
static once<Emitter, EventNames, EventName, EventResult>(
   emitter: Emitter, 
   eventName: EventName, 
options?: AbortableMethods): Promise<EventResult>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Emitter` extends `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` extends `Object` | `Emitter` extends `AsyncEventEmitter`\<`Events`, `any`\> ? `Events` : `Record`\<`PropertyKey`, `unknown`[]\> |
| `EventName` extends `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventNames` |
| `EventResult` extends `unknown`[] | `EventNames` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`EventName`\] : `EventNames`\[`EventName`\] |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `Emitter` |
| `eventName` | `EventName` |
| `options`? | `AbortableMethods` |

#### Returns

`Promise`\<`EventResult`\>

#### Inherited from

`AsyncEventEmitter.once`

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
