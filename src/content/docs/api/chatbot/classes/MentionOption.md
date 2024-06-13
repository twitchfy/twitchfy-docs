---
editUrl: false
next: false
prev: false
title: "MentionOption"
---

Represents a mention option.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `null` | `null` |
| `K` *extends* `boolean` | `false` |

## Constructors

### new MentionOption()

```ts
new MentionOption<T, K>(options?: object): MentionOption<T, K>
```

Creates a new instance of the mention option.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `object` | The options of the mention option. |
| `options.grouped`? | `K` | - |

#### Returns

[`MentionOption`](/api/chatbot/classes/mentionoption/)\<`T`, `K`\>

#### Source

twitchfy/packages/chatbot/src/structures/MentionOption.ts:25

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `T` | `...` | The default value of the mention option. Always null as actually there is not planned way to set a default value. |
| `grouped` | `readonly` | `K` | `...` | Whether the mention option is grouped into more than two types of mention. |
| `type` | `readonly` | `"mention"` | `'mention'` | The type of the mention option. It's always mention. |
