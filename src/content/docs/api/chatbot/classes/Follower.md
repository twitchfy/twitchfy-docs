---
editUrl: false
next: false
prev: false
title: "Follower"
---

## Constructors

### new Follower(chatbot, data)

```ts
new Follower(chatbot: ChatBot, data: GetFollowers): Follower
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |
| `data` | `GetFollowers` |

#### Returns

[`Follower`](Follower.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Follower.ts:22](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Follower.ts#L22)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `followedAt` | `public` | `Date` | **Description**<br />The Date when the follower starts following the channel. |
| `user` | `public` | [`FollowerUser`](FollowerUser.md) | **Description**<br />The Twitch user of the follower. |
