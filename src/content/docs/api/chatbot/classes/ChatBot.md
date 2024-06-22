---
editUrl: false
next: false
prev: false
title: "ChatBot"
---

Represents a chatbot.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBot()

```ts
new ChatBot<T>(options: ChatBotOptions<T>): ChatBot<T>
```

Creates a new instance of the chatbot.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ChatBotOptions`](/api/chatbot/interfaces/chatbotoptions/)\<`T`\> | The options to build up the chatbot. |

#### Returns

[`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:140

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `bans` | `readonly` | [`ChatBotBanManager`](/api/chatbot/classes/chatbotbanmanager/)\<`T`\> | The ban manager of the chatbot. |
| `channels` | `readonly` | [`ChannelManager`](/api/chatbot/classes/channelmanager/)\<`T`\> | The manager of the chatbot channels. |
| `clientId` | `readonly` | `string` | The client Id of the Twitch's application. |
| `clientSecret` | `readonly` | `string` | The client secret of the Twitch's application. |
| `commands` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<`string`, [`ChatCommand`](/api/chatbot/classes/chatcommand/)\<`T`\>\> | A Collection of the chatbot commands. |
| `connectionType` | `readonly` | `T` | The EventSub connection type used by the chatbot. |
| `events` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<[`Events`](/api/chatbot/type-aliases/events/), \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatClear"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelFollow"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelUpdate"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"StreamOnline"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChannelChatMessage"`\> \| [`EventData`](/api/chatbot/type-aliases/eventdata/)\<`T`, `"ChatBotReady"`\>\> | A Collection of the chatbot events. |
| `eventsub` | `readonly` | `EventSubConnectionMap`\[`T`\] | The EventSub connection of the chatbot. |
| `helixClient` | `readonly` | `HelixClient` | The Helix client of the chatbot. |
| `messages` | `readonly` | [`ChatBotMessageManager`](/api/chatbot/classes/chatbotmessagemanager/)\<`T`\> | The message manager of the chatbot. |
| `optionOperator` | `readonly` | `string` | The operator to separate the options in the command. |
| `options` | `readonly` | [`ChatBotOptions`](/api/chatbot/interfaces/chatbotoptions/)\<`T`\> | The options of the chatbot. |
| `profiles` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<`string`, [`ChannelProfile`](/api/chatbot/classes/channelprofile/)\<`T`\>\> | A Collection of the profiles of the joined channels. |
| `timeouts` | `readonly` | [`ChatBotTimeoutManager`](/api/chatbot/classes/chatbottimeoutmanager/)\<`T`\> | The timeout manager of the chatbot. |
| `user` | `public` | [`ChatBotUser`](/api/chatbot/classes/chatbotuser/)\<`T`\> | The Twitch user of the chatbot. |
| `userId` | `public` | `string` | The user Id of the chatbot. |
| `users` | `readonly` | [`ChatBotUserManager`](/api/chatbot/classes/chatbotusermanager/)\<`T`\> | The user manager of the chatbot. |
| `warns` | `readonly` | [`ChatBotWarnsManager`](/api/chatbot/classes/chatbotwarnsmanager/)\<`T`\> | The warning manager of the chatbot. |

## Accessors

### appToken

```ts
get appToken(): null | TokenAdapter<"app", boolean>
```

The app token of the Twitch application. The value is null if the chatbot is using a WebSocket EventSub connection.

#### Returns

`null` \| `TokenAdapter`\<`"app"`, `boolean`\>

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:367

***

### userToken

```ts
get userToken(): undefined | UserTokenAdapter<boolean>
```

The user token of the chatbot Twitch account to make requests.

#### Returns

`undefined` \| `UserTokenAdapter`\<`boolean`\>

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:360

## Methods

### clip()

```ts
clip(options: GetClipsOptions<false>): Promise<null | Clip<T>>
```

Get a specific Twitch clip from the API.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `GetClipsOptions`\<`false`\> | The options to filter the clip. |

#### Returns

`Promise`\<`null` \| [`Clip`](/api/chatbot/classes/clip/)\<`T`\>\>

The clip fetched from the API or null if the clip wasn't founded.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:329

***

### clips()

```ts
clips(options: GetClipsOptions<true>): Promise<null | Clip<T>[]>
```

Get Twitch clips from the API.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `GetClipsOptions`\<`true`\> | The options to filter the clips. |

#### Returns

`Promise`\<`null` \| [`Clip`](/api/chatbot/classes/clip/)\<`T`\>[]\>

An array containing the clips fetched from the API. If there isn't any clip founded, it will return a nullish value.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:318

***

### isModerator()

```ts
isModerator(channelId: string): Promise<boolean>
```

Checks whether the chatbot is moderator in a specific channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `channelId` | `string` | The Id of the channel to check. |

#### Returns

`Promise`\<`boolean`\>

A boolean indicating whether the chatbot is moderator in the channel.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:340

***

### moderatedChannels()

```ts
moderatedChannels(): Promise<BaseChannel<T>[]>
```

Get the moderated channels of the chatbot.

#### Returns

`Promise`\<[`BaseChannel`](/api/chatbot/classes/basechannel/)\<`T`\>[]\>

An array containing the moderated channels of the chatbot.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:350

***

### start()

```ts
start(options?: StartOptions<T>): Promise<ChatBot<T>>
```

Start the chatbot.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`StartOptions`](/api/chatbot/type-aliases/startoptions/)\<`T`\> | The start options to start the chatbot. |

#### Returns

`Promise`\<[`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\>\>

The current instance of the chatbot. When the promise is resolved the chatbot has been completly started.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:228

***

### stream()

```ts
stream(options: GetStreamsOptions<false>): Promise<null | Stream<T>>
```

Fetches a Twitch stream from the API.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `GetStreamsOptions`\<`false`\> | The options for filter the stream. |

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

A stream fetched from the API or null if the stream wasn't founded.

#### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:308

***

### streams()

#### streams()

```ts
streams(): Promise<null | Stream<T>[]>
```

Get Twitch streams from the API.

##### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:277

#### streams(number)

```ts
streams(number?: number): Promise<null | Stream<T>[]>
```

Get Twitch streams from the API.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `number`? | `number` | The number of streams to fetch. This number could vary from the result due to API reasons. |

##### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:278

#### streams(options, number)

```ts
streams(options: GetStreamsOptions<true>, number?: number): Promise<null | Stream<T>[]>
```

Get Twitch streams from the API.

##### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `GetStreamsOptions`\<`true`\> | The options to filter the streams. |
| `number`? | `number` | The number of streams to fetch. This number could vary from the result due to API reasons. |

##### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

twitchfy/packages/chatbot/src/structures/ChatBot.ts:279
