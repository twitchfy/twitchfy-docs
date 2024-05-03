---
editUrl: false
next: false
prev: false
title: "Emote"
---

An emote sent into the fragments of a ChannelChatMessage event.

## Constructors

### new Emote(data)

```ts
new Emote(data: EmoteData): Emote
```

Builds up an emote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`EmoteData`](/api/eventsub/interfaces/emotedata/) | The data of the emote. |

#### Returns

[`Emote`](/api/eventsub/classes/emote/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Emote.ts:33

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `format` | `readonly` | `EmoteFormat`[] | The format of the emote. Possible values are: static or animated. |
| `id` | `readonly` | `string` | The ID of the emote. |
| `ownerId` | `readonly` | `string` | The ID of the owner of the emote. |
| `setId` | `readonly` | `string` | The ID of the set which contains the emote. |
