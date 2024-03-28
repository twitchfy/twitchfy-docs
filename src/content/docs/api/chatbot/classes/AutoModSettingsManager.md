---
editUrl: false
next: false
prev: false
title: "AutoModSettingsManager"
---

Represents the AutoModSettingsManager of a channel.

## Constructors

### new AutoModSettingsManager(chatbot, channel)

```ts
new AutoModSettingsManager(chatbot: ChatBot, channel: Channel): AutoModSettingsManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`AutoModSettingsManager`](AutoModSettingsManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:26](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L26)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The AutoMod's [Channel](../../api/chatbot/classes/channel). |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### fetch()

```ts
fetch(): Promise<AutoModSettings>
```

Obtain the current settings of the channel's automod.

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the current channel's automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:36](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L36)
