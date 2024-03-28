---
editUrl: false
next: false
prev: false
title: "BaseMetadata"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Properties

| Property | Type |
| :------ | :------ |
| `message_id` | `string` |
| `message_timestamp` | `string` |
| `message_type` | `"notification"` |
| `subscription_type` | `T` |
| `subscription_version` | [`SubscriptionVersions`](SubscriptionVersions.md)\[`T`\] |
