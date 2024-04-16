---
editUrl: false
next: false
prev: false
title: "MessageReply"
---

## Constructors

### new MessageReply(data)

```ts
new MessageReply(data: ReplyData): MessageReply
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`ReplyData`](/api/eventsub/interfaces/replydata/) |

#### Returns

[`MessageReply`](/api/eventsub/classes/messagereply/)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/MessageReply.ts:11](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/MessageReply.ts#L11)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `parent` | `public` | [`Parent`](/api/eventsub/classes/parent/) |
| `thread` | `public` | [`Thread`](/api/eventsub/classes/thread/) |
