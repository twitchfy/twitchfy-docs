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
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> |
| `baseURL` | `string` |
| `dropSubsAtStart` | `boolean` |
| `secret` | `string` |
| `startServer` | `boolean` |
| `subscriptionRoute` | `string` |

## Source

twitchfy/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:7
