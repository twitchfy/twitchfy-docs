---
editUrl: false
next: false
prev: false
title: "BaseNotification"
---

The base notification for all notification messages.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `metadata` | [`BaseMetadata`](/api/eventsub/interfaces/basemetadata/)\<`T`\> |
| `payload` | [`BasePayload`](/api/eventsub/interfaces/basepayload/)\<`T`\> |
