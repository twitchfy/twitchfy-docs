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

[twitchapi/packages/eventsub/src/types/StorageAdapterGet.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/types/StorageAdapterGet.ts#L8)
