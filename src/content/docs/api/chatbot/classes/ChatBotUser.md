---
editUrl: false
next: false
prev: false
title: "ChatBotUser"
---

Represents the Twitch's user of the ChatBot.

## Extends

- [`User`](User.md)

## Constructors

### new ChatBotUser(chatbot, user)

```ts
new ChatBotUser(chatbot: ChatBot, user: User): ChatBotUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `user` | `User` |  |

#### Returns

[`ChatBotUser`](ChatBotUser.md)

#### Overrides

[`User`](User.md).[`constructor`](User.md#constructors)

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBotUser.ts:18](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ChatBotUser.ts#L18)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `avatarURL` | `public` | `string` | **Description**<br />The url of the user's avatar. | [`User`](User.md).`avatarURL` |
| `broadcasterType` | `public` | `string` | **Description**<br />The broadcaster type. It can be an affiliate, a partner or a normal user, if is a normal user the value will be null. | [`User`](User.md).`broadcasterType` |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). | [`User`](User.md).`chatbot` |
| `createdAt` | `public` | `Date` | **Description**<br />The Date that represents when the user was created. | [`User`](User.md).`createdAt` |
| `description` | `public` | `string` | **Description**<br />The user's profile description. | [`User`](User.md).`description` |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. | [`User`](User.md).`displayName` |
| `id` | `public` | `string` | **Description**<br />The user's id | [`User`](User.md).`id` |
| `login` | `public` | `string` | **Description**<br />The user's login name. | [`User`](User.md).`login` |
| `offlineImageURL` | `public` | `string` | **Description**<br />The offline image url of the user. | [`User`](User.md).`offlineImageURL` |
| `type` | `public` | `string` | **Description**<br />The user type. The value is null if the user is a normal one. | [`User`](User.md).`type` |

## Methods

### fetch()

```ts
fetch(): Promise<User>
```

Get the whole [User](../../api/chatbot/classes/user) object with all the user's information.

#### Returns

`Promise`\<[`User`](User.md)\>

The [User](../../api/chatbot/classes/user) of this user.

#### Inherited from

[`User`](User.md).[`fetch`](User.md#fetch)

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

#### Inherited from

[`User`](User.md).[`sendWhisper`](User.md#sendwhisper)

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:79](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/User.ts#L79)

***

### setNameColor()

```ts
setNameColor(color: string): Promise<void>
```

Sets the name color in the chat of the ChatBot.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The name color you are going to assign to the ChatBot. To specify an hex color code, the user must be a Turbo or Prime user. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBotUser.ts:26](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ChatBotUser.ts#L26)
