---
editUrl: false
next: false
prev: false
title: "SetPermissions"
---

```ts
SetPermissions<T>(...permission: PermissionOrArray<T>[]): (constructor: () => Command<T>) => void
```

Set the permissions for the command.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`permission` | [`PermissionOrArray`](/api/chatbot/type-aliases/permissionorarray/)\<`T`\>[] | The permissions to set for the command. |

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

[twitchapi/packages/chatbot/src/decorators/SetPermissions.ts:10](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/decorators/SetPermissions.ts#L10)
