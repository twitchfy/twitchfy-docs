---
editUrl: false
next: false
prev: false
title: "ChatBotChatterManager"
---

Represents a chatter manager.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotChatterManager()

```ts
new ChatBotChatterManager<T>(chatbot: ChatBot<T>): ChatBotChatterManager<T>
```

Creates a new instance of the chatter manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotChatterManager`](/api/chatbot/classes/chatbotchattermanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotChatterManager.ts:16

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### count()

```ts
count(chatroomId: string): Promise<number>
```

Gets the amount of chatters in a chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomId` | `string` | The id of the chatroom to count the chatters. |

#### Returns

`Promise`\<`number`\>

The amount of chatters in the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotChatterManager.ts:34

***

### fetch()

```ts
fetch(chatroomId: string): Promise<BaseUser<T>[]>
```

Fetches the chatters of a chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomId` | `string` | The id of the chatroom to fetch the chatters. |

#### Returns

`Promise`\<[`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>[]\>

The chatters of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotChatterManager.ts:25
