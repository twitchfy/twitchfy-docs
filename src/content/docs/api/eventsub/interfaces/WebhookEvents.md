---
editUrl: false
next: false
prev: false
title: "WebhookEvents"
---

The specific event emitted for the Webhook connection.

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `connectionReady` | [[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)] | Emitted when the EventSub connection is ready and fully integrated within Twitch. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `subscriptionCreate` | [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is created in the first time. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>, [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a message from a subscription is received. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is reloaded from the storage. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
