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
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](../interfaces/SubscriptionMessages.md)\<[`WebSocketConnection`](../classes/WebSocketConnection.md)\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

twitchapi/packages/eventsub/src/ws/types/WebSocketSubscriptionCallback.ts:8
