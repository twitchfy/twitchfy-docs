---
editUrl: false
next: false
prev: false
title: "WebhookShard"
---

A Webhook Shard created within a Conduit.

## Constructors

### new WebhookShard(options, server)

```ts
new WebhookShard(options: Pick<WebhookConnectionOptions, "baseURL" | "secret" | "startServer" | "subscriptionRoute">, server: Express): WebhookShard
```

Builds up a Webhook Shard.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Pick`\<[`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/), `"baseURL"` \| `"secret"` \| `"startServer"` \| `"subscriptionRoute"`\> | The options for the shard. |
| `server` | `Express` | The Express server to handle the subscription notifications. |

#### Returns

[`WebhookShard`](/api/eventsub/classes/webhookshard/)

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:71

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | The base URL of the server for setting up the callback. |
| `secret` | `readonly` | `string` | The secret of the shard. |
| `server` | `readonly` | `Express` | The Express server to handle the subscription notifications. |
| `startServer` | `readonly` | `boolean` | Whether to start the server at start.<br /><br />**Default**<br />` false ` |
| `subscriptionRoute` | `readonly` | `string` | The route where the subscription notifications will be sent. |

## Accessors

### conduitId

```ts
get conduitId(): string
```

The id of the Conduit which this shard belongs to.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:95

***

### helixClient

```ts
get helixClient(): HelixClient
```

The HelixClient to interact with the Twitch API of this shard.

#### Returns

`HelixClient`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:103

***

### shardId

```ts
get shardId(): string
```

The id of the shard.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:110

***

### url

```ts
get url(): string
```

The URL used for receiving the subscription notifications. This is the combination of the baseURL and the subscriptionRoute.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:88

## Methods

### makeDebug()

```ts
makeDebug(...args: any[]): void
```

Sends a debug packet to the parent thread to make a debug.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to send. |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:173

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

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:181

***

### start()

```ts
start(port?: number, callback?: () => void): Promise<void>
```

Starts the shard.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `port`? | `number` | The port to start the server at if the startServer option is set to true. |
| `callback`? | () => `void` | A callback to be called when the server is started if the startServer option is set to true. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:119
