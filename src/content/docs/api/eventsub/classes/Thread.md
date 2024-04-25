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
| `data` | [`ReplyData`](/api/eventsub/interfaces/replydata/) |

#### Returns

[`Thread`](/api/eventsub/classes/thread/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Thread.ts:10

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `messageID` | `public` | `string` |
| `user` | `public` | [`UncompleteUser`](/api/eventsub/classes/uncompleteuser/) |
