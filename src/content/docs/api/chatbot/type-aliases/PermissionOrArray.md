---
editUrl: false
next: false
prev: false
title: "PermissionOrArray"
---

```ts
type PermissionOrArray<T>: Permission | PermissionRecord<T> | typeof BasePermission;
```

The permissions of the command.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

[twitchapi/packages/chatbot/src/types/PermissionOrArray.ts:12](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/PermissionOrArray.ts#L12)
