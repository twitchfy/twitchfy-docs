---
editUrl: false
next: false
prev: false
title: "WebSocketConnectionOptions"
---

```ts
type WebSocketConnectionOptions: BaseConnectionOptions<WebSocketConnection> & Object;
```

The options used to create a new WebSocketConnection.

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `proxy` | `string` | The proxy url used for the connection. |
| `userToken` | `UserTokenAdapter`\<`boolean`\> | The user token used for the connection. |

## Source

twitchfy/packages/eventsub/src/ws/types/WebSocketConnectionOptions.ts:8
