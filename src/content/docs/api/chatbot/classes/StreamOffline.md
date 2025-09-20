---
editUrl: false
next: false
prev: false
title: "StreamOffline"
---

Represents a stream offline event.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new StreamOffline()

```ts
new StreamOffline<T>(chatbot: ChatBot<T>, data: StreamOfflineMessage<EventSubConnectionMap[T]>): StreamOffline<T>
```

Creates a new instance of the stream online event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `StreamOfflineMessage`\<`EventSubConnectionMap`\[`T`\]\> | The data of the stream online event returned from the EventSub. |

#### Returns

[`StreamOffline`](/api/chatbot/classes/streamoffline/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOffline.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel whose stream went offline. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Accessors

### broadcasterId

```ts
get broadcasterId(): string
```

The Id of the broadcaster whose stream went offline.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOffline.ts:37

***

### chatroomId

```ts
get chatroomId(): string
```

The Id of the chatroom where the stream went offline.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/StreamOffline.ts:44
