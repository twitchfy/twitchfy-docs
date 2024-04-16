---
editUrl: false
next: false
prev: false
title: "WebSocketEvents"
---

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>

## Properties

| Property | Type | Inherited from |
| :------ | :------ | :------ |
| `connectionReady` | [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `subscriptionCreate` | [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>, [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
