---
editUrl: false
next: false
prev: false
title: "RestData"
---

```ts
type RestData<T, K>: Object;
```

The rest of data which builds up the [MessageData](../../api/chatbot/type-aliases/messagedata).

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | - |
| `K` extends [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | `Object` |

## Type declaration

| Member | Type |
| :------ | :------ |
| `commandName` | `string` |
| `options` | [`CommandOptionsAux`](/api/chatbot/type-aliases/commandoptionsaux/)\<`T`, `K`\> |
| `prefix` | `string` |

## Source

[twitchapi/packages/chatbot/src/types/MessageData.ts:23](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/MessageData.ts#L23)
