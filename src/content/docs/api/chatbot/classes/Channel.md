---
editUrl: false
next: false
prev: false
title: "Channel"
---

Represents a Twitch channel.

## Extends

- [`BaseChannel`](/api/chatbot/classes/basechannel/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Channel()

```ts
new Channel<T>(chatbot: ChatBot<T>, data: Channel): Channel<T>
```

Creates a new instance of the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `Channel` | The data of the channel returned from the API. |

#### Returns

[`Channel`](/api/chatbot/classes/channel/)\<`T`\>

#### Overrides

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`constructor`](/api/chatbot/classes/basechannel/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/Channel.ts:43

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel. | [`BaseChannel`](/api/chatbot/classes/basechannel/).`broadcaster` |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseChannel`](/api/chatbot/classes/basechannel/).`chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the channel. | [`BaseChannel`](/api/chatbot/classes/basechannel/).`chatroom` |
| `classificationLabels` | `readonly` | `string`[] | The classification labels of the channel. | - |
| `game` | `readonly` | [`Game`](/api/chatbot/interfaces/game/) | The game which was currently set into the channel. | - |
| `id` | `readonly` | `string` | The id of the channel. | [`BaseChannel`](/api/chatbot/classes/basechannel/).`id` |
| `isBrandedContent` | `readonly` | `boolean` | Whether the channel has branded content. | - |
| `tags` | `readonly` | `string`[] | The tags of the channel. | - |

## Accessors

### bans

```ts
get bans(): BanManager<T>
```

The chatroom bans manager. See [BanManager](../../api/chatbot/classes/banmanager).

#### Returns

[`BanManager`](/api/chatbot/classes/banmanager/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:51

***

### broadcasterId

```ts
get broadcasterId(): string
```

The id of the broadcaster who owns the channel.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:37

***

### chatroomId

```ts
get chatroomId(): string
```

The id of the chatroom of the channel.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:44

***

### chatters

```ts
get chatters(): ChatterManager<T>
```

The chatroom chatters manager. See [ChatterManager](../../api/chatbot/classes/chattermanager).

#### Returns

[`ChatterManager`](/api/chatbot/classes/chattermanager/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:81

***

### language

```ts
get language(): string
```

The language that was set to the channel.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Channel.ts:63

***

### messages

```ts
get messages(): MessageManager<T>
```

The chatroom messages manager. See [MessageManager](../../api/chatbot/classes/messagemanager).

#### Returns

[`MessageManager`](/api/chatbot/classes/messagemanager/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:65

***

### timeouts

```ts
get timeouts(): TimeoutManager<T>
```

The chatroom timeouts manager. See [TimeoutManager](../../api/chatbot/classes/timeoutmanager).

#### Returns

[`TimeoutManager`](/api/chatbot/classes/timeoutmanager/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:58

***

### title

```ts
get title(): null | string
```

The title of the channel. If it was never set, it will return a nullish value.

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/Channel.ts:56

***

### warns

```ts
get warns(): WarnsManager<T>
```

The chatroom warns manager. See [WarnsManager](../../api/chatbot/classes/warnsmanager).

#### Returns

[`WarnsManager`](/api/chatbot/classes/warnsmanager/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:73

## Methods

### clips()

```ts
clips(options?: Omit<GetClipsOptions<true>, "broadcaster_id">): Promise<null | Clip<T>[]>
```

Fetches the clips of the channel from the API.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `Omit`\<`GetClipsOptions`\<`true`\>, `"broadcaster_id"`\> | The options to fetch the clips. |

#### Returns

`Promise`\<`null` \| [`Clip`](/api/chatbot/classes/clip/)\<`T`\>[]\>

An array containing the clips of the channel.

#### Inherited from

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`clips`](/api/chatbot/classes/basechannel/#clips)

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:106

***

### emotes()

```ts
emotes(): Promise<Collection<string, ChannelEmote<T>>>
```

Fetches all the emotes of this channel.

#### Returns

`Promise`\<[`Collection`](/api/chatbot/classes/collection/)\<`string`, [`ChannelEmote`](/api/chatbot/classes/channelemote/)\<`T`\>\>\>

The a Collection containing all the emotes of the channel.

#### Inherited from

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`emotes`](/api/chatbot/classes/basechannel/#emotes)

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:88

***

### fetch()

```ts
fetch(): Promise<Channel<T>>
```

Fetches the current channel from the API.

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

The fetched channel from the API.

#### Inherited from

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`fetch`](/api/chatbot/classes/basechannel/#fetch)

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:119

***

### isModerator()

```ts
isModerator(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`isModerator`](/api/chatbot/classes/basechannel/#ismoderator)

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:111

***

### stream()

```ts
stream(): Promise<null | Stream<T>>
```

Fetches the current stream of the channel from the API.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

The current stream or null if the stream is offline.

#### Inherited from

[`BaseChannel`](/api/chatbot/classes/basechannel/).[`stream`](/api/chatbot/classes/basechannel/#stream)

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:97
