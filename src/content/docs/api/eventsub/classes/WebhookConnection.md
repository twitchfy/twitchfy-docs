---
editUrl: false
next: false
prev: false
title: "WebhookConnection"
---

## Extends

- [`BaseConnection`](BaseConnection.md)\<[`WebhookConnection`](WebhookConnection.md), [`WebhookEvents`](../interfaces/WebhookEvents.md)\>

## Constructors

### new WebhookConnection(options, server)

```ts
new WebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebhookConnectionOptions`](../type-aliases/WebhookConnectionOptions.md) |
| `server` | `Express` |

#### Returns

[`WebhookConnection`](WebhookConnection.md)

#### Overrides

[`BaseConnection`](BaseConnection.md).[`constructor`](BaseConnection.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:34](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L34)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | - |
| `clientID` | `readonly` | `string` | [`BaseConnection`](BaseConnection.md).`clientID` |
| `clientSecret` | `readonly` | `string` | [`BaseConnection`](BaseConnection.md).`clientSecret` |
| `debug` | `public` | `boolean` | [`BaseConnection`](BaseConnection.md).`debug` |
| `dropSubsAtStart` | `readonly` | `boolean` | - |
| `helixClient` | `readonly` | `HelixClient` | [`BaseConnection`](BaseConnection.md).`helixClient` |
| `logger` | `readonly` | [`Logger`](Logger.md) | [`BaseConnection`](BaseConnection.md).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | [`BaseConnection`](BaseConnection.md).`maintainSubscriptions` |
| `secret` | `readonly` | `string` | - |
| `server` | `readonly` | `Express` | - |
| `startServer` | `readonly` | `boolean` | - |
| `storage` | `readonly` | [`StorageAdapter`](StorageAdapter.md)\<[`WebhookConnection`](WebhookConnection.md)\> | [`BaseConnection`](BaseConnection.md).`storage` |
| `subscriptionRoute` | `readonly` | `string` | - |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](SubscriptionCollection.md)\<[`WebhookConnection`](WebhookConnection.md), [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\> | [`BaseConnection`](BaseConnection.md).`subscriptions` |

## Methods

### addListener()

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`addListener`](BaseConnection.md#addlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

***

### emit()

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\] |

#### Returns

`boolean`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`emit`](BaseConnection.md#emit)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

***

### eventNames()

```ts
eventNames(): (keyof AsyncEventEmitterPredefinedEvents | keyof WebhookEvents)[]
```

#### Returns

(keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents)[]

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`eventNames`](BaseConnection.md#eventnames)

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

[`BaseConnection`](BaseConnection.md).[`getMaxListeners`](BaseConnection.md#getmaxlisteners)

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
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`number`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`listenerCount`](BaseConnection.md#listenercount)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### listeners()

```ts
listeners<K>(eventName: K): (...args: [WebhookConnection] | [WebhookSubscription<SubscriptionTypes>] | [SubscriptionMessage<WebhookConnection>, WebhookSubscription<SubscriptionTypes>] | [WebhookSubscription<SubscriptionTypes>]) => Awaitable<void>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

(...`args`: [[`WebhookConnection`](WebhookConnection.md)] \| [[`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>] \| [[`SubscriptionMessage`](../type-aliases/SubscriptionMessage.md)\<[`WebhookConnection`](WebhookConnection.md)\>, [`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>] \| [[`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>]) => `Awaitable`\<`void`\>[]

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`listeners`](BaseConnection.md#listeners)

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

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`makeDebug`](BaseConnection.md#makedebug)

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:65](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/BaseConnection.ts#L65)

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

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`makeWarn`](BaseConnection.md#makewarn)

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:71](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/BaseConnection.ts#L71)

***

### off()

```ts
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`off`](BaseConnection.md#off)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`on`](BaseConnection.md#on)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`once`](BaseConnection.md#once)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`prependListener`](BaseConnection.md#prependlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`prependOnceListener`](BaseConnection.md#prependoncelistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### rawListeners()

```ts
rawListeners<K>(eventName: K): Listener<[WebhookConnection] | [WebhookSubscription<SubscriptionTypes>] | [SubscriptionMessage<WebhookConnection>, WebhookSubscription<SubscriptionTypes>] | [WebhookSubscription<SubscriptionTypes>]>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`Listener`\<[[`WebhookConnection`](WebhookConnection.md)] \| [[`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>] \| [[`SubscriptionMessage`](../type-aliases/SubscriptionMessage.md)\<[`WebhookConnection`](WebhookConnection.md)\>, [`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>] \| [[`WebhookSubscription`](WebhookSubscription.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>]\>[]

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`rawListeners`](BaseConnection.md#rawlisteners)

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
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`removeAllListeners`](BaseConnection.md#removealllisteners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\] : [`WebhookEvents`](../interfaces/WebhookEvents.md)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`removeListener`](BaseConnection.md#removelistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

***

### setAuth()

```ts
setAuth(appToken: TokenAdapter<"app", boolean>): WebhookConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `appToken` | [`TokenAdapter`](TokenAdapter.md)\<`"app"`, `boolean`\> |

#### Returns

[`WebhookConnection`](WebhookConnection.md)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:123](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L123)

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

[`BaseConnection`](BaseConnection.md).[`setMaxListeners`](BaseConnection.md#setmaxlisteners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

***

### start()

```ts
start(port?: number, callback?: () => void): Promise<boolean>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port`? | `number` |
| `callback`? | () => `void` |

#### Returns

`Promise`\<`boolean`\>

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:113](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L113)

***

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<WebhookSubscription<T>>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`SubscriptionOptions`](../type-aliases/SubscriptionOptions.md)\<`T`\> |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>\>

#### Overrides

[`BaseConnection`](BaseConnection.md).[`subscribe`](BaseConnection.md#subscribe)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:65](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L65)

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<WebhookSubscription<T>[]>
```

#### Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`options` | [`SubscriptionOptions`](../type-aliases/SubscriptionOptions.md)\<`T`\>[] |

#### Returns

`Promise`\<[`WebhookSubscription`](WebhookSubscription.md)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](BaseConnection.md).[`subscribeAll`](BaseConnection.md#subscribeall)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:86](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L86)

***

### waitForAllListenersToComplete()

```ts
waitForAllListenersToComplete(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`BaseConnection`](BaseConnection.md).[`waitForAllListenersToComplete`](BaseConnection.md#waitforalllistenerstocomplete)

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

[`BaseConnection`](BaseConnection.md).[`listenerCount`](BaseConnection.md#listenercount-1)

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

[`BaseConnection`](BaseConnection.md).[`on`](BaseConnection.md#on-1)

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

[`BaseConnection`](BaseConnection.md).[`once`](BaseConnection.md#once-1)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
