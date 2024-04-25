---
editUrl: false
next: false
prev: false
title: "ChatRoomSettings"
---

Represents the settings of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatRoomSettings(chatbot, chatroom, data)

```ts
new ChatRoomSettings<T>(
   chatbot: ChatBot<T>, 
   chatroom: ChatRoom<T>, 
data: ChatSettings): ChatRoomSettings<T>
```

Creates a new instance of the chatroom settings.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the settings. |
| `data` | `ChatSettings` | The data representing the chat settings. |

#### Returns

[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the settings. | - |

## Accessors

### chatDelay

```ts
get chatDelay(): null | number | false
```

The duration of the chat delay in seconds. If chat delay is disabled, this will return false.

#### Returns

`null` \| `number` \| `false`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:88

***

### chatroomID

```ts
get chatroomID(): string
```

The ID of the chatroom.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:46

***

### emotesOnly

```ts
get emotesOnly(): boolean
```

Whether the chatroom is in emote only mode.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:53

***

### followersOnly

```ts
get followersOnly(): number | false
```

The number of seconds a follower has to be following to be able to write. If the follower mode is disabled, this will return false.

#### Returns

`number` \| `false`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:60

***

### slowMode

```ts
get slowMode(): null | number | false
```

The slow mode duration of the chatroom in seconds. If slow mode is disabled, this will return false.

#### Returns

`null` \| `number` \| `false`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:81

***

### subscriberMode

```ts
get subscriberMode(): boolean
```

Whether the chatroom is in subscriber mode.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:67

***

### uniqueMessagesMode

```ts
get uniqueMessagesMode(): boolean
```

Whether the chatroom is in unique messages mode.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:74

## Methods

### edit()

```ts
edit(options: PatchChatSettingsBody): Promise<ChatRoomSettings<T>>
```

Edits the chat settings of the chatroom.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `PatchChatSettingsBody` | The options to edit the chat settings. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The updated chatroom settings.

#### Source

twitchfy/packages/chatbot/src/structures/ChatRoomSettings.ts:39
