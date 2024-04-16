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

## Param

The event to run.

## Param

The function to run the event.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |
| `K` extends [`Events`](/api/chatbot/type-aliases/events/) |

## Type declaration

| Member | Type |
| :------ | :------ |
| `event` | `K` |
| `run` | (`chatbot`: [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\>, `data`: `EventsMap`\<`T`\>\[`K`\]) => `any` |

## Source

[twitchapi/packages/chatbot/src/types/EventData.ts:14](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/EventData.ts#L14)
