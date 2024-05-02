---
editUrl: false
next: false
prev: false
title: "Shard"
---

## Constructors

### new Shard(conduit, data)

```ts
new Shard(conduit: Conduit, data: ConduitShardData & Object): Shard
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `conduit` | [`Conduit`](/api/eventsub/classes/conduit/) |
| `data` | `ConduitShardData` & `Object` |

#### Returns

[`Shard`](/api/eventsub/classes/shard/)

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:20

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `callback?` | `readonly` | `string` |
| `conduit` | `readonly` | [`Conduit`](/api/eventsub/classes/conduit/) |
| `id` | `readonly` | `string` |
| `secret?` | `readonly` | `string` |
| `sessionId?` | `readonly` | `string` |
| `status` | `readonly` | `string` |
| `type` | `readonly` | `"websocket"` \| `"webhook"` |

## Methods

### delete()

```ts
delete(): Promise<Shard[]>
```

#### Returns

`Promise`\<[`Shard`](/api/eventsub/classes/shard/)[]\>

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:49

***

### toAPI()

```ts
toAPI(): Object
```

#### Returns

`Object`

| Member | Type | Value |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `transport` | `Object` | - |
| `transport.callback` | `string` | - |
| `transport.method` | `"websocket"` \| `"webhook"` | - |
| `transport.secret` | `string` | - |
| `transport.session_id` | `string` | - |

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:37
