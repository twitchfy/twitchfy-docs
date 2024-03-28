---
editUrl: false
next: false
prev: false
title: "StreamManager"
---

Represents the StreamManager of a channel.

## Constructors

### new StreamManager(chatbot, channel)

```ts
new StreamManager(chatbot: ChatBot, channel: Channel | ClearChatChannel | PrivMSGChannel): StreamManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) \| [`ClearChatChannel`](ClearChatChannel.md) \| [`PrivMSGChannel`](PrivMSGChannel.md) |  |

#### Returns

[`StreamManager`](StreamManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/StreamManager.ts:28](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/StreamManager.ts#L28)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) \| [`ClearChatChannel`](ClearChatChannel.md) \| [`PrivMSGChannel`](PrivMSGChannel.md) | **Description**<br />The StreamManager [Channel](../../api/chatbot/classes/channel). |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### fetch()

```ts
fetch(): Promise<Stream>
```

Obtain the current stream of the channel.

#### Returns

`Promise`\<[`Stream`](Stream.md)\>

Returns the channel stream if any.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/StreamManager.ts:39](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/StreamManager.ts#L39)
