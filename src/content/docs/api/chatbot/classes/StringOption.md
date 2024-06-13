---
editUrl: false
next: false
prev: false
title: "StringOption"
---

Represents a string option.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `string` \| `null` | `null` |

## Constructors

### new StringOption()

```ts
new StringOption<T>(options?: OptionOptions<T>): StringOption<T>
```

Creates a new instance of the string option.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`OptionOptions`](/api/chatbot/interfaces/optionoptions/)\<`T`\> | The options of the string option. |

#### Returns

[`StringOption`](/api/chatbot/classes/stringoption/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/StringOption.ts:21

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `null` \| `T` | `undefined` | The default value of the option. |
| `type` | `readonly` | `"string"` | `'string'` | The type of the option. It's always string. |
