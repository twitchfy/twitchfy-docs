---
editUrl: false
next: false
prev: false
title: "SubscriptionCallback"
---

```ts
type SubscriptionCallback<T, K>: (message: SubscriptionMessages<K>[T]) => any | Promise<any>;
```

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

[twitchapi/packages/eventsub/src/types/SubscriptionCallback.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/types/SubscriptionCallback.ts#L7)
