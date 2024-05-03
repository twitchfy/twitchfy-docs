---
editUrl: false
next: false
prev: false
title: "Thread"
---

The first message of the reply thread received in the ChannelChatMessage event.

## Constructors

### new Thread(data)

```ts
new Thread(data: ReplyData): Thread
```

Builds up a thread message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReplyData`](/api/eventsub/interfaces/replydata/) | The data of the reply. |

#### Returns

[`Thread`](/api/eventsub/classes/thread/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Thread.ts:23

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `messageId` | `readonly` | `string` | The ID of the message. |
| `user` | `readonly` | [`UncompleteUser`](/api/eventsub/classes/uncompleteuser/) | The user who sent the message. |
