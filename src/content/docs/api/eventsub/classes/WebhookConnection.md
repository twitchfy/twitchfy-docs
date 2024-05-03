---
editUrl: false
next: false
prev: false
title: "WebhookConnection"
---

A Webhook Connection.

## Extends

- [`BaseConnection`](/api/eventsub/classes/baseconnection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)\>

## Constructors

### new WebhookConnection(options, server)

```ts
new WebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

Builds up a new WebhookConnection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/) | The options for the connection. |
| `server` | `Express` | The express server used for receiving Twitch data. |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`constructor`](/api/eventsub/classes/baseconnection/#constructors)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:59

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | The base URL for the webhook callback. | - |
| `clientId` | `readonly` | `string` | The client ID of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientId` |
| `clientSecret` | `readonly` | `string` | The client secret of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`clientSecret` |
| `debug` | `public` | `boolean` | Whether the connection is in debug mode or not. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`debug` |
| `dropSubsAtStart` | `readonly` | `boolean` | Whether to drop subscriptions at start. This will delete all subscriptions that are currently active within the client (only webhook created) to avoid duplicated subscriptions if any storage was set. | - |
| `helixClient` | `readonly` | `HelixClient` | The Helix client used by the connection for making API Requests. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`helixClient` |
| `logger` | `readonly` | [`Logger`](/api/eventsub/classes/logger/) | The logger of the connection. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`logger` |
| `maintainSubscriptions` | `readonly` | `boolean` | Whether the connection should maintain the subscriptions or not between each start. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`maintainSubscriptions` |
| `secret` | `readonly` | `string` | The secret used for creating subscriptions within this connection. | - |
| `server` | `readonly` | `Express` | The express server used for receiving Twitch data. | - |
| `startServer` | `readonly` | `boolean` | Whether to start the server when the connection is started. | - |
| `storage` | `readonly` | [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\> | The storage adapter used by the connection for storing subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`storage` |
| `subscriptionRoute` | `readonly` | `string` | The route for receiving Twitch messages.<br /><br />**Default**<br />` /subscriptions ` | - |
| `subscriptions` | `readonly` | [`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/), [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The subscriptions of the connection. You will only receive events for this subscriptions. | [`BaseConnection`](/api/eventsub/classes/baseconnection/).`subscriptions` |

## Accessors

### appToken

```ts
get appToken(): TokenAdapter<"app", boolean>
```

The app token used for the connection.

#### Returns

[`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:163

***

### url

```ts
get url(): string
```

The URL for the webhook callback. This is a join between the base url and the subscription route.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:81

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:7

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:17

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:18

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:11

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:8

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:9

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:19

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:20

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:16

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:12

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

node\_modules/.pnpm/@vladfrangu+async\_event\_emitter@2.2.4/node\_modules/@vladfrangu/async\_event\_emitter/dist/index.d.ts:10

***

### setAuth()

```ts
setAuth(appToken: TokenAdapter<"app", boolean>): WebhookConnection
```

Sets a new app token for the connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> | The new app token. |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

The connection.

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:153

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
start(port?: number, callback?: () => void): Promise<boolean>
```

Starts the Webhook Connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `port`? | `number` | The port to start the server at if the startServer option is set to true. |
| `callback`? | () => `void` | A callback to be called when the server is started if the startServer option is set to true. |

#### Returns

`Promise`\<`boolean`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:138

***

### subscribe()

```ts
subscribe<T>(options: SubscriptionOptions<T>): Promise<WebhookSubscription<T>>
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

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribe`](/api/eventsub/classes/baseconnection/#subscribe)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:85

***

### subscribeAll()

```ts
subscribeAll<T>(...options: SubscriptionOptions<T>[]): Promise<WebhookSubscription<T>[]>
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

`Promise`\<[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<`T`\>[]\>

#### Overrides

[`BaseConnection`](/api/eventsub/classes/baseconnection/).[`subscribeAll`](/api/eventsub/classes/baseconnection/#subscribeall)

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookConnection.ts:106

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
