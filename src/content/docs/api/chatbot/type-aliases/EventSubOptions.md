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

[twitchapi/packages/chatbot/src/types/EventSubOptions.ts:13](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/types/EventSubOptions.ts#L13)
