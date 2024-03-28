---
editUrl: false
next: false
prev: false
title: "PrivMSGRepliedMessageChatter"
---

Represents the chatter that sent the replied message of the PrivMSG.

## Constructors

### new PrivMSGRepliedMessageChatter(chatbot, tags, channel)

```ts
new PrivMSGRepliedMessageChatter(
   chatbot: ChatBot, 
   tags: PrivMSGTags, 
   channel: PrivMSGChannel): PrivMSGRepliedMessageChatter
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |
| `channel` | [`PrivMSGChannel`](PrivMSGChannel.md) |  |

#### Returns

[`PrivMSGRepliedMessageChatter`](PrivMSGRepliedMessageChatter.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts:61](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts#L61)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`PrivMSGChannel`](PrivMSGChannel.md) | **Description**<br />The channel where the chatter sent the message. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id of the chatter. |
| `login` | `public` | `string` | **Description**<br />The login name of this chatter. |
| `user` | `public` | [`PrivMSGUser`](PrivMSGUser.md) | **Description**<br />The user of this chatter. |

## Methods

### ban()

```ts
ban(options?: BanOptions): Promise<Ban>
```

Ban the chatter from the chat of the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`BanOptions`](../interfaces/BanOptions.md) | The [options](../../api/chatbot/interfaces/banoptions) that you can complete to ban the user. |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

Returns a [Ban](../../api/chatbot/classes/ban) class that represents the ban.

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts:78](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts#L78)

***

### fetch()

```ts
fetch(): Promise<Chatter>
```

Get the complete chatter information.

#### Returns

`Promise`\<[`Chatter`](Chatter.md)\>

Returns the complete chatter information including the complete channel.

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts:101](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts#L101)

***

### timeout()

```ts
timeout(options: TimeoutOptions): Promise<Ban>
```

Timeout the chatter from the chat of the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TimeoutOptions`](../interfaces/TimeoutOptions.md) | The [options](../../api/chatbot/interfaces/timeoutoptions) of the timeout. |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

Returns a [Ban](../../api/chatbot/classes/ban) class that represents the timeout.

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts:91](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGRepliedMessageChatter.ts#L91)
