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
| `T` extends `number` \| `null` | `null` |

## Constructors

### new NumberOption(options)

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

[twitchapi/packages/chatbot/src/structures/NumberOption.ts:21](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/NumberOption.ts#L21)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `defaultValue` | `readonly` | `null` \| `T` | The default value of the option. |
| `type` | `readonly` | `"number"` | The type of the option. It's always number. |
