---
editUrl: false
next: false
prev: false
title: "SubscriptionCallback"
---

```ts
type SubscriptionCallback<T, K>: (message: SubscriptionMessages<K>[T]) => any | Promise<any>;
```

The callback for a subscription.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<`K`\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

twitchfy/packages/eventsub/src/types/SubscriptionCallback.ts:10
