---
editUrl: false
next: false
prev: false
title: "Warning"
---

Represents a warning.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Warning()

```ts
new Warning<T>(chatbot: ChatBot<T>, data: Warning): Warning<T>
```

Creates a new instance of a warning.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `Warning` | The data of the warning returned by the API. |

#### Returns

[`Warning`](/api/chatbot/classes/warning/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:21

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Accessors

### broadcasterId

```ts
get broadcasterId(): string
```

The Id of the channel's broadcaster where the user received the warning.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:29

***

### chatroomId

```ts
get chatroomId(): string
```

The Id of the chatroom where the warning was received.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:36

***

### moderatorId

```ts
get moderatorId(): string
```

The Id of the moderator who warned the user.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:52

***

### reason

```ts
get reason(): string
```

The reason for the warning.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:60

***

### userId

```ts
get userId(): string
```

The Id of the user who received the warning.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Warning.ts:44
