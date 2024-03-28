---
editUrl: false
next: false
prev: false
title: "ChannelManager"
---

Represents the ChannelManager of the ChatBot.

## Constructors

### new ChannelManager(chatbot)

```ts
new ChannelManager(chatbot: ChatBot): ChannelManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |

#### Returns

[`ChannelManager`](ChannelManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:25](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChannelManager.ts#L25)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### fetch()

```ts
fetch(channelIdentificator: string): Promise<Channel>
```

Use to get any Twitch channel information.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `channelIdentificator` | `string` | The fetched channel's id or name. |

#### Returns

`Promise`\<[`Channel`](Channel.md)\>

Returns [Channel](../../api/chatbot/classes/channel).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:37](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChannelManager.ts#L37)

***

### join()

```ts
join(channelName: string): JoinedChannel
```

Use to join to a Twitch channel to receive events.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `channelName` | `string` | The channel name of the channel the chatbot will join. |

#### Returns

[`JoinedChannel`](JoinedChannel.md)

Returns [JoinedChannel](../../api/chatbot/classes/joinedchannel).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:54](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChannelManager.ts#L54)

***

### leave()

```ts
leave(channelName: string): JoinedChannel
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `channelName` | `string` | The channel name of the channel the chatbot will leave. |

#### Returns

[`JoinedChannel`](JoinedChannel.md)

Returns the [JoinedChannel](../../api/chatbot/classes/joinedchannel) of the channel the ChatBot left.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:76](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/ChannelManager.ts#L76)
