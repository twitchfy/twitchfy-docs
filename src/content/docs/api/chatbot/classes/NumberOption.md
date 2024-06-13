---
editUrl: false
next: false
prev: false
title: "NumberOption"
---

Represents a number option.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `number` \| `null` | `null` |

## Constructors

### new NumberOption()

```ts
new NumberOption<T>(options?: OptionOptions<T>): NumberOption<T>
```

Creates a new instance of the number option.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`OptionOptions`](/api/chatbot/interfaces/optionoptions/)\<`T`\> | The options of the number option. |

#### Returns

[`NumberOption`](/api/chatbot/classes/numberoption/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/NumberOption.ts:21

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `null` \| `T` | `undefined` | The default value of the option. |
| `type` | `readonly` | `"number"` | `'number'` | The type of the option. It's always number. |
