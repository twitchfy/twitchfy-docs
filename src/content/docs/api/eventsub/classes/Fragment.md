---
editUrl: false
next: false
prev: false
title: "Fragment"
---

A fragment of a message.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) | [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) |

## Constructors

### new Fragment()

```ts
new Fragment<T>(data: FragmentData<T>): Fragment<T>
```

Builds up a fragment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`FragmentData`](/api/eventsub/interfaces/fragmentdata/)\<`T`\> | The data of the fragment. |

#### Returns

[`Fragment`](/api/eventsub/classes/fragment/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/structures/messages/Fragment.ts:37

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `cheermote` | `readonly` | `T` *extends* `"cheermote"` ? [`Cheermote`](/api/eventsub/classes/cheermote/) : `null` | The cheermote in the fragment. Null if the fragment's type isn't cheermote. |
| `content` | `readonly` | `string` | The content of the fragment. |
| `emote` | `readonly` | `T` *extends* `"emote"` ? [`Emote`](/api/eventsub/classes/emote/) : `null` | The emote in the fragment. Null if the fragment's type isn't emote. |
| `mention` | `readonly` | `T` *extends* `"mention"` ? [`Mention`](/api/eventsub/classes/mention/) : `null` | The mention in the fragment. Null if the fragment's type isn't mention. |
| `type` | `readonly` | `T` | The type of the fragment. |
