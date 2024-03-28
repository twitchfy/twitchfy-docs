---
editUrl: false
next: false
prev: false
title: "PrivMSGChatter"
---

Represents the Chatter that sent the PrivMSG.

## Constructors

### new PrivMSGChatter(chatbot, tags, channel)

```ts
new PrivMSGChatter(
   chatbot: ChatBot, 
   tags: PrivMSGTags, 
   channel: PrivMSGChannel): PrivMSGChatter
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |
| `channel` | [`PrivMSGChannel`](PrivMSGChannel.md) |  |

#### Returns

[`PrivMSGChatter`](PrivMSGChatter.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:91](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L91)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `badges` | `public` | [`PrivMSGBadges`](PrivMSGBadges.md) | **Description**<br />The badges that the chatter has in his chat profile of the chat. |
| `channel` | `public` | [`PrivMSGChannel`](PrivMSGChannel.md) | **Description**<br />The channel where the chatter sent the message. |
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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:115](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L115)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:139](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L139)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:150](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L150)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:168](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L168)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:177](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L177)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:159](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L159)

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

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts:127](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGChatter.ts#L127)
