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

[twitchapi/packages/chatbot/src/types/ChannelEvents.ts:6](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/ChannelEvents.ts#L6)
