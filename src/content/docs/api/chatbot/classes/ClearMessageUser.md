---
editUrl: false
next: false
prev: false
title: "ClearMessageUser"
---

Represents the user whose message was deleted in the ClearMessage event.

## Constructors

### new ClearMessageUser(chatbot, tags)

```ts
new ClearMessageUser(chatbot: ChatBot, tags: ClearMessageTags): ClearMessageUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`ClearMessageTags`](../interfaces/ClearMessageTags.md) |  |

#### Returns

[`ClearMessageUser`](ClearMessageUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageUser.ts:26](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageUser.ts#L26)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
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

[twitchapi/packages/chatbot/src/structures/ClearMessage/ClearMessageUser.ts:35](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearMessage/ClearMessageUser.ts#L35)
