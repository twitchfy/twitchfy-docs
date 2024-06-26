---
editUrl: false
next: false
prev: false
title: "BaseStream"
---

The base class for a stream.

## Extends

- `Base`\<`T`\>

## Extended by

- [`Stream`](/api/chatbot/classes/stream/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BaseStream()

```ts
new BaseStream<T>(chatbot: ChatBot<T>, data: BaseStreamData): BaseStream<T>
```

Creates a new instance of the base stream.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`BaseStreamData`](/api/chatbot/interfaces/basestreamdata/) | The base data of the stream. |

#### Returns

[`BaseStream`](/api/chatbot/classes/basestream/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/BaseStream.ts:37

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the stream. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `id` | `readonly` | `string` | The id of the stream. | - |
| `type` | `readonly` | `string` | The type of the stream. | - |

## Accessors

### startedAt

```ts
get startedAt(): Date
```

When the stream has started. Returns a JavaScript Date object.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/BaseStream.ts:67

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

#### Source

twitchfy/packages/chatbot/src/structures/BaseStream.ts:49

***

### fetch()

```ts
fetch(): Promise<null | Stream<T>>
```

Fetches the current stream from the API.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

The current stream or null if the stream is offline.

#### Source

twitchfy/packages/chatbot/src/structures/BaseStream.ts:57
