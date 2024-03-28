---
editUrl: false
next: false
prev: false
title: "ClearChatChannel"
---

Represent the Channel where the ClearChat event was fired.

## Constructors

### new ClearChatChannel(chatbot, name, id)

```ts
new ClearChatChannel(
   chatbot: ChatBot, 
   name: string, 
   id: string): ClearChatChannel
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `name` | `string` |  |
| `id` | `string` |  |

#### Returns

[`ClearChatChannel`](ClearChatChannel.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:42](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L42)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `id` | `public` | `string` | **Description**<br />The id of the channel. |
| `name` | `public` | `string` | **Description**<br />The name of the channel. |
| `stream` | `public` | [`StreamManager`](StreamManager.md) | **Description**<br />The [StreamManager](../../api/chatbot/classes/streammanager) of the channel. |

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:104](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L104)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:137](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L137)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:114](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L114)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:124](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L124)

***

### inStream()

```ts
inStream(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:146](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L146)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:76](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L76)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:89](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L89)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:67](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L67)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts:55](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatChannel.ts#L55)
