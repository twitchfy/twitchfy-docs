---
editUrl: false
next: false
prev: false
title: "ClearChatUser"
---

Represents the target user of the ClearChat event included in the response message.

## Constructors

### new ClearChatUser(chatbot, tags)

```ts
new ClearChatUser(chatbot: ChatBot, tags: ClearChatTags): ClearChatUser
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`ClearChatTags`](../interfaces/ClearChatTags.md) |  |

#### Returns

[`ClearChatUser`](ClearChatUser.md)

#### Source

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts:29](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts#L29)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `id` | `public` | `string` | **Description**<br />The id of the user who is the target of the ClearChat event. |

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts:50](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts#L50)

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

[twitchapi/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts:38](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/ClearChat/ClearChatUser.ts#L38)
