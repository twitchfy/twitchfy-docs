---
editUrl: false
next: false
prev: false
title: "BaseConnection"
---

## Extends

- [`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/)\<`U`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |
| `U` extends [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/) \| [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/) |

## Constructors

### new BaseConnection(options)

```ts
new BaseConnection<K, U>(options: BaseConnectionOptions<K>): BaseConnection<K, U>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`BaseConnectionOptions`](/api/eventsub/type-aliases/baseconnectionoptions/)\<`K`\> |

#### Returns

[`BaseConnection`](/api/eventsub/classes/baseconnection/)\<`K`, `U`\>

#### Overrides

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`constructor`](/api/eventsub/classes/eventsubeventemitter/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:39](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/BaseConnection.ts#L39)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `clientID` | `readonly` | `string` |
| `clientSecret` | `readonly` | `string` |
| `debug` | `public` | `boolean` |
| `helixClient` | `readonly` | `HelixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) |
| `maintainSubscriptions` | `readonly` | `boolean` |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<`K`\> |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<`K`, [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> |

## Methods

### addListener()

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`addListener`](/api/eventsub/classes/eventsubeventemitter/#addlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

***

### emit()

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\] |

#### Returns

`boolean`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`emit`](/api/eventsub/classes/eventsubeventemitter/#emit)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`eventNames`](/api/eventsub/classes/eventsubeventemitter/#eventnames)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`getMaxListeners`](/api/eventsub/classes/eventsubeventemitter/#getmaxlisteners)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listeners`](/api/eventsub/classes/eventsubeventemitter/#listeners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:15

***

### makeDebug()

```ts
makeDebug(...args: any[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:65](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/BaseConnection.ts#L65)

***

### makeWarn()

```ts
makeWarn(...args: any[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:71](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/BaseConnection.ts#L71)

***

### off()

```ts
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`off`](/api/eventsub/classes/eventsubeventemitter/#off)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependListener`](/api/eventsub/classes/eventsubeventemitter/#prependlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`prependOnceListener`](/api/eventsub/classes/eventsubeventemitter/#prependoncelistener)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`rawListeners`](/api/eventsub/classes/eventsubeventemitter/#rawlisteners)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeAllListeners`](/api/eventsub/classes/eventsubeventemitter/#removealllisteners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : U[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : `U`\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`removeListener`](/api/eventsub/classes/eventsubeventemitter/#removelistener)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`setMaxListeners`](/api/eventsub/classes/eventsubeventemitter/#setmaxlisteners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

***

### subscribe()

```ts
abstract subscribe<T>(options: SubscriptionOptions<T>): Promise<SubscriptionType<T, K>>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\> |

#### Returns

`Promise`\<[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>\>

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:61](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/BaseConnection.ts#L61)

***

### subscribeAll()

```ts
abstract subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<SubscriptionType<T, K>[]>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`options` | [`SubscriptionOptions`](/api/eventsub/type-aliases/subscriptionoptions/)\<`T`\>[] |

#### Returns

`Promise`\<[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>[]\>

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:63](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/BaseConnection.ts#L63)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`listenerCount`](/api/eventsub/classes/eventsubeventemitter/#listenercount-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`on`](/api/eventsub/classes/eventsubeventemitter/#on-1)

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

[`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/).[`once`](/api/eventsub/classes/eventsubeventemitter/#once-1)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
