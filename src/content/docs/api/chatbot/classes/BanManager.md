---
editUrl: false
next: false
prev: false
title: "BanManager"
---

Represents a BanManager of a channel

## Constructors

### new BanManager(chatbot, channel)

```ts
new BanManager(chatbot: ChatBot, channel: Channel): BanManager
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`BanManager`](BanManager.md)

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:38](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/BanManager.ts#L38)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The [Channel](../../api/chatbot/classes/channel) of the BanManager. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |

## Methods

### createBan()

```ts
createBan(userID: string, options?: BanOptions): Promise<Ban>
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userID` | `string` | The user's id of the user you want to ban. |
| `options`? | [`BanOptions`](../interfaces/BanOptions.md) | The options of the ban. |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

Returns a [Ban](../../api/chatbot/classes/ban) class that represents the ban.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:49](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/BanManager.ts#L49)

***

### createTimeout()

```ts
createTimeout(userID: string, options: TimeoutOptions): Promise<Ban>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `userID` | `string` |
| `options` | [`TimeoutOptions`](../interfaces/TimeoutOptions.md) |

#### Returns

`Promise`\<[`Ban`](Ban.md)\>

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:57](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/BanManager.ts#L57)

***

### unBan()

```ts
unBan(userID: string): Promise<void>
```

UnBan the specified user in the [Channel](../../api/chatbot/classes/channel) of this BanManager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userID` | `string` | The userID of the person who is banned and you are going to unBan. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:70](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/managers/BanManager.ts#L70)
