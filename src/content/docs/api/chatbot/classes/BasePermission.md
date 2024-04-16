---
editUrl: false
next: false
prev: false
title: "BasePermission"
---

Base class for building custom permissions.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BasePermission()

```ts
new BasePermission<T>(): BasePermission<T>
```

#### Returns

[`BasePermission`](/api/chatbot/classes/basepermission/)\<`T`\>

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `value` | `abstract` | `string` | The value or identifier of the custom permission returned in `onPermissionsFallback`. See [Command](../../api/chatbot/classes/command). |

## Methods

### check()

```ts
abstract check(ctx: CommandContext<Object, T>): boolean | Promise<boolean>
```

Check if the user has the custom permission to run the command.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `ctx` | [`CommandContext`](/api/chatbot/classes/commandcontext/)\<`Object`, `T`\> | The context of the command which was run. |

#### Returns

`boolean` \| `Promise`\<`boolean`\>

If the user has the custom permission to run the command.

#### Source

[twitchapi/packages/chatbot/src/structures/BasePermission.ts:15](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BasePermission.ts#L15)
