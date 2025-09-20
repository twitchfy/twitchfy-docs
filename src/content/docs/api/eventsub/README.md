---
editUrl: false
next: false
prev: false
title: "@twitchfy/eventsub"
---

## Enumerations

| Enumeration | Description |
| :------ | :------ |
| [Events](/api/eventsub/enumerations/events/) | An enum representing the different events that can be emitted by the EventSub client. |
| [LogLevels](/api/eventsub/enumerations/loglevels/) | - |
| [SubscriptionTypes](/api/eventsub/enumerations/subscriptiontypes/) | Types of subscriptions that can be created. |

## Classes

| Class | Description |
| :------ | :------ |
| [Badge](/api/eventsub/classes/badge/) | A badge which is assigned to an user. |
| [Base](/api/eventsub/classes/base/) | The base class for all the structures. |
| [BaseConnection](/api/eventsub/classes/baseconnection/) | The base class for all the connections. |
| [BaseMessage](/api/eventsub/classes/basemessage/) | The message sent by the ChannelChatMessage event. |
| [BaseStream](/api/eventsub/classes/basestream/) | The base class representing an stream structure. |
| [BaseSubscriptionMessage](/api/eventsub/classes/basesubscriptionmessage/) | The base class for all the subscription messages. |
| [BaseUser](/api/eventsub/classes/baseuser/) | The base class representing an user structure. |
| [ChannelAdBreakBeginMessage](/api/eventsub/classes/channeladbreakbeginmessage/) | The message received by the ChannelAdBreakBegin event. |
| [ChannelChatClearMessage](/api/eventsub/classes/channelchatclearmessage/) | The message received by the ChannelChatClear event. |
| [ChannelChatClearUserMessagesMessage](/api/eventsub/classes/channelchatclearusermessagesmessage/) | The message received by the ChannelChatClearUserMessages event. |
| [ChannelChatMessageMessage](/api/eventsub/classes/channelchatmessagemessage/) | The message received by the ChannelChatMessage event. |
| [ChannelFollowMessage](/api/eventsub/classes/channelfollowmessage/) | The message received by the ChannelFollow event. |
| [ChannelUpdateCategory](/api/eventsub/classes/channelupdatecategory/) | The category of a channel which was updated in the ChannelUpdate event. |
| [ChannelUpdateMessage](/api/eventsub/classes/channelupdatemessage/) | The message received by the ChannelUpdate event. |
| [Cheermote](/api/eventsub/classes/cheermote/) | A cheermote sent into the fragments of a ChannelChatMessage event. |
| [Client](/api/eventsub/classes/client/) | The client used to create connections. You can create connections without this client. |
| [Conduit](/api/eventsub/classes/conduit/) | Represents a Conduit connection. |
| [ConduitSubscription](/api/eventsub/classes/conduitsubscription/) | A subscription created within a Conduit. |
| [ConduitSubscriptionCallbackManager](/api/eventsub/classes/conduitsubscriptioncallbackmanager/) | The callback manager for a ConduitSubscription. |
| [Emote](/api/eventsub/classes/emote/) | An emote sent into the fragments of a ChannelChatMessage event. |
| [EventSubEventEmitter](/api/eventsub/classes/eventsubeventemitter/) | The EventSub Event Emitter of any type of connection. |
| [Fragment](/api/eventsub/classes/fragment/) | A fragment of a message. |
| [Logger](/api/eventsub/classes/logger/) | Represents a logger utility for logging messages with various log levels. |
| [Mention](/api/eventsub/classes/mention/) | A mention sent into the fragments of a ChannelChatMessage event . |
| [MentionUser](/api/eventsub/classes/mentionuser/) | Represents a user that was mentioned in a message included in a mention fragment. This is not represented by a BaseUser class as we want it to not have a connection or subscription property. |
| [MessageReply](/api/eventsub/classes/messagereply/) | A reply to a message including the message which was replied and the first message of the reply thread received in the ChannelChatMessage event. |
| [MongoAdapter](/api/eventsub/classes/mongoadapter/) | The MongoDB storage adapter. |
| [Parent](/api/eventsub/classes/parent/) | The parent message which was replied by the message received within the ChannelChatMessage event. |
| [RedisAdapter](/api/eventsub/classes/redisadapter/) | The Redis storage adapter. |
| [Shard](/api/eventsub/classes/shard/) | A shard created within a Conduit. |
| [StorageAdapter](/api/eventsub/classes/storageadapter/) | The base class for building up a storage adapter used for reloading subscriptions. |
| [StreamOfflineMessage](/api/eventsub/classes/streamofflinemessage/) | The message received by the StreamOffline event. |
| [StreamOnlineMessage](/api/eventsub/classes/streamonlinemessage/) | The message received by the StreamOnline event. |
| [Subscription](/api/eventsub/classes/subscription/) | A base subscription. Used as a parent of every type of subscription. |
| [SubscriptionCollection](/api/eventsub/classes/subscriptioncollection/) | The collection of subscriptions. This is an extended class of Map. |
| [Thread](/api/eventsub/classes/thread/) | The first message of the reply thread received in the ChannelChatMessage event. |
| [TokenAdapter](/api/eventsub/classes/tokenadapter/) | - |
| [UncompleteMessage](/api/eventsub/classes/uncompletemessage/) | Represents a message that is not fully complete. |
| [UncompleteUser](/api/eventsub/classes/uncompleteuser/) | Represents a user that is not fully completed as it doesn't have connection and subscription fields from BaseUser. |
| [WebSocket](/api/eventsub/classes/websocket/) | The custom WebSocket client for the EventSub connection. |
| [WebSocketConnection](/api/eventsub/classes/websocketconnection/) | The WebSocket connection used for EventSub. |
| [WebSocketShard](/api/eventsub/classes/websocketshard/) | A WebSocket Shard created within a Conduit. |
| [WebSocketShardConnector](/api/eventsub/classes/websocketshardconnector/) | A WebSocket Shard Connector for connecting to Twitch WebSocket EventSub service. |
| [WebSocketSubscription](/api/eventsub/classes/websocketsubscription/) | A subscription created within a WebSocketConnection. |
| [WebSocketSubscriptionCallbackManager](/api/eventsub/classes/websocketsubscriptioncallbackmanager/) | The callback manager for a WebSocketSubscription. |
| [WebhookConnection](/api/eventsub/classes/webhookconnection/) | A Webhook Connection. |
| [WebhookShard](/api/eventsub/classes/webhookshard/) | A Webhook Shard created within a Conduit. |
| [WebhookSubscription](/api/eventsub/classes/webhooksubscription/) | A subscription created within a WebhookConnection. |
| [WebhookSubscriptionCallbackManager](/api/eventsub/classes/webhooksubscriptioncallbackmanager/) | The Webhook Subscription Callback Manager. |

## Interfaces

| Interface | Description |
| :------ | :------ |
| [BadgeData](/api/eventsub/interfaces/badgedata/) | The data of a badge set into the [ChannelChatMessageEvent](/api/eventsub/interfaces/channelchatmessageevent/). |
| [BaseMetadata](/api/eventsub/interfaces/basemetadata/) | The base metadata for all notification messages. |
| [BaseNotification](/api/eventsub/interfaces/basenotification/) | The base notification for all notification messages. |
| [BasePayload](/api/eventsub/interfaces/basepayload/) | The base payload for all notification messages. |
| [BaseStreamData](/api/eventsub/interfaces/basestreamdata/) | The data needed to build up a BaseStream. |
| [BaseSubscription](/api/eventsub/interfaces/basesubscription/) | The base subscription for all notification messages. |
| [BaseTransport](/api/eventsub/interfaces/basetransport/) | The base transport object for all transport types. |
| [BaseUserData](/api/eventsub/interfaces/baseuserdata/) | The data needed to build up a BaseUser. |
| [Body](/api/eventsub/interfaces/body/) | The body sent by Twitch in a post to the subscription route. |
| [BodySubscription](/api/eventsub/interfaces/bodysubscription/) | The subscription data sent in a notification body. |
| [ChannelAdBreakBeginOptions](/api/eventsub/interfaces/channeladbreakbeginoptions/) | The options for subscribing to the ChannelAdBreakBegin event. |
| [ChannelChatClearOptions](/api/eventsub/interfaces/channelchatclearoptions/) | The options for subscribing to the ChannelChatClear event. |
| [ChannelChatClearUserMessagesOptions](/api/eventsub/interfaces/channelchatclearusermessagesoptions/) | Options for subscribing to the ChannelChatClearUserMessages event. |
| [ChannelChatMessageEvent](/api/eventsub/interfaces/channelchatmessageevent/) | The event sent by Twitch when a message is sent in a channel. |
| [ChannelChatMessageOptions](/api/eventsub/interfaces/channelchatmessageoptions/) | Options for subscribing to the ChannelChatMessage event. |
| [ChannelFollowEvent](/api/eventsub/interfaces/channelfollowevent/) | An event that represents a broadcaster being followed by a user. |
| [ChannelFollowOptions](/api/eventsub/interfaces/channelfollowoptions/) | The options for subscribing to the ChannelFollow event. |
| [ChannelUpdateEvent](/api/eventsub/interfaces/channelupdateevent/) | The event sent by Twitch when a broadcaster updates their channel properties such the title of his stream. |
| [ChannelUpdateOptions](/api/eventsub/interfaces/channelupdateoptions/) | The options for subscribing to the ChannelUpdate event. |
| [CheerData](/api/eventsub/interfaces/cheerdata/) | The data of a cheer set into the [ChannelChatMessageEvent](/api/eventsub/interfaces/channelchatmessageevent/). |
| [CheermoteData](/api/eventsub/interfaces/cheermotedata/) | The data of a cheeremote set into the fragments of a message. |
| [Code](/api/eventsub/interfaces/code/) | - |
| [ConduitEvents](/api/eventsub/interfaces/conduitevents/) | The specific events for a Conduit. |
| [Debug](/api/eventsub/interfaces/debug/) | Message emitted when the shard needs to make a debug within the parent process. |
| [EmoteData](/api/eventsub/interfaces/emotedata/) | The data of an emote set into the fragments of a message. |
| [EventSubEvents](/api/eventsub/interfaces/eventsubevents/) | The events that can be emitted by any specific EventSub connection. |
| [FragmentData](/api/eventsub/interfaces/fragmentdata/) | The data of a message fragment. |
| [ISubscription](/api/eventsub/interfaces/isubscription/) | The interface of the schema for saving subscription within the MongoAdapter. |
| [MentionData](/api/eventsub/interfaces/mentiondata/) | The data of a mention set into the fragments of a message. |
| [MentionUserData](/api/eventsub/interfaces/mentionuserdata/) | The data needed to build up a MentionUser. |
| [MessageData](/api/eventsub/interfaces/messagedata/) | The data of a message set into the [ChannelChatMessageEvent](/api/eventsub/interfaces/channelchatmessageevent/). |
| [ReconnectMessage](/api/eventsub/interfaces/reconnectmessage/) | Represents a reconnect message sent to the websocket client. |
| [ReconnectMessageMetadata](/api/eventsub/interfaces/reconnectmessagemetadata/) | Metadata for a reconnect message. |
| [ReconnectMessagePayload](/api/eventsub/interfaces/reconnectmessagepayload/) | The payload of a reconnect message. |
| [ReconnectMessageSession](/api/eventsub/interfaces/reconnectmessagesession/) | Reconnect message payload session sent by the server. |
| [ReplyData](/api/eventsub/interfaces/replydata/) | The data of a reply set into the [ChannelChatMessageEvent](/api/eventsub/interfaces/channelchatmessageevent/). |
| [Rgb](/api/eventsub/interfaces/rgb/) | RGB 8-bits per channel. Each in range `0->255` or `0x00->0xff` |
| [ShardIdReplace](/api/eventsub/interfaces/shardidreplace/) | Message emitted when there is a need to replace the id of a shard. |
| [StorageOptions](/api/eventsub/interfaces/storageoptions/) | The options for the storage of subscriptions. |
| [StreamOfflineEvent](/api/eventsub/interfaces/streamofflineevent/) | The event sent by Twitch when a stream goes offline. |
| [StreamOfflineOptions](/api/eventsub/interfaces/streamofflineoptions/) | Options for subscribing to the StreamOffline event. |
| [StreamOnlineEvent](/api/eventsub/interfaces/streamonlineevent/) | The event sent by Twitch when a stream goes online. |
| [StreamOnlineOptions](/api/eventsub/interfaces/streamonlineoptions/) | Options for subscribing to the StreamOnline event. |
| [SubscriptionEvents](/api/eventsub/interfaces/subscriptionevents/) | The events that can be sent by Twitch and are supported by the package. |
| [SubscriptionMessages](/api/eventsub/interfaces/subscriptionmessages/) | The messages from every EventSub event. |
| [SubscriptionTypeOptions](/api/eventsub/interfaces/subscriptiontypeoptions/) | The options for every subscription type. |
| [SubscriptionVersions](/api/eventsub/interfaces/subscriptionversions/) | The versions of the every subscription type. There are updated to the latest version. |
| [Transport](/api/eventsub/interfaces/transport/) | The transport of the subscription. |
| [UncompleteMessageData](/api/eventsub/interfaces/uncompletemessagedata/) | - |
| [Warn](/api/eventsub/interfaces/warn/) | Message emitted when the shard needs to make a warning within the parent process. |
| [WebSocketEvents](/api/eventsub/interfaces/websocketevents/) | The specific events emitted for the WebSocket connection. |
| [WebSocketShardStart](/api/eventsub/interfaces/websocketshardstart/) | Message emitted when a shard is starting with a websocket transport. |
| [WebhookCallbackVerified](/api/eventsub/interfaces/webhookcallbackverified/) | Message emitted when a webhook callback has been verified and consequently the shard has started. |
| [WebhookEvents](/api/eventsub/interfaces/webhookevents/) | The specific event emitted for the Webhook connection. |
| [WebhookShardStart](/api/eventsub/interfaces/webhookshardstart/) | Message emitted when a shard is starting with a webhook transport. |
| [WelcomeMessage](/api/eventsub/interfaces/welcomemessage/) | The welcome message sent to the websocket client. |
| [WelcomeMessageMetadata](/api/eventsub/interfaces/welcomemessagemetadata/) | Metadata for a welcome message. |
| [WelcomeMessagePayload](/api/eventsub/interfaces/welcomemessagepayload/) | The payload of the welcome message. |
| [WelcomeMessageSession](/api/eventsub/interfaces/welcomemessagesession/) | Represents the session information sent in the welcome message. |

## Type Aliases

| Type alias | Description |
| :------ | :------ |
| [BaseConnectionOptions](/api/eventsub/type-aliases/baseconnectionoptions/) | The options for building a base connection. |
| [BodyTypes](/api/eventsub/type-aliases/bodytypes/) | The possible types of body Twitch send to the webhook. |
| [ConduitOptions](/api/eventsub/type-aliases/conduitoptions/) | The options for building a Conduit connection. |
| [ConduitSubscriptionCallback](/api/eventsub/type-aliases/conduitsubscriptioncallback/) | The callback for the conduit subscription. |
| [ConnectionTypes](/api/eventsub/type-aliases/connectiontypes/) | The types of connections that can be used. |
| [CustomCallback](/api/eventsub/type-aliases/customcallback/) | - |
| [FragmentTypes](/api/eventsub/type-aliases/fragmenttypes/) | The type of fragment. |
| [LoggerOptions](/api/eventsub/type-aliases/loggeroptions/) | - |
| [Message](/api/eventsub/type-aliases/message/) | The message types that can be received by the WebSocket connection. |
| [MessageTypes](/api/eventsub/type-aliases/messagetypes/) | The type of message that can be received in ChannelChatMessage event. |
| [ParentMessages](/api/eventsub/type-aliases/parentmessages/) | The types of messages received by the shard from the parent process. |
| [ShardMessages](/api/eventsub/type-aliases/shardmessages/) | The message types that can be received by the parent process from a shard. |
| [StorageAdapterGet](/api/eventsub/type-aliases/storageadapterget/) | The type to be returned for the get method in the storage adapter. |
| [StreamTypes](/api/eventsub/type-aliases/streamtypes/) | The types of stream. As for now, the only possible type 'live'. |
| [SubscriptionCallback](/api/eventsub/type-aliases/subscriptioncallback/) | The callback for a subscription. |
| [SubscriptionMessage](/api/eventsub/type-aliases/subscriptionmessage/) | The message received by a subscription. |
| [SubscriptionNotification](/api/eventsub/type-aliases/subscriptionnotification/) | Message emitted when a shard has received a subscription notification. |
| [SubscriptionOptions](/api/eventsub/type-aliases/subscriptionoptions/) | The options for creating a subscription. |
| [SubscriptionType](/api/eventsub/type-aliases/subscriptiontype/) | Type that determines the subscription type based on the connection type. |
| [WebSocketConnectionOptions](/api/eventsub/type-aliases/websocketconnectionoptions/) | The options used to create a new WebSocketConnection. |
| [WebSocketSubscriptionCallback](/api/eventsub/type-aliases/websocketsubscriptioncallback/) | The callback for a WebSocketSubscription. |
| [WebhookConnectionOptions](/api/eventsub/type-aliases/webhookconnectionoptions/) | The options for bulding up a Webhook Connection. |
| [WebhookSubscriptionCallback](/api/eventsub/type-aliases/webhooksubscriptioncallback/) | The callback for a WebhookSubscription. |

## Variables

| Variable | Description |
| :------ | :------ |
| [SubscriptionModel](/api/eventsub/variables/subscriptionmodel/) | The model of the schema for saving subscription within the MongoAdapter. |
| [SubscriptionSchema](/api/eventsub/variables/subscriptionschema/) | The schema for saving subscription within the MongoAdapter. |
| [SubscriptionVersionsObject](/api/eventsub/variables/subscriptionversionsobject/) | A helper for determining the latest version of a subscription type. |

## Functions

| Function | Description |
| :------ | :------ |
| [ConduitSubscriptionRouter](/api/eventsub/functions/conduitsubscriptionrouter/) | The router for the conduit subscription route. |
| [MergeOptions](/api/eventsub/functions/mergeoptions/) | - |
| [SubscriptionRouter](/api/eventsub/functions/subscriptionrouter/) | The router for the subscription route. |
| [bgBlack](/api/eventsub/functions/bgblack/) | Set background color to black. |
| [bgBlue](/api/eventsub/functions/bgblue/) | Set background color to blue. |
| [bgBrightBlack](/api/eventsub/functions/bgbrightblack/) | Set background color to bright black. |
| [bgBrightBlue](/api/eventsub/functions/bgbrightblue/) | Set background color to bright blue. |
| [bgBrightCyan](/api/eventsub/functions/bgbrightcyan/) | Set background color to bright cyan. |
| [bgBrightGreen](/api/eventsub/functions/bgbrightgreen/) | Set background color to bright green. |
| [bgBrightMagenta](/api/eventsub/functions/bgbrightmagenta/) | Set background color to bright magenta. |
| [bgBrightRed](/api/eventsub/functions/bgbrightred/) | Set background color to bright red. |
| [bgBrightWhite](/api/eventsub/functions/bgbrightwhite/) | Set background color to bright white. |
| [bgBrightYellow](/api/eventsub/functions/bgbrightyellow/) | Set background color to bright yellow. |
| [bgCyan](/api/eventsub/functions/bgcyan/) | Set background color to cyan. |
| [bgGreen](/api/eventsub/functions/bggreen/) | Set background color to green. |
| [bgMagenta](/api/eventsub/functions/bgmagenta/) | Set background color to magenta. |
| [bgRed](/api/eventsub/functions/bgred/) | Set background color to red. |
| [bgRgb24](/api/eventsub/functions/bgrgb24/) | Set background color using 24bit rgb. `color` can be a number in range `0x000000` to `0xffffff` or an `Rgb`.  To produce the color magenta:  ```ts      import { bgRgb24 } from "./colors.ts";      bgRgb24("foo", 0xff00ff);      bgRgb24("foo", {r: 255, g: 0, b: 255}); ``` |
| [bgRgb8](/api/eventsub/functions/bgrgb8/) | Set background color using paletted 8bit colors. https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit |
| [bgWhite](/api/eventsub/functions/bgwhite/) | Set background color to white. |
| [bgYellow](/api/eventsub/functions/bgyellow/) | Set background color to yellow. |
| [black](/api/eventsub/functions/black/) | Set text color to black. |
| [blue](/api/eventsub/functions/blue/) | Set text color to blue. |
| [bold](/api/eventsub/functions/bold/) | Make the text bold. |
| [brightBlack](/api/eventsub/functions/brightblack/) | Set text color to bright black. |
| [brightBlue](/api/eventsub/functions/brightblue/) | Set text color to bright blue. |
| [brightCyan](/api/eventsub/functions/brightcyan/) | Set text color to bright cyan. |
| [brightGreen](/api/eventsub/functions/brightgreen/) | Set text color to bright green. |
| [brightMagenta](/api/eventsub/functions/brightmagenta/) | Set text color to bright magenta. |
| [brightRed](/api/eventsub/functions/brightred/) | Set text color to bright red. |
| [brightWhite](/api/eventsub/functions/brightwhite/) | Set text color to bright white. |
| [brightYellow](/api/eventsub/functions/brightyellow/) | Set text color to bright yellow. |
| [conduitMakeMiddlewares](/api/eventsub/functions/conduitmakemiddlewares/) | Makes the middlewares for the webhook server. |
| [conduitMessageHandler](/api/eventsub/functions/conduitmessagehandler/) | Handles the messages received from the conduit. |
| [conduitNotificationHandler](/api/eventsub/functions/conduitnotificationhandler/) | Handles a subscription notification from the conduit. |
| [cyan](/api/eventsub/functions/cyan/) | Set text color to cyan. |
| [dim](/api/eventsub/functions/dim/) | The text emits only a small amount of light. |
| [findFirstMissingId](/api/eventsub/functions/findfirstmissingid/) | Finds the first unused or disable shard in a conduit and returns its id. |
| [getColorEnabled](/api/eventsub/functions/getcolorenabled/) | Get whether text color change is enabled or disabled. |
| [gray](/api/eventsub/functions/gray/) | Set text color to gray. |
| [green](/api/eventsub/functions/green/) | Set text color to green. |
| [handleParentMessage](/api/eventsub/functions/handleparentmessage/) | Handles a parent message within a shard. |
| [handleShardMessage](/api/eventsub/functions/handleshardmessage/) | Handles a shard message received by the parent process. |
| [hidden](/api/eventsub/functions/hidden/) | Make the text hidden. |
| [inverse](/api/eventsub/functions/inverse/) | Invert background color and text color. |
| [isObject](/api/eventsub/functions/isobject/) | - |
| [italic](/api/eventsub/functions/italic/) | Make the text italic. |
| [loadShards](/api/eventsub/functions/loadshards/) | Loads all shards path from the specified paths and directories. |
| [magenta](/api/eventsub/functions/magenta/) | Set text color to magenta. |
| [makeMiddlewares](/api/eventsub/functions/makemiddlewares/) | Makes the middlewares for the webhook. |
| [messageHandler](/api/eventsub/functions/messagehandler/) | Handles a message received from the websocket server. |
| [notificationHandler](/api/eventsub/functions/notificationhandler/) | Handles a subscription notification in a connection excluding the conduit. |
| [parseRoute](/api/eventsub/functions/parseroute/) | Parses a route to ensure it starts with a forward slash. |
| [red](/api/eventsub/functions/red/) | Set text color to red. |
| [reset](/api/eventsub/functions/reset/) | Reset the text modified |
| [rgb24](/api/eventsub/functions/rgb24/) | Set text color using 24bit rgb. `color` can be a number in range `0x000000` to `0xffffff` or an `Rgb`.  To produce the color magenta:  ```ts      import { rgb24 } from "./colors.ts";      rgb24("foo", 0xff00ff);      rgb24("foo", {r: 255, g: 0, b: 255}); ``` |
| [rgb8](/api/eventsub/functions/rgb8/) | Set text color using paletted 8bit colors. https://en.wikipedia.org/wiki/ANSI_escape_code#8-bit |
| [setColorEnabled](/api/eventsub/functions/setcolorenabled/) | Set changing text color to enabled or disabled |
| [startup](/api/eventsub/functions/startup/) | Used to start up the connection and reload subscriptions if the maintainSubscriptions option is enabled. |
| [strikethrough](/api/eventsub/functions/strikethrough/) | Put horizontal line through the center of the text. |
| [stripColor](/api/eventsub/functions/stripcolor/) | Remove ANSI escape codes from the string. |
| [underline](/api/eventsub/functions/underline/) | Make the text underline. |
| [verifySignature](/api/eventsub/functions/verifysignature/) | Verifies the signature of the request secret to ensure a secure enviroment. |
| [white](/api/eventsub/functions/white/) | Set text color to white. |
| [yellow](/api/eventsub/functions/yellow/) | Set text color to yellow. |
