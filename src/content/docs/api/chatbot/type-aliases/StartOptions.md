---
editUrl: false
next: false
prev: false
title: "StartOptions"
---

```ts
type StartOptions<T>: T extends EventSubConnection.Webhook ? object : object;
```

The options to start the chatbot.

## Param

The port to start the express server if the startServer option is set into true. Only required if the chatbot is using a Webhook EventSub connection.

## Param

A callback to execute when the chatbot is started. Only required if the chatbot is using a Webhook EventSub connection.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:370
