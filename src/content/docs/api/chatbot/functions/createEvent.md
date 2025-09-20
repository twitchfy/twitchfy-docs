---
editUrl: false
next: false
prev: false
title: "createEvent"
---

```ts
function createEvent<T>(data: 
  | EventData<T, "ChannelChatClear">
  | EventData<T, "ChannelFollow">
  | EventData<T, "ChannelUpdate">
  | EventData<T, "StreamOnline">
  | EventData<T, "ChannelChatMessage">
  | EventData<T, "StreamOffline">
  | EventData<T, "ChatBotReady">): 
  | EventData<T, "ChannelChatClear">
  | EventData<T, "ChannelFollow">
  | EventData<T, "ChannelUpdate">
  | EventData<T, "StreamOnline">
  | EventData<T, "ChannelChatMessage">
  | EventData<T, "StreamOffline">
| EventData<T, "ChatBotReady">
```

Function to create an event.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` |  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatClear"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelFollow"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelUpdate"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"StreamOnline"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatMessage"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"StreamOffline"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChatBotReady"`\> | The [EventData](../../api/chatbot/type-aliases/eventdata) to create the event. |

## Returns

  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatClear"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelFollow"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelUpdate"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"StreamOnline"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatMessage"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"StreamOffline"`\>
  \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChatBotReady"`\>

## Source

twitchfy/packages/chatbot/src/functions/createEvent.ts:15
