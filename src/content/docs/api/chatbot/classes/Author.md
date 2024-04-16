---
editUrl: false
next: false
prev: false
title: "Author"
---

Represents the author of a received message.

## Extends

- [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Author(chatbot, data)

```ts
new Author<T>(chatbot: ChatBot<T>, data: BaseUserData & Object): Author<T>
```

Creates a new instance of the author.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`BaseUserData`](/api/chatbot/interfaces/baseuserdata/) & `Object` | The data of the user. |

#### Returns

[`Author`](/api/chatbot/classes/author/)\<`T`\>

#### Overrides

[`BaseUser`](/api/chatbot/classes/baseuser/).[`constructor`](/api/chatbot/classes/baseuser/#constructors)

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:29](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L29)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `badges` | `readonly` | [`BadgeManager`](/api/chatbot/classes/badgemanager/)\<`T`\> | The set of badges of the author. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseUser`](/api/chatbot/classes/baseuser/).`chatbot` |
| `color` | `readonly` | `string` | The name color of the author in HEX RGB format. | - |
| `displayName` | `readonly` | `string` | The display name of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`displayName` |
| `id` | `readonly` | `string` | The id of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`id` |
| `username` | `readonly` | `string` | The username of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`username` |

## Accessors

### broadcaster

```ts
get broadcaster(): boolean
```

Checks if the author is the broadcaster of the chatroom.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:37](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L37)

***

### moderator

```ts
get moderator(): boolean
```

Checks if the author is a moderator of the chatroom.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:44](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L44)

***

### subscriber

```ts
get subscriber(): boolean
```

Checks if the author is a subscriber of the channel.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:58](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L58)

***

### subscriptionMonths

```ts
get subscriptionMonths(): number
```

Gets the subscription months of the author. If the author is not a subscriber, it will return `0`.

#### Returns

`number`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:74](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L74)

***

### subscriptionTier

```ts
get subscriptionTier(): null | number
```

Gets the subscription tier of the author. If the author is not a subscriber, it will return a nullish value.

#### Returns

`null` \| `number`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:65](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L65)

***

### vip

```ts
get vip(): boolean
```

Checks if the author is a VIP of the chatroom.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/Author.ts:51](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/Author.ts#L51)

## Methods

### chatroom()

```ts
chatroom(): Promise<ChatRoom<T>>
```

Gets the chatroom of the user.

#### Returns

`Promise`\<[`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\>\>

The chatroom of the user.

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`chatroom`](/api/chatbot/classes/baseuser/#chatroom)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L41)

***

### fetch()

```ts
fetch(): Promise<User<T>>
```

Fetches the current user from the API.

#### Returns

`Promise`\<[`User`](/api/chatbot/classes/user/)\<`T`\>\>

The fetched user from the API.

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`fetch`](/api/chatbot/classes/baseuser/#fetch)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:50](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L50)

***

### inStream()

```ts
inStream(): Promise<boolean>
```

Checks whether the user is currently streaming.

#### Returns

`Promise`\<`boolean`\>

A boolean indicating whether the user is currently streaming.

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`inStream`](/api/chatbot/classes/baseuser/#instream)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:73](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L73)

***

### stream()

```ts
stream(): Promise<null | Stream<T>>
```

Fetches the current stream of the user from the API.

#### Returns

`Promise`\<`null` \| [`Stream`](/api/chatbot/classes/stream/)\<`T`\>\>

The current stream or null if the stream is offline.

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`stream`](/api/chatbot/classes/baseuser/#stream)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:65](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L65)

***

### toString()

```ts
toString(): string
```

Returns the mention of the user.

#### Returns

`string`

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`toString`](/api/chatbot/classes/baseuser/#tostring)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:57](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L57)

***

### whisper()

```ts
whisper(message: string): Promise<void>
```

Sends a whisper to the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to send. |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`whisper`](/api/chatbot/classes/baseuser/#whisper)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:83](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L83)
