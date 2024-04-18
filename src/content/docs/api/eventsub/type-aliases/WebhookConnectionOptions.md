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

[twitchapi/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:7](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts#L7)
