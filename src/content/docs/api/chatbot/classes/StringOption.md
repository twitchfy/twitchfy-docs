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
| `T` extends `string` \| `null` | `null` |

## Constructors

### new StringOption(options)

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

[twitchapi/packages/chatbot/src/structures/StringOption.ts:21](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/StringOption.ts#L21)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `null` \| `T` | The default value of the option. |
| `type` | `readonly` | `"string"` | The type of the option. It's always string. |
