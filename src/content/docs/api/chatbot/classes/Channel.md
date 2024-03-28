---
editUrl: false
next: false
prev: false
title: "Channel"
---

Represents a Twitch Channel. If the origin of this channel is not the [ChannelManager](../../api/chatbot/classes/channelmanager) the information might be unupdated, to update this information use the fetch method.

## Constructors

### new Channel(chatbot, data, user)

```ts
new Channel(
   chatbot: ChatBot, 
   data: Channel, 
   user: User): Channel
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `Channel` |  |
| `user` | [`User`](User.md) |  |

#### Returns

[`Channel`](Channel.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:109](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L109)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `automod` | `public` | [`AutoMod`](AutoMod.md) | **Description**<br />The [AutoMod](../../api/chatbot/classes/automod) of the chat. |
| `bans` | `public` | [`BanManager`](BanManager.md) | **Description**<br />The [BanManager](../../api/chatbot/classes/banmanager) of this channel. |
| `broadcaster` | `public` | [`User`](User.md) | **Description**<br />The user whose channel is. |
| `chat` | `public` | [`Chat`](Chat.md) | **Description**<br />The [Chat](../../api/chatbot/classes/chat) of this channel. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `delay` | `public` | `number` | **Description**<br />The value of the broadcaster’s stream delay setting, in seconds. If the channel is not the ChatBot's channel the delay is 0. Instead of use this property is recommended to fetch the channel settings. |
| `displayName` | `public` | `string` | **Description**<br />The public name the user has in any chat. |
| `gameId` | `public` | `string` | **Description**<br />The unique id of the game that the broadcaster is playing or last played. |
| `gameName` | `public` | `string` | **Description**<br />The name of the game that the broadcaster is playing or last played. |
| `id` | `public` | `string` | **Description**<br />The unique id of the channel. |
| `language` | `public` | `string` | **Description**<br />The language of the current channel. |
| `name` | `public` | `string` | **Description**<br />The name of the channel. |
| `stream` | `public` | [`StreamManager`](StreamManager.md) | **Description**<br />The [StreamManager](../../api/chatbot/classes/streammanager) of the channel. |
| `tags` | `public` | `string`[] | **Description**<br />The tags applied to the channel. |
| `title` | `public` | `string` | **Description**<br />The title of the stream that the broadcaster is currently streaming or last streamed. |

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

[twitchapi/packages/chatbot/src/structures/Channel.ts:182](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L182)

***

### getFollower()

```ts
getFollower(userID: string): Promise<Follower>
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userID` | `string` | The userID of the follower you want to get. |

#### Returns

`Promise`\<[`Follower`](Follower.md)\>

Returns the [Follower](../../api/chatbot/classes/follower) if the user is following the channel, if not a nullish value will be returned.

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:215](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L215)

***

### getFollowerCount()

```ts
getFollowerCount(): Promise<number>
```

Get the number of followers of this channel.

#### Returns

`Promise`\<`number`\>

Returns the number of followers that follow this channel.

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:192](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L192)

***

### getFollowers()

```ts
getFollowers(): Promise<Follower[]>
```

Retrieve all followers of the channel. If the chatbot is not a moderator of that channel, an empty array will be returned.

#### Returns

`Promise`\<[`Follower`](Follower.md)[]\>

Returns an array that contains each follower of that channel.

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:202](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L202)

***

### inStream()

```ts
inStream(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

Returns a boolean indicating if the channel is currently streaming or not.

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:229](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L229)

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

[twitchapi/packages/chatbot/src/structures/Channel.ts:154](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L154)

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

[twitchapi/packages/chatbot/src/structures/Channel.ts:169](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L169)

***

### sendAnnouncement()

```ts
sendAnnouncement(message: string, color: AnnouncementColor): Promise<void>
```

Send an announcement to the chat where everyone can see it.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message of the announcement to send. |
| `color` | [`AnnouncementColor`](../enumerations/AnnouncementColor.md) | The color of the announcement to send. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/Channel.ts:145](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L145)

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

[twitchapi/packages/chatbot/src/structures/Channel.ts:133](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Channel.ts#L133)
