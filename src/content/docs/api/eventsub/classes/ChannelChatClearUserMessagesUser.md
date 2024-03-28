---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesUser"
---

## Extends

- [`BaseUser`](BaseUser.md)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatClearUserMessagesUser(connection, subscription, id, login, dislayName)

```ts
new ChannelChatClearUserMessagesUser<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClearUserMessages, K>, 
   id: string, 
   login: string, 
dislayName: string): ChannelChatClearUserMessagesUser<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClearUserMessages`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `dislayName` | `string` |

#### Returns

[`ChannelChatClearUserMessagesUser`](ChannelChatClearUserMessagesUser.md)\<`K`\>

#### Overrides

[`BaseUser`](BaseUser.md).[`constructor`](BaseUser.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessagesUser.ts:8](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessagesUser.ts#L8)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseUser`](BaseUser.md).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](BaseUser.md).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](BaseUser.md).`id` |
| `login` | `public` | `string` | [`BaseUser`](BaseUser.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatClearUserMessages`, `K`\> | [`BaseUser`](BaseUser.md).`subscription` |
