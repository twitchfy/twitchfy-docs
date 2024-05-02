---
editUrl: false
next: false
prev: false
title: "EventSubOptions"
---

```ts
type EventSubOptions<T>: T extends EventSubConnection.WebSocket ? OmitClientProps<WebSocketConnectionOptions> : T extends EventSubConnection.Webhook ? OmitClientProps<WebhookConnectionOptions> & Object : OmitClientProps<ConduitOptions>;
```

The options for the EventSub connection.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

twitchfy/packages/chatbot/src/types/EventSubOptions.ts:13
