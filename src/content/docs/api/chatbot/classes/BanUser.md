---
editUrl: false
next: false
prev: false
title: "BanUser"
---

Represents any user that is involved in a ban. This user can be the broadcaster, the banned user or the moderator who ban the user.

## Constructors

### new BanUser(chatbot, id)

```ts
new BanUser(chatbot: ChatBot, id: string): BanUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `id` | `string` |  |

#### Returns

[`BanUser`](BanUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/BanUser.ts:25](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/BanUser.ts#L25)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `id` | `public` | `string` | **Description**<br />The user's id. |

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

[twitchapi/packages/chatbot/src/structures/BanUser.ts:47](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/BanUser.ts#L47)

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

[twitchapi/packages/chatbot/src/structures/BanUser.ts:36](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/BanUser.ts#L36)
