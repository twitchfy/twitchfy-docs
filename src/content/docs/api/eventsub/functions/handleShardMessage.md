---
editUrl: false
next: false
prev: false
title: "handleShardMessage"
---

```ts
handleShardMessage(this: Object, message: ShardMessages): Promise<void>
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `this` | `Object` |
| `this.conduit` | [`Conduit`](/api/eventsub/classes/conduit/) |
| `this.resolve` | () => `void` |
| `this.worker` | `Worker` |
| `message` | [`ShardMessages`](/api/eventsub/type-aliases/shardmessages/) |

## Returns

`Promise`\<`void`\>

## Source

twitchfy/packages/eventsub/src/util/handleShardMessage.ts:9
