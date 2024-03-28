---
editUrl: false
next: false
prev: false
title: "PrivMSGRepliedMessage"
---

Represents the replied message of a PrivMSG.

## Constructors

### new PrivMSGRepliedMessage(tags, chatbot, channel)

```ts
new PrivMSGRepliedMessage(
   tags: PrivMSGTags, 
   chatbot: ChatBot, 
   channel: PrivMSGChannel): PrivMSGRepliedMessage
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`PrivMSGChannel`](PrivMSGChannel.md) |  |

#### Returns

[`PrivMSGRepliedMessage`](PrivMSGRepliedMessage.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts:49](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts#L49)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`PrivMSGChannel`](PrivMSGChannel.md) | **Description**<br />The channel where the message was sent. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `chatter` | `public` | [`PrivMSGRepliedMessageChatter`](PrivMSGRepliedMessageChatter.md) | **Description**<br />The chatter that sent this message. |
| `content` | `public` | `string` | **Description**<br />The content of the message. |
| `id` | `public` | `string` | **Description**<br />The id of the message. |
| `user` | `public` | [`PrivMSGUser`](PrivMSGUser.md) | **Description**<br />The user that sent this message. |

## Methods

### delete()

```ts
delete(): Promise<void>
```

Deletes this message. You have to have moderation permissions to delete this message.

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts:71](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts#L71)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts:64](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessage.ts#L64)
