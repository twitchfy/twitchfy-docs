---
editUrl: false
next: false
prev: false
title: "BaseChannel"
---

## Extends

- `Base`\<`T`\>

## Extended by

- [`Channel`](/api/chatbot/classes/channel/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BaseChannel()

```ts
new BaseChannel<T>(
   chatbot: ChatBot<T>, 
   data: BaseChannelData, 
chatroom: ChatRoom<T>): BaseChannel<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> |
| `data` | [`BaseChannelData`](/api/chatbot/interfaces/basechanneldata/) |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> |

#### Returns

[`BaseChannel`](/api/chatbot/classes/basechannel/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:27

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom of the channel. | - |
| `id` | `readonly` | `string` | The id of the channel. | - |

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

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:119

***

### isModerator()

```ts
isModerator(): Promise<boolean>
```

#### Returns

`Promise`\<`boolean`\>

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

#### Source

twitchfy/packages/chatbot/src/structures/BaseChannel.ts:97
