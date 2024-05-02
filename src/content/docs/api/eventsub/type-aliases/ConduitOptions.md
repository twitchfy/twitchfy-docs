---
editUrl: false
next: false
prev: false
title: "ConduitOptions"
---

```ts
type ConduitOptions: BaseConnectionOptions<Conduit> & Object;
```

## Type declaration

| Member | Type |
| :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`\> |
| `conduitCleanup` | `boolean` |
| `conduitId` | `string` |
| `deleteConduitOnNoShards` | `boolean` |
| `dropSubsAtStart` | `boolean` |
| `shardCount` | `number` |
| `shards` | `string`[] |

## Source

twitchfy/packages/eventsub/src/types/ConduitOptions.ts:5
