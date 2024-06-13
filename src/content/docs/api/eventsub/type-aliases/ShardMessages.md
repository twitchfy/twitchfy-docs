---
editUrl: false
next: false
prev: false
title: "ShardMessages"
---

```ts
type ShardMessages: 
  | WebhookShardStart
  | SubscriptionNotification
  | WebSocketShardStart
  | Debug
  | Warn
  | WebhookCallbackVerified;
```

The message types that can be received by the parent process from a shard.

## Source

twitchfy/packages/eventsub/src/types/ShardMessages.ts:7
