---
editUrl: false
next: false
prev: false
title: "WebhookConnectionOptions"
---

```ts
type WebhookConnectionOptions: BaseConnectionOptions<WebhookConnection> & object;
```

The options for bulding up a Webhook Connection.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`, `boolean`\> | The app token used by this connection. |
| `baseURL` | `string` | The base URL for the webhook callback. |
| `dropSubsAtStart` | `boolean` | <p>Whether to drop subscriptions at start. This will delete all subscriptions that are currently active within the client (only webhook created) to avoid duplicated subscriptions if any storage was set.</p><p>**Default**</p><code>false</code> |
| `secret` | `string` | The secret used for creating subscriptions within this connection. |
| `startServer` | `boolean` | <p>Whether to start the server when the connection is started.</p><p>**Default**</p><code>false</code> |
| `subscriptionRoute` | `string` | <p>The route for receiving Twitch messages.</p><p>**Default**</p><code>/subscriptions</code> |

## Source

twitchfy/packages/eventsub/src/webhook/types/WebhookConnectionOptions.ts:10
