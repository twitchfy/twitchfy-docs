---
editUrl: false
next: false
prev: false
title: "CommandHandler"
---

The command handler.

## Constructors

### new CommandHandler(dir)

```ts
new CommandHandler(dir: string): CommandHandler
```

Creates a new instance of the command handler.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory of the commands. |

#### Returns

[`CommandHandler`](/api/chatbot/classes/commandhandler/)

#### Source

[twitchapi/packages/chatbot/src/structures/CommandHandler.ts:18](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/CommandHandler.ts#L18)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `dir` | `readonly` | `string` | The directory of the commands. |

## Methods

### load()

```ts
load(): Promise<typeof Command[]>
```

Load the commands.

#### Returns

`Promise`\<*typeof* [`Command`](/api/chatbot/classes/command/)[]\>

The loaded commands.

#### Source

[twitchapi/packages/chatbot/src/structures/CommandHandler.ts:26](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/CommandHandler.ts#L26)
