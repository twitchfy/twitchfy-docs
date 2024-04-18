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

[twitchapi/packages/eventsub/src/webhook/types/WebhookSubscriptionCallback.ts:8](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/webhook/types/WebhookSubscriptionCallback.ts#L8)
