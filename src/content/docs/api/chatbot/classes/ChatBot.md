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
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) | [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Constructors

### new ChatBot(options)

```ts
new ChatBot<T>(options: ChatBotOptions<T>): ChatBot<T>
```

Creates a new instance of the chatbot.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`ChatBotOptions`](../interfaces/ChatBotOptions.md)\<`T`\> | The options to build up the chatbot. |

#### Returns

[`ChatBot`](ChatBot.md)\<`T`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:131](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L131)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `bans` | `readonly` | [`ChatBotBanManager`](ChatBotBanManager.md)\<`T`\> | The ban manager of the chatbot. |
| `channels` | `readonly` | [`ChannelManager`](ChannelManager.md)\<`T`\> | The manager of the chatbot channels. |
| `clientID` | `readonly` | `string` | The client ID of the Twitch's application. |
| `clientSecret` | `readonly` | `string` | The client secret of the Twitch's application. |
| `commands` | `readonly` | [`Collection`](Collection.md)\<`string`, [`Command`](Command.md)\<`T`\>\> | A Collection of the chatbot commands. |
| `connectionType` | `readonly` | `T` | The EventSub connection type used by the chatbot. |
| `events` | `readonly` | [`Collection`](Collection.md)\<[`Events`](../type-aliases/Events.md), \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"ChannelChatClear"`\> \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"ChannelFollow"`\> \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"ChannelUpdate"`\> \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"StreamOnline"`\> \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"ChannelChatMessage"`\> \| [`EventData`](../type-aliases/EventData.md)\<`T`, `"ChatBotReady"`\>\> | A Collection of the chatbot events. |
| `eventsub` | `readonly` | `EventSubConnectionMap`\[`T`\] | The EventSub connection of the chatbot. |
| `helixClient` | `readonly` | `HelixClient` | The Helix client of the chatbot. |
| `messages` | `readonly` | [`ChatBotMessageManager`](ChatBotMessageManager.md)\<`T`\> | The message manager of the chatbot. |
| `optionOperator` | `readonly` | `string` | The operator to separate the options in the command. |
| `options` | `readonly` | [`ChatBotOptions`](../interfaces/ChatBotOptions.md)\<`T`\> | The options of the chatbot. |
| `profiles` | `readonly` | [`Collection`](Collection.md)\<`string`, [`ChannelProfile`](ChannelProfile.md)\<`T`\>\> | A Collection of the profiles of the joined channels. |
| `timeouts` | `readonly` | [`ChatBotTimeoutManager`](ChatBotTimeoutManager.md)\<`T`\> | The timeout manager of the chatbot. |
| `user` | `public` | [`ChatBotUser`](ChatBotUser.md)\<`T`\> | The Twitch user of the chatbot. |
| `userID` | `public` | `string` | The user ID of the chatbot. |
| `users` | `readonly` | [`ChatBotUserManager`](ChatBotUserManager.md)\<`T`\> | The user manager of the chatbot. |

## Accessors

### appToken

```ts
get appToken(): null | TokenAdapter<"app", boolean>
```

The app token of the Twitch application. The value is null if the chatbot is using a WebSocket EventSub connection.

#### Returns

`null` \| `TokenAdapter`\<`"app"`, `boolean`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:321](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L321)

***

### userToken

```ts
get userToken(): undefined | UserTokenAdapter<boolean>
```

The user token of the chatbot Twitch account to make requests.

#### Returns

`undefined` \| `UserTokenAdapter`\<`boolean`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:314](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L314)

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

`Promise`\<`null` \| [`Clip`](Clip.md)\<`T`\>\>

The clip fetched from the API or null if the clip wasn't founded.

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:305](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L305)

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

`Promise`\<`null` \| [`Clip`](Clip.md)\<`T`\>[]\>

An array containing the clips fetched from the API. If there isn't any clip founded, it will return a nullish value.

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:294](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L294)

***

### start()

```ts
start(options?: StartOptions<T>): Promise<ChatBot<T>>
```

Start the chatbot.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`StartOptions`](../type-aliases/StartOptions.md)\<`T`\> | The start options to start the chatbot. |

#### Returns

`Promise`\<[`ChatBot`](ChatBot.md)\<`T`\>\>

The current instance of the chatbot. When the promise is resolved the chatbot has been completly started.

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:205](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L205)

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

`Promise`\<`null` \| [`Stream`](Stream.md)\<`T`\>\>

A stream fetched from the API or null if the stream wasn't founded.

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:284](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L284)

***

### streams()

#### streams()

```ts
streams(): Promise<null | Stream<T>[]>
```

Get Twitch streams from the API.

##### Returns

`Promise`\<`null` \| [`Stream`](Stream.md)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:253](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L253)

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

`Promise`\<`null` \| [`Stream`](Stream.md)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:254](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L254)

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

`Promise`\<`null` \| [`Stream`](Stream.md)\<`T`\>[]\>

An array containing the streams fetched from the API. If there isn't any stream founded, it will return a nullish value.

##### Source

[twitchapi/packages/chatbot/src/structures/ChatBot.ts:255](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBot.ts#L255)
