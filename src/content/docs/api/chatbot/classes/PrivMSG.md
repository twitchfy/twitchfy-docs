---
editUrl: false
next: false
prev: false
title: "PrivMSG"
---

Represents the message sent by an user in a chat.

## Constructors

### new PrivMSG(chatbot, data, tags)

```ts
new PrivMSG(
   chatbot: ChatBot, 
   data: string, 
   tags: PrivMSGTags): PrivMSG
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `string` |  |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |

#### Returns

[`PrivMSG`](PrivMSG.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts:68](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts#L68)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `bits` | `public` | `number` | **Description**<br />The amount of bits that the message contains. This amount is null if the message do not contain bits. |
| `channel` | `public` | [`PrivMSGChannel`](PrivMSGChannel.md) | **Description**<br />The channel where the message was sent. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `chatter` | `public` | [`PrivMSGChatter`](PrivMSGChatter.md) | **Description**<br />The chatter that sent this message. |
| `content` | `public` | `string` | **Description**<br />The content of the message. |
| `createdTimestamp` | `public` | `number` | **Description**<br />The UNIX timestamp when this message was sended. |
| `id` | `public` | `string` | **Description**<br />The id of the message. |
| `repliedMessage` | `public` | [`PrivMSGRepliedMessage`](PrivMSGRepliedMessage.md) | **Description**<br />The message that was replied in this message. This is null if this message do not reply to another message. |
| `user` | `public` | [`PrivMSGUser`](PrivMSGUser.md) | **Description**<br />The user that sent this message |

## Methods

### delete()

```ts
delete(): Promise<void>
```

Deletes this message. You have to have moderation permissions to delete this message.

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts:95](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts#L95)

***

### reply()

```ts
reply(message: string): void
```

Reply to this message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message that you want to send in the reply. |

#### Returns

`void`

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts:86](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSG.ts#L86)
