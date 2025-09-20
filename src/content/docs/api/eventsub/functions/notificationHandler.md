---
editUrl: false
next: false
prev: false
title: "notificationHandler"
---

```ts
function notificationHandler(connection: WebSocketConnection | WebhookConnection, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

Handles a subscription notification in a connection excluding the conduit.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) \| [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) | The connection to handle the notification in. |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The payload of the notification. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/notificationHandler.ts:13
