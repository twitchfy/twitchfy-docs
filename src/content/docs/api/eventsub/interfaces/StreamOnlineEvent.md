---
editUrl: false
next: false
prev: false
title: "StreamOnlineEvent"
---

The event sent by Twitch when a stream goes online.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `broadcaster_user_id` | `string` | The ID of the broadcaster who started the stream. |
| `broadcaster_user_login` | `string` | The login name of the broadcaster who started the stream. |
| `broadcaster_user_name` | `string` | The display name of the broadcaster who started the stream. |
| `id` | `string` | The ID of the stream which has started. |
| `started_at` | `string` | The ISO timestamp of when the stream started. |
| `type` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) | The type of the stream. Currently, this is always "live". |
