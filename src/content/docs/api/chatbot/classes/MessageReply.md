---
editUrl: false
next: false
prev: false
title: "MessageReply"
---

Represents a message reply.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new MessageReply(chatbot, data, chatroom)

```ts
new MessageReply<T>(
   chatbot: ChatBot<T>, 
   data: MessageReply, 
chatroom: ChatRoom<T>): MessageReply<T>
```

Creates a new instance of the message reply.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `MessageReply` | The data of the reply. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the reply was sent. |

#### Returns

[`MessageReply`](/api/chatbot/classes/messagereply/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/MessageReply.ts:37](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/MessageReply.ts#L37)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `parent` | `readonly` | [`MessageReplyParent`](/api/chatbot/classes/messagereplyparent/)\<`T`\> | The parent of the reply. This is the message which was replied. | - |
| `thread` | `readonly` | [`MessageReplyThread`](/api/chatbot/classes/messagereplythread/)\<`T`\> | The thread of the reply. This is the message which started the reply thread. | - |
