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

[twitchapi/packages/eventsub/src/util/notificationHandler.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/util/notificationHandler.ts#L7)
