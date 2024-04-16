---
editUrl: false
next: false
prev: false
title: "EventSubEvents"
---

## Extended by

- [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)
- [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `connectionReady` | [`K`] |
| `subscriptionCreate` | [[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<`K`\>, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] |
| `subscriptionReload` | [[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] |
