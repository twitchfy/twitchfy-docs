---
editUrl: false
next: false
prev: false
title: "ChannelUpdateEvent"
---

The event sent by Twitch when a broadcaster updates their channel properties such the title of his stream.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `broadcaster_user_id` | `string` | The ID of the broadcaster who updated his channel. |
| `broadcaster_user_login` | `string` | The login name of the broadcaster who updated his channel. |
| `broadcaster_user_name` | `string` | The display name of the broadcaster who updated his channel. |
| `category_id` | `string` | The category ID of the stream. |
| `category_name` | `string` | The category name of the stream. |
| `content_classification_labels` | `string`[] | The content classification labels of the stream. |
| `language` | `string` | The language of the stream. |
| `title` | `string` | The title of the stream. |
