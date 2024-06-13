---
editUrl: false
next: false
prev: false
title: "MessageReply"
---

A reply to a message including the message which was replied and the first message of the reply thread received in the ChannelChatMessage event.

## Constructors

### new MessageReply()

```ts
new MessageReply(data: ReplyData): MessageReply
```

Builds up a message reply.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReplyData`](/api/eventsub/interfaces/replydata/) | The data of the reply. |

#### Returns

[`MessageReply`](/api/eventsub/classes/messagereply/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/MessageReply.ts:24

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `parent` | `readonly` | [`Parent`](/api/eventsub/classes/parent/) | The parent message which was replied. |
| `thread` | `readonly` | [`Thread`](/api/eventsub/classes/thread/) | The first message of the reply thread. |
