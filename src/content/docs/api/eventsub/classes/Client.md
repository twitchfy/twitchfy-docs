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

[`Client`](/api/eventsub/classes/client/)

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:7

## Methods

### createWebSocketConnection()

```ts
createWebSocketConnection(options: WebSocketConnectionOptions): WebSocketConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebSocketConnectionOptions`](/api/eventsub/type-aliases/websocketconnectionoptions/) |

#### Returns

[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:9

***

### createWebhookConnection()

```ts
createWebhookConnection(options: WebhookConnectionOptions, server: Express): WebhookConnection
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | [`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/) |
| `server` | `Express` |

#### Returns

[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)

#### Source

twitchfy/packages/eventsub/src/structures/Client.ts:15
