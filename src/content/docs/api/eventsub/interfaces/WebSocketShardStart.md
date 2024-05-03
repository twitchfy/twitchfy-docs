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
| `shard` | `Object` |
| `shard.id` | `string` |
| `shard.status` | `string` |
| `shard.transport` | `Object` |
| `shard.transport.method` | `"websocket"` |
| `shard.transport.session_id` | `string` |
| `topic` | `"shard.websocket.start"` |
