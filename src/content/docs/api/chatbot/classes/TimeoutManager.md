---
editUrl: false
next: false
prev: false
title: "TimeoutManager"
---

The timeout manager of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new TimeoutManager()

```ts
new TimeoutManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): TimeoutManager<T>
```

Creates a new instance of the timeout manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. |

#### Returns

[`TimeoutManager`](/api/chatbot/classes/timeoutmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/TimeoutManager.ts:22

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom instance. | - |

## Methods

### add()

```ts
add(options: TimeoutOptions): Promise<void>
```

Timeout a specific user within the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TimeoutOptions`](/api/chatbot/interfaces/timeoutoptions/) | The options required for send an user into a timeout. See [TimeoutOptions](../../api/chatbot/interfaces/timeoutoptions). |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/TimeoutManager.ts:32

***

### delete()

```ts
delete(userId: string): Promise<void>
```

Deletes the timeout of a specific user within the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userId` | `string` | The id of the user to remove from the timeout. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/TimeoutManager.ts:41
