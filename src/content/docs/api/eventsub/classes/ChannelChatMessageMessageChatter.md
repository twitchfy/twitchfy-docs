---
editUrl: false
next: false
prev: false
title: "ChannelChatMessageMessageChatter"
---

## Extends

- [`BaseUser`](/api/eventsub/classes/baseuser/)\<`SubscriptionTypes.ChannelChatMessage`, `K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `displayName` | `string` |
| `color` | `string` |
| `badges` | [`BadgeData`](/api/eventsub/interfaces/badgedata/)[] |

#### Returns

[`ChannelChatMessageMessageChatter`](/api/eventsub/classes/channelchatmessagemessagechatter/)\<`K`\>

#### Overrides

[`BaseUser`](/api/eventsub/classes/baseuser/).[`constructor`](/api/eventsub/classes/baseuser/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatMessage/ChannelChatMessageMessageChatter.ts:14

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `badges` | `public` | [`Badge`](/api/eventsub/classes/badge/)[] | - |
| `color` | `public` | `string` | - |
| `connection` | `public` | `K` | [`BaseUser`](/api/eventsub/classes/baseuser/).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`id` |
| `login` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatMessage`, `K`\> | [`BaseUser`](/api/eventsub/classes/baseuser/).`subscription` |
