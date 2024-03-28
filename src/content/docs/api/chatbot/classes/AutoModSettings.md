---
editUrl: false
next: false
prev: false
title: "AutoModSettings"
---

Represents the settings of the automod.

## Constructors

### new AutoModSettings(chatbot, data, channel)

```ts
new AutoModSettings(
   chatbot: ChatBot, 
   data: AutoModSettings, 
   channel: Channel): AutoModSettings
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md) |  |
| `data` | `AutoModSettings` |  |
| `channel` | [`Channel`](Channel.md) |  |

#### Returns

[`AutoModSettings`](AutoModSettings.md)

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:74](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L74)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `aggression` | `public` | `number` | **Description**<br />The aggression level of the automod. |
| `bullying` | `public` | `number` | **Description**<br />The level of bullying of the automod. |
| `channel` | `public` | [`Channel`](Channel.md) | **Description**<br />The channel whose autmod is. |
| `chatbot` | `public` | [`ChatBot`](ChatBot.md) | **Description**<br />The current instance of the [ChatBot](../../api/chatbot/classes/chatbot). |
| `disability` | `public` | `number` | **Description**<br />The disability level of the automod. |
| `ethnicityOrReligion` | `public` | `number` | **Description**<br />The level of ethnicity and religion terms of the automod. |
| `misogyny` | `public` | `number` | **Description**<br />The level of misogyny of the automod. |
| `overallLevel` | `public` | `number` | **Description**<br />The overallLevel of the automod. |
| `sexBasedTerms` | `public` | `number` | **Description**<br />The level of sex based terms of the automod. |
| `sexOrGen` | `public` | `number` | **Description**<br />The level of sexuality of the automod. |
| `swearing` | `public` | `number` | **Description**<br />The level of swearing of the automod. |

## Methods

### set()

```ts
set(options: AutoModSettingsOptions): Promise<AutoModSettings>
```

Set multiples options of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`AutoModSettingsOptions`](../interfaces/AutoModSettingsOptions.md) | The options that contains all the terms of the automod. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:93](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L93)

***

### setAggression()

```ts
setAggression(value: number): Promise<AutoModSettings>
```

Set the agression level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the agression level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:149](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L149)

***

### setBullying()

```ts
setBullying(value: number): Promise<AutoModSettings>
```

Set the bullying level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the bullying level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:199](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L199)

***

### setDisability()

```ts
setDisability(value: number): Promise<AutoModSettings>
```

Set the disability level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the disability level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:133](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L133)

***

### setEthnicityOrReligion()

```ts
setEthnicityOrReligion(value: number): Promise<AutoModSettings>
```

Set the ethnicity and religion level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the ethnicity and religion level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:233](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L233)

***

### setMisogyny()

```ts
setMisogyny(value: number): Promise<AutoModSettings>
```

Set the misogyny level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the overallLevel from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Retruns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:183](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L183)

***

### setOverallLevel()

```ts
setOverallLevel(value: number): Promise<AutoModSettings>
```

Set the overallLevel of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the overallLevel from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:117](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L117)

***

### setSexBasedTerms()

```ts
setSexBasedTerms(value: number): Promise<AutoModSettings>
```

Set the sex based terms levels of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the sex based terms level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:252](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L252)

***

### setSexOrGen()

```ts
setSexOrGen(value: number): Promise<AutoModSettings>
```

Set the sex or gender level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the sex or gender level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:165](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L165)

***

### setSwearing()

```ts
setSwearing(value: number): Promise<AutoModSettings>
```

Set the swearing level of the automod.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | The value of the swearing level from 0 to 4. |

#### Returns

`Promise`\<[`AutoModSettings`](AutoModSettings.md)\>

Returns the new automod settings.

#### Source

[twitchapi/packages/chatbot/src/structures/AutoModSettings.ts:215](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/AutoModSettings.ts#L215)
