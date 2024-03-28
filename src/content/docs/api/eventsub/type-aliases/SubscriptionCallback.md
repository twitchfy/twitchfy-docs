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
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](ConnectionTypes.md) | [`ConnectionTypes`](ConnectionTypes.md) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](../interfaces/SubscriptionMessages.md)\<`K`\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

twitchapi/packages/eventsub/src/types/SubscriptionCallback.ts:7
