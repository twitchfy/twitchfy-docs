---
editUrl: false
next: false
prev: false
title: "ChatBotUserManager"
---

The user manager of the chatbot.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotUserManager(chatbot)

```ts
new ChatBotUserManager<T>(chatbot: ChatBot<T>): ChatBotUserManager<T>
```

Creates a new instance of the user manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotUserManager`](/api/chatbot/classes/chatbotusermanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatBotUserManager.ts:15](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChatBotUserManager.ts#L15)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### fetch()

```ts
fetch(userIdentificator: string): Promise<User<T>>
```

Fetches a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userIdentificator` | `string` | The id or login of the user to fetch. |

#### Returns

`Promise`\<[`User`](/api/chatbot/classes/user/)\<`T`\>\>

A class representation of the user. See [User](/api/chatbot/api/chatbot/classes/user/).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatBotUserManager.ts:24](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChatBotUserManager.ts#L24)
