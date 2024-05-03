---
editUrl: false
next: false
prev: false
title: "findFirstMissingId"
---

```ts
findFirstMissingId(shards: ConduitShardData[]): string
```

Finds the first unused or disable shard in a conduit and returns its id.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shards` | `ConduitShardData`[] | The id that was found. |

## Returns

`string`

## Source

twitchfy/packages/eventsub/src/util/findFirstMissingId.ts:7
