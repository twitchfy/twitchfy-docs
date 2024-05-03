---
editUrl: false
next: false
prev: false
title: "BadgeData"
---

The data of a badge set into the [ChannelChatMessageEvent](../../api/eventsub/interfaces/channelchatmessageevent).

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the badge. For example: moderator, subscriber, etc. |
| `info` | `string` | The information of the badge. This is only included if the badge is a subscriber badge, containing the number of months the user has been subscribed |
| `set_id` | `string` | The ID of the badge set. |
