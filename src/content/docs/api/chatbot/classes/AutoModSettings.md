---
editUrl: false
next: false
prev: false
title: "AutoModSettings"
---

Represents the settings of an automod.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new AutoModSettings()

```ts
new AutoModSettings<T>(
   chatbot: ChatBot<T>, 
   automod: AutoMod<T>, 
data: AutoModSettings): AutoModSettings<T>
```

Creates a new instance of the automod settings.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `automod` | [`AutoMod`](/api/chatbot/classes/automod/)\<`T`\> | The automod whose settings are. |
| `data` | `AutoModSettings` | The data of the settings returned from the API. |

#### Returns

[`AutoModSettings`](/api/chatbot/classes/automodsettings/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:30

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `automod` | `readonly` | [`AutoMod`](/api/chatbot/classes/automod/)\<`T`\> | The autmod whose settings are. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `data` | `public` | `AutoModSettings` | The data of the settings returned from the API. | - |

## Accessors

### aggression

```ts
get aggression(): number
```

The aggression level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:53

***

### bullying

```ts
get bullying(): number
```

The bullying level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:74

***

### disability

```ts
get disability(): number
```

The disability level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:46

***

### misogyny

```ts
get misogyny(): number
```

The misogyny level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:67

***

### overall

```ts
get overall(): null | number
```

The overall level of the automod.

#### Returns

`null` \| `number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:39

***

### racism

```ts
get racism(): number
```

The racism level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:88

***

### sexBasedTerms

```ts
get sexBasedTerms(): number
```

The level of sex based terms of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:95

***

### sexuality

```ts
get sexuality(): number
```

The sexuality level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:60

***

### swearing

```ts
get swearing(): number
```

The harassment level of the automod.

#### Returns

`number`

#### Source

twitchfy/packages/chatbot/src/structures/AutoModSettings.ts:81
