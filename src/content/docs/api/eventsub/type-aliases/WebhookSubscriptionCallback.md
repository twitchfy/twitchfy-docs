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
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

twitchfy/packages/eventsub/src/webhook/types/WebhookSubscriptionCallback.ts:8
