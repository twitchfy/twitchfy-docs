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
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelProfile()

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

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `events` | `readonly` | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"`)[] | The events from the channel that the chatbot is subscribed to. | - |
| `id` | `readonly` | `string` | The Id of the channel. | - |

## Methods

### addEvent()

#### addEvent(event)

```ts
addEvent(event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage"
| "StreamOffline"): Promise<void>
```

Adds an event or events to the channel profile and listen to it. If the event is already added, it does nothing.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"` | The event or events to add. |

##### Returns

`Promise`\<`void`\>

##### Source

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:34

#### addEvent(event)

```ts
addEvent(event: (
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage"
| "StreamOffline")[]): Promise<void>
```

Adds an event or events to the channel profile and listen to it. If the event is already added, it does nothing.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` | ( \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"`)[] | The event or events to add. |

##### Returns

`Promise`\<`void`\>

##### Source

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:35

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

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:76

***

### hasEvent()

```ts
hasEvent(event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage"
  | "StreamOffline"): boolean
```

Checks if one event is being listened.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"` | The event to check. |

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:68

***

### removeEvent()

```ts
removeEvent(event: 
  | "ChannelChatClear"
  | "ChannelFollow"
  | "ChannelUpdate"
  | "StreamOnline"
  | "ChannelChatMessage"
| "StreamOffline"): Promise<void>
```

Removes an event from the channel profile and stop listening to it. If the event is not added, it does nothing.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `event` |  \| `"ChannelChatClear"` \| `"ChannelFollow"` \| `"ChannelUpdate"` \| `"StreamOnline"` \| `"ChannelChatMessage"` \| `"StreamOffline"` | The event to remove. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/chatbot/src/structures/ChannelProfile.ts:57
