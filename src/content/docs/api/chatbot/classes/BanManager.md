---
editUrl: false
next: false
prev: false
title: "BanManager"
---

The ban manager of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Constructors

### new BanManager(chatbot, chatroom)

```ts
new BanManager<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): BanManager<T>
```

Creates a new instance of the badge manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](ChatRoom.md)\<`T`\> | The chatroom which includes this manager. |

#### Returns

[`BanManager`](BanManager.md)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:22](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BanManager.ts#L22)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](ChatRoom.md)\<`T`\> | The chatroom which includes this manager. | - |

## Methods

### add()

```ts
add(options: BanOptions): Promise<Ban<T>>
```

Ban a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`BanOptions`](../interfaces/BanOptions.md) | The options required for banning an user. See [BanOptions](../../api/chatbot/interfaces/banoptions). |

#### Returns

`Promise`\<[`Ban`](Ban.md)\<`T`\>\>

A class representation of the ban. See [Ban](../../api/chatbot/classes/ban).

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:32](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BanManager.ts#L32)

***

### delete()

```ts
delete(userID: string): Promise<void>
```

Deletes the ban of a specific user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `userID` | `string` | The id of the user to unban. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BanManager.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BanManager.ts#L41)
