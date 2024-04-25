---
editUrl: false
next: false
prev: false
title: "SetCommand"
---

```ts
SetCommand<T>(options: CommandOptions): (constructor: () => ChatCommand<T>) => void
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
> | `constructor` | () => [`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\> |
>
> ### Returns
>
> `void`
>

## Source

twitchfy/packages/chatbot/src/decorators/Command.ts:24
