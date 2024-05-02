---
editUrl: false
next: false
prev: false
title: "EventData"
---

```ts
type EventData<T, K>: Object;
```

The data of the event.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |
| `K` extends [`Events`](/api/chatbot/type-aliases/events/) |

## Type declaration

| Member | Type | Description |
| :------ | :------ | :------ |
| `event` | `K` | The event to run. |
| `run` | (`chatbot`: [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\>, `data`: `EventsMap`\<`T`\>\[`K`\]) => `any` | The function which will be run when the event is triggered.<br /><br /> |

## Source

twitchfy/packages/chatbot/src/types/EventData.ts:12
