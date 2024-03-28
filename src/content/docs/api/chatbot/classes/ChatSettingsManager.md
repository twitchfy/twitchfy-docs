---
editUrl: false
next: false
prev: false
title: "ChatSettingsManager"
---

Represent the ChatSettingsManager of a channel.

## Constructors

### new ChatSettingsManager(chatbot, chat)

```ts
new ChatSettingsManager(chatbot: ChatBot, chat: Chat): ChatSettingsManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `chat` | [`Chat`](Chat.md) |  |

#### Returns

[`ChatSettingsManager`](ChatSettingsManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatSettingsManager.ts:29](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChatSettingsManager.ts#L29)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chat` | `public` | [`Chat`](Chat.md) | **Description**<br />The chat of the ChatSettingsManager. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### fetch()

```ts
fetch(): Promise<ChatSettings>
```

Get the ChatSettings of the current ChatSettingsManager's channel

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

Returns [ChatSettings](../../api/chatbot/classes/chatsettings).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatSettingsManager.ts:39](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChatSettingsManager.ts#L39)
