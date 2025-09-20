---
editUrl: false
next: false
prev: false
title: "ChatRoom"
---

Represents a Twitch chatroom of a channel.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatRoom()

```ts
new ChatRoom<T>(chatbot: ChatBot<T>, data: ChatRoomData): ChatRoom<T>
```

Creates a new instance of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`ChatRoomData`](/api/chatbot/interfaces/chatroomdata/) | The data of the chatroom. |

#### Returns

[`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:71

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `automod` | `readonly` | [`AutoMod`](/api/chatbot/classes/automod/)\<`T`\> | The automod manager of the chatroom. | - |
| `bans` | `readonly` | [`BanManager`](/api/chatbot/classes/banmanager/)\<`T`\> | The ban manager of the chatroom. | - |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster who owns the chatroom. | - |
| `channel` | `readonly` | [`BaseChannel`](/api/chatbot/classes/basechannel/)\<`T`\> | The channel of the chatroom. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatters` | `readonly` | [`ChatterManager`](/api/chatbot/classes/chattermanager/)\<`T`\> | The chatters manager of the chatroom. | - |
| `messages` | `readonly` | [`MessageManager`](/api/chatbot/classes/messagemanager/)\<`T`\> | The message manager of the chatroom. | - |
| `settings` | `readonly` | [`ChatRoomSettingsManager`](/api/chatbot/classes/chatroomsettingsmanager/)\<`T`\> | The settings manager of the chatroom. | - |
| `timeouts` | `readonly` | [`TimeoutManager`](/api/chatbot/classes/timeoutmanager/)\<`T`\> | The timeout manager of the chatroom. | - |
| `warns` | `readonly` | [`WarnsManager`](/api/chatbot/classes/warnsmanager/)\<`T`\> | The warns manager of the chatroom. | - |

## Accessors

### id

```ts
get id(): string
```

The Id of the chatroom. Its id is the same as the broadcaster id.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:88

## Methods

### announce()

```ts
announce(options: AnnouncementOptions): Promise<void>
```

Sends an announcement to the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `AnnouncementOptions` | The options of the announcement. See AnnouncementOptions |

#### Returns

`Promise`\<`void`\>

The announcement that was sent.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:160

***

### send()

```ts
send(message: string): Promise<BaseMessage<T>>
```

Sends a message to the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to send. |

#### Returns

`Promise`\<[`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>\>

The message that was sent. See [BaseMessage](/api/chatbot/api/chatbot/classes/basemessage/)

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:97

***

### setChatDelay()

```ts
setChatDelay(duration: null | 2 | 4 | 6): Promise<ChatRoomSettings<T>>
```

Sets the chat delay of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `duration` | `null` \| `2` \| `4` \| `6` | The duration of the chat delay in seconds. If null, it will disable the chat delay. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:142

***

### setEmoteOnlyMode()

```ts
setEmoteOnlyMode(enabled: boolean): Promise<ChatRoomSettings<T>>
```

Sets the emote only mode of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Whether the emote only mode is enabled. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:151

***

### setFollowersMode()

```ts
setFollowersMode(duration: null | number): Promise<ChatRoomSettings<T>>
```

Sets the followers mode of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `duration` | `null` \| `number` | The time, in seconds, the followers must be following the broadcaster to be able to send a message. If null, it will disable the followers mode. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:115

***

### setSlowMode()

```ts
setSlowMode(duration: null | number): Promise<ChatRoomSettings<T>>
```

Sets the slow mode of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `duration` | `null` \| `number` | The duration of the slow mode in seconds. If null, it will disable the slow mode. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:106

***

### setSubscribersMode()

```ts
setSubscribersMode(enabled: boolean): Promise<ChatRoomSettings<T>>
```

Sets the subscribers mode of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Whether the subscribers mode is enabled. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:124

***

### setUniqueMessagesMode()

```ts
setUniqueMessagesMode(enabled: boolean): Promise<ChatRoomSettings<T>>
```

Sets the unique messages mode of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `enabled` | `boolean` | Whether the unique messages mode is enabled. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:133

***

### shoutout()

```ts
shoutout(receiverId: string): Promise<void>
```

Sends a shoutout to a user in the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `receiverId` | `string` | The Id of the user to shoutout. |

#### Returns

`Promise`\<`void`\>

The shoutout that was sent.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoom.ts:169
