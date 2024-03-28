---
editUrl: false
next: false
prev: false
title: "Chat"
---

Represent the chat of a channel.

## Constructors

### new Chat(chatbot, channel)

```ts
new Chat(chatbot: ChatBot, channel: Channel): Chat
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`Chat`](Chat.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:41](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L41)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The [Channel](../../api/chatbot/classes/channel) of the chat. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `chatters` | `public` | [`ChatterManager`](ChatterManager.md) | **Description**<br />The [ChatterManager](../../api/chatbot/classes/chattermanager) of the chat. |
| `settings` | `public` | [`ChatSettingsManager`](ChatSettingsManager.md) | **Description**<br />The [ChatSettingsManager](../../api/chatbot/classes/chatsettingsmanager) of the chat. |

## Methods

### setChatDelay()

```ts
setChatDelay(delay: number): Promise<ChatSettings>
```

Set the chatDelay of the Chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | The delay in seconds the non-moderators will have when a message is sent. If `duration` is null, the chatDelay will be removed. |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:108](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L108)

***

### setFollowerMode()

```ts
setFollowerMode(duration: number): Promise<ChatSettings>
```

Set the followerMode of the Chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration in seconds that the followers must to be following the channel to talk. If `duration` is null, the followeMode will be removed. |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

The new channel's [ChatSettings](../../api/chatbot/classes/chatsettings).

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:70](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L70)

***

### setSlowMode()

```ts
setSlowMode(duration: number): Promise<ChatSettings>
```

Set the slowMode of the Chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `duration` | `number` | The duration of the slowMode in seconds. If `duration` is null, the slowMode will be removed. |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

The new channel's [ChatSettings](../../api/chatbot/classes/chatsettings).

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:53](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L53)

***

### setSubscriberMode()

```ts
setSubscriberMode(query: boolean): Promise<ChatSettings>
```

Set the subscriberMode of the Chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `query` | `boolean` | If the subscriberMode is enabled. |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

The new channel's [ChatSettings](../../api/chatbot/classes/chatsettings).

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:85](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L85)

***

### setUniqueMessagesMode()

```ts
setUniqueMessagesMode(query: boolean): Promise<ChatSettings>
```

Set the uniqueMessagesMode of the Chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `query` | `boolean` | If the uniqueMessagesMode is enabled |

#### Returns

`Promise`\<[`ChatSettings`](ChatSettings.md)\>

The new channel's [ChatSettings](../../api/chatbot/classes/chatsettings).

#### Source

[twitchapi/packages/chatbot/src/structures/Chat.ts:96](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chat.ts#L96)
