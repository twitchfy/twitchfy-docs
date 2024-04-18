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
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | - |
| `K` extends [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | `Object` |

## Source

[twitchapi/packages/chatbot/src/types/MessageData.ts:13](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/types/MessageData.ts#L13)
