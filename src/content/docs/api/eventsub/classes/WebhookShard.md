---
editUrl: false
next: false
prev: false
title: "WebhookShard"
---

A Webhook Shard created within a Conduit.

## Constructors

### new WebhookShard()

```ts
new WebhookShard(options: Pick<WebhookConnectionOptions, "baseURL" | "subscriptionRoute" | "startServer" | "secret">, server?: Express): WebhookShard
```

Builds up a Webhook Shard.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `Pick`\<[`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/), `"baseURL"` \| `"subscriptionRoute"` \| `"startServer"` \| `"secret"`\> | The options for the shard. |
| `server`? | `Express` | The Express server to handle the subscription notifications. |

#### Returns

[`WebhookShard`](/api/eventsub/classes/webhookshard/)

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:67

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` | The base URL of the server for setting up the callback. |
| `secret` | `readonly` | `string` | The secret of the shard. |
| `server` | `readonly` | `Express` | The Express server to handle the subscription notifications. |
| `startServer` | `readonly` | `boolean` | <p>Whether to start the server at start.</p><p>**Default**</p><code>false</code> |
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

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:91

***

### shardId

```ts
get shardId(): string
```

The id of the shard.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:99

***

### url

```ts
get url(): string
```

The URL used for receiving the subscription notifications. This is the combination of the baseURL and the subscriptionRoute.

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:84

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

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:180

***

### makeWarn()

```ts
makeWarn(...args: any[]): void
```

Sends a warn packet to the parent thread to make a warning.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to send. |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:188

***

### post()

```ts
post(
   headers: IncomingHttpHeaders, 
   body: any, 
   verification: (challenge: string) => any, 
   success: () => any, 
invalidSignature?: () => any): Promise<any>
```

Used for handling incoming Twitch requests in your custom non-Express server.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `headers` | `IncomingHttpHeaders` | The headers of the request. |
| `body` | `any` | The body of the request. |
| `verification` | (`challenge`: `string`) => `any` | A callback to be called when the request is a webhook callback verification and you need to send the challenge. |
| `success` | () => `any` | A callback to be called when the handling has suceeded. You will need to send a 200 status in the response after that. |
| `invalidSignature`? | () => `any` | A callback which is executed when the signature that has been sent by the requester is incorrect. |

#### Returns

`Promise`\<`any`\>

#### Source

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:112

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

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:196

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

twitchfy/packages/eventsub/src/structures/WebhookShard.ts:154
