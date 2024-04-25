---
editUrl: false
next: false
prev: false
title: "ChatBotBanManager"
---

The ban manager of the chatbot.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotBanManager(chatbot)

```ts
new ChatBotBanManager<T>(chatbot: ChatBot<T>): ChatBotBanManager<T>
```

Creates a new instance of the ban manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotBanManager`](/api/chatbot/classes/chatbotbanmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotBanManager.ts:16

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### add()

```ts
add(chatroomID: string, options: BanOptions): Promise<Ban<T>>
```

Ban a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomID` | `string` | The id of the chatroom where the user will be banned. |
| `options` | [`BanOptions`](/api/chatbot/interfaces/banoptions/) | The options required for banning an user. See [BanOptions](../../api/chatbot/interfaces/banoptions). |

#### Returns

`Promise`\<[`Ban`](/api/chatbot/classes/ban/)\<`T`\>\>

A class representation of the ban. See [Ban](/api/chatbot/api/chatbot/classes/ban/).

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotBanManager.ts:26

***

### delete()

```ts
delete(chatroomID: string, userID: string): Promise<void>
```

Deletes the ban of a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomID` | `string` | The id of the chatroom where the user will be unbanned. |
| `userID` | `string` | The id of the user to unban. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatBotBanManager.ts:36
