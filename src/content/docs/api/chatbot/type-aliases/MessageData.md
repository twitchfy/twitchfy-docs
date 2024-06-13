---
editUrl: false
next: false
prev: false
title: "MessageData"
---

```ts
type MessageData<T, K>: MessageEventData<T> & RestData<T, K>;
```

The data of a message.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | - |
| `K` *extends* [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | `object` |

## Source

twitchfy/packages/chatbot/src/types/MessageData.ts:13
