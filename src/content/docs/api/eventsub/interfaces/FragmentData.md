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
| `cheermote` | `T` extends `"cheermote"` ? [`CheermoteData`](CheermoteData.md) : `null` |
| `emote` | `T` extends `"emote"` ? [`EmoteData`](EmoteData.md) : `null` |
| `mention` | `T` extends `"mention"` ? [`MentionData`](MentionData.md) : `null` |
| `text` | `string` |
| `type` | [`FragmentTypes`](../type-aliases/FragmentTypes.md) |
