---
editUrl: false
next: false
prev: false
title: "EventHandler"
---

The event handler.

## Constructors

### new EventHandler(dir)

```ts
new EventHandler(dir: string): EventHandler
```

Creates a new instance of the event handler.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `dir` | `string` | The directory of the events. |

#### Returns

[`EventHandler`](/api/chatbot/classes/eventhandler/)

#### Source

[twitchapi/packages/chatbot/src/structures/EventHandler.ts:18](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/EventHandler.ts#L18)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `dir` | `readonly` | `string` | The directory of the events. |

## Methods

### load()

```ts
load(): Promise<(
  | EventData<EventSubConnection, "ChannelChatClear">
  | EventData<EventSubConnection, "ChannelFollow">
  | EventData<EventSubConnection, "ChannelUpdate">
  | EventData<EventSubConnection, "StreamOnline">
  | EventData<EventSubConnection, "ChannelChatMessage">
| EventData<EventSubConnection, "ChatBotReady">)[]>
```

Load the events.

#### Returns

`Promise`\<(
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"ChannelChatClear"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"ChannelFollow"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"ChannelUpdate"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"StreamOnline"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"ChannelChatMessage"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<[`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/), `"ChatBotReady"`\>)[]\>

The loaded events.

#### Source

[twitchapi/packages/chatbot/src/structures/EventHandler.ts:26](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/EventHandler.ts#L26)
