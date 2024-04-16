---
editUrl: false
next: false
prev: false
title: "StartOptions"
---

```ts
type StartOptions<T>: T extends EventSubConnection.Webhook ? Object : Object;
```

The options to start the chatbot.

## Param

The port to start the express server if the startServer option is set into true. Only required if the chatbot is using a Webhook EventSub connection.

## Param

A callback to execute when the chatbot is started. Only required if the chatbot is using a Webhook EventSub connection.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:332](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L332)
