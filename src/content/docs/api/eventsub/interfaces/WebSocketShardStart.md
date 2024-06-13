---
editUrl: false
next: false
prev: false
title: "WebSocketShardStart"
---

Message emitted when a shard is starting with a websocket transport.

## Properties

| Property | Type |
| :------ | :------ |
| `shard` | `object` |
| `shard.id` | `string` |
| `shard.status` | `string` |
| `shard.transport` | `object` |
| `shard.transport.method` | `"websocket"` |
| `shard.transport.session_id` | `string` |
| `topic` | `"shard.websocket.start"` |
