---
editUrl: false
next: false
prev: false
title: "ChannelManager"
---

Represents the chatbot channel manager used to join to channels.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelManager()

```ts
new ChannelManager<T>(chatbot: ChatBot<T>): ChannelManager<T>
```

Creates a new instance of the channel manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChannelManager`](/api/chatbot/classes/channelmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChannelManager.ts:19

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### fetch()

```ts
fetch(id: string): Promise<Channel<T>>
```

Fetches a channel by id.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the channel to fetch. |

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

A class representation of the channel. See [Channel](/api/chatbot/api/chatbot/classes/channel/).

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChannelManager.ts:104

***

### join()

```ts
join(id: string, events?: (
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage"
| "StreamOffline")[]): Promise<ChannelProfile<T>>
```

Join a channel and listen to messages.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the channel to join. |
| `events`? | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"`)[] | The EventSub events you will listen  to. See [ChannelEvents](../../api/chatbot/type-aliases/channelevents). |

#### Returns

`Promise`\<[`ChannelProfile`](/api/chatbot/classes/channelprofile/)\<`T`\>\>

A class representation of the channel profile which contains the events you are subscribed with. See [ChannelProfile](/api/chatbot/api/chatbot/classes/channelprofile/).

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChannelManager.ts:29

***

### leave()

```ts
leave(id: string): Promise<void>
```

Leave a channel. You will no longer listen to messages and the other events you've subscribed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the channel to leave. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChannelManager.ts:70
