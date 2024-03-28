---
editUrl: false
next: false
prev: false
title: "Broadcaster"
---

Represents a Broadcaster

## Constructors

### new Broadcaster(chatbot, id, login, displayName)

```ts
new Broadcaster(
   chatbot: ChatBot, 
   id: string, 
   login: string, 
   displayName: string): Broadcaster
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `id` | `string` |  |
| `login` | `string` |  |
| `displayName` | `string` |  |

#### Returns

[`Broadcaster`](Broadcaster.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Broadcaster.ts:40](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Broadcaster.ts#L40)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The broadcaster's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The broadcaster's id. |
| `login` | `public` | `string` | **Description**<br />The login name of the broadcaster. |

## Methods

### fetch()

```ts
fetch(): Promise<User>
```

Get the whole [User](../../api/chatbot/classes/user) object with all the user's information.

#### Returns

`Promise`\<[`User`](User.md)\>

The [User](../../api/chatbot/classes/user) of this user.

#### Source

[twitchapi/packages/chatbot/src/structures/Broadcaster.ts:63](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Broadcaster.ts#L63)

***

### sendWhisper()

```ts
sendWhisper(message: string): Promise<void>
```

Send a whisper to this user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message you want to send to the user. You have to have the scope user:manage:whispers and the sender user has to have a verified phone number. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/Broadcaster.ts:52](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Broadcaster.ts#L52)
