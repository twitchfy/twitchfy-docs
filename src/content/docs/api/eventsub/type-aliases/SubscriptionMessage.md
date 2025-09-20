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
  | ChannelChatMessageMessage<K>
| StreamOfflineMessage<K>;
```

The message received by a subscription.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Source

twitchfy/packages/eventsub/src/types/SubscriptionMessage.ts:7
