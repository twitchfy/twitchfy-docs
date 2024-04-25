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

[twitchapi/packages/chatbot/src/types/PermissionOrArray.ts:7](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/types/PermissionOrArray.ts#L7)
