---
editUrl: false
next: false
prev: false
title: "BadgeManager"
---

Represents an user badge's manager.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BadgeManager(chatbot, data)

```ts
new BadgeManager<T>(chatbot: ChatBot<T>, data: Badge[]): BadgeManager<T>
```

Creates a new instance of the badge manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `Badge`[] | The data containing the user's badges returned by the EventSub. |

#### Returns

[`BadgeManager`](/api/chatbot/classes/badgemanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BadgeManager.ts:22](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BadgeManager.ts#L22)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### get()

```ts
get(id: string): undefined | Badge
```

Gets a user's badge.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the badge to get. Possible values could be `subscriber`, `vip, `moderator`.<br />@returns The badge if the user has it. If not it will return `undefined`. |

#### Returns

`undefined` \| `Badge`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BadgeManager.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BadgeManager.ts#L41)

***

### has()

```ts
has(id: string): boolean
```

Checks if the user has a specific badge.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the badge to check. Possible values could be `subscriber`, `vip, `moderator`. |

#### Returns

`boolean`

A boolean determining whether the user has the badge.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/BadgeManager.ts:32](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/BadgeManager.ts#L32)
