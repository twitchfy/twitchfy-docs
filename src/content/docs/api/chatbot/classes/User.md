---
editUrl: false
next: false
prev: false
title: "User"
---

## Extended by

- [`ChatBotUser`](ChatBotUser.md)

## Constructors

### new User(chatbot, data)

```ts
new User(chatbot: ChatBot, data: User): User
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `User` |  |

#### Returns

[`User`](User.md)

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:62](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/User.ts#L62)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `avatarURL` | `public` | `string` | **Description**<br />The url of the user's avatar. |
| `broadcasterType` | `public` | `string` | **Description**<br />The broadcaster type. It can be an affiliate, a partner or a normal user, if is a normal user the value will be null. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `createdAt` | `public` | `Date` | **Description**<br />The Date that represents when the user was created. |
| `description` | `public` | `string` | **Description**<br />The user's profile description. |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id |
| `login` | `public` | `string` | **Description**<br />The user's login name. |
| `offlineImageURL` | `public` | `string` | **Description**<br />The offline image url of the user. |
| `type` | `public` | `string` | **Description**<br />The user type. The value is null if the user is a normal one. |

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

[twitchapi/packages/chatbot/src/structures/User.ts:90](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/User.ts#L90)

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

[twitchapi/packages/chatbot/src/structures/User.ts:79](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/User.ts#L79)
