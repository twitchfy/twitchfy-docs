---
editUrl: false
next: false
prev: false
title: "SubscriptionType"
---

```ts
type SubscriptionType<U, K>: K extends WebhookConnection ? WebhookSubscription<U> : K extends WebSocketConnection ? WebSocketSubscription<U> : WebSocketSubscription<U> & WebhookSubscription<U>;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Source

twitchfy/packages/eventsub/src/types/SubscriptionType.ts:6
