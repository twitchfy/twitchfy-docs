---
editUrl: false
next: false
prev: false
title: "Shard"
---

A shard created within a Conduit.

## Constructors

### new Shard(conduit, data)

```ts
new Shard(conduit: Conduit, data: ConduitShardData & Object): Shard
```

Builds up a Shard.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `conduit` | [`Conduit`](/api/eventsub/classes/conduit/) | The Conduit that created this shard. |
| `data` | `ConduitShardData` & `Object` | The data from the API. If the shard is of type 'webhook', it aditionally includes the secret which is not returned by the API. |

#### Returns

[`Shard`](/api/eventsub/classes/shard/)

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:49

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `callback?` | `readonly` | `string` | The callback of the shard. Only present in webhook type. |
| `conduit` | `readonly` | [`Conduit`](/api/eventsub/classes/conduit/) | The Conduit that created this shard. |
| `id` | `readonly` | `string` | The id of the shard. Starting from 0. |
| `secret?` | `readonly` | `string` | The secret of the shard. Only present in webhook type. |
| `sessionId?` | `readonly` | `string` | The session id of the shard. Only present in websocket type. |
| `status` | `readonly` | `string` | The status of the shard. Probably 'enabled'. |
| `type` | `readonly` | `"websocket"` \| `"webhook"` | The type of transport of the shard. |

## Methods

### delete()

```ts
delete(): Promise<Shard[]>
```

Deletes the shard.

#### Returns

`Promise`\<[`Shard`](/api/eventsub/classes/shard/)[]\>

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:86

***

### toAPI()

```ts
toAPI(): Object
```

Converts the shard to the API format.

#### Returns

`Object`

The shard into API format.

| Member | Type | Value |
| :------ | :------ | :------ |
| `id` | `string` | - |
| `transport` | `Object` | - |
| `transport.callback` | `string` | - |
| `transport.method` | `"websocket"` \| `"webhook"` | - |
| `transport.secret` | `string` | - |
| `transport.session_id` | `string` | - |

#### Source

twitchfy/packages/eventsub/src/structures/Shard.ts:70
