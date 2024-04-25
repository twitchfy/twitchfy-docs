---
editUrl: false
next: false
prev: false
title: "TwitchContext"
---

The context of the command.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`OptionsRecord`](/api/chatbot/type-aliases/optionsrecord/) | `Object` |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new TwitchContext(chatbot, data)

```ts
new TwitchContext<K, T>(chatbot: ChatBot<T>, data: MessageData<T, K>): TwitchContext<K, T>
```

Creates a new instance of the command context.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`MessageData`](/api/chatbot/type-aliases/messagedata/)\<`T`, `K`\> | The data of the command. |

#### Returns

[`TwitchContext`](/api/chatbot/classes/twitchcontext/)\<`K`, `T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:59](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L59)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `author` | `readonly` | [`Author`](/api/chatbot/classes/author/)\<`T`\> | The author of the command. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the command was run. | - |
| `commandName` | `readonly` | `string` | The name of the command. | - |
| `message` | `readonly` | [`Message`](/api/chatbot/classes/message/)\<`T`\> | The message received when the command was run. | - |
| `options` | `readonly` | [`CommandOptionsAux`](/api/chatbot/type-aliases/commandoptionsaux/)\<`T`, `K`\> | The options of the command. | - |
| `prefix` | `readonly` | `string` | The prefix used to run the command. | - |

## Accessors

### authorID

```ts
get authorID(): string
```

The ID of the author of the command.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:103](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L103)

***

### bits

```ts
get bits(): number
```

The bits cheered in the context's message.

#### Returns

`number`

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:152](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L152)

***

### broadcaster

```ts
get broadcaster(): BaseUser<T>
```

The context's broadcaster.

#### Returns

[`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:124](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L124)

***

### channel

```ts
get channel(): BaseChannel<T>
```

Fetches channel of the context's chatroom.

#### Returns

[`BaseChannel`](/api/chatbot/classes/basechannel/)\<`T`\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:159](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L159)

***

### chatroomID

```ts
get chatroomID(): string
```

The ID of the context's chatroom.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:117](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L117)

***

### cheermotes

```ts
get cheermotes(): Collection<string, BaseCheermote<T>>
```

The cheermotes of the context's message.

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseCheermote`](/api/chatbot/classes/basecheermote/)\<`T`\>\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:145](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L145)

***

### content

```ts
get content(): string
```

The content of the context's message. This message is parsed so it will return the message without the prefix and the command name.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:110](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L110)

***

### emotes

```ts
get emotes(): Collection<string, BaseEmote<T, EmoteType>>
```

The emotes of the context's message.

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseEmote`](/api/chatbot/classes/baseemote/)\<`T`, [`EmoteType`](/api/chatbot/type-aliases/emotetype/)\>\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:138](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L138)

***

### mentions

```ts
get mentions(): Collection<string, BaseUser<T>>
```

The mentions of the context's message.

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:131](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L131)

## Methods

### inStream()

```ts
inStream(): Promise<boolean>
```

Checks whether the author is a moderator in the context.

#### Returns

`Promise`\<`boolean`\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:96](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L96)

***

### isModerator()

```ts
isModerator(): Promise<boolean>
```

Checks whether the bot is moderator in this context.

#### Returns

`Promise`\<`boolean`\>

A boolean indicating whether the bot is moderator.

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:82](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L82)

***

### reply()

```ts
reply(message: string): Promise<BaseMessage<T>>
```

Replies to the message of the command.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to reply. |

#### Returns

`Promise`\<[`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:74](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L74)

***

### stream()

```ts
stream(): Promise<null | Stream<T>>
```

Fetches the stream which is currently live in the context. If the stream is offline, it will return null.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

#### Source

[twitchapi/packages/chatbot/src/structures/TwitchContext.ts:89](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/TwitchContext.ts#L89)
