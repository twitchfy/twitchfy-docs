---
editUrl: false
next: false
prev: false
title: "ChatRoomSettingsManager"
---

Represents the manager for the settings of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatRoomSettingsManager()

```ts
new ChatRoomSettingsManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): ChatRoomSettingsManager<T>
```

Creates a new instance of the chatroom settings manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The settings' chatroom. |

#### Returns

[`ChatRoomSettingsManager`](/api/chatbot/classes/chatroomsettingsmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatRoomSettingsManager.ts:23

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The settings' chatroom. | - |

## Methods

### edit()

```ts
edit(options: PatchChatSettingsBody): Promise<ChatRoomSettings<T>>
```

Edits the chatroom settings with the API.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `PatchChatSettingsBody` | The options to edit the chatroom settings. |

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The new settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatRoomSettingsManager.ts:33

***

### fetch()

```ts
fetch(): Promise<ChatRoomSettings<T>>
```

Fetches the current settings of the chatroom from the API.

#### Returns

`Promise`\<[`ChatRoomSettings`](/api/chatbot/classes/chatroomsettings/)\<`T`\>\>

The current settings of the chatroom.

#### Source

twitchfy/packages/chatbot/src/structures/managers/ChatRoomSettingsManager.ts:41
