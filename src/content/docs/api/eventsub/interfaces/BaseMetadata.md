---
editUrl: false
next: false
prev: false
title: "BaseMetadata"
---

The base metadata for all notification messages.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `message_id` | `string` |
| `message_timestamp` | `string` |
| `message_type` | `"notification"` |
| `subscription_type` | `T` |
| `subscription_version` | [`SubscriptionVersions`](/api/eventsub/interfaces/subscriptionversions/)\[`T`\] |
