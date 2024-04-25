---
editUrl: false
next: false
prev: false
title: "StorageAdapterGet"
---

```ts
type StorageAdapterGet<K, T>: K extends WebhookConnection ? Pick<WebhookSubscription<T>, "id" | "secret" | "type" | "options"> & Object : Pick<WebSocketSubscription<T>, "id" | "type" | "options"> & Object;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | - |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Source

twitchfy/packages/eventsub/src/types/StorageAdapterGet.ts:8
