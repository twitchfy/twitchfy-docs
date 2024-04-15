---
editUrl: false
next: false
prev: false
title: "BaseMessage"
---

## Extends

- [`Base`](Base.md)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | - |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new BaseMessage(connection, subscription, data)

```ts
new BaseMessage<T, K>(
   connection: K, 
   subscription: SubscriptionType<T, K>, 
data: ChannelChatMessageEvent): BaseMessage<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](../interfaces/ChannelChatMessageEvent.md) |

#### Returns

[`BaseMessage`](BaseMessage.md)\<`T`, `K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/BaseMessage.ts:25](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/BaseMessage.ts#L25)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `bits` | `public` | `number` | - |
| `channelRewardId` | `public` | `string` | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `content` | `public` | `string` | - |
| `fragments` | `public` | [`Fragment`](Fragment.md)\<[`FragmentTypes`](../type-aliases/FragmentTypes.md)\>[] | - |
| `id` | `public` | `string` | - |
| `reply` | `public` | [`MessageReply`](MessageReply.md) | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> | [`Base`](Base.md).`subscription` |
| `type` | `public` | [`MessageTypes`](../type-aliases/MessageTypes.md) | - |
