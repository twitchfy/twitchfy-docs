---
editUrl: false
next: false
prev: false
title: "FragmentData"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `string` | `string` |

## Properties

| Property | Type |
| :------ | :------ |
| `cheermote` | `T` extends `"cheermote"` ? [`CheermoteData`](/api/eventsub/interfaces/cheermotedata/) : `null` |
| `emote` | `T` extends `"emote"` ? [`EmoteData`](/api/eventsub/interfaces/emotedata/) : `null` |
| `mention` | `T` extends `"mention"` ? [`MentionData`](/api/eventsub/interfaces/mentiondata/) : `null` |
| `text` | `string` |
| `type` | [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) |
