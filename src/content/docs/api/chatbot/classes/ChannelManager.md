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
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Constructors

### new ChannelManager(chatbot)

```ts
new ChannelManager<T>(chatbot: ChatBot<T>): ChannelManager<T>
```

Creates a new instance of the channel manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. |

#### Returns

[`ChannelManager`](ChannelManager.md)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:19](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChannelManager.ts#L19)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

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

`Promise`\<[`Channel`](Channel.md)\<`T`\>\>

A class representation of the channel. See [Channel](../../api/chatbot/classes/channel).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:104](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChannelManager.ts#L104)

***

### join()

```ts
join(id: string, events?: (
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
| "ChannelChatMessage")[]): Promise<ChannelProfile<T>>
```

Join a channel and listen to messages.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the channel to join. |
| `events`? | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"`)[] | The EventSub events you will listen  to. See [ChannelEvents](../../api/chatbot/type-aliases/channelevents). |

#### Returns

`Promise`\<[`ChannelProfile`](ChannelProfile.md)\<`T`\>\>

A class representation of the channel profile which contains the events you are subscribed with. See [ChannelProfile](../../api/chatbot/classes/channelprofile).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:29](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChannelManager.ts#L29)

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

[twitchapi/packages/chatbot/src/structures/managers/ChannelManager.ts:70](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/ChannelManager.ts#L70)
