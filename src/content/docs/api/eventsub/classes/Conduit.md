---
editUrl: false
next: false
prev: false
title: "Conduit"
---

Represents a Conduit connection.

## Extends

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)\<[`Conduit`](/api/eventsub/classes/conduit/), [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\>

## Constructors

### new Conduit(options)

```ts
new Conduit(options: ConduitOptions): Conduit
```

Builds up a new Conduit.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ConduitOptions`](/api/eventsub/type-aliases/conduitoptions/) | The options of the conduit. |

#### Returns

[`Conduit`](/api/eventsub/classes/conduit/)

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`constructor`](/api/eventsub/classes/baseconnection/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:62

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `clientId` | `readonly` | `string` | The client ID of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientId` |
| `clientSecret` | `readonly` | `string` | The client secret of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientSecret` |
| `conduitCleanup` | `readonly` | `boolean` | Whether to cleanup the conduit shards at start avoiding duplicate shards. Default is true. | - |
| `debug` | `public` | `boolean` | Whether the connection is in debug mode or not. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`debug` |
| `deleteConduitOnNoShards` | `readonly` | `boolean` | Whether to delete the conduit when you are going to delete the last shard of the conduit. Default is false. | - |
| `dropSubsAtStart` | `readonly` | `boolean` | Whether drop all subscriptions of the current conduit at start or not. Default is false. | - |
| `helixClient` | `readonly` | `HelixClient` | The Helix client used by the connection for making API Requests. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`helixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | The logger of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | Whether the connection should maintain the subscriptions or not between each start. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`maintainSubscriptions` |
| `shards` | `readonly` | `Map`\<`string`, [`Shard`](/api/eventsub/classes/shard/)\> | The shards of the conduit. | - |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<[`Conduit`](/api/eventsub/classes/conduit/)\> | The storage adapter used by the connection for storing subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`storage` |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<[`Conduit`](/api/eventsub/classes/conduit/), [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The subscriptions of the connection. You will only receive events for this subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`subscriptions` |
| `workers` | `readonly` | `Map`\<`string`, `Worker`\> | The workers of the conduit. | - |

## Accessors

### appToken

```ts
get appToken(): TokenAdapter<"app", boolean>
```

The app token used to manage the conduit and its subscriptions.

#### Returns

[`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\>

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:86

***

### id

```ts
get id(): string
```

The id of the conduit.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:93

***

### shardCount

```ts
get shardCount(): number
```

The number of shards of the conduit created by this process. This number is not synchronized with the API.

#### Returns

`number`

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:100

## Methods

### addListener()

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

***

### addShard()

```ts
addShard(shard: string): Promise<void>
```

Adds a shard to the conduit.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shard` | `string` |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:339

***

### deleteShard()

```ts
deleteShard(shardId: string): Promise<Shard[]>
```

Deletes a shard of a conduit. This operation is not recommended as it could result in an error unless all the shards of the conduit are being created within the same process.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `shardId` | `string` |

#### Returns

`Promise`\<[`Shard`](/api/eventsub/classes/shard/)[]\>

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:270

***

### emit()

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\] |

#### Returns

`boolean`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

***

### eventNames()

```ts
eventNames(): (keyof AsyncEventEmitterPredefinedEvents | keyof ConduitEvents)[]
```

#### Returns

(keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents)[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`eventNames`](/api/eventsub/classes/baseconnection/#eventnames)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`getMaxListeners`](/api/eventsub/classes/baseconnection/#getmaxlisteners)

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
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`number`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### listeners()

```ts
listeners<K>(eventName: K): (...args: 
  | [Conduit]
  | [ConduitSubscription<SubscriptionTypes>]
  | [SubscriptionMessage<Conduit>, ConduitSubscription<SubscriptionTypes>]
  | [ConduitSubscription<SubscriptionTypes>]
  | [Conduit, Shard]) => Awaitable<void>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

(...`args`: 
  \| [[`Conduit`](/api/eventsub/classes/conduit/)]
  \| [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>, [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`Conduit`](/api/eventsub/classes/conduit/), [`Shard`](/api/eventsub/classes/shard/)]) => `Awaitable`\<`void`\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

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

```ts
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### rawListeners()

```ts
rawListeners<K>(eventName: K): Listener<
  | [Conduit]
  | [ConduitSubscription<SubscriptionTypes>]
  | [SubscriptionMessage<Conduit>, ConduitSubscription<SubscriptionTypes>]
  | [ConduitSubscription<SubscriptionTypes>]
  | [Conduit, Shard]>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`Listener`\<
  \| [[`Conduit`](/api/eventsub/classes/conduit/)]
  \| [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>, [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`Conduit`](/api/eventsub/classes/conduit/), [`Shard`](/api/eventsub/classes/shard/)]\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

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
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : ConduitEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` extends keyof AsyncEventEmitterPredefinedEvents \| keyof ConduitEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` extends keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

***

### setAuth()

```ts
setAuth(appToken: TokenAdapter<"app", true>): Conduit
```

Sets a new app token for the conduit.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `true`\> | The new app token. |

#### Returns

[`Conduit`](/api/eventsub/classes/conduit/)

The conduit.

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:358

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

***

### start()

```ts
start(): Promise<void>
```

Starts the conduit and all the shards in the Conduit's options. The promise will resolve when all the shards are fully enabled within the API.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:108

***

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<ConduitSubscription<T>>
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

`Promise`\<[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<`T`\>\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribe`](/api/eventsub/classes/baseconnection/#subscribe)

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:112

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<ConduitSubscription<T>[]>
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

`Promise`\<[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribeAll`](/api/eventsub/classes/baseconnection/#subscribeall)

#### Source

twitchfy/packages/eventsub/src/structures/Conduit.ts:136

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount-1)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on-1)

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

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once-1)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
