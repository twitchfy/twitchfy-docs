---
editUrl: false
next: false
prev: false
title: "Video"
---

Represents a Twitch video.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Video(chatbot, data)

```ts
new Video<T>(chatbot: ChatBot<T>, data: Video): Video<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> |
| `data` | `Video` |

#### Returns

[`Video`](/api/chatbot/classes/video/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/Video.ts:72

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `description` | `readonly` | `string` | The description of the video. | - |
| `id` | `readonly` | `string` | The id of the video. | - |
| `language` | `readonly` | `string` | The language of the video. | - |
| `mutedSegments` | `readonly` | `null` \| `MutedSegment`[] | The muted segments of the video. | - |
| `streamID` | `readonly` | `null` \| `string` | The id of the stream the video was created from. If the stream was ended this will be null. | - |
| `title` | `readonly` | `string` | The title of the video. | - |
| `type` | `readonly` | `VideoType` | The type of the video. | - |
| `url` | `readonly` | `string` | The video's url. | - |
| `user` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The user who created the video. | - |
| `viewCount` | `readonly` | `number` | The number of views the video has. | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

The creation date of the video in JavaScript Date object.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/Video.ts:90

***

### duration

```ts
get duration(): number
```

The duration of the video in seconds.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/Video.ts:113

***

### publishedAt

```ts
get publishedAt(): Date
```

The publish date of the video in JavaScript Date object.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/Video.ts:97

## Methods

### thumbnailURL()

```ts
thumbnailURL(options?: ThumbailOptions): string
```

The thumbnail URL of the video.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ThumbailOptions`](/api/chatbot/interfaces/thumbailoptions/) | The options for the thumbnail. |

#### Returns

`string`

The thumbnail URL of the video.

#### Source

twitchfy/packages/chatbot/src/structures/Video.ts:106
