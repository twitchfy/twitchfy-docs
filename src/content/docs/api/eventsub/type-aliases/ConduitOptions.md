---
editUrl: false
next: false
prev: false
title: "ConduitOptions"
---

```ts
type ConduitOptions: BaseConnectionOptions<Conduit> & Object;
```

The options for building a Conduit connection.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `appToken` | [`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`"app"`\> | The token adapter for the application token. |
| `conduitCleanup` | `boolean` | Whether to cleanup the conduit when it is closed deleting replacing all the shards. |
| `conduitId` | `string` | The id of the conduit. If not present, a conduit will be created. |
| `deleteConduitOnNoShards` | `boolean` | Whether to delete the conduit when you are going to delete the last shard. |
| `dropSubsAtStart` | `boolean` | Whether to drop the subscriptions at the start. |
| `shards` | `string`[] | The shard paths that will be used for establishing the shards at the start. |

## Source

twitchfy/packages/eventsub/src/types/ConduitOptions.ts:8
