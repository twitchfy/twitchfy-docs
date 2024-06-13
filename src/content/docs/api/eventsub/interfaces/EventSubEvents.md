---
editUrl: false
next: false
prev: false
title: "EventSubEvents"
---

The events that can be emitted by any specific EventSub connection.

## Extended by

- [`WebhookEvents`](/api/eventsub/interfaces/webhookevents/)
- [`WebSocketEvents`](/api/eventsub/interfaces/websocketevents/)
- [`ConduitEvents`](/api/eventsub/interfaces/conduitevents/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `connectionReady` | [`K`] | Emitted when the EventSub connection is ready and fully integrated within Twitch. |
| `subscriptionCreate` | [[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] | Emitted when a subscription is created in the first time. |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<`K`\>, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] | Emitted when a message from a subscription is received. |
| `subscriptionReload` | [[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/), `K`\>] | Emitted when a subscription is reloaded from the storage. |
