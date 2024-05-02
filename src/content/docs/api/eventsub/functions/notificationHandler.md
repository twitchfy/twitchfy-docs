---
editUrl: false
next: false
prev: false
title: "notificationHandler"
---

```ts
notificationHandler(connection: WebhookConnection | WebSocketConnection, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) \| [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/notificationHandler.ts:8
