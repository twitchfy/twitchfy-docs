---
editUrl: false
next: false
prev: false
title: "SubscriptionMessages"
---

The messages from every EventSub event.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `channel.ad_break.begin` | [`ChannelAdBreakBeginMessage`](/api/eventsub/classes/channeladbreakbeginmessage/)\<`K`\> |
| `channel.chat.clear` | [`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)\<`K`\> |
| `channel.chat.clear_user_messages` | [`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)\<`K`\> |
| `channel.chat.message` | [`ChannelChatMessageMessage`](/api/eventsub/classes/channelchatmessagemessage/)\<`K`\> |
| `channel.follow` | [`ChannelFollowMessage`](/api/eventsub/classes/channelfollowmessage/)\<`K`\> |
| `channel.update` | [`ChannelUpdateMessage`](/api/eventsub/classes/channelupdatemessage/)\<`K`\> |
| `stream.offline` | [`StreamOfflineMessage`](/api/eventsub/classes/streamofflinemessage/)\<`K`\> |
| `stream.online` | [`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)\<`K`\> |
