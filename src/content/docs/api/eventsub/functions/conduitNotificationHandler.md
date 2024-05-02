---
editUrl: false
next: false
prev: false
title: "conduitNotificationHandler"
---

```ts
conduitNotificationHandler(this: WebhookConduit | WebSocketConduit, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | [`WebhookConduit`](/api/eventsub/classes/webhookconduit/) \| [`WebSocketConduit`](/api/eventsub/classes/websocketconduit/) |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/conduitNotificationHandler.ts:7
