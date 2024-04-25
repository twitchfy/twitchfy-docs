---
editUrl: false
next: false
prev: false
title: "notificationHandler"
---

```ts
notificationHandler(connection: ConnectionTypes, payload: BasePayload<SubscriptionTypes>): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\> |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/notificationHandler.ts:7
