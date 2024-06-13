---
editUrl: false
next: false
prev: false
title: "FragmentData"
---

The data of a message fragment.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `string` | `string` |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `cheermote` | `T` *extends* `"cheermote"` ? [`CheermoteData`](/api/eventsub/interfaces/cheermotedata/) : `null` | The data of the cheeremote if the fragment is a cheeremote. |
| `emote` | `T` *extends* `"emote"` ? [`EmoteData`](/api/eventsub/interfaces/emotedata/) : `null` | The data of the emote if the fragment is an emote. |
| `mention` | `T` *extends* `"mention"` ? [`MentionData`](/api/eventsub/interfaces/mentiondata/) : `null` | The data of the mention if the fragment is a mention. |
| `text` | `string` | The text of the fragment. |
| `type` | [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) | The type of the fragment. |
