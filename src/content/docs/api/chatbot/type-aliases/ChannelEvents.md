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

[twitchapi/packages/chatbot/src/types/ChannelEvents.ts:6](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/types/ChannelEvents.ts#L6)
