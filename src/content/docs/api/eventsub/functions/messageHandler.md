---
editUrl: false
next: false
prev: false
title: "messageHandler"
---

```ts
messageHandler(this: Object, message: Message): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `Object` |
| `this.connector` | [`WebSocket`](/api/eventsub/classes/websocket/) |
| `this.resolve` | () => `any` |
| `message` | `Message` |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/ws/util/messageHandler.ts:12
