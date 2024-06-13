---
editUrl: false
next: false
prev: false
title: "messageHandler"
---

```ts
function messageHandler(this: object, message: Message): Promise<void>
```

Handles a message received from the websocket server.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `object` | The this object |
| `this.connector` | [`WebSocket`](/api/eventsub/classes/websocket/) | - |
| `this.resolve` | () => `any` | - |
| `message` | `Message` | The message received from the websocket server. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/ws/util/messageHandler.ts:17
