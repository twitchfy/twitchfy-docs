---
editUrl: false
next: false
prev: false
title: "SetCommand"
---

```ts
function SetCommand<T>(options: CommandOptions): <K>(target: K) => (...args: any[]) => __class<T, K> & K
```

Define the command.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommandOptions`](/api/chatbot/interfaces/commandoptions/) | The options to build up the command. |

## Returns

`Function`

The decorator function.

### Type parameters

| Type parameter |
| :------ |
| `K` *extends* (...`args`: `any`[]) => [`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\> |

### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | `K` |

### Returns

(...`args`: `any`[]) => `__class`\<`T`, `K`\> & `K`

## Source

twitchfy/packages/chatbot/src/decorators/Command.ts:24
