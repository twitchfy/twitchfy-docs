---
editUrl: false
next: false
prev: false
title: "Message"
---

Represents a message in a chatroom.

## Extends

- [`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new Message(chatbot, data, chatroom)

```ts
new Message<T>(
   chatbot: ChatBot<T>, 
   data: MessageData<T>, 
chatroom: ChatRoom<T>): Message<T>
```

Creates a new instance of the message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`MessageData`](/api/chatbot/type-aliases/messagedata/)\<`T`\> | The data of the message. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the message was sent. |

#### Returns

[`Message`](/api/chatbot/classes/message/)\<`T`\>

#### Overrides

[`BaseMessage`](/api/chatbot/classes/basemessage/).[`constructor`](/api/chatbot/classes/basemessage/#constructors)

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:76

## Properties

| Property | Modifier | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ | :------ |
| `author` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The author of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`author` | [`BaseMessage`](/api/chatbot/classes/basemessage/).`author` |
| `bits` | `readonly` | `number` | The bits cheered in the message. | - | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`chatbot` | [`BaseMessage`](/api/chatbot/classes/basemessage/).`chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the message was sent. | - | - |
| `cheermotes` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseCheermote`](/api/chatbot/classes/basecheermote/)\<`T`\>\> | The cheermotes in the message. | - | - |
| `content` | `readonly` | `string` | The content of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`content` | [`BaseMessage`](/api/chatbot/classes/basemessage/).`content` |
| `emotes` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseEmote`](/api/chatbot/classes/baseemote/)\<`T`, [`EmoteType`](/api/chatbot/type-aliases/emotetype/)\>\> | The emotes in the message. | - | - |
| `id` | `readonly` | `string` | The id of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`id` | [`BaseMessage`](/api/chatbot/classes/basemessage/).`id` |
| `mentions` | `readonly` | [`Collection`](/api/chatbot/classes/collection/)\<`string`, [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\>\> | The mentions in the message. | - | - |
| `messageReply` | `readonly` | `null` \| [`MessageReply`](/api/chatbot/classes/messagereply/)\<`T`\> | The message reply of the message. Null if the message doesn't have a reply. | - | - |
| `rewardId` | `readonly` | `null` \| `string` | The reward Id of the message. Null if the message doesn't have a reward redemption. | - | - |
| `type` | `readonly` | [`MessageTypes`](/api/chatbot/type-aliases/messagetypes/) | The type of the message. | - | - |

## Accessors

### authorId

```ts
get authorId(): string
```

The Id of the author of the message.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:93

***

### chatroomId

```ts
get chatroomId(): string
```

The Id of the chatroom where the message was sent.

#### Returns

`string`

#### Source

twitchfy/packages/chatbot/src/structures/BaseMessage.ts:64

***

### hasRewardRedeemption

```ts
get hasRewardRedeemption(): boolean
```

Whether the message has a reward reedemption.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:142

***

### isChannelPointsSubOnly

```ts
get isChannelPointsSubOnly(): boolean
```

Whether the message was sent by the send in subscriber mode reward.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:114

***

### isHighlighted

```ts
get isHighlighted(): boolean
```

Whether the message was highlighted by the highlight message reward.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:107

***

### isText

```ts
get isText(): boolean
```

Whether the message is a normal text message.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:100

***

### isUserIntro

```ts
get isUserIntro(): boolean
```

Whether the message is an user intro message.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:121

***

### parentReply

```ts
get parentReply(): null | MessageReplyParent<T>
```

The message which was replied by this message. Null if the message doesn't have a reply.

#### Returns

`null` \| [`MessageReplyParent`](/api/chatbot/classes/messagereplyparent/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:128

***

### self

```ts
get self(): boolean
```

Whether the message was sent by the chatbot.

#### Returns

`boolean`

#### Source

twitchfy/packages/chatbot/src/structures/BaseMessage.ts:71

***

### threadReply

```ts
get threadReply(): null | MessageReplyThread<T>
```

The start message of the thread where this message is part of. Null if the message is not part of a thread.

#### Returns

`null` \| [`MessageReplyThread`](/api/chatbot/classes/messagereplythread/)\<`T`\>

#### Source

twitchfy/packages/chatbot/src/structures/Message.ts:135

## Methods

### delete()

```ts
delete(): Promise<void>
```

Deletes the message from the chatroom.

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`BaseMessage`](/api/chatbot/classes/basemessage/).[`delete`](/api/chatbot/classes/basemessage/#delete)

#### Source

twitchfy/packages/chatbot/src/structures/BaseMessage.ts:48

***

### reply()

```ts
reply(message: string): Promise<BaseMessage<T>>
```

Replies to the message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | `string` | The message to reply with. |

#### Returns

`Promise`\<[`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>\>

The message that was sent as a reply.

#### Inherited from

[`BaseMessage`](/api/chatbot/classes/basemessage/).[`reply`](/api/chatbot/classes/basemessage/#reply)

#### Source

twitchfy/packages/chatbot/src/structures/BaseMessage.ts:57
