---
editUrl: false
next: false
prev: false
title: "ConduitEvents"
---

The specific events for a Conduit.

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `connectionReady` | [[`Conduit`](/api/eventsub/classes/conduit/)] | Emitted when the EventSub connection is ready and fully integrated within Twitch. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `shardConnect` | [[`Conduit`](/api/eventsub/classes/conduit/), [`Shard`](/api/eventsub/classes/shard/)] | Emitted when a shard connects to the Conduit and all the verifications have been passed. | - |
| `subscriptionCreate` | [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is created in the first time. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`Conduit`](/api/eventsub/classes/conduit/)\>, [`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a message from a subscription is received. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`ConduitSubscription`](/api/eventsub/classes/conduitsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is reloaded from the storage. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
