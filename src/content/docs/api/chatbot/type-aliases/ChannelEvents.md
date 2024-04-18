---
editUrl: false
next: false
prev: false
title: "ChannelEvents"
---

```ts
type ChannelEvents: keyof Pick<typeof SubscriptionTypes, 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
| "ChannelChatMessage">;
```

The EventSub events which the chatbot could listen.

## Source

[twitchapi/packages/chatbot/src/types/ChannelEvents.ts:6](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/types/ChannelEvents.ts#L6)
