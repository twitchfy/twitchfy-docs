---
editUrl: false
next: false
prev: false
title: "ChatBotUser"
---

Represents a Twitch chatbot user.

## Extends

- [`User`](User.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Constructors

### new ChatBotUser(chatbot, data)

```ts
new ChatBotUser<T>(chatbot: ChatBot<T>, data: User): ChatBotUser<T>
```

Creates a new instance of the chatbot user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. |
| `data` | `User` | The data of the user returned from the API. |

#### Returns

[`ChatBotUser`](ChatBotUser.md)\<`T`\>

#### Overrides

[`User`](User.md).[`constructor`](User.md#constructors)

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBotUser.ts:16](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBotUser.ts#L16)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](ChatBot.md)\<`T`\> | The current instance of the chatbot. | [`User`](User.md).`chatbot` |
| `description` | `readonly` | `string` | The description of the user. | [`User`](User.md).`description` |
| `displayName` | `readonly` | `string` | The display name of the user. | [`User`](User.md).`displayName` |
| `id` | `readonly` | `string` | The id of the user. | [`User`](User.md).`id` |
| `profileImage` | `readonly` | `string` | The profile image URL of the user. | [`User`](User.md).`profileImage` |
| `username` | `readonly` | `string` | The username of the user. | [`User`](User.md).`username` |

## Accessors

### broadcasterType

```ts
get broadcasterType(): string
```

The user's broadcaster type. Possible values are 'partner', 'affiliate' and 'normal'.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:55](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/User.ts#L55)

***

### createdAt

```ts
get createdAt(): Date
```

When the user was created. A JavaScript Date object is returned.

#### Returns

`Date`

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/User.ts#L41)

***

### offlineImage

```ts
get offlineImage(): null | string
```

The user's offline image url. Returns null if the user has no offline image set

#### Returns

`null` \| `string`

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:62](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/User.ts#L62)

***

### userType

```ts
get userType(): string
```

The user's type.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/User.ts:48](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/User.ts#L48)

## Methods

### chatroom()

```ts
chatroom(): Promise<ChatRoom<T>>
```

Gets the chatroom of the user.

#### Returns

`Promise`\<[`ChatRoom`](ChatRoom.md)\<`T`\>\>

The chatroom of the user.

#### Inherited from

[`User`](User.md).[`chatroom`](User.md#chatroom)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:41](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L41)

***

### fetch()

```ts
fetch(): Promise<User<T>>
```

Fetches the current user from the API.

#### Returns

`Promise`\<[`User`](User.md)\<`T`\>\>

The fetched user from the API.

#### Inherited from

[`User`](User.md).[`fetch`](User.md#fetch)

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

[`User`](User.md).[`inStream`](User.md#instream)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:73](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L73)

***

### setNameColor()

```ts
setNameColor(color: string): Promise<void>
```

Sets the name color of the chatbot user which will be visible in the chat.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | The color of the name. This can be a hex color code or a color name. |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/chatbot/src/structures/ChatBotUser.ts:25](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/ChatBotUser.ts#L25)

***

### stream()

```ts
stream(): Promise<null | Stream<T>>
```

Fetches the current stream of the user from the API.

#### Returns

`Promise`\<`null` \| [`Stream`](Stream.md)\<`T`\>\>

The current stream or null if the stream is offline.

#### Inherited from

[`User`](User.md).[`stream`](User.md#stream)

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

[`User`](User.md).[`toString`](User.md#tostring)

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

[`User`](User.md).[`whisper`](User.md#whisper)

#### Source

[twitchapi/packages/chatbot/src/structures/BaseUser.ts:83](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/structures/BaseUser.ts#L83)
