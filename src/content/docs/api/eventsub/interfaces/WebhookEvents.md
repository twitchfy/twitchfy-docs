---
editUrl: false
next: false
prev: false
title: "WebhookEvents"
---

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `connectionReady` | [[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `subscriptionCreate` | [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebhookConnection`](/api/eventsub/classes/webhookconnection/)\>, [`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`WebhookSubscription`](/api/eventsub/classes/webhooksubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
