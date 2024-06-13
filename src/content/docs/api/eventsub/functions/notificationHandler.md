---
editUrl: false
next: false
prev: false
title: "notificationHandler"
---

```ts
function notificationHandler(connection: WebhookConnection | WebSocketConnection, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

Handles a subscription notification in a connection excluding the conduit.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) \| [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The connection to handle the notification in. |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The payload of the notification. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/notificationHandler.ts:13
