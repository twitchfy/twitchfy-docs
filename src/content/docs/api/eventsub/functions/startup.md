---
editUrl: false
next: false
prev: false
title: "startup"
---

```ts
function startup(this: WebSocketConnection): Promise<void>
```

Used to start up the connection and reload subscriptions if the maintainSubscriptions option is enabled.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The WebSocket connection. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/ws/util/startup.ts:11
