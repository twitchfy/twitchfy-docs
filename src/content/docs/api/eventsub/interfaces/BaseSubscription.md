---
editUrl: false
next: false
prev: false
title: "BaseSubscription"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `condition` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] |
| `cost` | `number` |
| `created_at` | `string` |
| `id` | `string` |
| `status` | `"enabled"` |
| `transport` | [`BaseTransport`](/api/eventsub/interfaces/basetransport/) |
| `type` | `T` |
| `version` | [`SubscriptionVersions`](/api/eventsub/interfaces/subscriptionversions/)\[`T`\] |
