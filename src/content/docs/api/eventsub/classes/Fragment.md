---
editUrl: false
next: false
prev: false
title: "Fragment"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) | [`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/) |

## Constructors

### new Fragment(data)

```ts
new Fragment<T>(data: FragmentData<T>): Fragment<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | [`FragmentData`](/api/eventsub/interfaces/fragmentdata/)\<`T`\> |

#### Returns

[`Fragment`](/api/eventsub/classes/fragment/)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/structures/messages/Fragment.ts:15](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/messages/Fragment.ts#L15)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `cheermote` | `public` | `T` extends `"cheermote"` ? [`Cheermote`](/api/eventsub/classes/cheermote/) : `null` |
| `content` | `public` | `string` |
| `emote` | `public` | `T` extends `"emote"` ? [`Emote`](/api/eventsub/classes/emote/) : `null` |
| `mention` | `public` | `T` extends `"mention"` ? [`Mention`](/api/eventsub/classes/mention/) : `null` |
| `type` | `public` | `T` |
