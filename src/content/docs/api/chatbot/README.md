---
editUrl: false
next: false
prev: false
title: "@twitchapi/chatbot"
---

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [AnnouncementColor](enumerations/AnnouncementColor.md) | Represents the possible colors for a chat announcement. |
| [Events](enumerations/Events.md) | Represents all the [ChatBot](classes/ChatBot.md) events. |

## Classes

| Class | Description |
| :------ | :------ |
| [AutoMod](classes/AutoMod.md) | Represents the automod of a channel. |
| [AutoModSettings](classes/AutoModSettings.md) | Represents the settings of the automod. |
| [AutoModSettingsManager](classes/AutoModSettingsManager.md) | Represents the AutoModSettingsManager of a channel. |
| [Ban](classes/Ban.md) | Represents a ban in a channel. The ban can be a Twitch ban or a Twitch timeout. |
| [BanManager](classes/BanManager.md) | Represents a BanManager of a channel |
| [BanUser](classes/BanUser.md) | Represents any user that is involved in a ban. This user can be the broadcaster, the banned user or the moderator who ban the user. |
| [Broadcaster](classes/Broadcaster.md) | Represents a Broadcaster |
| [Channel](classes/Channel.md) | Represents a Twitch Channel. If the origin of this channel is not the [ChannelManager](classes/ChannelManager.md) the information might be unupdated, to update this information use the fetch method. |
| [ChannelManager](classes/ChannelManager.md) | Represents the ChannelManager of the ChatBot. |
| [Chat](classes/Chat.md) | Represent the chat of a channel. |
| [ChatBot](classes/ChatBot.md) | A Twitch ChatBot. |
| [ChatBotEventEmitter](classes/ChatBotEventEmitter.md) | Custom EventEmitter for ChatBotEvent |
| [ChatBotUser](classes/ChatBotUser.md) | Represents the Twitch's user of the ChatBot. |
| [ChatBotWs](classes/ChatBotWs.md) | The ChatBot WebSocket client for handling connection to Twitch IRC Server. |
| [ChatSettings](classes/ChatSettings.md) | Represents the chat settings of a channel. |
| [ChatSettingsManager](classes/ChatSettingsManager.md) | Represent the ChatSettingsManager of a channel. |
| [Chatter](classes/Chatter.md) | Represents a complete chatter of a channel. |
| [ChatterManager](classes/ChatterManager.md) | Represents a ChatterManager of a channel chat. |
| [ClearChat](classes/ClearChat.md) | Represents a ClearChat message that is fired when a chat is cleared or a all user's message are cleared. |
| [ClearChatChannel](classes/ClearChatChannel.md) | Represent the Channel where the ClearChat event was fired. |
| [ClearChatUser](classes/ClearChatUser.md) | Represents the target user of the ClearChat event included in the response message. |
| [ClearMessage](classes/ClearMessage.md) | Represents a ClearMessage message that is fired when a chat message is deleted. |
| [ClearMessageChannel](classes/ClearMessageChannel.md) | Represents the channel where the ClearMessage event was fired. |
| [ClearMessageUser](classes/ClearMessageUser.md) | Represents the user whose message was deleted in the ClearMessage event. |
| [CreatedClip](classes/CreatedClip.md) | - |
| [Follower](classes/Follower.md) | - |
| [FollowerUser](classes/FollowerUser.md) | - |
| [JoinedChannel](classes/JoinedChannel.md) | - |
| [PrivMSG](classes/PrivMSG.md) | Represents the message sent by an user in a chat. |
| [PrivMSGBadges](classes/PrivMSGBadges.md) | Represents the chat badges of a chatter. |
| [PrivMSGChannel](classes/PrivMSGChannel.md) | Represents the channel where the PrivMSG was sent. |
| [PrivMSGChatter](classes/PrivMSGChatter.md) | Represents the Chatter that sent the PrivMSG. |
| [PrivMSGRepliedMessage](classes/PrivMSGRepliedMessage.md) | Represents the replied message of a PrivMSG. |
| [PrivMSGRepliedMessageChatter](classes/PrivMSGRepliedMessageChatter.md) | Represents the chatter that sent the replied message of the PrivMSG. |
| [PrivMSGUser](classes/PrivMSGUser.md) | - |
| [Stream](classes/Stream.md) | - |
| [StreamManager](classes/StreamManager.md) | Represents the StreamManager of a channel. |
| [UncompleteChatter](classes/UncompleteChatter.md) | Represents an uncomplete chatter. |
| [UncompleteChatterUser](classes/UncompleteChatterUser.md) | Represents the user of the UncompleteChatter |
| [User](classes/User.md) | - |
| [UserManager](classes/UserManager.md) | Represent the UserManager of the ChatBot |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [AutoModSettingsOptions](interfaces/AutoModSettingsOptions.md) | - |
| [BadgeMetadata](interfaces/BadgeMetadata.md) | The metadata of the badges. |
| [Badges](interfaces/Badges.md) | All the possible user badges. |
| [BanOptions](interfaces/BanOptions.md) | The options to ban an user. |
| [ChatBotCapabilities](interfaces/ChatBotCapabilities.md) | The capabilities of the bot. |
| [ChatBotEvents](interfaces/ChatBotEvents.md) | The events of the [ChatBot](classes/ChatBot.md). |
| [ChatBotOptions](interfaces/ChatBotOptions.md) | The options for building the [ChatBot](classes/ChatBot.md). |
| [ChatSettingsOptions](interfaces/ChatSettingsOptions.md) | The options to set the ChatSettings. |
| [ClearChatTags](interfaces/ClearChatTags.md) | The ClearChat tags send by the Twitch IRC Server. |
| [ClearMessageTags](interfaces/ClearMessageTags.md) | The ClearMessage tags send by the Twitch IRC Server. |
| [PrivMSGTags](interfaces/PrivMSGTags.md) | The PrivMSG tags send by the Twitch IRC Server. |
| [TimeoutOptions](interfaces/TimeoutOptions.md) | The options to timeout an user. |
