---
editUrl: false
next: false
prev: false
title: "WebSocket"
---

## Extends

- `client`

## Constructors

### new WebSocket(connection)

```ts
new WebSocket(connection: WebSocketConnection): WebSocket
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) |

#### Returns

[`WebSocket`](/api/eventsub/classes/websocket/)

#### Overrides

`client.constructor`

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocket.ts:16

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `_oldConnection` | `public` | [`WebSocket`](/api/eventsub/classes/websocket/) | - | - |
| `connection` | `public` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | - | - |
| `connectionURL` | `public` | `string` | - | - |
| `wsConnection` | `public` | `connection` | - | - |
| `captureRejectionSymbol` | `readonly` | *typeof* `captureRejectionSymbol` | Value: `Symbol.for('nodejs.rejection')`<br /><br />See how to write a custom `rejection handler`.<br /><br />**Since**<br />v13.4.0, v12.16.0 | `client.captureRejectionSymbol` |
| `captureRejections` | `static` | `boolean` | Value: [boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type)<br /><br />Change the default `captureRejections` option on all new `EventEmitter` objects.<br /><br />**Since**<br />v13.4.0, v12.16.0 | `client.captureRejections` |
| `defaultMaxListeners` | `static` | `number` | By default, a maximum of `10` listeners can be registered for any single<br />event. This limit can be changed for individual `EventEmitter` instances<br />using the `emitter.setMaxListeners(n)` method. To change the default<br />for _all_`EventEmitter` instances, the `events.defaultMaxListeners` property<br />can be used. If this value is not a positive number, a `RangeError` is thrown.<br /><br />Take caution when setting the `events.defaultMaxListeners` because the<br />change affects _all_ `EventEmitter` instances, including those created before<br />the change is made. However, calling `emitter.setMaxListeners(n)` still has<br />precedence over `events.defaultMaxListeners`.<br /><br />This is not a hard limit. The `EventEmitter` instance will allow<br />more listeners to be added but will output a trace warning to stderr indicating<br />that a "possible EventEmitter memory leak" has been detected. For any single<br />`EventEmitter`, the `emitter.getMaxListeners()` and `emitter.setMaxListeners()` methods can be used to<br />temporarily avoid this warning:<br /><br />`js import { EventEmitter } from 'node:events'; const emitter = new EventEmitter(); emitter.setMaxListeners(emitter.getMaxListeners() + 1); emitter.once('event', () => {   // do stuff   emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0)); }); `<br /><br />The `--trace-warnings` command-line flag can be used to display the<br />stack trace for such warnings.<br /><br />The emitted warning can be inspected with `process.on('warning')` and will<br />have the additional `emitter`, `type`, and `count` properties, referring to<br />the event emitter instance, the event's name and the number of attached<br />listeners, respectively.<br />Its `name` property is set to `'MaxListenersExceededWarning'`.<br /><br />**Since**<br />v0.11.2 | `client.defaultMaxListeners` |
| `errorMonitor` | `readonly` | *typeof* `errorMonitor` | This symbol shall be used to install a listener for only monitoring `'error'` events. Listeners installed using this symbol are called before the regular `'error'` listeners are called.<br /><br />Installing a listener using this symbol does not change the behavior once an `'error'` event is emitted. Therefore, the process will still crash if no<br />regular `'error'` listener is installed.<br /><br />**Since**<br />v13.6.0, v12.17.0 | `client.errorMonitor` |

## Methods

### `[captureRejectionSymbol]`()?

```ts
optional [captureRejectionSymbol]<K>(
   error: Error, 
   event: string | symbol, ...
   args: AnyRest): void
```

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `Error` |
| `event` | `string` \| `symbol` |
| ...`args` | `AnyRest` |

#### Returns

`void`

#### Inherited from

`client.[captureRejectionSymbol]`

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:125

***

### abort()

```ts
abort(): void
```

Will cancel an in-progress connection request before either the `connect` event or the `connectFailed` event has been emitted.
If the `connect` or `connectFailed` event has already been emitted, calling `abort()` will do nothing.

#### Returns

`void`

#### Inherited from

`client.abort`

#### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:642

***

### addListener()

#### addListener(event, cb)

```ts
addListener(event: "connect", cb: (connection: connection) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"connect"` |
| `cb` | (`connection`: `connection`) => `void` |

##### Returns

`this`

##### Inherited from

`client.addListener`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:648

#### addListener(event, cb)

```ts
addListener(event: "connectFailed", cb: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"connectFailed"` |
| `cb` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`client.addListener`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:649

#### addListener(event, cb)

```ts
addListener(event: "httpResponse", cb: (response: IncomingMessage, client: client) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"httpResponse"` |
| `cb` | (`response`: `IncomingMessage`, `client`: `client`) => `void` |

##### Returns

`this`

##### Inherited from

`client.addListener`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:650

***

### connect()

```ts
connect(url?: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `url`? | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

`client.connect`

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocket.ts:29

***

### emit()

```ts
emit<K>(eventName: string | symbol, ...args: AnyRest): boolean
```

Synchronously calls each of the listeners registered for the event named `eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
import { EventEmitter } from 'node:events';
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| ...`args` | `AnyRest` |

#### Returns

`boolean`

#### Inherited from

`client.emit`

#### Since

v0.1.26

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:822

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

`client.eventNames`

#### Since

v6.0.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:885

***

### getMaxListeners()

```ts
getMaxListeners(): number
```

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to [defaultMaxListeners](WebSocket.md).

#### Returns

`number`

#### Inherited from

`client.getMaxListeners`

#### Since

v1.0.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:737

***

### listenerCount()

```ts
listenerCount<K>(eventName: string | symbol, listener?: Function): number
```

Returns the number of listeners listening for the event named `eventName`.
If `listener` is provided, it will return how many times the listener is found
in the list of the listeners of the event.

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |
| `listener`? | `Function` | The event handler function |

#### Returns

`number`

#### Inherited from

`client.listenerCount`

#### Since

v3.2.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:831

***

### listeners()

```ts
listeners<K>(eventName: string | symbol): Function[]
```

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

`client.listeners`

#### Since

v0.1.26

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:750

***

### off()

```ts
off<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Alias for `emitter.removeListener()`.

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

`client.off`

#### Since

v10.0.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:710

***

### on()

#### on(event, cb)

```ts
on(event: "connect", cb: (connection: connection) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"connect"` |
| `cb` | (`connection`: `connection`) => `void` |

##### Returns

`this`

##### Inherited from

`client.on`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:645

#### on(event, cb)

```ts
on(event: "connectFailed", cb: (err: Error) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"connectFailed"` |
| `cb` | (`err`: `Error`) => `void` |

##### Returns

`this`

##### Inherited from

`client.on`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:646

#### on(event, cb)

```ts
on(event: "httpResponse", cb: (response: IncomingMessage, client: client) => void): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `event` | `"httpResponse"` |
| `cb` | (`response`: `IncomingMessage`, `client`: `client`) => `void` |

##### Returns

`this`

##### Inherited from

`client.on`

##### Source

node\_modules/.pnpm/@types+websocket@1.0.10/node\_modules/@types/websocket/index.d.ts:647

***

### once()

```ts
once<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Adds a **one-time** `listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The `emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
import { EventEmitter } from 'node:events';
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

`client.once`

#### Since

v0.3.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:622

***

### prependListener()

```ts
prependListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`
and `listener` will result in the `listener` being added, and called, multiple times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

`client.prependListener`

#### Since

v6.0.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:849

***

### prependOnceListener()

```ts
prependOnceListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

`this`

#### Inherited from

`client.prependOnceListener`

#### Since

v6.0.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:865

***

### rawListeners()

```ts
rawListeners<K>(eventName: string | symbol): Function[]
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

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

`client.rawListeners`

#### Since

v9.4.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:781

***

### removeAllListeners()

```ts
removeAllListeners(eventName?: string | symbol): this
```

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName`? | `string` \| `symbol` |

#### Returns

`this`

#### Inherited from

`client.removeAllListeners`

#### Since

v0.1.26

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:721

***

### removeListener()

```ts
removeListener<K>(eventName: string | symbol, listener: (...args: any[]) => void): this
```

Removes the specified `listener` from the listener array for the event named `eventName`.

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
time of emitting are called in order. This implies that any `removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
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
recently added instance. In the example the `once('ping')` listener is removed:

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

#### Type parameters

| Type parameter |
| :------ |
| `K` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

`this`

#### Inherited from

`client.removeListener`

#### Since

v0.1.26

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:705

***

### setMaxListeners()

```ts
setMaxListeners(n: number): this
```

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to `Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

`this`

#### Inherited from

`client.setMaxListeners`

#### Since

v0.3.5

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:731

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

`client.addAbortListener`

#### Since

v20.5.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:400

***

### getEventListeners()

```ts
static getEventListeners(emitter: EventEmitter<DefaultEventMap> | _DOMEventTarget, name: string | symbol): Function[]
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
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget` |
| `name` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

`client.getEventListeners`

#### Since

v15.2.0, v14.17.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:321

***

### getMaxListeners()

```ts
static getMaxListeners(emitter: EventEmitter<DefaultEventMap> | _DOMEventTarget): number
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
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget` |

#### Returns

`number`

#### Inherited from

`client.getMaxListeners`

#### Since

v19.9.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:350

***

### ~~listenerCount()~~

```ts
static listenerCount(emitter: EventEmitter<DefaultEventMap>, eventName: string | symbol): number
```

A class method that returns the number of listeners for the given `eventName` registered on the given `emitter`.

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
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> | The emitter to query |
| `eventName` | `string` \| `symbol` | The event name |

#### Returns

`number`

#### Inherited from

`client.listenerCount`

#### Since

v0.9.12

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:293

***

### on()

```ts
static on(
   emitter: EventEmitter<DefaultEventMap>, 
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
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> | - |
| `eventName` | `string` | The name of the event being listened for |
| `options`? | `StaticEventEmitterOptions` | - |

#### Returns

`AsyncIterableIterator`\<`any`\>

An `AsyncIterator` that iterates `eventName` events emitted by the `emitter`

#### Inherited from

`client.on`

#### Since

v13.6.0, v12.16.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:271

***

### once()

#### once(emitter, eventName, options)

```ts
static once(
   emitter: EventEmitter<DefaultEventMap>, 
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

The special handling of the `'error'` event is only used when `events.once()` is used to wait for another event. If `events.once()` is used to wait for the
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
| `emitter` | `EventEmitter`\<`DefaultEventMap`\> |
| `eventName` | `string` \| `symbol` |
| `options`? | `StaticEventEmitterOptions` |

##### Returns

`Promise`\<`any`[]\>

##### Inherited from

`client.once`

##### Since

v11.13.0, v10.16.0

##### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:206

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

`client.once`

##### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:211

***

### setMaxListeners()

```ts
static setMaxListeners(n?: number, ...eventTargets?: (EventEmitter<DefaultEventMap> | _DOMEventTarget)[]): void
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
| ...`eventTargets`? | (`EventEmitter`\<`DefaultEventMap`\> \| `_DOMEventTarget`)[] | - |

#### Returns

`void`

#### Inherited from

`client.setMaxListeners`

#### Since

v15.4.0

#### Source

node\_modules/.pnpm/@types+node@20.12.8/node\_modules/@types/node/events.d.ts:365
