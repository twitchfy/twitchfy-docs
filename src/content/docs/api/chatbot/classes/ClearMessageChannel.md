---
editUrl: false
next: false
prev: false
title: "ClearMessageChannel"
---

Represents the channel where the ClearMessage event was fired.

## Constructors

### new ClearMessageChannel(chatbot, name)

```ts
new ClearMessageChannel(chatbot: ChatBot, name: string): ClearMessageChannel
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `name` | `string` |  |

#### Returns

[`ClearMessageChannel`](ClearMessageChannel.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts:27](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts#L27)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `name` | `public` | `string` | **Description**<br />The name of the channel. |

## Methods

### fetch()

```ts
fetch(): Promise<Channel>
```

Get the whole [Channel](../../api/chatbot/classes/channel) object with all the channel's information.

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

Returns a complete [Channel](../../api/chatbot/classes/channel).

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts:75](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts#L75)

***

### join()

```ts
join(): JoinedChannel
```

Connects the ChatBot to the chat of the channel.

#### Returns

[`JoinedChannel`](JoinedChannel.md)

The [JoinedChannel](../../api/chatbot/classes/joinedchannel).

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts:48](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts#L48)

***

### leave()

```ts
leave(): JoinedChannel
```

Disconnect the ChatBot to the chat of the channel.

#### Returns

[`JoinedChannel`](JoinedChannel.md)

The [JoinedChannel](../../api/chatbot/classes/joinedchannel) that the bot has disconnected.

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts:62](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts#L62)

***

### sendMessage()

```ts
sendMessage(message: string): void
```

Send a message to the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message that is going to be sent to the channel. |

#### Returns

`void`

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts:38](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageChannel.ts#L38)
