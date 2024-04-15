---
editUrl: false
next: false
prev: false
title: "AutoModSettingsManager"
---

Represents the manager for the settings of the autmod.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Constructors

### new AutoModSettingsManager(chatbot, automod)

```ts
new AutoModSettingsManager<T>(chatbot: ChatBot<T>, automod: AutoMod<T>): AutoModSettingsManager<T>
```

Creates a new instance of the automod settings manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. |
| `automod` | [`AutoMod`](AutoMod.md)\<`T`\> | The automod instance. |

#### Returns

[`AutoModSettingsManager`](AutoModSettingsManager.md)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:23](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L23)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `automod` | `public` | [`AutoMod`](AutoMod.md)\<`T`\> | The automod instance. | - |
| `chatbot` | `readonly` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

## Methods

### edit()

```ts
edit(options: PutAutoModSettingsBody): Promise<AutoModSettings<T>>
```

Edits the automod settings.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | `PutAutoModSettingsBody` | The options to edit the automod settings. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:33](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L33)

***

### fetch()

```ts
fetch(): Promise<AutoModSettings<T>>
```

Fetches the current settings of the automod from the API.

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\<`T`\>\>

The current settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L41)
