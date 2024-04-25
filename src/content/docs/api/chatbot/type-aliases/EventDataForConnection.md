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

[twitchapi/packages/chatbot/src/functions/createEvent.ts:7](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/functions/createEvent.ts#L7)
