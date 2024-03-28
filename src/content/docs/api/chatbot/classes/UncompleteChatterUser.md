---
editUrl: false
next: false
prev: false
title: "UncompleteChatterUser"
---

Represents the user of the UncompleteChatter

## Constructors

### new UncompleteChatterUser(chatbot, data)

```ts
new UncompleteChatterUser(chatbot: ChatBot, data: Chatter): UncompleteChatterUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `Chatter` |  |

#### Returns

[`UncompleteChatterUser`](UncompleteChatterUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/UncompleteChatterUser.ts:38](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatterUser.ts#L38)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id. |
| `login` | `public` | `string` | **Description**<br />The login name of the user. |

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

[twitchapi/packages/chatbot/src/structures/UncompleteChatterUser.ts:61](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatterUser.ts#L61)

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

[twitchapi/packages/chatbot/src/structures/UncompleteChatterUser.ts:50](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatterUser.ts#L50)
