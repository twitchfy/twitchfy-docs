---
editUrl: false
next: false
prev: false
title: "CommandHandler"
---

The command handler.

## Constructors

### new CommandHandler()

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

twitchfy/packages/chatbot/src/structures/CommandHandler.ts:18

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `dir` | `readonly` | `string` | The directory of the commands. |

## Methods

### load()

```ts
load(): Promise<typeof ChatCommand[]>
```

Load the commands.

#### Returns

`Promise`\<*typeof* [`ChatCommand`](/api/chatbot/classes/chatcommand/)[]\>

The loaded commands.

#### Source

twitchfy/packages/chatbot/src/structures/CommandHandler.ts:26
