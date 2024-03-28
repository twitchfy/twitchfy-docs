---
editUrl: false
next: false
prev: false
title: "PrivMSGUser"
---

## Constructors

### new PrivMSGUser(chatbot, tags)

```ts
new PrivMSGUser(chatbot: ChatBot, tags: PrivMSGTags): PrivMSGUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |

#### Returns

[`PrivMSGUser`](PrivMSGUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts:34](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts#L34)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The id of the user. |
| `type` | `public` | `string` | **Description**<br />The type of user. If the user is null the user is a normal user. |

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts:57](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts#L57)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts:46](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGUser.ts#L46)
