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
| `U` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |
| `K` extends [`ConnectionTypes`](ConnectionTypes.md) | [`ConnectionTypes`](ConnectionTypes.md) |

## Source

twitchapi/packages/eventsub/src/types/SubscriptionType.ts:6
