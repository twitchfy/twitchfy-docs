---
editUrl: false
next: false
prev: false
title: "SubscriptionNotification"
---

```ts
type SubscriptionNotification<T>: Object;
```

Message emitted when a shard has received a subscription notification.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<`T`\> |
| `topic` | `T` |

## Source

twitchfy/packages/eventsub/src/types/ShardMessages.ts:43
