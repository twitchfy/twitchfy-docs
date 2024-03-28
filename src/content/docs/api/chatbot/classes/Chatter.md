---
editUrl: false
next: false
prev: false
title: "Chatter"
---

Represents a complete chatter of a channel.

## Constructors

### new Chatter(chatbot, tags, channel)

```ts
new Chatter(
   chatbot: ChatBot, 
   tags: PrivMSGTags, 
   channel: Channel): Chatter
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`Chatter`](Chatter.md)

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:96](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L96)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `badges` | `public` | [`PrivMSGBadges`](PrivMSGBadges.md) | **Description**<br />The badges that the chatter has in his chat profile of the chat. |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The channel where the chatter is. |
| `chat` | `public` | [`Chat`](Chat.md) | **Description**<br />The chat of the channel. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `color` | `public` | `string` | **Description**<br />The color of the user's displayName in the chat. This is an hexadecimal RGB color code. |
| `displayName` | `public` | `string` | **Description**<br />The user's name that is displayed in the chat. This name is like the login name but can have UpperCase letters. |
| `id` | `public` | `string` | **Description**<br />The user's id of the chatter. |
| `login` | `public` | `string` | **Description**<br />The login name of this chatter. |
| `mod` | `public` | `boolean` | **Description**<br />If the user is a mod in that channel. |
| `subscriber` | `public` | `boolean` | **Description**<br />If the user is a subscriber of the channel. |
| `turbo` | `public` | `boolean` | **Description**<br />If the user is a turbo subscriber. |
| `user` | `public` | [`PrivMSGUser`](PrivMSGUser.md) | **Description**<br />The chatter's user profile. |
| `vip` | `public` | `boolean` | **Description**<br />If the user is a vip of that channel. |

## Methods

### ban()

```ts
ban(options?: BanOptions): Promise<Ban>
```

Ban the chatter from the chat of the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | [`BanOptions`](../interfaces/BanOptions.md) | The [options](../../api/chatbot/interfaces/banoptions) that you can complete to ban the user. |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

Returns a [Ban](../../api/chatbot/classes/ban) class that represents the ban.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:122](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L122)

***

### fetch()

```ts
fetch(): Promise<Chatter>
```

Get the complete chatter information.

#### Returns

`Promise`\<[`Chatter`](Chatter.md)\>

Returns the complete chatter information including the complete channel.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:146](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L146)

***

### isBroadcaster()

```ts
isBroadcaster(): boolean
```

Check if the chatter is the channel's broadcaster.

#### Returns

`boolean`

Returns a boolean whatever the chatter is the channel's broadcaster or not.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:155](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L155)

***

### isSub()

```ts
isSub(): boolean
```

Check if the chatter is a channel's subscriber.

#### Returns

`boolean`

Returns a boolean whatever the chatter is a channel's subscriber.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:173](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L173)

***

### isTurboSubscriber()

```ts
isTurboSubscriber(): boolean
```

Check if the chatter is a Twitch turbo subscriber.

#### Returns

`boolean`

Returns a boolean whatever the chatter is a Twitch turbo subscriber.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:182](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L182)

***

### isVip()

```ts
isVip(): boolean
```

Check if the chatter is a channel's vip.

#### Returns

`boolean`

Returns a boolean whatever the chatter is a channel's vip.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:164](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L164)

***

### timeout()

```ts
timeout(options: TimeoutOptions): Promise<Ban>
```

Timeout the chatter from the chat of the channel.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`TimeoutOptions`](../interfaces/TimeoutOptions.md) | The [options](../../api/chatbot/interfaces/timeoutoptions) of the timeout. |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

Returns a [Ban](../../api/chatbot/classes/ban) class that represents the timeout.

#### Source

[twitchapi/packages/chatbot/src/structures/Chatter.ts:134](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/Chatter.ts#L134)
