---
editUrl: false
next: false
prev: false
title: "WebSocketEvents"
---

The specific events emitted for the WebSocket connection.

## Extends

- [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>

## Properties

| Property | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ |
| `connectionReady` | [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)] | Emitted when the EventSub connection is ready and fully integrated within Twitch. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`connectionReady` |
| `reconnect` | [[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/), `string`] | Emitted when the WebSocket connection has reconnected to another url provided by the reconnect message sent by Twitch. | - |
| `subscriptionCreate` | [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is created in the first time. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionCreate` |
| `subscriptionMessage` | [[`SubscriptionMessage`](/api/eventsub/type-aliases/subscriptionmessage/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>, [`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a message from a subscription is received. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionMessage` |
| `subscriptionReload` | [[`WebSocketSubscription`](/api/eventsub/classes/websocketsubscription/)\<[`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>] | Emitted when a subscription is reloaded from the storage. | [`EventSubEvents`](/api/eventsub/interfaces/eventsubevents/).`subscriptionReload` |
