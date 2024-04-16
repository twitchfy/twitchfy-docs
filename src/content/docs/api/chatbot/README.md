---
editUrl: false
next: false
prev: false
title: "@twitchapi/chatbot"
---

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [EventSubConnection](/api/chatbot/enumerations/eventsubconnection/) | The diffrent types of connections for the Twitch EventSub. |
| [Permission](/api/chatbot/enumerations/permission/) | The permissions bitfield of an user. |

## Classes

| Class | Description |
| :------ | :------ |
| [Author](/api/chatbot/classes/author/) | Represents the author of a received message. |
| [AutoMod](/api/chatbot/classes/automod/) | Represents the automod of a chatroom. |
| [AutoModSettings](/api/chatbot/classes/automodsettings/) | Represents the settings of an automod. |
| [AutoModSettingsManager](/api/chatbot/classes/automodsettingsmanager/) | Represents the manager for the settings of the autmod. |
| [BadgeManager](/api/chatbot/classes/badgemanager/) | Represents an user badge's manager. |
| [Ban](/api/chatbot/classes/ban/) | Represents a ban in a chatroom. |
| [BanManager](/api/chatbot/classes/banmanager/) | The ban manager of a chatroom. |
| [BaseCheermote](/api/chatbot/classes/basecheermote/) | Represents a base cheermote returned by the EventSub. |
| [BaseClip](/api/chatbot/classes/baseclip/) | Represents the base class for all clips. |
| [BaseEmote](/api/chatbot/classes/baseemote/) | The base emote class. |
| [BaseMessage](/api/chatbot/classes/basemessage/) | The base class for a message. |
| [BasePermission](/api/chatbot/classes/basepermission/) | Base class for building custom permissions. |
| [BaseStream](/api/chatbot/classes/basestream/) | The base class for a stream. |
| [BaseUser](/api/chatbot/classes/baseuser/) | The base class for a user. |
| [BaseUserWithoutUsername](/api/chatbot/classes/baseuserwithoutusername/) | The base class for a user without an username. |
| [BooleanOption](/api/chatbot/classes/booleanoption/) | Represents a boolean option for a command. |
| [Channel](/api/chatbot/classes/channel/) | Represents a Twitch channel. |
| [ChannelChatClear](/api/chatbot/classes/channelchatclear/) | Represents a channel chat clear event. |
| [ChannelEmote](/api/chatbot/classes/channelemote/) | Represents a Twitch channel emote. |
| [ChannelFollow](/api/chatbot/classes/channelfollow/) | Represents a channel follow event. |
| [ChannelManager](/api/chatbot/classes/channelmanager/) | Represents the chatbot channel manager used to join to channels. |
| [ChannelProfile](/api/chatbot/classes/channelprofile/) | Represents a channel profile created when the chatbot joins to a channel. |
| [ChannelUpdate](/api/chatbot/classes/channelupdate/) | Represents a channel update event. |
| [ChatBot](/api/chatbot/classes/chatbot/) | Represents a chatbot. |
| [ChatBotBanManager](/api/chatbot/classes/chatbotbanmanager/) | The ban manager of the chatbot. |
| [ChatBotMessageManager](/api/chatbot/classes/chatbotmessagemanager/) | The message manager of the chatobot. |
| [ChatBotTimeoutManager](/api/chatbot/classes/chatbottimeoutmanager/) | The timeout manager of the chatbot. |
| [ChatBotUser](/api/chatbot/classes/chatbotuser/) | Represents a Twitch chatbot user. |
| [ChatBotUserManager](/api/chatbot/classes/chatbotusermanager/) | The user manager of the chatbot. |
| [ChatRoom](/api/chatbot/classes/chatroom/) | Represents a Twitch chatroom of a channel. |
| [ChatRoomSettings](/api/chatbot/classes/chatroomsettings/) | Represents the settings of a chatroom. |
| [ChatRoomSettingsManager](/api/chatbot/classes/chatroomsettingsmanager/) | Represents the manager for the settings of a chatroom. |
| [Cheermote](/api/chatbot/classes/cheermote/) | Represents a Twitch cheermote. |
| [CheermoteTier](/api/chatbot/classes/cheermotetier/) | Represents a Twitch cheermote tier. |
| [Clip](/api/chatbot/classes/clip/) | Represents a Twitch clip. |
| [Collection](/api/chatbot/classes/collection/) | A collection of key-value pairs. |
| [Command](/api/chatbot/classes/command/) | The command structure. |
| [CommandContext](/api/chatbot/classes/commandcontext/) | The context of the command. |
| [CommandHandler](/api/chatbot/classes/commandhandler/) | The command handler. |
| [Emote](/api/chatbot/classes/emote/) | Represents a Twitch emote. It could be either a global emote or a channel emote. |
| [EventHandler](/api/chatbot/classes/eventhandler/) | The event handler. |
| [GlobalEmote](/api/chatbot/classes/globalemote/) | Represents a Twitch global emote. |
| [MentionOption](/api/chatbot/classes/mentionoption/) | Represents a mention option. |
| [Message](/api/chatbot/classes/message/) | Represents a message in a chatroom. |
| [MessageManager](/api/chatbot/classes/messagemanager/) | Represents the manager for the messages of a chatroom. |
| [MessageReply](/api/chatbot/classes/messagereply/) | Represents a message reply. |
| [MessageReplyParent](/api/chatbot/classes/messagereplyparent/) | Represents a message in a chatroom that was replied by another message. |
| [MessageReplyThread](/api/chatbot/classes/messagereplythread/) | Represents the message which started a thread of replies. |
| [NumberOption](/api/chatbot/classes/numberoption/) | Represents a number option. |
| [Stream](/api/chatbot/classes/stream/) | Represents a Twitch stream. |
| [StreamOnline](/api/chatbot/classes/streamonline/) | Represents a stream online event. |
| [StringOption](/api/chatbot/classes/stringoption/) | Represents a string option. |
| [TimeoutManager](/api/chatbot/classes/timeoutmanager/) | The timeout manager of a chatroom. |
| [User](/api/chatbot/classes/user/) | Represents a Twitch user. |
| [Video](/api/chatbot/classes/video/) | Represents a Twitch video. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [BanOptions](/api/chatbot/interfaces/banoptions/) | The options to ban an user. |
| [BaseClipData](/api/chatbot/interfaces/baseclipdata/) | The base data of a clip. |
| [BaseEmoteData](/api/chatbot/interfaces/baseemotedata/) | The data of the base emote. |
| [BaseMessageData](/api/chatbot/interfaces/basemessagedata/) | The base data for a message. |
| [BaseStreamData](/api/chatbot/interfaces/basestreamdata/) | The data of the base stream. |
| [BaseUserData](/api/chatbot/interfaces/baseuserdata/) | The base data of an user. |
| [Category](/api/chatbot/interfaces/category/) | Represents a stream's category. |
| [ChannelProfileData](/api/chatbot/interfaces/channelprofiledata/) | The data of the channel profile. |
| [ChatBotOptions](/api/chatbot/interfaces/chatbotoptions/) | The options to build up a chatbot. |
| [ChatRoomData](/api/chatbot/interfaces/chatroomdata/) | The data of the chatroom. |
| [CheermoteURLOptions](/api/chatbot/interfaces/cheermoteurloptions/) | The options for generating a cheermote URL. |
| [CommandOptions](/api/chatbot/interfaces/commandoptions/) | The options to build up a command. |
| [EmoteURLOptions](/api/chatbot/interfaces/emoteurloptions/) | Options for generating an emote URL. |
| [Game](/api/chatbot/interfaces/game/) | Represents a game played in a Twitch's stream. |
| [MessageOptions](/api/chatbot/interfaces/messageoptions/) | The options to send a message. |
| [OptionOptions](/api/chatbot/interfaces/optionoptions/) | The options to build up a basic option. |
| [Paths](/api/chatbot/interfaces/paths/) | The paths of the diffrent resources of the chatbot. |
| [ThumbailOptions](/api/chatbot/interfaces/thumbailoptions/) | The options for the thumbnail. |
| [TimeoutOptions](/api/chatbot/interfaces/timeoutoptions/) | The options to timeout an user. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [ChannelEvents](/api/chatbot/type-aliases/channelevents/) | The EventSub events which the chatbot could listen. |
| [CommandOptionsAux](/api/chatbot/type-aliases/commandoptionsaux/) | Auxiliary type to define the options of a command. |
| [EmoteType](/api/chatbot/type-aliases/emotetype/) | - |
| [EventData](/api/chatbot/type-aliases/eventdata/) | The data of the event. |
| [EventDataForConnection](/api/chatbot/type-aliases/eventdataforconnection/) | The data received from an event. |
| [EventSubOptions](/api/chatbot/type-aliases/eventsuboptions/) | The options for the EventSub connection. |
| [Events](/api/chatbot/type-aliases/events/) | All possible events that the chatbot could listen. |
| [FetchEmote](/api/chatbot/type-aliases/fetchemote/) | The returned value when fetching an emote. |
| [MessageData](/api/chatbot/type-aliases/messagedata/) | The data of a message. |
| [MessageEventData](/api/chatbot/type-aliases/messageeventdata/) | The data of a message event. |
| [MessageTypes](/api/chatbot/type-aliases/messagetypes/) | - |
| [OptionsRecord](/api/chatbot/type-aliases/optionsrecord/) | The options object of a command. |
| [PermissionOrArray](/api/chatbot/type-aliases/permissionorarray/) | The permissions of the command. |
| [PermissionRecord](/api/chatbot/type-aliases/permissionrecord/) | The permissions object of the command. |
| [RequiredPerms](/api/chatbot/type-aliases/requiredperms/) | The required permissions for the command returned on the onPermissionsFallback function. |
| [RestData](/api/chatbot/type-aliases/restdata/) | The rest of data which builds up the [MessageData](/api/chatbot/type-aliases/messagedata/). |
| [StartOptions](/api/chatbot/type-aliases/startoptions/) | The options to start the chatbot. |

## Functions

| Function | Description |
| :------ | :------ |
| [SetCommand](/api/chatbot/functions/setcommand/) | Define the command. |
| [SetPermissions](/api/chatbot/functions/setpermissions/) | Set the permissions for the command. |
| [createEvent](/api/chatbot/functions/createevent/) | Function to create an event. |
