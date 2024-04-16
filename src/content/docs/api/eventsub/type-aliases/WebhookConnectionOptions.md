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

[twitchapi/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts#L7)
