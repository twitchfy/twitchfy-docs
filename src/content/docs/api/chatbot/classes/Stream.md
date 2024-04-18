---
editUrl: false
next: false
prev: false
title: "Stream"
---

Represents a Twitch stream.

## Extends

- [`BaseStream`](/api/chatbot/classes/basestream/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Stream(chatbot, data)

```ts
new Stream<T>(chatbot: ChatBot<T>, data: GetStream): Stream<T>
```

Creates a new instance of the stream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `GetStream` | The data of the stream returned from the API. |

#### Returns

[`Stream`](/api/chatbot/classes/stream/)\<`T`\>

#### Overrides

[`BaseStream`](/api/chatbot/classes/basestream/).[`constructor`](/api/chatbot/classes/basestream/#constructors)

#### Source

[twitchapi/packages/chatbot/src/structures/Stream.ts:49](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Stream.ts#L49)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the stream. | [`BaseStream`](/api/chatbot/classes/basestream/).`broadcaster` |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseStream`](/api/chatbot/classes/basestream/).`chatbot` |
| `game` | `readonly` | [`Game`](/api/chatbot/interfaces/game/) | The game which is currently being played on the stream. | - |
| `id` | `readonly` | `string` | The id of the stream. | [`BaseStream`](/api/chatbot/classes/basestream/).`id` |
| `isMature` | `readonly` | `boolean` | Whether the stream is marked as mature. | - |
| `language` | `readonly` | `string` | The language of the stream. | - |
| `tags` | `readonly` | `string`[] | The tags of the stream. | - |
| `type` | `readonly` | `string` | The type of the stream. | [`BaseStream`](/api/chatbot/classes/basestream/).`type` |
| `viewerCount` | `readonly` | `number` | The amount of viewers watching the stream. | - |

## Accessors

### startedAt

```ts
get startedAt(): Date
```

When the stream has started. Returns a JavaScript Date object.

#### Returns

`Date`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseStream.ts:67](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseStream.ts#L67)

***

### title

```ts
get title(): null | string
```

The title of the stream.

#### Returns

`null` \| `string`

#### Source

[twitchapi/packages/chatbot/src/structures/Stream.ts:62](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Stream.ts#L62)

## Methods

### createClip()

```ts
createClip(delay?: boolean): Promise<BaseClip<T>>
```

Creates a new clip of the stream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `delay`? | `boolean` | Whether to delay few seconds the clip or not. |

#### Returns

`Promise`\<[`BaseClip`](/api/chatbot/classes/baseclip/)\<`T`\>\>

#### Inherited from

[`BaseStream`](/api/chatbot/classes/basestream/).[`createClip`](/api/chatbot/classes/basestream/#createclip)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseStream.ts:49](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseStream.ts#L49)

***

### fetch()

```ts
fetch(): Promise<null | Stream<T>>
```

Fetches the current stream from the API.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

The current stream or null if the stream is offline.

#### Inherited from

[`BaseStream`](/api/chatbot/classes/basestream/).[`fetch`](/api/chatbot/classes/basestream/#fetch)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseStream.ts:57](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseStream.ts#L57)

***

### thumbnailURL()

```ts
thumbnailURL(options?: ThumbailOptions): string
```

The thumbnail URL of the stream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`ThumbailOptions`](/api/chatbot/interfaces/thumbailoptions/) | The options for the thumbnail. |

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/Stream.ts:70](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Stream.ts#L70)
