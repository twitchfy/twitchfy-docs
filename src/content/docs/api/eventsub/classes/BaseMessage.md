---
editUrl: false
next: false
prev: false
title: "BaseMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
| `data` | [`ChannelChatMessageEvent`](/api/eventsub/interfaces/channelchatmessageevent/) |

#### Returns

[`BaseMessage`](/api/eventsub/classes/basemessage/)\<`T`, `K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/BaseMessage.ts:25](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/structures/messages/BaseMessage.ts#L25)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `bits` | `public` | `number` | - |
| `channelRewardId` | `public` | `string` | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `content` | `public` | `string` | - |
| `fragments` | `public` | [`Fragment`](/api/eventsub/classes/fragment/)\<[`FragmentTypes`](/api/eventsub/type-aliases/fragmenttypes/)\>[] | - |
| `id` | `public` | `string` | - |
| `reply` | `public` | [`MessageReply`](/api/eventsub/classes/messagereply/) | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `type` | `public` | [`MessageTypes`](/api/eventsub/type-aliases/messagetypes/) | - |
