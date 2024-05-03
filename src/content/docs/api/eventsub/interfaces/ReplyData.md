---
editUrl: false
next: false
prev: false
title: "ReplyData"
---

The data of a reply set into the [ChannelChatMessageEvent](../../api/eventsub/interfaces/channelchatmessageevent).

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `parent_message_body` | `string` | The content of the parent message which was replied. |
| `parent_message_id` | `string` | The ID of the parent message which was replied. |
| `parent_user_id` | `string` | The ID of the author of the paren message. |
| `parent_user_login` | `string` | The display name of the author of the parent message. |
| `parent_user_name` | `string` | The login name of the author of the parent message. |
| `thread_message_id` | `string` | The ID of the first message of the thread which contains the parent message. |
| `thread_user_id` | `string` | The ID of the user who started the thread. |
| `thread_user_login` | `string` | The login name of the user who started the thread. |
| `thread_user_name` | `string` | The display name of the user who started the thread. |
