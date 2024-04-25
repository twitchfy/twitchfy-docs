---
editUrl: false
next: false
prev: false
title: "Clip"
---

Represents a Twitch clip.

## Extends

- [`BaseClip`](/api/chatbot/classes/baseclip/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Clip(chatbot, data)

```ts
new Clip<T>(chatbot: ChatBot<T>, data: GetClip): Clip<T>
```

Creates a new instance of the clip.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `GetClip` | The data of the clip returned from the API. |

#### Returns

[`Clip`](/api/chatbot/classes/clip/)\<`T`\>

#### Overrides

[`BaseClip`](/api/chatbot/classes/baseclip/).[`constructor`](/api/chatbot/classes/baseclip/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/Clip.ts:78

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUserWithoutUsername`](/api/chatbot/classes/baseuserwithoutusername/)\<`T`\> | The user who broadcasted the clip. The user will not have an username because Twitch limitations. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseClip`](/api/chatbot/classes/baseclip/).`chatbot` |
| `creator` | `readonly` | [`BaseUserWithoutUsername`](/api/chatbot/classes/baseuserwithoutusername/)\<`T`\> | The user who created the clip. The user will not have an username because Twitch limitations. | - |
| `duration` | `readonly` | `number` | The duration of the clip in seconds. | - |
| `embedURL` | `readonly` | `string` | The URL to embed the clip in a frame. | - |
| `gameID` | `readonly` | `string` | The ID of the game which was played in the clip. | - |
| `id` | `readonly` | `string` | The id of the clip. | [`BaseClip`](/api/chatbot/classes/baseclip/).`id` |
| `isFeatured` | `readonly` | `boolean` | Whether the clip is featured. | - |
| `language` | `readonly` | `string` | The language of the clip. | - |
| `thumbnailURL` | `readonly` | `string` | The URL to the thumbnail of the clip. | - |
| `title` | `readonly` | `string` | The title of the clip. | - |
| `url` | `readonly` | `string` | The url of the clip. | [`BaseClip`](/api/chatbot/classes/baseclip/).`url` |
| `viewCount` | `readonly` | `number` | The view count of the clip. | - |
| `vodOffset` | `readonly` | `null` \| `number` | The offset in the VOD where the clip starts. If the clip is not from a VOD, this will be null. | - |

## Accessors

### createdAt

```ts
get createdAt(): Date
```

When the clip was created. Returns a JavaScript Date object.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/Clip.ts:97

***

### videoID

```ts
get videoID(): null | string
```

The ID of the video of the clip.

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/Clip.ts:104

## Methods

### fetch()

```ts
fetch(): Promise<null | Clip<T>>
```

Fetches the information of the clip from the API.

#### Returns

`Promise`\<`null` \| [`Clip`](/api/chatbot/classes/clip/)\<`T`\>\>

The fetched clip. Returns null if the clip was not found (probably because it was not cached yet).

#### Inherited from

[`BaseClip`](/api/chatbot/classes/baseclip/).[`fetch`](/api/chatbot/classes/baseclip/#fetch)

#### Source

twitchfy/packages/chatbot/src/structures/BaseClip.ts:47

***

### stream()

```ts
stream(): Promise<null | Stream<T>>
```

Fetches the stream of the broadcaster of the clip.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

The stream of the broadcaster of the clip. If the stream is offline, it will return null.

#### Source

twitchfy/packages/chatbot/src/structures/Clip.ts:121

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

The url of the clip.

#### Inherited from

[`BaseClip`](/api/chatbot/classes/baseclip/).[`toString`](/api/chatbot/classes/baseclip/#tostring)

#### Source

twitchfy/packages/chatbot/src/structures/BaseClip.ts:39

***

### video()

```ts
video(): Promise<null | Video<T>>
```

Fetches the video of the clip.

#### Returns

`Promise`\<`null` \| [`Video`](/api/chatbot/classes/video/)\<`T`\>\>

The video of the clip. Returns null if the video doesn't exist.

#### Source

twitchfy/packages/chatbot/src/structures/Clip.ts:112
