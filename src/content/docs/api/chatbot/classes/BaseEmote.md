---
editUrl: false
next: false
prev: false
title: "BaseEmote"
---

The base emote class.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | - |
| `K` extends [`EmoteType`](/api/chatbot/type-aliases/emotetype/) | [`EmoteType`](/api/chatbot/type-aliases/emotetype/) |

## Constructors

### new BaseEmote(chatbot, data)

```ts
new BaseEmote<T, K>(chatbot: ChatBot<T>, data: BaseEmoteData): BaseEmote<T, K>
```

Creates a new instance of the base emote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`BaseEmoteData`](/api/chatbot/interfaces/baseemotedata/) | The base data of the emote. |

#### Returns

[`BaseEmote`](/api/chatbot/classes/baseemote/)\<`T`, `K`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:31

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `id` | `readonly` | `string` | The id of the emote. | - |
| `name` | `readonly` | `string` | The name of the emote. | - |

## Accessors

### animated

```ts
get animated(): boolean
```

Whether the emote is animated.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:62

***

### ownerID

```ts
get ownerID(): null | string
```

The ID of the owner of the emote.

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:41

***

### setID

```ts
get setID(): null | string
```

The ID of the emote set.

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:48

***

### static

```ts
get static(): boolean
```

Whether the emote is static.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:55

## Methods

### fetch()

```ts
fetch(): Promise<null | FetchEmote<T, K>>
```

Fetches the emote from the API.

#### Returns

`Promise`\<`null` \| [`FetchEmote`](/api/chatbot/type-aliases/fetchemote/)\<`T`, `K`\>\>

The fetched emote. Returns null if the emote was not found.

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:86

***

### isChannel()

```ts
isChannel(): this is BaseEmote<T, "channel">
```

Check if the emote is a custom channel emote.

#### Returns

`this is BaseEmote<T, "channel">`

A boolean indicating whether the emote is a channel emote.

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:78

***

### isGlobal()

```ts
isGlobal(): this is BaseEmote<T, "global">
```

Check if the emote is a global Twitch emote.

#### Returns

`this is BaseEmote<T, "global">`

A boolean indicating whether the emote is a global Twitch emote.

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:70
