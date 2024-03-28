---
editUrl: false
next: false
prev: false
title: "SubscriptionMessage"
---

```ts
type SubscriptionMessage<K>: 
  | ChannelFollowMessage<K>
  | ChannelUpdateMessage<K>
  | ChannelChatClearMessage<K>
  | StreamOnlineMessage<K>
  | ChannelAdBreakBeginMessage<K>
  | ChannelChatClearUserMessagesMessage<K>
| ChannelChatMessageMessage<K>;
```

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](ConnectionTypes.md) | [`ConnectionTypes`](ConnectionTypes.md) |

## Source

twitchapi/packages/eventsub/src/types/SubscriptionMessage.ts:4
