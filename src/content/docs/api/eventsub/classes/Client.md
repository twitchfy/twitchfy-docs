---
editUrl: false
next: false
prev: false
title: "Client"
---

## Constructors

### new Client()

```ts
new Client(): Client
```

#### Returns

[`Client`](Client.md)

#### Source

twitchapi/packages/eventsub/src/structures/Client.ts:7

## Methods

### createWebSocketConnection()

```ts
createWebSocketConnection(options: WebSocketConnectionOptions): WebSocketConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebSocketConnectionOptions`](../type-aliases/WebSocketConnectionOptions.md) |

#### Returns

[`WebSocketConnection`](WebSocketConnection.md)

#### Source

twitchapi/packages/eventsub/src/structures/Client.ts:9

***

### createWebhookConnection()

```ts
createWebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebhookConnectionOptions`](../type-aliases/WebhookConnectionOptions.md) |
| `server` | `Express` |

#### Returns

[`WebhookConnection`](WebhookConnection.md)

#### Source

twitchapi/packages/eventsub/src/structures/Client.ts:15
