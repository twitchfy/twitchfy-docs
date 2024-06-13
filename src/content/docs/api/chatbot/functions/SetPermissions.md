---
editUrl: false
next: false
prev: false
title: "SetPermissions"
---

```ts
function SetPermissions<T>(...permission: PermissionOrArray<T>[]): <K>(target: K) => (...args: any[]) => __class<T, K> & K
```

Set the permissions for the command.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`permission` | [`PermissionOrArray`](/api/chatbot/type-aliases/permissionorarray/)\<`T`\>[] | The permissions to set for the command. |

## Returns

`Function`

The decorator function.

### Type parameters

| Type parameter |
| :------ |
| `K` *extends* (...`args`: `any`[]) => [`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\> |

### Parameters

| Parameter | Type |
| :------ | :------ |
| `target` | `K` |

### Returns

(...`args`: `any`[]) => `__class`\<`T`, `K`\> & `K`

## Source

twitchfy/packages/chatbot/src/decorators/SetPermissions.ts:10
