---
editUrl: false
next: false
prev: false
title: "EventDataForConnection"
---

```ts
type EventDataForConnection<T>: { [K in Events]: EventData<T, K> };
```

The data received from an event.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

twitchfy/packages/chatbot/src/functions/createEvent.ts:7
