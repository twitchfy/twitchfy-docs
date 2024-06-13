---
editUrl: false
next: false
prev: false
title: "handleParentMessage"
---

```ts
function handleParentMessage(this: WebhookShard | WebSocketShard, message: ShardIdReplace): Promise<void>
```

Handles a parent message within a shard.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | [`WebhookShard`](/api/eventsub/classes/webhookshard/) \| [`WebSocketShard`](/api/eventsub/classes/websocketshard/) | - |
| `message` | [`ShardIdReplace`](/api/eventsub/interfaces/shardidreplace/) | The message to handle. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/handleParentMessage.ts:10
