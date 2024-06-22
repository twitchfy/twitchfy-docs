---
editUrl: false
next: false
prev: false
title: "ChatBotMessageManager"
---

The message manager of the chatbot.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotMessageManager()

```ts
new ChatBotMessageManager<T>(chatbot: ChatBot<T>): ChatBotMessageManager<T>
```

Creates a new instance of the message manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotMessageManager`](/api/chatbot/classes/chatbotmessagemanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotMessageManager.ts:15

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### delete()

```ts
delete(chatroomId: string, id: string): Promise<void>
```

Deletes a specific message from a chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomId` | `string` | The id of the chatroom where the message will be deleted. |
| `id` | `string` | The id of the message to delete. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotMessageManager.ts:25

***

### send()

```ts
send(
   chatroomId: string, 
   message: string, 
options?: MessageOptions): Promise<BaseMessage<T>>
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomId` | `string` | The id of the chatroom where the message will be sent. |
| `message` | `string` | The message to send. |
| `options`? | [`MessageOptions`](/api/chatbot/interfaces/messageoptions/) | The options to send the message. See [MessageOptions](../../api/chatbot/interfaces/messageoptions). |

#### Returns

`Promise`\<[`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>\>

A class representation of the message. See [BaseMessage](/api/chatbot/api/chatbot/classes/basemessage/).

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotMessageManager.ts:36
