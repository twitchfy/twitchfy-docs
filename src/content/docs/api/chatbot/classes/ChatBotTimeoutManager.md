---
editUrl: false
next: false
prev: false
title: "ChatBotTimeoutManager"
---

The timeout manager of the chatbot.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotTimeoutManager(chatbot)

```ts
new ChatBotTimeoutManager<T>(chatbot: ChatBot<T>): ChatBotTimeoutManager<T>
```

Creates a new instance of the timeout manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChatBotTimeoutManager`](/api/chatbot/classes/chatbottimeoutmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts:16](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts#L16)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### add()

```ts
add(chatroomID: string, options: TimeoutOptions): Promise<void>
```

Timeout a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomID` | `string` | The id of the chatroom where the user will be sent into a timeout. |
| `options` | [`TimeoutOptions`](/api/chatbot/interfaces/timeoutoptions/) | The options required for send an user into a timeout. See Timeout. |

#### Returns

`Promise`\<`void`\>

A class representation of the timeout. See [Ban](/api/chatbot/api/chatbot/classes/ban/).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts:26](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts#L26)

***

### delete()

```ts
delete(chatroomID: string, userID: string): Promise<void>
```

Deletes the timeout of a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatroomID` | `string` | The id of the chatroom where the user will be removed from the timeout. |
| `userID` | `string` | The id of the user to remove from the timeout. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts:36](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChatBotTimeoutManager.ts#L36)
