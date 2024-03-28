---
editUrl: false
next: false
prev: false
title: "UserManager"
---

Represent the UserManager of the ChatBot

## Constructors

### new UserManager(chatbot)

```ts
new UserManager(chatbot: ChatBot): UserManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |

#### Returns

[`UserManager`](UserManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/UserManager.ts:24](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/UserManager.ts#L24)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### fetch()

```ts
fetch(userIdentificator: string): Promise<User>
```

Use to get Twitch user information.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userIdentificator` | `string` | The fetched user's name or id. |

#### Returns

`Promise`\<[`User`](User.md)\>

Returns [User](../../api/chatbot/classes/user).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/UserManager.ts:34](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/UserManager.ts#L34)
