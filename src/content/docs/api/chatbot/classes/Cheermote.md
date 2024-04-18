---
editUrl: false
next: false
prev: false
title: "Cheermote"
---

Represents a Twitch cheermote.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Cheermote(chatbot, data)

```ts
new Cheermote<T>(chatbot: ChatBot<T>, data: Cheermote): Cheermote<T>
```

Creates a new instance of the cheermote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `Cheermote` | The data of the cheermote returned from the API. |

#### Returns

[`Cheermote`](/api/chatbot/classes/cheermote/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/Cheermote.ts:43](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Cheermote.ts#L43)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `isCharitable` | `readonly` | `boolean` | Whether the cheermote is charitable. | - |
| `prefix` | `readonly` | `string` | The prefix of the cheermote. | - |
| `tiers` | `readonly` | [`CheermoteTier`](/api/chatbot/classes/cheermotetier/)\<`T`\>[] | The tiers of the cheermote. | - |
| `type` | `readonly` | `CheermoteType` | The type of the cheermote. | - |

## Accessors

### lastUpdated

```ts
get lastUpdated(): Date
```

Returns the last updated date of the cheermote in a JavaScript Date object.

#### Returns

`Date`

#### Source

[twitchapi/packages/chatbot/src/structures/Cheermote.ts:55](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Cheermote.ts#L55)

## Methods

### getURL()

```ts
getURL(options: CheermoteURLOptions): null | string
```

Get the URL of the image of cheermote.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`CheermoteURLOptions`](/api/chatbot/interfaces/cheermoteurloptions/) | The options to get the URL of the cheermote. |

#### Returns

`null` \| `string`

The URL of the image of the cheermote.

#### Source

[twitchapi/packages/chatbot/src/structures/Cheermote.ts:64](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/Cheermote.ts#L64)
