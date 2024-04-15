---
editUrl: false
next: false
prev: false
title: "@twitchapi/chatbot"
---

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [EventSubConnection](enumerations/EventSubConnection.md) | The diffrent types of connections for the Twitch EventSub. |
| [Permission](enumerations/Permission.md) | The permissions bitfield of an user. |

## Classes

| Class | Description |
| :------ | :------ |
| [Author](classes/Author.md) | Represents the author of a received message. |
| [AutoMod](classes/AutoMod.md) | Represents the automod of a chatroom. |
| [AutoModSettings](classes/AutoModSettings.md) | Represents the settings of an automod. |
| [AutoModSettingsManager](classes/AutoModSettingsManager.md) | Represents the manager for the settings of the autmod. |
| [BadgeManager](classes/BadgeManager.md) | Represents an user badge's manager. |
| [Ban](classes/Ban.md) | Represents a ban in a chatroom. |
| [BanManager](classes/BanManager.md) | The ban manager of a chatroom. |
| [BaseCheermote](classes/BaseCheermote.md) | Represents a base cheermote returned by the EventSub. |
| [BaseClip](classes/BaseClip.md) | Represents the base class for all clips. |
| [BaseEmote](classes/BaseEmote.md) | The base emote class. |
| [BaseMessage](classes/BaseMessage.md) | The base class for a message. |
| [BasePermission](classes/BasePermission.md) | Base class for building custom permissions. |
| [BaseStream](classes/BaseStream.md) | The base class for a stream. |
| [BaseUser](classes/BaseUser.md) | The base class for a user. |
| [BaseUserWithoutUsername](classes/BaseUserWithoutUsername.md) | The base class for a user without an username. |
| [BooleanOption](classes/BooleanOption.md) | Represents a boolean option for a command. |
| [Channel](classes/Channel.md) | Represents a Twitch channel. |
| [ChannelChatClear](classes/ChannelChatClear.md) | Represents a channel chat clear event. |
| [ChannelEmote](classes/ChannelEmote.md) | Represents a Twitch channel emote. |
| [ChannelFollow](classes/ChannelFollow.md) | Represents a channel follow event. |
| [ChannelManager](classes/ChannelManager.md) | Represents the chatbot channel manager used to join to channels. |
| [ChannelProfile](classes/ChannelProfile.md) | Represents a channel profile created when the chatbot joins to a channel. |
| [ChannelUpdate](classes/ChannelUpdate.md) | Represents a channel update event. |
| [ChatBot](classes/ChatBot.md) | Represents a chatbot. |
| [ChatBotBanManager](classes/ChatBotBanManager.md) | The ban manager of the chatbot. |
| [ChatBotMessageManager](classes/ChatBotMessageManager.md) | The message manager of the chatobot. |
| [ChatBotTimeoutManager](classes/ChatBotTimeoutManager.md) | The timeout manager of the chatbot. |
| [ChatBotUser](classes/ChatBotUser.md) | Represents a Twitch chatbot user. |
| [ChatBotUserManager](classes/ChatBotUserManager.md) | The user manager of the chatbot. |
| [ChatRoom](classes/ChatRoom.md) | Represents a Twitch chatroom of a channel. |
| [ChatRoomSettings](classes/ChatRoomSettings.md) | Represents the settings of a chatroom. |
| [ChatRoomSettingsManager](classes/ChatRoomSettingsManager.md) | Represents the manager for the settings of a chatroom. |
| [Cheermote](classes/Cheermote.md) | Represents a Twitch cheermote. |
| [CheermoteTier](classes/CheermoteTier.md) | Represents a Twitch cheermote tier. |
| [Clip](classes/Clip.md) | Represents a Twitch clip. |
| [Collection](classes/Collection.md) | A collection of key-value pairs. |
| [Command](classes/Command.md) | The command structure. |
| [CommandContext](classes/CommandContext.md) | The context of the command. |
| [CommandHandler](classes/CommandHandler.md) | The command handler. |
| [Emote](classes/Emote.md) | Represents a Twitch emote. It could be either a global emote or a channel emote. |
| [EventHandler](classes/EventHandler.md) | The event handler. |
| [GlobalEmote](classes/GlobalEmote.md) | Represents a Twitch global emote. |
| [MentionOption](classes/MentionOption.md) | Represents a mention option. |
| [Message](classes/Message.md) | Represents a message in a chatroom. |
| [MessageManager](classes/MessageManager.md) | Represents the manager for the messages of a chatroom. |
| [MessageReply](classes/MessageReply.md) | Represents a message reply. |
| [MessageReplyParent](classes/MessageReplyParent.md) | Represents a message in a chatroom that was replied by another message. |
| [MessageReplyThread](classes/MessageReplyThread.md) | Represents the message which started a thread of replies. |
| [NumberOption](classes/NumberOption.md) | Represents a number option. |
| [Stream](classes/Stream.md) | Represents a Twitch stream. |
| [StreamOnline](classes/StreamOnline.md) | Represents a stream online event. |
| [StringOption](classes/StringOption.md) | Represents a string option. |
| [TimeoutManager](classes/TimeoutManager.md) | The timeout manager of a chatroom. |
| [User](classes/User.md) | Represents a Twitch user. |
| [Video](classes/Video.md) | Represents a Twitch video. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [BanOptions](interfaces/BanOptions.md) | The options to ban an user. |
| [BaseClipData](interfaces/BaseClipData.md) | The base data of a clip. |
| [BaseEmoteData](interfaces/BaseEmoteData.md) | The data of the base emote. |
| [BaseMessageData](interfaces/BaseMessageData.md) | The base data for a message. |
| [BaseStreamData](interfaces/BaseStreamData.md) | The data of the base stream. |
| [BaseUserData](interfaces/BaseUserData.md) | The base data of an user. |
| [Category](interfaces/Category.md) | Represents a stream's category. |
| [ChannelProfileData](interfaces/ChannelProfileData.md) | The data of the channel profile. |
| [ChatBotOptions](interfaces/ChatBotOptions.md) | The options to build up a chatbot. |
| [ChatRoomData](interfaces/ChatRoomData.md) | The data of the chatroom. |
| [CheermoteURLOptions](interfaces/CheermoteURLOptions.md) | The options for generating a cheermote URL. |
| [CommandOptions](interfaces/CommandOptions.md) | The options to build up a command. |
| [EmoteURLOptions](interfaces/EmoteURLOptions.md) | Options for generating an emote URL. |
| [Game](interfaces/Game.md) | Represents a game played in a Twitch's stream. |
| [MessageOptions](interfaces/MessageOptions.md) | The options to send a message. |
| [OptionOptions](interfaces/OptionOptions.md) | The options to build up a basic option. |
| [Paths](interfaces/Paths.md) | The paths of the diffrent resources of the chatbot. |
| [ThumbailOptions](interfaces/ThumbailOptions.md) | The options for the thumbnail. |
| [TimeoutOptions](interfaces/TimeoutOptions.md) | The options to timeout an user. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [ChannelEvents](type-aliases/ChannelEvents.md) | The EventSub events which the chatbot could listen. |
| [CommandOptionsAux](type-aliases/CommandOptionsAux.md) | Auxiliary type to define the options of a command. |
| [EmoteType](type-aliases/EmoteType.md) | - |
| [EventData](type-aliases/EventData.md) | The data of the event. |
| [EventDataForConnection](type-aliases/EventDataForConnection.md) | The data received from an event. |
| [EventSubOptions](type-aliases/EventSubOptions.md) | The options for the EventSub connection. |
| [Events](type-aliases/Events.md) | All possible events that the chatbot could listen. |
| [FetchEmote](type-aliases/FetchEmote.md) | The returned value when fetching an emote. |
| [MessageData](type-aliases/MessageData.md) | The data of a message. |
| [MessageEventData](type-aliases/MessageEventData.md) | The data of a message event. |
| [MessageTypes](type-aliases/MessageTypes.md) | - |
| [OptionsRecord](type-aliases/OptionsRecord.md) | The options object of a command. |
| [PermissionOrArray](type-aliases/PermissionOrArray.md) | The permissions of the command. |
| [PermissionRecord](type-aliases/PermissionRecord.md) | The permissions object of the command. |
| [RequiredPerms](type-aliases/RequiredPerms.md) | The required permissions for the command returned on the onPermissionsFallback function. |
| [RestData](type-aliases/RestData.md) | The rest of data which builds up the [MessageData](type-aliases/MessageData.md). |
| [StartOptions](type-aliases/StartOptions.md) | The options to start the chatbot. |

## Functions

| Function | Description |
| :------ | :------ |
| [SetCommand](functions/SetCommand.md) | Define the command. |
| [SetPermissions](functions/SetPermissions.md) | Set the permissions for the command. |
| [createEvent](functions/createEvent.md) | Function to create an event. |
