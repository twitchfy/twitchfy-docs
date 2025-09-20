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
  | "ChannelChatMessage"
| "StreamOffline">;
```

The EventSub events which the chatbot could listen.

## Source

twitchfy/packages/chatbot/src/types/ChannelEvents.ts:6
