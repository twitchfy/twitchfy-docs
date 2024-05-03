---
editUrl: false
next: false
prev: false
title: "Mention"
---

A mention sent into the fragments of a ChannelChatMessage event .

## Constructors

### new Mention(data)

```ts
new Mention(data: MentionData): Mention
```

Builds up a mention.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`MentionData`](/api/eventsub/interfaces/mentiondata/) | The data of the mention. |

#### Returns

[`Mention`](/api/eventsub/classes/mention/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Mention.ts:18

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `user` | `readonly` | [`MentionUser`](/api/eventsub/classes/mentionuser/) | The user which was mentioned. |
