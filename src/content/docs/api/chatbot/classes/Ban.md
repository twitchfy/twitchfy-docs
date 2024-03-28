---
editUrl: false
next: false
prev: false
title: "Ban"
---

Represents a ban in a channel. The ban can be a Twitch ban or a Twitch timeout.

## Constructors

### new Ban(chatbot, data)

```ts
new Ban(chatbot: ChatBot, data: Ban): Ban
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `Ban` |  |

#### Returns

[`Ban`](Ban.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Ban.ts:46](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Ban.ts#L46)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BanUser`](BanUser.md) | **Description**<br />The broadcaster who has the channel where the ban was done. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `createdAt` | `public` | `Date` | **Description**<br />A JavaScript Date that represents when the ban was created. |
| `duration` | `public` | `number` | **Description**<br />The duration of the ban. This is null if the ban is a Twitch ban. |
| `moderator` | `public` | [`BanUser`](BanUser.md) | **Description**<br />The moderator who ban the user. |
| `user` | `public` | [`BanUser`](BanUser.md) | **Description**<br />The user who was banned. |

## Methods

### delete()

```ts
delete(): Promise<void>
```

Delete this ban.

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/Ban.ts:74](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Ban.ts#L74)

***

### isBan()

```ts
isBan(): boolean
```

Check if the ban is a Twitch ban.

#### Returns

`boolean`

Returns a boolean that determines if the ban is a Twitch ban.

#### Source

[twitchapi/packages/chatbot/src/structures/Ban.ts:59](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Ban.ts#L59)

***

### isTimeout()

```ts
isTimeout(): boolean
```

Check if the ban is a Twitch timeout

#### Returns

`boolean`

Returns a boolean that determines if the ban is a timeout.

#### Source

[twitchapi/packages/chatbot/src/structures/Ban.ts:67](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Ban.ts#L67)
