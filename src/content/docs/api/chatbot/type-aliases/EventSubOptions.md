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

[twitchapi/packages/chatbot/src/types/EventSubOptions.ts:13](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/EventSubOptions.ts#L13)
