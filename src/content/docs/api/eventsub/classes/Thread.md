---
editUrl: false
next: false
prev: false
title: "Thread"
---

## Constructors

### new Thread(data)

```ts
new Thread(data: ReplyData): Thread
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`ReplyData`](../interfaces/ReplyData.md) |

#### Returns

[`Thread`](Thread.md)

#### Source

twitchapi/packages/eventsub/src/structures/messages/Thread.ts:11

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `message` | `public` | [`UncompleteMessage`](UncompleteMessage.md) |
| `user` | `public` | [`UncompleteUser`](UncompleteUser.md) |
