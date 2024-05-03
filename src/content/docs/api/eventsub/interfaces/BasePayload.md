---
editUrl: false
next: false
prev: false
title: "BasePayload"
---

The base payload for all notification messages.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `event` | [`SubscriptionEvents`](/api/eventsub/interfaces/subscriptionevents/)\[`T`\] |
| `subscription` | [`BaseSubscription`](/api/eventsub/interfaces/basesubscription/)\<`T`\> |
