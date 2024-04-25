---
editUrl: false
next: false
prev: false
title: "CheermoteTier"
---

Represents a Twitch cheermote tier.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new CheermoteTier(chatbot, cheermote, data)

```ts
new CheermoteTier<T>(
   chatbot: ChatBot<T>, 
   cheermote: Cheermote<T>, 
data: CheermoteTier): CheermoteTier<T>
```

Creates a new instance of the cheermote tier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `cheermote` | [`Cheermote`](/api/chatbot/classes/cheermote/)\<`T`\> | The cheermote of the tier. |
| `data` | `CheermoteTier` | The data of the cheermote tier returned from the API. |

#### Returns

[`CheermoteTier`](/api/chatbot/classes/cheermotetier/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/CheermoteTier.ts:49](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/CheermoteTier.ts#L49)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `canCheer` | `readonly` | `boolean` | Whether the user can cheer with this tier. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `cheermote` | `readonly` | [`Cheermote`](/api/chatbot/classes/cheermote/)\<`T`\> | The cheermote of the tier. | - |
| `color` | `readonly` | `string` | The color of the tier. | - |
| `minBits` | `readonly` | `number` | The minimum bits necessary to cheer with this tier. | - |
| `showInBitsCard` | `readonly` | `boolean` | Whether the tier should be shown in the bits card. | - |

## Accessors

### id

```ts
get id(): number
```

The ID of the cheermote tier.

#### Returns

`number`

#### Source

[twitchapi/packages/chatbot/src/structures/CheermoteTier.ts:62](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/CheermoteTier.ts#L62)

## Methods

### getURL()

```ts
getURL(options?: Omit<CheermoteURLOptions, "tier">): string
```

Get the URL of the image of the cheermote tier.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options`? | `Omit`\<[`CheermoteURLOptions`](/api/chatbot/interfaces/cheermoteurloptions/), `"tier"`\> | The options to get the URL of the cheermote tier. |

#### Returns

`string`

The URL of the image of the cheermote tier.

#### Source

[twitchapi/packages/chatbot/src/structures/CheermoteTier.ts:72](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/CheermoteTier.ts#L72)
