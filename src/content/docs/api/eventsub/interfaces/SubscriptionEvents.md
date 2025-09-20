---
editUrl: false
next: false
prev: false
title: "SubscriptionEvents"
---

The events that can be sent by Twitch and are supported by the package.

## Properties

| Property | Type |
| :------ | :------ |
| `channel.ad_break.begin` | `ChannelAdBreakBeginEvent` |
| `channel.chat.clear` | `ChannelChatClearEvent` |
| `channel.chat.clear_user_messages` | `ChannelChatClearUserMessagesEvent` |
| `channel.chat.message` | [`ChannelChatMessageEvent`](/api/eventsub/interfaces/channelchatmessageevent/) |
| `channel.follow` | [`ChannelFollowEvent`](/api/eventsub/interfaces/channelfollowevent/) |
| `channel.update` | [`ChannelUpdateEvent`](/api/eventsub/interfaces/channelupdateevent/) |
| `stream.offline` | [`StreamOfflineEvent`](/api/eventsub/interfaces/streamofflineevent/) |
| `stream.online` | [`StreamOnlineEvent`](/api/eventsub/interfaces/streamonlineevent/) |
