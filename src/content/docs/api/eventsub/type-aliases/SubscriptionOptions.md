---
editUrl: false
next: false
prev: false
title: "SubscriptionOptions"
---

```ts
type SubscriptionOptions<T>: Object;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `nonce` | `string` |
| `options` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] |
| `type` | `T` |

## Source

twitchfy/packages/eventsub/src/types/SubscriptionOptions.ts:7
