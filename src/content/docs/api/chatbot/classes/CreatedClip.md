---
editUrl: false
next: false
prev: false
title: "CreatedClip"
---

## Constructors

### new CreatedClip(chatbot, data)

```ts
new CreatedClip(chatbot: ChatBot, data: PostCreateClip): CreatedClip
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `PostCreateClip` |  |

#### Returns

[`CreatedClip`](CreatedClip.md)

#### Source

[twitchapi/packages/chatbot/src/structures/CreatedClip.ts:26](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/CreatedClip.ts#L26)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot) |
| `id` | `public` | `string` | **Description**<br />The unique identifier of the clip. |
| `url` | `public` | `string` | **Description**<br />The Twitch's url of the clip. |
