---
editUrl: false
next: false
prev: false
title: "WebhookConnectionOptions"
---

```ts
type WebhookConnectionOptions: BaseConnectionOptions<WebhookConnection> & Object;
```

The options for bulding up a Webhook Connection.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> | The app token used by this connection. |
| `baseURL` | `string` | The base URL for the webhook callback. |
| `dropSubsAtStart` | `boolean` | Whether to drop subscriptions at start. This will delete all subscriptions that are currently active within the client (only webhook created) to avoid duplicated subscriptions if any storage was set.<br /><br />**Default**<br />` false ` |
| `secret` | `string` | The secret used for creating subscriptions within this connection. |
| `startServer` | `boolean` | Whether to start the server when the connection is started.<br /><br />**Default**<br />` false ` |
| `subscriptionRoute` | `string` | The route for receiving Twitch messages.<br /><br />**Default**<br />` /subscriptions ` |

## Source

twitchfy/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:10
