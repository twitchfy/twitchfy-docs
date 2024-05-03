---
editUrl: false
next: false
prev: false
title: "conduitMessageHandler"
---

```ts
conduitMessageHandler(this: Object, message: Message): Promise<void>
```

Handles the messages received from the conduit.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `Object` | - |
| `this.connector` | [`WebSocketShardConnector`](/api/eventsub/classes/websocketshardconnector/) | - |
| `this.resolve` | () => `any` | - |
| `message` | `Message` | The message received from the conduit. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/conduitMessageHandler.ts:14
