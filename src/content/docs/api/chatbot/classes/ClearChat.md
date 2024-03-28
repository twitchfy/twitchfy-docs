---
editUrl: false
next: false
prev: false
title: "ClearChat"
---

Represents a ClearChat message that is fired when a chat is cleared or a all user's message are cleared.

## Constructors

### new ClearChat(chatbot, data, tags)

```ts
new ClearChat(
   chatbot: ChatBot, 
   data: string, 
   tags: ClearChatTags): ClearChat
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `string` |  |
| `tags` | [`ClearChatTags`](../interfaces/ClearChatTags.md) |  |

#### Returns

[`ClearChat`](ClearChat.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChat.ts:41](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChat.ts#L41)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `banDuration` | `public` | `number` | **Description**<br />The duration of the ban. Is null in cases where the event is not triggered due to the deletion of all the user's messages or when the ban is not implemented as a timeout. |
| `channel` | `public` | [`ClearChatChannel`](ClearChatChannel.md) | **Description**<br />The channel where the ClearChat event was fired. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `user` | `public` | [`ClearChatUser`](ClearChatUser.md) | **Description**<br />The user whose messages were deleted. This is null if the event is triggered due to the deletion of all the messages in the chat. |
