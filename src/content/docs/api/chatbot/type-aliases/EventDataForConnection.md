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
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

[twitchapi/packages/chatbot/src/functions/createEvent.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/functions/createEvent.ts#L7)
