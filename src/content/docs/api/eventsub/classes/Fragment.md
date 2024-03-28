---
editUrl: false
next: false
prev: false
title: "Fragment"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`FragmentTypes`](../type-aliases/FragmentTypes.md) | [`FragmentTypes`](../type-aliases/FragmentTypes.md) |

## Constructors

### new Fragment(data)

```ts
new Fragment<T>(data: FragmentData<T>): Fragment<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`FragmentData`](../interfaces/FragmentData.md)\<`T`\> |

#### Returns

[`Fragment`](Fragment.md)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/structures/messages/Fragment.ts:15](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/messages/Fragment.ts#L15)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `cheermote` | `public` | `T` extends `"cheermote"` ? [`Cheermote`](Cheermote.md) : `null` |
| `content` | `public` | `string` |
| `emote` | `public` | `T` extends `"emote"` ? [`Emote`](Emote.md) : `null` |
| `mention` | `public` | `T` extends `"mention"` ? [`Mention`](Mention.md) : `null` |
| `type` | `public` | `T` |
