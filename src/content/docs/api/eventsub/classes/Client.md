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

[twitchapi/packages/eventsub/src/structures/Client.ts:7](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/Client.ts#L7)

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

[twitchapi/packages/eventsub/src/structures/Client.ts:9](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/Client.ts#L9)

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

[twitchapi/packages/eventsub/src/structures/Client.ts:15](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/Client.ts#L15)
