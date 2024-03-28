---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesMessage"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatClearUserMessagesMessage(connection, subscription, data)

```ts
new ChannelChatClearUserMessagesMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClearUserMessages, K>, 
data: ChannelChatClearUserMessagesEvent): ChannelChatClearUserMessagesMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClearUserMessages`, `K`\> |
| `data` | [`ChannelChatClearUserMessagesEvent`](../interfaces/ChannelChatClearUserMessagesEvent.md) |

#### Returns

[`ChannelChatClearUserMessagesMessage`](ChannelChatClearUserMessagesMessage.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessages.ts:14

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatClearUserMessagesBroadcaster`](ChannelChatClearUserMessagesBroadcaster.md)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClearUserMessages`, `K`\> | [`Base`](Base.md).`subscription` |
| `user` | `public` | [`ChannelChatClearUserMessagesUser`](ChannelChatClearUserMessagesUser.md)\<`K`\> | - |
