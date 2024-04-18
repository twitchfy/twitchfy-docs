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
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new AutoModSettingsManager(chatbot, automod)

```ts
new AutoModSettingsManager<T>(chatbot: ChatBot<T>, automod: AutoMod<T>): AutoModSettingsManager<T>
```

Creates a new instance of the automod settings manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `automod` | [`AutoMod`](/api/chatbot/classes/automod/)\<`T`\> | The automod instance. |

#### Returns

[`AutoModSettingsManager`](/api/chatbot/classes/automodsettingsmanager/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:23](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L23)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `automod` | `public` | [`AutoMod`](/api/chatbot/classes/automod/)\<`T`\> | The automod instance. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |

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

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:33](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L33)

***

### fetch()

```ts
fetch(): Promise<AutoModSettings<T>>
```

Fetches the current settings of the automod from the API.

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The current settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts:41](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/managers/AutoModSettingsManager.ts#L41)
