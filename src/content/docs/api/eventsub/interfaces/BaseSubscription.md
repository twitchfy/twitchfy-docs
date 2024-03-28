---
editUrl: false
next: false
prev: false
title: "BaseSubscription"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Properties

| Property | Type |
| :------ | :------ |
| `condition` | [`SubscriptionTypeOptions`](SubscriptionTypeOptions.md)\[`T`\] |
| `cost` | `number` |
| `created_at` | `string` |
| `id` | `string` |
| `status` | `"enabled"` |
| `transport` | [`BaseTransport`](BaseTransport.md) |
| `type` | `T` |
| `version` | [`SubscriptionVersions`](SubscriptionVersions.md)\[`T`\] |
