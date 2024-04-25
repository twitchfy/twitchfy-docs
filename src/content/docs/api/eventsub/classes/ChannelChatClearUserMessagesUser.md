---
editUrl: false
next: false
prev: false
title: "ChannelChatClearUserMessagesUser"
---

## Extends

- [`BaseUser`](/api/eventsub/classes/baseuser/)\<`SubscriptionTypes.ChannelChatClearUserMessages`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> |
| `id` | `string` |
| `login` | `string` |
| `dislayName` | `string` |

#### Returns

[`ChannelChatClearUserMessagesUser`](/api/eventsub/classes/channelchatclearusermessagesuser/)\<`K`\>

#### Overrides

[`BaseUser`](/api/eventsub/classes/baseuser/).[`constructor`](/api/eventsub/classes/baseuser/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelChatClearUserMessages/ChannelChatClearUserMessagesUser.ts:8

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`BaseUser`](/api/eventsub/classes/baseuser/).`connection` |
| `displayName` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`displayName` |
| `id` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`id` |
| `login` | `public` | `string` | [`BaseUser`](/api/eventsub/classes/baseuser/).`login` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClearUserMessages`, `K`\> | [`BaseUser`](/api/eventsub/classes/baseuser/).`subscription` |
