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

```ts
addListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`addListener`](/api/eventsub/classes/baseconnection/#addlistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

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

```ts
emit<K>(eventName: K, ...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]): boolean
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| ...`args` | `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\] |

#### Returns

`boolean`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`emit`](/api/eventsub/classes/baseconnection/#emit)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

***

### eventNames()

```ts
eventNames(): (keyof AsyncEventEmitterPredefinedEvents | keyof WebSocketEvents)[]
```

#### Returns

(keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents)[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`eventNames`](/api/eventsub/classes/baseconnection/#eventnames)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:21

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:14

***

### listenerCount()

```ts
listenerCount<K>(eventName: K): number
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`number`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listenerCount`](/api/eventsub/classes/baseconnection/#listenercount)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

***

### listeners()

```ts
listeners<K>(eventName: K): (...args: 
  | [WebSocketConnection]
  | [WebSocketConnection, string]
  | [WebSocketSubscription<SubscriptionTypes>]
  | [SubscriptionMessage<WebSocketConnection>, WebSocketSubscription<SubscriptionTypes>]
  | [WebSocketSubscription<SubscriptionTypes>]) => Awaitable<void>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

(...`args`: 
  \| [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)]
  \| [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/), `string`]
  \| [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>, [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]) => `Awaitable`\<`void`\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`listeners`](/api/eventsub/classes/baseconnection/#listeners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:15

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
off<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`off`](/api/eventsub/classes/baseconnection/#off)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

***

### on()

```ts
on<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`on`](/api/eventsub/classes/baseconnection/#on)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

***

### once()

```ts
once<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`once`](/api/eventsub/classes/baseconnection/#once)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

***

### prependListener()

```ts
prependListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependListener`](/api/eventsub/classes/baseconnection/#prependlistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`prependOnceListener`](/api/eventsub/classes/baseconnection/#prependoncelistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

***

### rawListeners()

```ts
rawListeners<K>(eventName: K): Listener<
  | [WebSocketConnection]
  | [WebSocketConnection, string]
  | [WebSocketSubscription<SubscriptionTypes>]
  | [SubscriptionMessage<WebSocketConnection>, WebSocketSubscription<SubscriptionTypes>]
  | [WebSocketSubscription<SubscriptionTypes>]>[]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |

#### Returns

`Listener`\<
  \| [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)]
  \| [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/), `string`]
  \| [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>, [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]
  \| [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>]\>[]

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`rawListeners`](/api/eventsub/classes/baseconnection/#rawlisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:16

***

### removeAllListeners()

```ts
removeAllListeners<K>(event?: K): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `event`? | `K` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeAllListeners`](/api/eventsub/classes/baseconnection/#removealllisteners)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

***

### removeListener()

```ts
removeListener<K>(eventName: K, listener: (...args: K extends keyof AsyncEventEmitterPredefinedEvents ? AsyncEventEmitterPredefinedEvents[K<K>] : WebSocketEvents[K]) => void): this
```

#### Type parameters

| Type parameter |
| :------ |
| `K` *extends* keyof AsyncEventEmitterPredefinedEvents \| keyof WebSocketEvents |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `K` |
| `listener` | (...`args`: `K` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`K`\<`K`\>\] : [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)\[`K`\]) => `void` |

#### Returns

`this`

#### Inherited from

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`removeListener`](/api/eventsub/classes/baseconnection/#removelistener)

#### Source

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:13

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:22

***

### listenerCount()

```ts
static listenerCount<Emitter, EventNames, EventName>(emitter: Emitter, eventName: keyof AsyncEventEmitterPredefinedEvents | EventName): number
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Emitter` *extends* `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` | `Emitter` *extends* `AsyncEventEmitter`\<`Events`, `Events`\> ? `Events` : `never` |
| `EventName` *extends* `PropertyKey` | `EventNames` *extends* `never` ? `string` \| `symbol` : keyof `EventNames` |

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:25

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
| `Emitter` *extends* `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` *extends* `object` | `Emitter` *extends* `AsyncEventEmitter`\<`Events`, `any`\> ? `Events` : `Record`\<`PropertyKey`, `unknown`[]\> |
| `EventName` *extends* `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventNames` |
| `EventResult` *extends* `unknown`[] | `EventNames` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`EventName`\] : `EventNames`\[`EventName`\] |

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:29

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
| `Emitter` *extends* `AsyncEventEmitter`\<`any`, `any`\> | - |
| `EventNames` *extends* `object` | `Emitter` *extends* `AsyncEventEmitter`\<`Events`, `any`\> ? `Events` : `Record`\<`PropertyKey`, `unknown`[]\> |
| `EventName` *extends* `PropertyKey` | keyof AsyncEventEmitterPredefinedEvents \| keyof `EventNames` |
| `EventResult` *extends* `unknown`[] | `EventNames` *extends* keyof `AsyncEventEmitterPredefinedEvents` ? `AsyncEventEmitterPredefinedEvents`\[`EventName`\] : `EventNames`\[`EventName`\] |

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.3.0/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:27
