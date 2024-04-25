---
editUrl: false
next: false
prev: false
title: "ChannelFollow"
---

Represents a channel follow event.

## Extends

- `Base`\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Constructors

### new ChannelFollow(chatbot, data)

```ts
new ChannelFollow<T>(chatbot: ChatBot<T>, data: ChannelFollowMessage<EventSubConnectionMap[T]>): ChannelFollow<T>
```

Creates a new instance of the channel follow event.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `chatbot` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. |
| `data` | `ChannelFollowMessage`\<`EventSubConnectionMap`\[`T`\]\> | The data of the follow event returned from the EventSub. |

#### Returns

[`ChannelFollow`](/api/chatbot/classes/channelfollow/)\<`T`\>

#### Overrides

`Base<T>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelFollow.ts:38](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/ChannelFollow.ts#L38)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The broadcaster of the channel who was followed. | - |
| `chatbot` | `readonly` | [`ChatBot`](/api/chatbot/classes/chatbot/)\<`T`\> | The current instance of the chatbot. | `Base.chatbot` |
| `followedAt` | `readonly` | `Date` | The date when the follower followed the channel. | - |
| `follower` | `readonly` | [`BaseUser`](/api/chatbot/classes/baseuser/)\<`T`\> | The follower who followed the channel. | - |

## Accessors

### broadcasterID

```ts
get broadcasterID(): string
```

The ID of the broadcaster who was followed.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelFollow.ts:49](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/ChannelFollow.ts#L49)

***

### chatroomID

```ts
get chatroomID(): string
```

The ID of the chatroom where the follow event occurred.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelFollow.ts:63](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/ChannelFollow.ts#L63)

***

### followerID

```ts
get followerID(): string
```

The ID of the follower who followed the channel.

#### Returns

`string`

#### Source

[twitchapi/packages/chatbot/src/structures/ChannelFollow.ts:56](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/ChannelFollow.ts#L56)
