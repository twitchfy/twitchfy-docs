---
editUrl: false
next: false
prev: false
title: "ConduitSubscriptionCallback"
---

```ts
type ConduitSubscriptionCallback<T>: (message: SubscriptionMessages<Conduit>[T]) => any | Promise<any>;
```

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>\[`T`\] |

## Returns

`any` \| `Promise`\<`any`\>

## Source

twitchfy/packages/eventsub/src/types/ConduitSubscriptionCallback.ts:6
