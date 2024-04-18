---
editUrl: false
next: false
prev: false
title: "SetCommand"
---

```ts
SetCommand<T>(options: CommandOptions): (constructor: () => Command<T>) => void
```

Define the command.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CommandOptions`](/api/chatbot/interfaces/commandoptions/) | The options to build up the command. |

## Returns

`Function`

The decorator function.

> ### Parameters
>
> | Parameter | Type |
> | :------ | :------ |
> | `constructor` | () => [`Command`](/api/chatbot/classes/command/)\<`T`\> |
>
> ### Returns
>
> `void`
>

## Source

[twitchapi/packages/chatbot/src/decorators/Command.ts:24](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/decorators/Command.ts#L24)
