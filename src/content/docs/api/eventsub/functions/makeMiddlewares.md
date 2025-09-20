---
editUrl: false
next: false
prev: false
title: "makeMiddlewares"
---

```ts
function makeMiddlewares(connection: WebhookConnection, server: Express): void
```

Makes the middlewares for the webhook.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) | The connection to make the middlewares for. |
| `server` | `Express` | The express server to use. |

## Returns

`void`

## Source

twitchfy/packages/eventsub/src/webhook/util/makeMiddlewares.ts:20
