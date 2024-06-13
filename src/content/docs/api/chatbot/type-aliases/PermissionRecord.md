---
editUrl: false
next: false
prev: false
title: "PermissionRecord"
---

```ts
type PermissionRecord<T>: Record<string, (Permission | typeof BasePermission)[]>;
```

The permissions object of the command.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

twitchfy/packages/chatbot/src/types/PermissionOrArray.ts:7
