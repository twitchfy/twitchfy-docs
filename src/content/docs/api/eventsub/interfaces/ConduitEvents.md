---
editUrl: false
next: false
prev: false
title: "ConduitEvents"
---

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `connectionReady` | [[`Conduit`](/api/eventsub/classes/conduit/)] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `shardConnect` | [[`Conduit`](/api/eventsub/classes/conduit/), [`Shard`](/api/eventsub/classes/shard/)] | - |
| `subscriptionCreate` | [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>, [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
