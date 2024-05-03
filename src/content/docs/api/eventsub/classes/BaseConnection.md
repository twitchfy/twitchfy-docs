---
editUrl: false
next: false
prev: false
title: "BaseConnection"
---

The base class for all the connections.

## Extends

- [`EventSubEventEmitter`](/api/eventsub/classes/eventsubeventemitter/)\<`U`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |
| `U` extends [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/) \| [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/) \| [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/) |

## Constructors

### new BaseConnection(options)

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:14

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:15

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:16

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

***

### subscribe()

```ts
abstract subscribe<T>(options: SubscriptionOptions<T>): Promise<SubscriptionType<T, K>>
```

Subscribe to an EventSub event.

#### Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

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
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:29

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
