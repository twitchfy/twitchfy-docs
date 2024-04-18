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

[twitchapi/packages/chatbot/src/types/PermissionOrArray.ts:7](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/types/PermissionOrArray.ts#L7)
