---
editUrl: false
next: false
prev: false
title: "WebhookConnectionOptions"
---

```ts
type WebhookConnectionOptions: BaseConnectionOptions<WebhookConnection> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `appToken` | [`TokenAdapter`](../classes/TokenAdapter.md)\<`"app"`, `boolean`\> |
| `baseURL` | `string` |
| `dropSubsAtStart` | `boolean` |
| `secret` | `string` |
| `startServer` | `boolean` |
| `subscriptionRoute` | `string` |

## Source

[twitchapi/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:7](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts#L7)
