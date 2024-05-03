---
editUrl: false
next: false
prev: false
title: "Client"
---

The client used to create connections. You can create connections without this client.

## Constructors

### new Client()

```ts
new Client(): Client
```

Builds up a new client.

#### Returns

[`Client`](/api/eventsub/classes/client/)

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:13

## Methods

### createWebSocketConnection()

```ts
createWebSocketConnection(options: WebSocketConnectionOptions): WebSocketConnection
```

Creates a new WebSocket connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebSocketConnectionOptions`](/api/eventsub/type-aliases/websocketconnectionoptions/) | The options for building up the WebSocket connection. |

#### Returns

[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)

The WebSocket connection.

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:20

***

### createWebhookConnection()

```ts
createWebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

Creates a new Webhook connection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/) | The options for building up the Webhook connection. |
| `server` | `Express` | The express server to use for the Webhook connection. |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

The Webhook connection.

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:32
