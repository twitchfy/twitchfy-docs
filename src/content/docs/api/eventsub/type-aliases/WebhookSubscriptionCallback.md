---
editUrl: false
next: false
prev: false
title: "WebhookSubscriptionCallback"
---

```ts
type WebhookSubscriptionCallback<T>: (message: SubscriptionMessages<WebhookConnection>[T]) => any | Promise<any>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](../interfaces/SubscriptionMessages.md)\<[`WebhookConnection`](../classes/WebhookConnection.md)\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

[twitchapi/packages/eventsub/src/webhook/types/WebhookSubscriptionCallback.ts:8](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/types/WebhookSubscriptionCallback.ts#L8)
