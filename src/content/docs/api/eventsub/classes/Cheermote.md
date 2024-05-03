---
editUrl: false
next: false
prev: false
title: "Cheermote"
---

A cheermote sent into the fragments of a ChannelChatMessage event.

## Implements

- [`CheermoteData`](/api/eventsub/interfaces/cheermotedata/)

## Constructors

### new Cheermote(cheermote)

```ts
new Cheermote(cheermote: CheermoteData): Cheermote
```

Builds up a cheermote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cheermote` | [`CheermoteData`](/api/eventsub/interfaces/cheermotedata/) | The data of the cheermote. |

#### Returns

[`Cheermote`](/api/eventsub/classes/cheermote/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Cheermote.ts:27

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `bits` | `readonly` | `number` | The amount of bits the cheermote represents. |
| `prefix` | `readonly` | `string` | The prefix of the cheermote. |
| `tier` | `readonly` | `number` | The tier of the cheermote. |
