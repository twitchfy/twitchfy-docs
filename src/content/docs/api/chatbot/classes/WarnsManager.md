---
editUrl: false
next: false
prev: false
title: "WarnsManager"
---

The warns manager of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new WarnsManager()

```ts
new WarnsManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): WarnsManager<T>
```

Creates a new instance of the warns manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. |

#### Returns

[`WarnsManager`](/api/chatbot/classes/warnsmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/WarnsManager.ts:23

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. | - |

## Methods

### create()

```ts
create(userId: string, reason: string): Promise<Warning<T>>
```

Creates warn for an user in a specific chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The id of the user to warn. |
| `reason` | `string` | - |

#### Returns

`Promise`\<[`Warning`](/api/chatbot/classes/warning/)\<`T`\>\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/WarnsManager.ts:34
