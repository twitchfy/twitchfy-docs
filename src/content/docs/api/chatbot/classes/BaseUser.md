---
editUrl: false
next: false
prev: false
title: "BaseUser"
---

The base class for a user.

## Extends

- `Base`\<`T`\>

## Extended by

- [`User`](/api/chatbot/classes/user/)
- [`Author`](/api/chatbot/classes/author/)

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new BaseUser()

```ts
new BaseUser<T>(chatbot: ChatBot<T>, data: BaseUserData): BaseUser<T>
```

Creates a new instance of the base user.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`BaseUserData`](/api/chatbot/interfaces/baseuserdata/) | The base data of the user. |

#### Returns

[`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

twitchfy/packages/chatbot/src/structures/BaseUser.ts:31

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `displayName` | `readonly` | `string` | The display name of the user. | - |
| `id` | `readonly` | `string` | The id of the user. | - |
| `username` | `readonly` | `string` | The username of the user. | - |

## Methods

### channel()

```ts
channel(): Promise<Channel<T>>
```

#### Returns

`Promise`\<[`Channel`](/api/chatbot/classes/channel/)\<`T`\>\>

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

#### Source

twitchfy/packages/chatbot/src/structures/BaseUser.ts:88
