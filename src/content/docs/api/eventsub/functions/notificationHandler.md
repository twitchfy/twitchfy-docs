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

[twitchapi/packages/eventsub/src/util/notificationHandler.ts:7](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/util/notificationHandler.ts#L7)
