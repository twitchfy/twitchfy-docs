---
editUrl: false
next: false
prev: false
title: "MessageManager"
---

Represents the manager for the messages of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new MessageManager(chatbot, chatroom)

```ts
new MessageManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): MessageManager<T>
```

Creates a new instance of the message manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. |

#### Returns

[`MessageManager`](/api/chatbot/classes/messagemanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/MessageManager.ts:22](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/MessageManager.ts#L22)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. | - |

## Methods

### delete()

```ts
delete(id: string): Promise<void>
```

Deletes a message from the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the message to delete. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/managers/MessageManager.ts:32](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/MessageManager.ts#L32)

***

### send()

```ts
send(message: string): Promise<BaseMessage<T>>
```

Fetches a message from the chatroom.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

`Promise`\<[`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>\>

The message fetched.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/MessageManager.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/MessageManager.ts#L41)
