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
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

[twitchapi/packages/chatbot/src/types/PermissionOrArray.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/PermissionOrArray.ts#L7)
