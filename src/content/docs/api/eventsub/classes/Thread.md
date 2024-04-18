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

[twitchapi/packages/eventsub/src/structures/messages/Thread.ts:10](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/structures/messages/Thread.ts#L10)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `messageID` | `public` | `string` |
| `user` | `public` | [`UncompleteUser`](/api/eventsub/classes/uncompleteuser/) |
