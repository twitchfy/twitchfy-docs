---
editUrl: false
next: false
prev: false
title: "UncompleteMessage"
---

Represents a message that is not fully complete.

## Constructors

### new UncompleteMessage(data)

```ts
new UncompleteMessage(data: UncompleteMessageData): UncompleteMessage
```

Builds up a message that is not fully complete.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`UncompleteMessageData`](/api/eventsub/interfaces/uncompletemessagedata/) | The data of the message. |

#### Returns

[`UncompleteMessage`](/api/eventsub/classes/uncompletemessage/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/UncompleteMessage.ts:20

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `content` | `readonly` | `string` | The content of the message. |
| `id` | `readonly` | `string` | The ID of the message. |
