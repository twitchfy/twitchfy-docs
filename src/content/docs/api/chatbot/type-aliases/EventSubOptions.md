---
editUrl: false
next: false
prev: false
title: "EventSubOptions"
---

```ts
type EventSubOptions<T>: T extends EventSubConnection.WebSocket ? OmitClientProps<WebSocketConnectionOptions> : OmitClientProps<WebhookConnectionOptions> & Object;
```

The options for the EventSub connection.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

[twitchapi/packages/chatbot/src/types/EventSubOptions.ts:13](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/types/EventSubOptions.ts#L13)
