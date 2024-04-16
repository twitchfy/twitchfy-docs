---
editUrl: false
next: false
prev: false
title: "AutoMod"
---

Represents the automod of a chatroom.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new AutoMod(chatbot, chatroom)

```ts
new AutoMod<T>(chatbot: ChatBot<T>, chatroom: ChatRoom<T>): AutoMod<T>
```

Creates a new instance of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the automod is. |

#### Returns

[`AutoMod`](/api/chatbot/classes/automod/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:27](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L27)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the automod is. | - |
| `settings` | `readonly` | [`AutoModSettingsManager`](/api/chatbot/classes/automodsettingsmanager/)\<`T`\> | The settings manager of the automod. | - |

## Methods

### setAggression()

```ts
setAggression(level: null | number): Promise<AutoModSettings<T>>
```

Sets the aggression level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The aggression level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:58](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L58)

***

### setBullying()

```ts
setBullying(level: null | number): Promise<AutoModSettings<T>>
```

Sets the bullying level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The bullying level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:91](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L91)

***

### setDisability()

```ts
setDisability(level: null | number): Promise<AutoModSettings<T>>
```

Sets the disability level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The disability level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:47](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L47)

***

### setMisogyny()

```ts
setMisogyny(level: null | number): Promise<AutoModSettings<T>>
```

Sets the misogyny level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The misogyny level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:80](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L80)

***

### setOverall()

```ts
setOverall(level: null | number): Promise<AutoModSettings<T>>
```

Sets the overall level of the automod. This setting will overwrite all the others.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The overall level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:38](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L38)

***

### setRacism()

```ts
setRacism(level: null | number): Promise<AutoModSettings<T>>
```

Sets the racism level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The racism level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:113](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L113)

***

### setSexBasedTerms()

```ts
setSexBasedTerms(level: null | number): Promise<AutoModSettings<T>>
```

Sets the level of sex based terms of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The level of sex based terms of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:124](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L124)

***

### setSexuality()

```ts
setSexuality(level: null | number): Promise<AutoModSettings<T>>
```

Sets the sexuality level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The sexuality level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:69](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L69)

***

### setSwearing()

```ts
setSwearing(level: null | number): Promise<AutoModSettings<T>>
```

Sets the harassment level of the automod. This settings will disable the overall level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | `null` \| `number` | The harassment level of the automod. If null, it will be set to 0. |

#### Returns

`Promise`\<[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>\>

The new settings of the automod.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoMod.ts:102](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/AutoMod.ts#L102)
