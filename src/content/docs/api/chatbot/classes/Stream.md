---
editUrl: false
next: false
prev: false
title: "Stream"
---

## Constructors

### new Stream(chatbot, data)

```ts
new Stream(chatbot: ChatBot, data: GetStream): Stream
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `GetStream` |  |

#### Returns

[`Stream`](Stream.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Stream.ts:78](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Stream.ts#L78)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`Broadcaster`](Broadcaster.md) | **Description**<br />The [broadcaster](../../api/chatbot/classes/broadcaster) of the stream. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `gameId` | `public` | `string` | **Description**<br />The id of the game that is playing in the stream. |
| `gameName` | `public` | `string` | **Description**<br />The name of the game that is playing in the stream. |
| `id` | `public` | `string` | **Description**<br />The id of the stream. |
| `isMature` | `public` | `boolean` | **Description**<br />A boolean value that indicates whether the stream is meant for mature audiences. |
| `language` | `public` | `string` | **Description**<br />The language code of the stream. |
| `startedAt` | `public` | `Date` | **Description**<br />A Date that represents when the stream started. |
| `tags` | `public` | `string`[] | **Description**<br />A string array containing the stream's tags. |
| `thumbnailURL` | `public` | `string` | **Description**<br />The thumbnail url of the stream. |
| `title` | `public` | `string` | **Description**<br />The title of the stream. |
| `type` | `public` | `string` | **Description**<br />The type of stream. Usually is live. |
| `viewerCount` | `public` | `number` | **Description**<br />The viewerCount of the stream. |

## Methods

### createClip()

```ts
createClip(delay?: boolean): Promise<CreatedClip>
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delay`? | `boolean` | If true there will be a delay an the clip wouldn't finish when the request is sent instead it would finish instants later. |

#### Returns

`Promise`\<[`CreatedClip`](CreatedClip.md)\>

Returns the [CreatedClip](../../api/chatbot/classes/createdclip) object that contains the URL of the clip.

#### Source

[twitchapi/packages/chatbot/src/structures/Stream.ts:99](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Stream.ts#L99)
