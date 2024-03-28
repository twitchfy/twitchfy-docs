---
editUrl: false
next: false
prev: false
title: "ChatBot"
---

A Twitch ChatBot.

## Extends

- [`ChatBotEventEmitter`](ChatBotEventEmitter.md)

## Constructors

### new ChatBot(options)

```ts
new ChatBot(options: ChatBotOptions): ChatBot
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ChatBotOptions`](../interfaces/ChatBotOptions.md) | The options to build the ChatBot [ChatBotOptions](../../api/chatbot/interfaces/chatbotoptions). |

#### Returns

[`ChatBot`](ChatBot.md)

#### Overrides

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`constructor`](ChatBotEventEmitter.md#constructors)

#### Source

[twitchapi/packages/chatbot/src/ChatBot.ts:101](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/ChatBot.ts#L101)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `capabilities?` | `public` | [`ChatBotCapabilities`](../interfaces/ChatBotCapabilities.md) | **Description**<br />The ChatBot capabilities provided in the [ChatBotOptions](../../api/chatbot/interfaces/chatbotoptions). This capabilities are used to receive some extra Twitch information. | - |
| `channels` | `public` | [`ChannelManager`](ChannelManager.md) | **Description**<br />The [ChannelManager](../../api/chatbot/classes/channelmanager) of the ChatBot | - |
| `clientID` | `public` | `string` | **Description**<br />The Twitch app's ClientId provided in the [ChatBotOptions](../../api/chatbot/interfaces/chatbotoptions). | - |
| `clientSecret` | `public` | `string` | **Description**<br />The Twitch app's ClientSecret provided in the [ChatBotOptions](../../api/chatbot/interfaces/chatbotoptions). | - |
| `emit` | `public` | \<`K`\>(`event`: `K`, ...`args`: [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\[`K`\]) => `boolean` & \<`S`\>(`event`: `Exclude`\<`S`, keyof [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\>, ...`args`: `any`[]) => `boolean` | - | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`emit` |
| `helixClient` | `public` | `HelixClient` | **Description**<br />The helixClient instance of the bot to make https request to Twitch Api. Provided by `@twitchapi/helix` package. | - |
| `joinedChannels` | `readonly` | [`JoinedChannel`](JoinedChannel.md)[] | **Description**<br />An array of [JoinedChannel](../../api/chatbot/classes/joinedchannel) the bot has joined. This propery doesn't updates when a [Channel](../../api/chatbot/classes/channel) is updated. | - |
| `nick` | `public` | `string` | **Description**<br />The nick of the ChatBot which is used to login with Twitch IRC Server. | - |
| `noticeLog` | `public` | `boolean` | **Description**<br />If the userNoticeLog is enabled to track important messages sent by Twitch IRC Server. | - |
| `off` | `public` | \<`K`\>(`event`: `K`, `listener`: (...`args`: [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\[`K`\]) => `void`) => `this` & \<`S`\>(`event`: `Exclude`\<`S`, keyof [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\>, `listener`: (...`args`: `any`[]) => `void`) => `this` | - | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`off` |
| `on` | `public` | \<`K`\>(`event`: `K`, `listener`: (...`args`: [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\[`K`\]) => `void`) => `this` & \<`S`\>(`event`: `Exclude`\<`S`, keyof [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\>, `listener`: (...`args`: `any`[]) => `void`) => `this` | - | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`on` |
| `once` | `public` | \<`K`\>(`event`: `K`, `listener`: (...`args`: [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\[`K`\]) => `void`) => `this` & \<`S`\>(`event`: `Exclude`\<`S`, keyof [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\>, `listener`: (...`args`: `any`[]) => `void`) => `this` | - | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`once` |
| `options` | `public` | [`ChatBotOptions`](../interfaces/ChatBotOptions.md) | **Description**<br />The options of the ChatBot. | - |
| `readyAt` | `public` | `Date` | **Description**<br />The timestamp, in JavaScript Date format, when the chatbot went online. This value is null if the connection hasn't already been estabilished. | - |
| `removeAllListeners` | `public` | \<`K`\>(`event`?: `K`) => `this` & \<`S`\>(`event`?: `Exclude`\<`S`, keyof [`ChatBotEvents`](../interfaces/ChatBotEvents.md)\>) => `this` | - | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`removeAllListeners` |
| `user` | `public` | [`ChatBotUser`](ChatBotUser.md) | **Description**<br />The Twitch's User of the ChatBot's user. | - |
| `users` | `public` | [`UserManager`](UserManager.md) | **Description**<br />The [UserManager](../../api/chatbot/classes/usermanager) of the ChatBot. | - |
| `ws` | `public` | [`ChatBotWs`](ChatBotWs.md) | **Description**<br />The [ChatBotWs](../../api/chatbot/classes/chatbotws) instance of this ChatBot | - |
| `captureRejectionSymbol` | `readonly` | *typeof* `captureRejectionSymbol` | Value: `Symbol.for('nodejs.rejection')`<br /><br />See how to write a custom `rejection handler`.<br /><br />**Since**<br />v13.4.0, v12.16.0 | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`captureRejectionSymbol` |
| `captureRejections` | `static` | `boolean` | Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)<br /><br />Change the default `captureRejections` option on all new `EventEmitter` objects.<br /><br />**Since**<br />v13.4.0, v12.16.0 | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`captureRejections` |
| `defaultMaxListeners` | `static` | `number` | By default, a maximum of `10` listeners can be registered for any single<br />event. This limit can be changed for individual `EventEmitter` instances<br />using the `emitter.setMaxListeners(n)` method. To change the default<br />for _all_`EventEmitter` instances, the `events.defaultMaxListeners`property can be used. If this value is not a positive number, a `RangeError`is thrown.<br /><br />Take caution when setting the `events.defaultMaxListeners` because the<br />change affects _all_`EventEmitter` instances, including those created before<br />the change is made. However, calling `emitter.setMaxListeners(n)` still has<br />precedence over `events.defaultMaxListeners`.<br /><br />This is not a hard limit. The `EventEmitter` instance will allow<br />more listeners to be added but will output a trace warning to stderr indicating<br />that a "possible EventEmitter memory leak" has been detected. For any single`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()`methods can be used to<br />temporarily avoid this warning:<br /><br />`js import { EventEmitter } from 'node:events'; const emitter = new EventEmitter(); emitter.setMaxListeners(emitter.getMaxListeners() + 1); emitter.once('event', () => {   // do stuff   emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0)); }); `<br /><br />The `--trace-warnings` command-line flag can be used to display the<br />stack trace for such warnings.<br /><br />The emitted warning can be inspected with `process.on('warning')` and will<br />have the additional `emitter`, `type`, and `count` properties, referring to<br />the event emitter instance, the event's name and the number of attached<br />listeners, respectively.<br />Its `name` property is set to `'MaxListenersExceededWarning'`.<br /><br />**Since**<br />v0.11.2 | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`defaultMaxListeners` |
| `errorMonitor` | `readonly` | *typeof* `errorMonitor` | This symbol shall be used to install a listener for only monitoring `'error'`events. Listeners installed using this symbol are called before the regular`'error'` listeners are called.<br /><br />Installing a listener using this symbol does not change the behavior once an`'error'` event is emitted. Therefore, the process will still crash if no<br />regular `'error'` listener is installed.<br /><br />**Since**<br />v13.6.0, v12.17.0 | [`ChatBotEventEmitter`](ChatBotEventEmitter.md).`errorMonitor` |

## Methods

### `[captureRejectionSymbol]`()?

```ts
optional [captureRejectionSymbol](
   error: Error, 
   event: string, ...
   args: any[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` |
| ...`args` | `any`[] |

#### Returns

`void`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`[captureRejectionSymbol]`](ChatBotEventEmitter.md#%5Bcapturerejectionsymbol%5D)

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:112

***

### addListener()

```ts
addListener(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Alias for `emitter.on(eventName, listener)`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`addListener`](ChatBotEventEmitter.md#addlistener)

#### Since

v0.1.26

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:545

***

### destroy()

```ts
destroy(): void
```

Destroy the WebSocket connection of the ChatBot.

#### Returns

`void`

#### Source

[twitchapi/packages/chatbot/src/ChatBot.ts:148](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/ChatBot.ts#L148)

***

### eventNames()

```ts
eventNames(): (string | symbol)[]
```

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
import { EventEmitter } from 'node:events';

const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`eventNames`](ChatBotEventEmitter.md#eventnames)

#### Since

v6.0.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:870

***

### getMaxListeners()

```ts
getMaxListeners(): number
```

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](ChatBot.md).

#### Returns

`number`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`getMaxListeners`](ChatBotEventEmitter.md#getmaxlisteners)

#### Since

v1.0.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:722

***

### listenerCount()

```ts
listenerCount(eventName: string | symbol, listener?: Function): number
```

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener`? | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`listenerCount`](ChatBotEventEmitter.md#listenercount)

#### Since

v3.2.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:816

***

### listeners()

```ts
listeners(eventName: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`listeners`](ChatBotEventEmitter.md#listeners)

#### Since

v0.1.26

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:735

***

### login()

```ts
login(): ChatBot
```

#### Returns

[`ChatBot`](ChatBot.md)

The current instance of the [ChatBot](../../api/chatbot/classes/chatbot).

#### Source

[twitchapi/packages/chatbot/src/ChatBot.ts:137](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/ChatBot.ts#L137)

***

### prependListener()

```ts
prependListener(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`prependListener`](ChatBotEventEmitter.md#prependlistener)

#### Since

v6.0.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:834

***

### prependOnceListener()

```ts
prependOnceListener(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`prependOnceListener`](ChatBotEventEmitter.md#prependoncelistener)

#### Since

v6.0.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:850

***

### rawListeners()

```ts
rawListeners(eventName: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
import { EventEmitter } from 'node:events';
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`rawListeners`](ChatBotEventEmitter.md#rawlisteners)

#### Since

v9.4.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:766

***

### removeListener()

```ts
removeListener(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
import { EventEmitter } from 'node:events';
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
import { EventEmitter } from 'node:events';
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`removeListener`](ChatBotEventEmitter.md#removelistener)

#### Since

v0.1.26

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:690

***

### setAuth()

```ts
setAuth(auth: UserTokenAdapter<boolean>): ChatBot
```

Set a new auth to the ChatBot.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `auth` | `UserTokenAdapter`\<`boolean`\> |

#### Returns

[`ChatBot`](ChatBot.md)

#### Source

[twitchapi/packages/chatbot/src/ChatBot.ts:157](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/ChatBot.ts#L157)

***

### setMaxListeners()

```ts
setMaxListeners(n: number): this
```

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`setMaxListeners`](ChatBotEventEmitter.md#setmaxlisteners)

#### Since

v0.3.5

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:716

***

### addAbortListener()

`Experimental`

```ts
static addAbortListener(signal: AbortSignal, resource: (event: Event) => void): Disposable
```

Listens once to the `abort` event on the provided `signal`.

Listening to the `abort` event on abort signals is unsafe and may
lead to resource leaks since another third party with the signal can
call `e.stopImmediatePropagation()`. Unfortunately Node.js cannot change
this since it would violate the web standard. Additionally, the original
API makes it easy to forget to remove listeners.

This API allows safely using `AbortSignal`s in Node.js APIs by solving these
two issues by listening to the event such that `stopImmediatePropagation` does
not prevent the listener from running.

Returns a disposable so that it may be unsubscribed from more easily.

```js
import { addAbortListener } from 'node:events';

function example(signal) {
  let disposable;
  try {
    signal.addEventListener('abort', (e) => e.stopImmediatePropagation());
    disposable = addAbortListener(signal, (e) => {
      // Do something when signal is aborted.
    });
  } finally {
    disposable?.[Symbol.dispose]();
  }
}
```

:::caution[Experimental]
This API should not be used in production and may be trimmed from a public release.
:::

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `signal` | `AbortSignal` |
| `resource` | (`event`: `Event`) => `void` |

#### Returns

`Disposable`

Disposable that removes the `abort` listener.

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`addAbortListener`](ChatBotEventEmitter.md#addabortlistener)

#### Since

v20.5.0

:::caution[Experimental]
This API should not be used in production and may be trimmed from a public release.
:::

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:387

***

### getEventListeners()

```ts
static getEventListeners(emitter: EventEmitter | _DOMEventTarget, name: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`.

For `EventEmitter`s this behaves exactly the same as calling `.listeners` on
the emitter.

For `EventTarget`s this is the only way to get the event listeners for the
event target. This is useful for debugging and diagnostic purposes.

```js
import { getEventListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  const listener = () => console.log('Events are fun');
  ee.on('foo', listener);
  console.log(getEventListeners(ee, 'foo')); // [ [Function: listener] ]
}
{
  const et = new EventTarget();
  const listener = () => console.log('Events are fun');
  et.addEventListener('foo', listener);
  console.log(getEventListeners(et, 'foo')); // [ [Function: listener] ]
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`getEventListeners`](ChatBotEventEmitter.md#geteventlisteners)

#### Since

v15.2.0, v14.17.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:308

***

### getMaxListeners()

```ts
static getMaxListeners(emitter: EventEmitter | _DOMEventTarget): number
```

Returns the currently set max amount of listeners.

For `EventEmitter`s this behaves exactly the same as calling `.getMaxListeners` on
the emitter.

For `EventTarget`s this is the only way to get the max event listeners for the
event target. If the number of event handlers on a single EventTarget exceeds
the max set, the EventTarget will print a warning.

```js
import { getMaxListeners, setMaxListeners, EventEmitter } from 'node:events';

{
  const ee = new EventEmitter();
  console.log(getMaxListeners(ee)); // 10
  setMaxListeners(11, ee);
  console.log(getMaxListeners(ee)); // 11
}
{
  const et = new EventTarget();
  console.log(getMaxListeners(et)); // 10
  setMaxListeners(11, et);
  console.log(getMaxListeners(et)); // 11
}
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` \| `_DOMEventTarget` |

#### Returns

`number`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`getMaxListeners`](ChatBotEventEmitter.md#getmaxlisteners-1)

#### Since

v19.9.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:337

***

### ~~listenerCount()~~

```ts
static listenerCount(emitter: EventEmitter, eventName: string | symbol): number
```

A class method that returns the number of listeners for the given `eventName`registered on the given `emitter`.

```js
import { EventEmitter, listenerCount } from 'node:events';

const myEmitter = new EventEmitter();
myEmitter.on('event', () => {});
myEmitter.on('event', () => {});
console.log(listenerCount(myEmitter, 'event'));
// Prints: 2
```

:::caution[Deprecated]
Since v3.2.0 - Use `listenerCount` instead.
:::

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`listenerCount`](ChatBotEventEmitter.md#listenercount-1)

#### Since

v0.9.12

:::caution[Deprecated]
Since v3.2.0 - Use `listenerCount` instead.
:::

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:280

***

### on()

```ts
static on(
   emitter: EventEmitter, 
   eventName: string, 
options?: StaticEventEmitterOptions): AsyncIterableIterator<any>
```

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

// Emit later on
process.nextTick(() => {
  ee.emit('foo', 'bar');
  ee.emit('foo', 42);
});

for await (const event of on(ee, 'foo')) {
  // The execution of this inner block is synchronous and it
  // processes one event at a time (even with await). Do not use
  // if concurrent execution is required.
  console.log(event); // prints ['bar'] [42]
}
// Unreachable here
```

Returns an `AsyncIterator` that iterates `eventName` events. It will throw
if the `EventEmitter` emits `'error'`. It removes all listeners when
exiting the loop. The `value` returned by each iteration is an array
composed of the emitted event arguments.

An `AbortSignal` can be used to cancel waiting on events:

```js
import { on, EventEmitter } from 'node:events';
import process from 'node:process';

const ac = new AbortController();

(async () => {
  const ee = new EventEmitter();

  // Emit later on
  process.nextTick(() => {
    ee.emit('foo', 'bar');
    ee.emit('foo', 42);
  });

  for await (const event of on(ee, 'foo', { signal: ac.signal })) {
    // The execution of this inner block is synchronous and it
    // processes one event at a time (even with await). Do not use
    // if concurrent execution is required.
    console.log(event); // prints ['bar'] [42]
  }
  // Unreachable here
})();

process.nextTick(() => ac.abort());
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `emitter` | `EventEmitter` | - |
| `eventName` | `string` | The name of the event being listened for |
| `options`? | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`\<`any`\>

that iterates `eventName` events emitted by the `emitter`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`on`](ChatBotEventEmitter.md#on)

#### Since

v13.6.0, v12.16.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:258

***

### once()

#### once(emitter, eventName, options)

```ts
static once(
   emitter: _NodeEventTarget, 
   eventName: string | symbol, 
options?: StaticEventEmitterOptions): Promise<any[]>
```

Creates a `Promise` that is fulfilled when the `EventEmitter` emits the given
event or that is rejected if the `EventEmitter` emits `'error'` while waiting.
The `Promise` will resolve with an array of all the arguments emitted to the
given event.

This method is intentionally generic and works with the web platform [EventTarget](https://dom.spec.whatwg.org/#interface-eventtarget) interface, which has no special`'error'` event
semantics and does not listen to the `'error'` event.

```js
import { once, EventEmitter } from 'node:events';
import process from 'node:process';

const ee = new EventEmitter();

process.nextTick(() => {
  ee.emit('myevent', 42);
});

const [value] = await once(ee, 'myevent');
console.log(value);

const err = new Error('kaboom');
process.nextTick(() => {
  ee.emit('error', err);
});

try {
  await once(ee, 'myevent');
} catch (err) {
  console.error('error happened', err);
}
```

The special handling of the `'error'` event is only used when `events.once()`is used to wait for another event. If `events.once()` is used to wait for the
'`error'` event itself, then it is treated as any other kind of event without
special handling:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();

once(ee, 'error')
  .then(([err]) => console.log('ok', err.message))
  .catch((err) => console.error('error', err.message));

ee.emit('error', new Error('boom'));

// Prints: ok boom
```

An `AbortSignal` can be used to cancel waiting for the event:

```js
import { EventEmitter, once } from 'node:events';

const ee = new EventEmitter();
const ac = new AbortController();

async function foo(emitter, event, signal) {
  try {
    await once(emitter, event, { signal });
    console.log('event emitted!');
  } catch (error) {
    if (error.name === 'AbortError') {
      console.error('Waiting for the event was canceled!');
    } else {
      console.error('There was an error', error.message);
    }
  }
}

foo(ee, 'foo', ac.signal);
ac.abort(); // Abort waiting for the event
ee.emit('foo'); // Prints: Waiting for the event was canceled!
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `_NodeEventTarget` |
| `eventName` | `string` \| `symbol` |
| `options`? | `StaticEventEmitterOptions` |

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`once`](ChatBotEventEmitter.md#once)

##### Since

v11.13.0, v10.16.0

##### Source

twitchapi/node\_modules/@types/node/events.d.ts:193

#### once(emitter, eventName, options)

```ts
static once(
   emitter: _DOMEventTarget, 
   eventName: string, 
options?: StaticEventEmitterOptions): Promise<any[]>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `emitter` | `_DOMEventTarget` |
| `eventName` | `string` |
| `options`? | `StaticEventEmitterOptions` |

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`once`](ChatBotEventEmitter.md#once)

##### Source

twitchapi/node\_modules/@types/node/events.d.ts:198

***

### setMaxListeners()

```ts
static setMaxListeners(n?: number, ...eventTargets?: (EventEmitter | _DOMEventTarget)[]): void
```

```js
import { setMaxListeners, EventEmitter } from 'node:events';

const target = new EventTarget();
const emitter = new EventEmitter();

setMaxListeners(5, target, emitter);
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `n`? | `number` | A non-negative number. The maximum number of listeners per `EventTarget` event. |
| ...`eventTargets`? | (`EventEmitter` \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

[`ChatBotEventEmitter`](ChatBotEventEmitter.md).[`setMaxListeners`](ChatBotEventEmitter.md#setmaxlisteners-1)

#### Since

v15.4.0

#### Source

twitchapi/node\_modules/@types/node/events.d.ts:352
