---
editUrl: false
next: false
prev: false
title: "ChatCommand"
---

The command structure.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`DefaultConnection`](/api/chatbot/type-aliases/defaultconnection/) |

## Constructors

### new ChatCommand()

```ts
new ChatCommand<T>(): ChatCommand<T>
```

#### Returns

[`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\>

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `name` | `readonly` | `string` | The name of the command. |
| `options` | `readonly` | [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | The options of the command. |
| `permissions` | `readonly` | [`PermissionOrArray`](/api/chatbot/type-aliases/permissionorarray/)\<`T`\>[] | The permissions of the command. |

## Methods

### onPermissionFallback()?

```ts
optional onPermissionFallback(ctx: TwitchContext<OptionsRecord, T>, permissions: RequiredPerms): any
```

The fallback function of the command if the permissions aren't satisfied.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | [`TwitchContext`](/api/chatbot/classes/twitchcontext/)\<[`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/), `T`\> |
| `permissions` | [`RequiredPerms`](/api/chatbot/type-aliases/requiredperms/) |

#### Returns

`any`

#### Source

twitchfy/packages/chatbot/src/structures/ChatCommand.ts:37

***

### run()?

```ts
optional run(ctx: TwitchContext<OptionsRecord, T>): any
```

The run function of the command.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `ctx` | [`TwitchContext`](/api/chatbot/classes/twitchcontext/)\<[`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/), `T`\> |

#### Returns

`any`

#### Source

twitchfy/packages/chatbot/src/structures/ChatCommand.ts:32
