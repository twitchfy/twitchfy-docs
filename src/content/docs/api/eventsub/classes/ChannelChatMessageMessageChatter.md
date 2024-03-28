---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessageChatter"
---

## Extends

- [`BaseUser`](BaseUser.md)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new ChannelChatMessageMessageChatter(connection, subscription, id, login, displayName, color, badges)

```ts
new ChannelChatMessageMessageChatter<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatMessage, K>, 
   id: string, 
   login: string, 
   displayName: string, 
   color: string, 
badges: BadgeData[]): ChannelChatMessageMessageChatter<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |
| `color` | `string` |
| `badges` | [`BadgeData`](../interfaces/BadgeData.md)[] |

#### Returns

[`ChannelChatMessageMessageChatter`](ChannelChatMessageMessageChatter.md)\<`K`\>

#### Overrides

[`BaseUser`](BaseUser.md).[`constructor`](BaseUser.md#constructors)

#### Source

twitchapi/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessageChatter.ts:14

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `badges` | `public` | `Badge`[] | - |
| `color` | `public` | `string` | - |
| `connection` | `public` | `K` | [`BaseUser`](BaseUser.md).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](BaseUser.md).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](BaseUser.md).`id` |
| `login` | `public` | `string` | [`BaseUser`](BaseUser.md).`login` |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelChatMessage`, `K`\> | [`BaseUser`](BaseUser.md).`subscription` |
