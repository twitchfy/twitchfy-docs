---
editUrl: false
next: false
prev: false
title: "Ban"
---

Represents a ban in a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Ban(chatbot, data)

```ts
new Ban<T>(chatbot: ChatBot<T>, data: Ban): Ban<T>
```

Creates a new instance of the ban.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `Ban` | The data of the ban returned from the API. |

#### Returns

[`Ban`](/api/chatbot/classes/ban/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/Ban.ts:31

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `moderatorId` | `readonly` | `string` | The Id of the moderator who banned the user. | - |
| `userId` | `readonly` | `string` | The Id of the user who was banned. | - |

## Accessors

### chatroomId

```ts
get chatroomId(): string
```

The Id of the chatroom where the ban was made.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Ban.ts:49

***

### createdAt

```ts
get createdAt(): Date
```

The Date when the ban was created. Returns a JavaScript Date object.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/Ban.ts:56

***

### endTime

```ts
get endTime(): null | Date
```

If the ban is a timeout this will return the end time of the timeout in a JavaScript Date object. If not, it will return a nullish value.

#### Returns

`null` \| `Date`

#### Source

twitchfy/packages/chatbot/src/structures/Ban.ts:63

## Methods

### delete()

```ts
delete(): Promise<void>
```

Deletes the ban from the chatroom.

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/Ban.ts:42
