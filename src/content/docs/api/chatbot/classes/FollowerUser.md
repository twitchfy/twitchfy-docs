---
editUrl: false
next: false
prev: false
title: "FollowerUser"
---

## Constructors

### new FollowerUser(chatbot, id, login, displayName)

```ts
new FollowerUser(
   chatbot: ChatBot, 
   id: string, 
   login: string, 
   displayName: string): FollowerUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `id` | `string` |  |
| `login` | `string` |  |
| `displayName` | `string` |  |

#### Returns

[`FollowerUser`](FollowerUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/FollowerUser.ts:34](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/FollowerUser.ts#L34)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id. |
| `login` | `public` | `string` | **Description**<br />The user's login name. |

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

[twitchapi/packages/chatbot/src/structures/FollowerUser.ts:58](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/FollowerUser.ts#L58)

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

[twitchapi/packages/chatbot/src/structures/FollowerUser.ts:47](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/FollowerUser.ts#L47)
