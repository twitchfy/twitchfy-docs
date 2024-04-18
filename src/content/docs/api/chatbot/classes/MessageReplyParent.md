---
editUrl: false
next: false
prev: false
title: "MessageReplyParent"
---

Represents a message in a chatroom that was replied by another message.

## Extends

- [`BaseMessage`](/api/chatbot/classes/basemessage/)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new MessageReplyParent(chatbot, data, chatroom)

```ts
new MessageReplyParent<T>(
   chatbot: ChatBot<T>, 
   data: BaseMessageData, 
chatroom: ChatRoom<T>): MessageReplyParent<T>
```

Creates a new instance of the message reply parent.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | [`BaseMessageData`](/api/chatbot/interfaces/basemessagedata/) | The data of the message. |
| `chatroom` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the message was sent. |

#### Returns

[`MessageReplyParent`](/api/chatbot/classes/messagereplyparent/)\<`T`\>

#### Overrides

[`BaseMessage`](/api/chatbot/classes/basemessage/).[`constructor`](/api/chatbot/classes/basemessage/#constructors)

#### Source

[twitchapi/packages/chatbot/src/structures/MessageReplyParent.ts:23](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/MessageReplyParent.ts#L23)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `author` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The author of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`author` |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`chatbot` |
| `chatroom` | `readonly` | [`ChatRoom`](/api/chatbot/classes/chatroom/)\<`T`\> | The chatroom where the message was sent. | - |
| `content` | `readonly` | `null` \| `string` | The content of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`content` |
| `id` | `readonly` | `string` | The id of the message. | [`BaseMessage`](/api/chatbot/classes/basemessage/).`id` |

## Accessors

### chatroomID

```ts
get chatroomID(): string
```

The ID of the chatroom where the message was sent.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseMessage.ts:64](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseMessage.ts#L64)

***

### self

```ts
get self(): boolean
```

Whether the message was sent by the chatbot.

#### Returns

`boolean`

#### Source

[twitchapi/packages/chatbot/src/structures/BaseMessage.ts:71](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseMessage.ts#L71)

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

[twitchapi/packages/chatbot/src/structures/BaseMessage.ts:48](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseMessage.ts#L48)

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

[twitchapi/packages/chatbot/src/structures/BaseMessage.ts:57](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/structures/BaseMessage.ts#L57)
