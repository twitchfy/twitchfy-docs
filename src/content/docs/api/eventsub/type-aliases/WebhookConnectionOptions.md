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

[twitchapi/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:7](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts#L7)
