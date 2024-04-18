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

[twitchapi/packages/chatbot/src/functions/createEvent.ts:7](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/functions/createEvent.ts#L7)
