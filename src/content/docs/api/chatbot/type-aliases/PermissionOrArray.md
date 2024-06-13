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
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

twitchfy/packages/chatbot/src/types/PermissionOrArray.ts:12
