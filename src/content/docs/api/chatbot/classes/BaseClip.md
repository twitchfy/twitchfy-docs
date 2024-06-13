---
editUrl: false
next: false
prev: false
title: "BaseClip"
---

Represents the base class for all clips.

## Extends

- `Base`\<`T`\>

## Extended by

- [`Clip`](/api/chatbot/classes/clip/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BaseClip()

```ts
new BaseClip<T>(chatbot: ChatBot<T>, data: GetClip | PostCreateClip): BaseClip<T>
```

Creates a new instance of the clip.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `GetClip` \| `PostCreateClip` | The data of the clip returned from the API. |

#### Returns

[`BaseClip`](/api/chatbot/classes/baseclip/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/BaseClip.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `id` | `readonly` | `string` | The id of the clip. | - |
| `url` | `readonly` | `string` | The url of the clip. | - |

## Methods

### fetch()

```ts
fetch(): Promise<null | Clip<T>>
```

Fetches the information of the clip from the API.

#### Returns

`Promise`\<`null` \| [`Clip`](/api/chatbot/classes/clip/)\<`T`\>\>

The fetched clip. Returns null if the clip was not found (probably because it was not cached yet).

#### Source

twitchfy/packages/chatbot/src/structures/BaseClip.ts:47

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

The url of the clip.

#### Source

twitchfy/packages/chatbot/src/structures/BaseClip.ts:39
