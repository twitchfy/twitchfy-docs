---
editUrl: false
next: false
prev: false
title: "ClearMessage"
---

Represents a ClearMessage message that is fired when a chat message is deleted.

## Constructors

### new ClearMessage(chatbot, data, tags)

```ts
new ClearMessage(
   chatbot: ChatBot, 
   data: string, 
   tags: ClearMessageTags): ClearMessage
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `string` |  |
| `tags` | [`ClearMessageTags`](../interfaces/ClearMessageTags.md) |  |

#### Returns

[`ClearMessage`](ClearMessage.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessage.ts:41](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessage.ts#L41)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`ClearMessageChannel`](ClearMessageChannel.md) | **Description**<br />The channel where the ClearMessage event is fired. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `messageContent` | `public` | `string` | **Description**<br />The content of the message that was deleted. |
| `user` | `public` | [`ClearMessageUser`](ClearMessageUser.md) | **Description**<br />The user whose message was deleted. |
