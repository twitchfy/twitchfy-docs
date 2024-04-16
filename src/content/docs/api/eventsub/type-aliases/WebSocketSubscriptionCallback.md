---
editUrl: false
next: false
prev: false
title: "WebSocketSubscriptionCallback"
---

```ts
type WebSocketSubscriptionCallback<T>: (message: SubscriptionMessages<WebSocketConnection>[T]) => any | Promise<any>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

[twitchapi/packages/eventsub/src/ws/types/WebSocketSubscriptionCallback.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/types/WebSocketSubscriptionCallback.ts#L8)
