---
editUrl: false
next: false
prev: false
title: "ChatSettings"
---

Represents the chat settings of a channel.

## Constructors

### new ChatSettings(chatbot, data, channel)

```ts
new ChatSettings(
   chatbot: ChatBot, 
   data: ChatSettings, 
   channel: Channel): ChatSettings
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `ChatSettings` |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`ChatSettings`](ChatSettings.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ChatSettings.ts:76](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ChatSettings.ts#L76)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The [Channel](../../api/chatbot/classes/channel) whose settings are. |
| `chatDelay` | `public` | `boolean` | **Description**<br />A boolean that determines if the chatDelay is enabled. |
| `chatDelayDuration` | `public` | `number` | **Description**<br />The numner in seconds the messages are delayed for the non-moderators. If the chatDelay mode is not enabled this value will be null. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `emotesOnly` | `public` | `boolean` | **Description**<br />A boolean that determines if the emotesOnly mode is enabled. |
| `followersOnly` | `public` | `boolean` | /**<br /><br />**Description**<br />A boolean that determines if the followersOnly mode is enabled. |
| `followersOnlyDuration` | `public` | `number` | **Description**<br />The number in minutes the followers have to be following the broadcaster to be able to talk if the followersOnly mode is enabled. If the followersOnly mode is not enabled this will be null. |
| `slowMode` | `public` | `boolean` | **Description**<br />A boolean that determines if the slowMode is enabled. |
| `slowModeWaitTime` | `public` | `number` | **Description**<br />The number in seconds the normal chatters have to wait to send another message. If the slowMode is not enabled this value will be null. |
| `subsOnly` | `public` | `boolean` | **Description**<br />A boolean that determines if the subscriber mode is enabled. |
| `uniqueMessagesOnly` | `public` | `boolean` | **Description**<br />A boolean that determines if the unique messages mode is enabled. |

## Methods

### set()

```ts
set(options: ChatSettingsOptions): Promise<ChatSettings>
```

Set all the chat settings options.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ChatSettingsOptions`](../interfaces/ChatSettingsOptions.md) | The options of the new chat settings. |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

The new channel's [ChatSettings](../../api/chatbot/classes/chatsettings)

#### Source

[twitchapi/packages/chatbot/src/structures/ChatSettings.ts:96](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ChatSettings.ts#L96)
