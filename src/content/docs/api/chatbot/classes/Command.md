---
editUrl: false
next: false
prev: false
title: "Command"
---

The command structure.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Command()

```ts
new Command<T>(): Command<T>
```

#### Returns

[`Command`](/api/chatbot/classes/command/)\<`T`\>

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `name` | `readonly` | `string` | The name of the command. |
| `options` | `readonly` | [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | The options of the command. |
| `permissions` | `readonly` | [`PermissionOrArray`](/api/chatbot/type-aliases/permissionorarray/)\<`T`\>[] | The permissions of the command. |

## Methods

### onPermissionFallback()?

```ts
optional onPermissionFallback(ctx: CommandContext<OptionsRecord, T>, permissions: RequiredPerms): any
```

The fallback function of the command if the permissions aren't satisfied.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | [`CommandContext`](/api/chatbot/classes/commandcontext/)\<[`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/), `T`\> |
| `permissions` | [`RequiredPerms`](/api/chatbot/type-aliases/requiredperms/) |

#### Returns

`any`

#### Source

[twitchapi/packages/chatbot/src/structures/Command.ts:35](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Command.ts#L35)

***

### run()?

```ts
optional run(ctx: CommandContext<OptionsRecord, T>): any
```

The run function of the command.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | [`CommandContext`](/api/chatbot/classes/commandcontext/)\<[`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/), `T`\> |

#### Returns

`any`

#### Source

[twitchapi/packages/chatbot/src/structures/Command.ts:30](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Command.ts#L30)
