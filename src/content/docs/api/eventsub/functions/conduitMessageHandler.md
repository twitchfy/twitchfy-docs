---
editUrl: false
next: false
prev: false
title: "conduitMessageHandler"
---

```ts
function conduitMessageHandler(this: object, message: Message): Promise<void>
```

Handles the messages received from the conduit.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `object` | - |
| `this.connector` | [`WebSocketShardConnector`](/api/eventsub/classes/websocketshardconnector/) | - |
| `this.resolve` | () => `any` | - |
| `message` | `Message` | The message received from the conduit. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/conduitMessageHandler.ts:14
