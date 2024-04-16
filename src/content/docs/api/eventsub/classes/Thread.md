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

[twitchapi/packages/eventsub/src/structures/messages/Thread.ts:10](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/Thread.ts#L10)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `messageID` | `public` | `string` |
| `user` | `public` | [`UncompleteUser`](/api/eventsub/classes/uncompleteuser/) |
