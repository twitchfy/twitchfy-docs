---
editUrl: false
next: false
prev: false
title: "StreamOnline"
---

Represents a stream online event.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new StreamOnline(chatbot, data)

```ts
new StreamOnline<T>(chatbot: ChatBot<T>, data: StreamOnlineMessage<EventSubConnectionMap[T]>): StreamOnline<T>
```

Creates a new instance of the stream online event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `StreamOnlineMessage`\<`EventSubConnectionMap`\[`T`\]\> | The data of the stream online event returned from the EventSub. |

#### Returns

[`StreamOnline`](/api/chatbot/classes/streamonline/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOnline.ts:34

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel whose stream went online. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `stream` | `readonly` | [`BaseStream`](/api/chatbot/classes/basestream/)\<`T`\> | The stream which went online. | - |

## Accessors

### broadcasterId

```ts
get broadcasterId(): string
```

The Id of the broadcaster whose stream went online.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOnline.ts:44

***

### chatroomId

```ts
get chatroomId(): string
```

The Id of the chatroom where the stream went online.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOnline.ts:51

***

### startedAt

```ts
get startedAt(): Date
```

Returns the time when the stream went online. A JavaScript Date object is returned.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOnline.ts:58
