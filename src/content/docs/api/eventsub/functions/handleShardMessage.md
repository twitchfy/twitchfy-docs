---
editUrl: false
next: false
prev: false
title: "handleShardMessage"
---

```ts
function handleShardMessage(this: object, message: ShardMessages): Promise<void>
```

Handles a shard message received by the parent process.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `this` | `object` | - |
| `this.conduit` | [`Conduit`](/api/eventsub/classes/conduit/) | - |
| `this.resolve` | () => `void` | - |
| `this.worker` | `Worker` | - |
| `message` | [`ShardMessages`](/api/eventsub/type-aliases/shardmessages/) | The message to handle. |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/handleShardMessage.ts:15
