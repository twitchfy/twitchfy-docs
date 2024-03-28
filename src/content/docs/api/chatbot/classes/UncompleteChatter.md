---
editUrl: false
next: false
prev: false
title: "UncompleteChatter"
---

Represents an uncomplete chatter.

## Constructors

### new UncompleteChatter(chatbot, channel, data)

```ts
new UncompleteChatter(
   chatbot: ChatBot, 
   channel: Channel, 
   data: Chatter): UncompleteChatter
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) |  |
| `data` | `Chatter` |  |

#### Returns

[`UncompleteChatter`](UncompleteChatter.md)

#### Source

[twitchapi/packages/chatbot/src/structures/UncompleteChatter.ts:59](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatter.ts#L59)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The channel where chatter is. |
| `chat` | `public` | [`Chat`](Chat.md) | **Description**<br />The chat where the chatter is. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `displayName` | `public` | `string` | **Description**<br />The chatter's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id of the chatter. |
| `login` | `public` | `string` | **Description**<br />The login name of the chatter. |
| `user` | `public` | [`UncompleteChatterUser`](UncompleteChatterUser.md) | **Description**<br />The chatter user profile. |

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

[twitchapi/packages/chatbot/src/structures/UncompleteChatter.ts:74](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatter.ts#L74)

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

[twitchapi/packages/chatbot/src/structures/UncompleteChatter.ts:86](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/UncompleteChatter.ts#L86)
