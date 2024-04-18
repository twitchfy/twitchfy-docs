---
editUrl: false
next: false
prev: false
title: "BooleanOption"
---

Represents a boolean option for a command.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `boolean` \| `null` | `null` |

## Constructors

### new BooleanOption(options)

```ts
new BooleanOption<T>(options?: OptionOptions<T>): BooleanOption<T>
```

Create a new boolean option.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`OptionOptions`](/api/chatbot/interfaces/optionoptions/)\<`T`\> | The options for the boolean option. |

#### Returns

[`BooleanOption`](/api/chatbot/classes/booleanoption/)\<`T`\>

#### Source

[twitchapi/packages/chatbot/src/structures/BooleanOption.ts:22](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BooleanOption.ts#L22)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `null` \| `T` | The default value of the option. |
| `type` | `readonly` | `"boolean"` | The type of the option. Set to boolean. |
