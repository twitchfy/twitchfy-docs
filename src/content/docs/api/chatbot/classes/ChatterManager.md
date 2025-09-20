---
editUrl: false
next: false
prev: false
title: "ChatterManager"
---

Represents a chatter manager of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatterManager()

```ts
new ChatterManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): ChatterManager<T>
```

Creates a new instance of the chatter manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the chatter manager. |

#### Returns

[`ChatterManager`](/api/chatbot/classes/chattermanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatterManager.ts:21

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the chatter manager. | - |

## Methods

### count()

```ts
count(): Promise<number>
```

Gets the amount of chatters in the chatroom.

#### Returns

`Promise`\<`number`\>

The amount of chatters in the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatterManager.ts:38

***

### fetch()

```ts
fetch(): Promise<BaseUser<T>[]>
```

Fetches the chatters of the chatroom.

#### Returns

`Promise`\<[`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>[]\>

The chatters of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatterManager.ts:30
