---
editUrl: false
next: false
prev: false
title: "ChatBotUser"
---

Represents a Twitch chatbot user.

## Extends

- [`User`](/api/chatbot/classes/user/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChatBotUser(chatbot, data)

```ts
new ChatBotUser<T>(chatbot: ChatBot<T>, data: User): ChatBotUser<T>
```

Creates a new instance of the chatbot user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `User` | The data of the user returned from the API. |

#### Returns

[`ChatBotUser`](/api/chatbot/classes/chatbotuser/)\<`T`\>

#### Overrides

[`User`](/api/chatbot/classes/user/).[`constructor`](/api/chatbot/classes/user/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/ChatBotUser.ts:16

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`User`](/api/chatbot/classes/user/).`chatbot` |
| `description` | `readonly` | `string` | The description of the user. | [`User`](/api/chatbot/classes/user/).`description` |
| `displayName` | `readonly` | `string` | The display name of the user. | [`User`](/api/chatbot/classes/user/).`displayName` |
| `id` | `readonly` | `string` | The id of the user. | [`User`](/api/chatbot/classes/user/).`id` |
| `profileImage` | `readonly` | `string` | The profile image URL of the user. | [`User`](/api/chatbot/classes/user/).`profileImage` |
| `username` | `readonly` | `string` | The username of the user. | [`User`](/api/chatbot/classes/user/).`username` |

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

[`User`](/api/chatbot/classes/user/).[`channel`](/api/chatbot/classes/user/#channel)

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

[`User`](/api/chatbot/classes/user/).[`chatroom`](/api/chatbot/classes/user/#chatroom)

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

[`User`](/api/chatbot/classes/user/).[`fetch`](/api/chatbot/classes/user/#fetch)

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

[`User`](/api/chatbot/classes/user/).[`inStream`](/api/chatbot/classes/user/#instream)

#### Source

twitchfy/packages/chatbot/src/structures/BaseUser.ts:74

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

twitchfy/packages/chatbot/src/structures/ChatBotUser.ts:25

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

[`User`](/api/chatbot/classes/user/).[`stream`](/api/chatbot/classes/user/#stream)

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

[`User`](/api/chatbot/classes/user/).[`toString`](/api/chatbot/classes/user/#tostring)

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

[`User`](/api/chatbot/classes/user/).[`whisper`](/api/chatbot/classes/user/#whisper)

#### Source

twitchfy/packages/chatbot/src/structures/BaseUser.ts:88
