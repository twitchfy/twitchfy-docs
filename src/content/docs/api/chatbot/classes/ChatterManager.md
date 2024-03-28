---
editUrl: false
next: false
prev: false
title: "ChatterManager"
---

Represents a ChatterManager of a channel chat.

## Constructors

### new ChatterManager(chatbot, chat)

```ts
new ChatterManager(chatbot: ChatBot, chat: Chat): ChatterManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `chat` | [`Chat`](Chat.md) |  |

#### Returns

[`ChatterManager`](ChatterManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatterManager.ts:34](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChatterManager.ts#L34)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The [Channel](../../api/chatbot/classes/channel) of the ChatterManager. |
| `chat` | `public` | [`Chat`](Chat.md) | **Description**<br />The [Chat](../../api/chatbot/classes/chat) of the ChatterManager. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |

## Methods

### fetch()

```ts
fetch(): Promise<UncompleteChatter[]>
```

Obtain the chatters from a channel's chat. Please note that there may be a delay in Twitch updating the list of chatters.

#### Returns

`Promise`\<[`UncompleteChatter`](UncompleteChatter.md)[]\>

Returns an array of [UncompleteChatter](../../api/chatbot/classes/uncompletechatter).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatterManager.ts:45](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChatterManager.ts#L45)
