---
editUrl: false
next: false
prev: false
title: "AutoMod"
---

Represents the automod of a channel.

## Constructors

### new AutoMod(chatbot, channel)

```ts
new AutoMod(chatbot: ChatBot, channel: Channel): AutoMod
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`AutoMod`](AutoMod.md)

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:32](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoMod.ts#L32)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The channel whose automod is. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `settings` | `public` | [`AutoModSettingsManager`](AutoModSettingsManager.md) | **Description**<br />The settings of the automod. |
