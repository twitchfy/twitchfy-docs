---
editUrl: false
next: false
prev: false
title: "WebhookConnection"
---

## Extends

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>

## Constructors

### new WebhookConnection(options, server)

```ts
new WebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/) |
| `server` | `Express` |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`constructor`](/api/eventsub/classes/baseconnection/#constructors)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:34](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L34)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | - |
| `clientID` | `readonly` | `string` | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientID` |
| `clientSecret` | `readonly` | `string` | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientSecret` |
| `debug` | `public` | `boolean` | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`debug` |
| `dropSubsAtStart` | `readonly` | `boolean` | - |
| `helixClient` | `readonly` | `HelixClient` | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`helixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`maintainSubscriptions` |
| `secret` | `readonly` | `string` | - |
| `server` | `readonly` | `Express` | - |
| `startServer` | `readonly` | `boolean` | - |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\> | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`storage` |
| `subscriptionRoute` | `readonly` | `string` | - |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`subscriptions` |

## Methods

### addListener()

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

***

### emit()

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\] |

#### Returns

`boolean`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`eventNames`](/api/eventsub/classes/baseconnection/#eventnames)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`getMaxListeners`](/api/eventsub/classes/baseconnection/#getmaxlisteners)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount)

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

(...`args`: [[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)] \| [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>, [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] \| [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]) => `Awaitable`\<`void`\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`makeDebug`](/api/eventsub/classes/baseconnection/#makedebug)

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:65](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/BaseConnection.ts#L65)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`makeWarn`](/api/eventsub/classes/baseconnection/#makewarn)

#### Source

[twitchapi/packages/eventsub/src/structures/BaseConnection.ts:71](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/BaseConnection.ts#L71)

***

### off()

```ts
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

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

`Listener`\<[[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)] \| [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>, [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] \| [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebhookEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof WebhookEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

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
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:123](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L123)

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

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:113](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L113)

***

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<WebhookSubscription<T>>
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

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribe`](/api/eventsub/classes/baseconnection/#subscribe)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:65](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L65)

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<WebhookSubscription<T>[]>
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

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribeAll`](/api/eventsub/classes/baseconnection/#subscribeall)

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookConnection.ts:86](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/structures/WebhookConnection.ts#L86)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount-1)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on-1)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once-1)

#### Source

twitchapi/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
