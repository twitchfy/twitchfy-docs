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
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `nonce` | `string` |
| `options` | [`SubscriptionTypeOptions`](../interfaces/SubscriptionTypeOptions.md)\[`T`\] |
| `type` | `T` |

## Source

[twitchapi/packages/eventsub/src/types/SubscriptionOptions.ts:7](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/types/SubscriptionOptions.ts#L7)
