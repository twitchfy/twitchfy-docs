---
editUrl: false
next: false
prev: false
title: "conduitNotificationHandler"
---

```ts
function conduitNotificationHandler(this: WebhookShard | WebSocketShard, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

Handles a subscription notification from the conduit.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | [`WebhookShard`](/api/eventsub/classes/webhookshard/) \| [`WebSocketShard`](/api/eventsub/classes/websocketshard/) | - |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> | The payload of the notification. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/conduitNotificationHandler.ts:12
