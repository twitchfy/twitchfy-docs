---
editUrl: false
next: false
prev: false
title: "ChannelMessage"
---

## Extends

- [`BaseMessage`](BaseMessage.md)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelMessage(connection, subscription, data)

```ts
new ChannelMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
data: ChannelChatMessageEvent): ChannelMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](../interfaces/ChannelChatMessageEvent.md) |

#### Returns

[`ChannelMessage`](ChannelMessage.md)\<`K`\>

#### Overrides

[`BaseMessage`](BaseMessage.md).[`constructor`](BaseMessage.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelMessage.ts:8](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelMessage.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `bits` | `public` | `number` | [`BaseMessage`](BaseMessage.md).`bits` |
| `channelRewardId` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`channelRewardId` |
| `connection` | `public` | `K` | [`BaseMessage`](BaseMessage.md).`connection` |
| `content` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`content` |
| `fragments` | `public` | [`Fragment`](Fragment.md)\<[`FragmentTypes`](../type-aliases/FragmentTypes.md)\>[] | [`BaseMessage`](BaseMessage.md).`fragments` |
| `id` | `public` | `string` | [`BaseMessage`](BaseMessage.md).`id` |
| `reply` | `public` | [`MessageReply`](MessageReply.md) | [`BaseMessage`](BaseMessage.md).`reply` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> | [`BaseMessage`](BaseMessage.md).`subscription` |
| `type` | `public` | [`MessageTypes`](../type-aliases/MessageTypes.md) | [`BaseMessage`](BaseMessage.md).`type` |
