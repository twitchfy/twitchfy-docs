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

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:31](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L31)

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

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:62](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L62)

***

### ownerID

```ts
get ownerID(): null | string
```

The ID of the owner of the emote.

#### Returns

`null` \| `string`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L41)

***

### setID

```ts
get setID(): null | string
```

The ID of the emote set.

#### Returns

`null` \| `string`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:48](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L48)

***

### static

```ts
get static(): boolean
```

Whether the emote is static.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:55](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L55)

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

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:86](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L86)

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

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:78](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L78)

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

[twitchapi/packages/chatbot/src/structures/BaseEmote.ts:70](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseEmote.ts#L70)
