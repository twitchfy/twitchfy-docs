---
editUrl: false
next: false
prev: false
title: "ChannelChatClear"
---

Represents a channel chat clear event.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelChatClear(chatbot, data)

```ts
new ChannelChatClear<T>(chatbot: ChatBot<T>, data: ChannelChatClearMessage<EventSubConnectionMap[T]>): ChannelChatClear<T>
```

Creates a new instance of the channel chat clear event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `ChannelChatClearMessage`\<`EventSubConnectionMap`\[`T`\]\> | The data of the chat clear event returned from the EventSub. |

#### Returns

[`ChannelChatClear`](/api/chatbot/classes/channelchatclear/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelChatClear.ts:28](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChannelChatClear.ts#L28)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel whose chat was cleared. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Accessors

### broadcasterID

```ts
get broadcasterID(): string
```

The ID of the broadcaster whose chat was cleared.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelChatClear.ts:37](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChannelChatClear.ts#L37)

***

### chatroomID

```ts
get chatroomID(): string
```

The ID of the chatroom where the chat was cleared.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelChatClear.ts:44](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChannelChatClear.ts#L44)
