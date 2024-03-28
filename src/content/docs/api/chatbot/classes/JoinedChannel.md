---
editUrl: false
next: false
prev: false
title: "JoinedChannel"
---

## Constructors

### new JoinedChannel(chatbot, name)

```ts
new JoinedChannel(chatbot: ChatBot, name: string): JoinedChannel
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |
| `name` | `string` |

#### Returns

[`JoinedChannel`](JoinedChannel.md)

#### Source

[twitchapi/packages/chatbot/src/structures/JoinedChannel.ts:8](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/JoinedChannel.ts#L8)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) |
| `name` | `public` | `string` |

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

[twitchapi/packages/chatbot/src/structures/JoinedChannel.ts:56](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/JoinedChannel.ts#L56)

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

[twitchapi/packages/chatbot/src/structures/JoinedChannel.ts:28](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/JoinedChannel.ts#L28)

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

[twitchapi/packages/chatbot/src/structures/JoinedChannel.ts:43](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/JoinedChannel.ts#L43)

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

[twitchapi/packages/chatbot/src/structures/JoinedChannel.ts:18](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/JoinedChannel.ts#L18)
