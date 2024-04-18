---
editUrl: false
next: false
prev: false
title: "ChannelProfile"
---

Represents a channel profile created when the chatbot joins to a channel.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelProfile(chatbot, data)

```ts
new ChannelProfile<T>(chatbot: ChatBot<T>, data: ChannelProfileData): ChannelProfile<T>
```

Creates a new instance of the channel profile.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`ChannelProfileData`](/api/chatbot/interfaces/channelprofiledata/) | The data of the channel profile. |

#### Returns

[`ChannelProfile`](/api/chatbot/classes/channelprofile/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:28](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L28)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `events` | `readonly` | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"`)[] | The events from the channel that the chatbot is subscribed to. | - |
| `id` | `readonly` | `string` | The ID of the channel. | - |

## Accessors

### hasEvent

```ts
get hasEvent(): (event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage") => boolean
```

Checks if one event is being listened.

#### Returns

`Function`

> ##### Parameters
>
> | Parameter | Type |
> | :------ | :------ |
> | `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` |
>
> ##### Returns
>
> `boolean`
>

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:68](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L68)

## Methods

### addEvent()

#### addEvent(event)

```ts
addEvent(event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
| "ChannelChatMessage"): Promise<void>
```

Adds an event or events to the channel profile and listen to it. If the event is already added, it does nothing.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` | The event or events to add. |

##### Returns

`Promise`\<`void`\>

##### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:34](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L34)

#### addEvent(event)

```ts
addEvent(event: (
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
| "ChannelChatMessage")[]): Promise<void>
```

Adds an event or events to the channel profile and listen to it. If the event is already added, it does nothing.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"`)[] | The event or events to add. |

##### Returns

`Promise`\<`void`\>

##### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:35](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L35)

***

### fetch()

```ts
fetch(): Promise<Channel<T>>
```

Fetches the current channel of the profile from the API.

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

The fetched channel from the API.

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:76](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L76)

***

### removeEvent()

```ts
removeEvent(event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
| "ChannelChatMessage"): Promise<void>
```

Removes an event from the channel profile and stop listening to it. If the event is not added, it does nothing.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` | The event to remove. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelProfile.ts:57](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/ChannelProfile.ts#L57)
