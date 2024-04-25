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
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Source

[twitchapi/packages/eventsub/src/types/SubscriptionMessage.ts:4](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/types/SubscriptionMessage.ts#L4)
