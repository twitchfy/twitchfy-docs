---
editUrl: false
next: false
prev: false
title: "conduitMessageHandler"
---

```ts
conduitMessageHandler(this: Object, message: Message): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `Object` |
| `this.connector` | [`WebSocketConduitConnector`](/api/eventsub/classes/websocketconduitconnector/) |
| `this.resolve` | () => `any` |
| `message` | `Message` |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/conduitMessageHandler.ts:10
