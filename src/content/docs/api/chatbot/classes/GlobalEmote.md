---
editUrl: false
next: false
prev: false
title: "GlobalEmote"
---

Represents a Twitch global emote.

## Extends

- [`Emote`](/api/chatbot/classes/emote/)\<`T`, `"global"`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new GlobalEmote()

```ts
new GlobalEmote<T>(chatbot: ChatBot<T>, data: GlobalEmote & object): GlobalEmote<T>
```

Creates a new instance of the global emote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `GlobalEmote` & `object` | The data of the global emote returned from the API. |

#### Returns

[`GlobalEmote`](/api/chatbot/classes/globalemote/)\<`T`\>

#### Overrides

[`Emote`](/api/chatbot/classes/emote/).[`constructor`](/api/chatbot/classes/emote/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/GlobalEmote.ts:16

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`Emote`](/api/chatbot/classes/emote/).`chatbot` |
| `id` | `readonly` | `string` | The id of the emote. | [`Emote`](/api/chatbot/classes/emote/).`id` |
| `name` | `readonly` | `string` | The name of the emote. | [`Emote`](/api/chatbot/classes/emote/).`name` |

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
fetch(): Promise<null | GlobalEmote<T>>
```

Fetches the emote from the API.

#### Returns

`Promise`\<`null` \| [`GlobalEmote`](/api/chatbot/classes/globalemote/)\<`T`\>\>

The fetched emote. Returns null if the emote was not found.

#### Inherited from

[`Emote`](/api/chatbot/classes/emote/).[`fetch`](/api/chatbot/classes/emote/#fetch)

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

#### Inherited from

[`Emote`](/api/chatbot/classes/emote/).[`getURL`](/api/chatbot/classes/emote/#geturl)

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

[`Emote`](/api/chatbot/classes/emote/).[`isChannel`](/api/chatbot/classes/emote/#ischannel)

#### Source

twitchfy/packages/chatbot/src/structures/BaseEmote.ts:78

***

### isGlobal()

```ts
isGlobal(): this is GlobalEmote<T>
```

Overrides isChannel method from BaseEmote to assert this as ChannelEmote and not BaseEmote.

#### Returns

`this is GlobalEmote<T>`

Whether the emote is a global emote.

#### Overrides

[`Emote`](/api/chatbot/classes/emote/).[`isGlobal`](/api/chatbot/classes/emote/#isglobal)

#### Source

twitchfy/packages/chatbot/src/structures/GlobalEmote.ts:24
