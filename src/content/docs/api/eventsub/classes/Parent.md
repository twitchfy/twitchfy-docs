---
editUrl: false
next: false
prev: false
title: "Parent"
---

The parent message which was replied by the message received within the ChannelChatMessage event.

## Constructors

### new Parent(data)

```ts
new Parent(data: ReplyData): Parent
```

Builds up a parent message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`ReplyData`](/api/eventsub/interfaces/replydata/) | The data of the reply. |

#### Returns

[`Parent`](/api/eventsub/classes/parent/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Parent.ts:24

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `message` | `readonly` | [`UncompleteMessage`](/api/eventsub/classes/uncompletemessage/) | The parent message which was replied. |
| `user` | `public` | [`UncompleteUser`](/api/eventsub/classes/uncompleteuser/) | The user who sent the parent message. |
