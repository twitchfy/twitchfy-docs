---
editUrl: false
next: false
prev: false
title: "conduitMakeMiddlewares"
---

```ts
conduitMakeMiddlewares(this: WebhookShard, server: Express): void
```

Makes the middlewares for the webhook server.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | [`WebhookShard`](/api/eventsub/classes/webhookshard/) | - |
| `server` | `Express` | The server to make the middlewares for. |

## Returns

`void`

## Source

twitchfy/packages/eventsub/src/util/conduitMakeMiddlewares.ts:13
