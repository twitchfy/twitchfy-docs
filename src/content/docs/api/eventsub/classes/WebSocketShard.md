---
editUrl: false
next: false
prev: false
title: "WebSocketShard"
---

A WebSocket Shard created within a Conduit.

## Constructors

### new WebSocketShard()

```ts
new WebSocketShard(options?: Pick<WebSocketConnectionOptions, "proxy">): WebSocketShard
```

Builds up a WebSocketShard.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `Pick`\<[`WebSocketConnectionOptions`](/api/eventsub/type-aliases/websocketconnectionoptions/), `"proxy"`\> | The options for the WebSocketShard. |

#### Returns

[`WebSocketShard`](/api/eventsub/classes/websocketshard/)

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:58

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `proxy` | `readonly` | `string` | `undefined` | The proxy used for the WebSocket connection if it was specified. |
| `ws` | `public` | [`WebSocketShardConnector`](/api/eventsub/classes/websocketshardconnector/) | `null` | The WebSocket connector for this shard. |

## Accessors

### conduitId

```ts
get conduitId(): string
```

The id of the Conduit which created this shard.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:81

***

### helixClient

```ts
get helixClient(): HelixClient
```

The HelixClient to interact with the Twitch API of this shard.

#### Returns

`HelixClient`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:89

***

### sessionId

```ts
get sessionId(): string
```

The session id of the shard.

```ts
set sessionId(value: string): void
```

Sets the session id of the shard.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:67

***

### shardId

```ts
get shardId(): string
```

The id of the shard.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:96

## Methods

### connect()

```ts
connect(): Promise<void>
```

Connects the shard to the WebSocket connection. The Promise resolves when the connection is established and the session_welcome message was received.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:103

***

### makeDebug()

```ts
makeDebug(...args: any[]): void
```

Sends a debug message to the parent thread.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to send. |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:122

***

### sendPacket()

```ts
sendPacket(packet: object): void
```

Sends a packet to the parent thread.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `packet` | `object` | The packet to send. |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketShard.ts:130
