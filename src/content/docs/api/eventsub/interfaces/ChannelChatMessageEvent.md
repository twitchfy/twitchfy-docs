---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageEvent"
---

The event sent by Twitch when a message is sent in a channel.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `badges` | [`BadgeData`](/api/eventsub/interfaces/badgedata/)[] | The badges of the user who sent the message. |
| `broadcaster_user_id` | `string` | The ID of the broadcaster who owns the channel. |
| `broadcaster_user_login` | `string` | The login name of the broadcaster who owns the channel. |
| `broadcaster_user_name` | `string` | The display name of the broadcaster who owns the channel. |
| `channel_points_custom_reward_id` | `string` | The custom reward ID if the message has been sent within a custom reward reedemption. |
| `chatter_user_id` | `string` | The ID of the user who sent the message. |
| `chatter_user_login` | `string` | The login name of the user who sent the message. |
| `chatter_user_name` | `string` | The display name of the user who sent the message. |
| `cheer` | [`CheerData`](/api/eventsub/interfaces/cheerdata/) | The cheer data if the message contains a cheer. |
| `color` | `string` | The color of the user's display name who sent the message. |
| `message` | [`MessageData`](/api/eventsub/interfaces/messagedata/) | The message which was sent. |
| `message_id` | `string` | The ID of the message which was sent. |
| `message_type` | [`MessageTypes`](/api/eventsub/type-aliases/messagetypes/) | The type of the message. |
| `reply` | [`ReplyData`](/api/eventsub/interfaces/replydata/) | The reply data if the message is a reply. |
