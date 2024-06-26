---
editUrl: false
next: false
prev: false
title: "Emote"
---

Represents a Twitch emote. It could be either a global emote or a channel emote.

## Extends

- [`BaseEmote`](/api/chatbot/classes/baseemote/)\<`T`, `K`\>

## Extended by

- [`GlobalEmote`](/api/chatbot/classes/globalemote/)
- [`ChannelEmote`](/api/chatbot/classes/channelemote/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |
| `K` *extends* `"global"` \| `"channel"` |

## Constructors

### new Emote()

```ts
new Emote<T, K>(chatbot: ChatBot<T>, data: ChannelEmote | GlobalEmote & object): Emote<T, K>
```

Creates a new instance of the emote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `ChannelEmote` \| `GlobalEmote` & `object` | The data of the emote returned from the API. |

#### Returns

[`Emote`](/api/chatbot/classes/emote/)\<`T`, `K`\>

#### Overrides

[`BaseEmote`](/api/chatbot/classes/baseemote/).[`constructor`](/api/chatbot/classes/baseemote/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/Emote.ts:22

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseEmote`](/api/chatbot/classes/baseemote/).`chatbot` |
| `id` | `readonly` | `string` | The id of the emote. | [`BaseEmote`](/api/chatbot/classes/baseemote/).`id` |
| `name` | `readonly` | `string` | The name of the emote. | [`BaseEmote`](/api/chatbot/classes/baseemote/).`name` |

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

### hasDarkTheme

```ts
get hasDarkTheme(): boolean
```

Checks whether the emote is dark theme.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Emote.ts:37

***

### hasLightTheme

```ts
get hasLightTheme(): boolean
```

Checks whether the emote is light theme.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Emote.ts:30

***

### ownerId

```ts
get ownerId(): null | string
```

The Id of the owner of the emote.

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:41

***

### setId

```ts
get setId(): null | string
```

The Id of the emote set.

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

#### Inherited from

[`BaseEmote`](/api/chatbot/classes/baseemote/).[`fetch`](/api/chatbot/classes/baseemote/#fetch)

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:86

***

### getURL()

```ts
getURL(options?: EmoteURLOptions): string
```

Gets the URL of the emote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`EmoteURLOptions`](/api/chatbot/interfaces/emoteurloptions/) | The options to get the URL of the emote. |

#### Returns

`string`

Returns the URL of the emote.

#### Source

twitchfy/packages/chatbot/src/structures/Emote.ts:46

***

### isChannel()

```ts
isChannel(): this is BaseEmote<T, "channel">
```

Check if the emote is a custom channel emote.

#### Returns

`this is BaseEmote<T, "channel">`

A boolean indicating whether the emote is a channel emote.

#### Inherited from

[`BaseEmote`](/api/chatbot/classes/baseemote/).[`isChannel`](/api/chatbot/classes/baseemote/#ischannel)

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

#### Inherited from

[`BaseEmote`](/api/chatbot/classes/baseemote/).[`isGlobal`](/api/chatbot/classes/baseemote/#isglobal)

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:70
