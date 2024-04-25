---
editUrl: false
next: false
prev: false
title: "ChannelUpdate"
---

Represents a channel update event.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelUpdate(chatbot, data)

```ts
new ChannelUpdate<T>(chatbot: ChatBot<T>, data: ChannelUpdateMessage<EventSubConnectionMap[T]>): ChannelUpdate<T>
```

Creates a new instance of the channel update event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `ChannelUpdateMessage`\<`EventSubConnectionMap`\[`T`\]\> | The data of the update event returned from the EventSub. |

#### Returns

[`ChannelUpdate`](/api/chatbot/classes/channelupdate/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/ChannelUpdate.ts:48

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel who was updated. | - |
| `category` | `public` | [`Category`](/api/chatbot/interfaces/category/) | The category of the channel. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `classificationLabels` | `public` | `string`[] | The classification labels of the channel. | - |
| `language` | `public` | `string` | The language of the channel. | - |
| `title` | `public` | `string` | The title of the channel. | - |

## Accessors

### broadcasterID

```ts
get broadcasterID(): string
```

The ID of the broadcaster who was updated.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/ChannelUpdate.ts:61

## Methods

### channel()

```ts
channel(): Promise<Channel<T>>
```

Fetches the channel from the API.

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

The fetched channel from the API.

#### Source

twitchfy/packages/chatbot/src/structures/ChannelUpdate.ts:69
