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

[twitchapi/packages/eventsub/src/types/SubscriptionType.ts:6](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/types/SubscriptionType.ts#L6)
