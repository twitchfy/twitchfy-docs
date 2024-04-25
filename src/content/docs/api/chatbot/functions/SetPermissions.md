---
editUrl: false
next: false
prev: false
title: "SetPermissions"
---

```ts
SetPermissions<T>(...permission: PermissionOrArray<T>[]): (constructor: () => ChatCommand<T>) => void
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
> | `constructor` | () => [`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\> |
>
> ### Returns
>
> `void`
>

## Source

[twitchapi/packages/chatbot/src/decorators/SetPermissions.ts:10](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/decorators/SetPermissions.ts#L10)
