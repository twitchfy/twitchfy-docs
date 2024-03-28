---
editUrl: false
next: false
prev: false
title: "EventSubEvents"
---

## Extended by

- [`WebhookEvents`](WebhookEvents.md)
- [`WebSocketEvents`](WebSocketEvents.md)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Properties

| Property | Type |
| :------ | :------ |
| `connectionReady` | [`K`] |
| `subscriptionCreate` | [[`SubscriptionType`](../type-aliases/SubscriptionType.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md), `K`\>] |
| `subscriptionMessage` | [[`SubscriptionMessage`](../type-aliases/SubscriptionMessage.md)\<`K`\>, [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md), `K`\>] |
| `subscriptionReload` | [[`SubscriptionType`](../type-aliases/SubscriptionType.md)\<[`SubscriptionTypes`](../enumerations/SubscriptionTypes.md), `K`\>] |
