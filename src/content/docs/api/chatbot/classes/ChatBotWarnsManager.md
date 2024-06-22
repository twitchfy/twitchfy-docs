---
editUrl: false
next: false
prev: false
title: "ChatBotWarnsManager"
---

The warns manager of the chatbot.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotWarnsManager()

```ts
new ChatBotWarnsManager<T>(chatbot: ChatBot<T>): ChatBotWarnsManager<T>
```

Creates a new instance of the warns manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotWarnsManager`](/api/chatbot/classes/chatbotwarnsmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotWarnsManager.ts:15

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### create()

```ts
create(
   chatroomId: string, 
   userId: string, 
reason: string): Promise<Warning<T>>
```

Creates warn for an user in a specific chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomId` | `string` | The id of the chatroom where the user will be warned. |
| `userId` | `string` | The id of the user to warn. |
| `reason` | `string` | - |

#### Returns

`Promise`\<[`Warning`](/api/chatbot/classes/warning/)\<`T`\>\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotWarnsManager.ts:25
