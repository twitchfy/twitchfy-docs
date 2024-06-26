---
editUrl: false
next: false
prev: false
title: "User"
---

Represents a Twitch user.

## Extends

- [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>

## Extended by

- [`ChatBotUser`](/api/chatbot/classes/chatbotuser/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new User()

```ts
new User<T>(chatbot: ChatBot<T>, data: User): User<T>
```

Creates a new instance of the user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `User` | The data of the user returned from the API. |

#### Returns

[`User`](/api/chatbot/classes/user/)\<`T`\>

#### Overrides

[`BaseUser`](/api/chatbot/classes/baseuser/).[`constructor`](/api/chatbot/classes/baseuser/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/User.ts:31

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseUser`](/api/chatbot/classes/baseuser/).`chatbot` |
| `description` | `readonly` | `string` | The description of the user. | - |
| `displayName` | `readonly` | `string` | The display name of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`displayName` |
| `id` | `readonly` | `string` | The id of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`id` |
| `profileImage` | `readonly` | `string` | The profile image URL of the user. | - |
| `username` | `readonly` | `string` | The username of the user. | [`BaseUser`](/api/chatbot/classes/baseuser/).`username` |

## Accessors

### broadcasterType

```ts
get broadcasterType(): string
```

The user's broadcaster type. Possible values are 'partner', 'affiliate' and 'normal'.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/User.ts:55

***

### createdAt

```ts
get createdAt(): Date
```

When the user was created. A JavaScript Date object is returned.

#### Returns

`Date`

#### Source

twitchfy/packages/chatbot/src/structures/User.ts:41

***

### offlineImage

```ts
get offlineImage(): null | string
```

The user's offline image url. Returns null if the user has no offline image set

#### Returns

`null` \| `string`

#### Source

twitchfy/packages/chatbot/src/structures/User.ts:62

***

### userType

```ts
get userType(): string
```

The user's type.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/User.ts:48

## Methods

### channel()

```ts
channel(): Promise<Channel<T>>
```

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

#### Inherited from

[`BaseUser`](/api/chatbot/classes/baseuser/).[`channel`](/api/chatbot/classes/baseuser/#channel)

#### Source

twitchfy/packages/chatbot/src/structures/BaseUser.ts:79

***

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:42

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:51

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:74

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:66

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:58

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

twitchfy/packages/chatbot/src/structures/BaseUser.ts:88
