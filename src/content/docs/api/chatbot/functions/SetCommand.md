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

[twitchapi/packages/chatbot/src/decorators/Command.ts:20](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/decorators/Command.ts#L20)
