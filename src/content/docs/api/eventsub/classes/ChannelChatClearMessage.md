---
editUrl: false
next: false
prev: false
title: "ChannelChatClearMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelChatClear`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelChatClearMessage(connection, subscription, data)

```ts
new ChannelChatClearMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelChatClear, K>, 
data: ChannelChatClearEvent): ChannelChatClearMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> |
| `data` | [`ChannelChatClearEvent`](/api/eventsub/interfaces/channelchatclearevent/) |

#### Returns

[`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts:11](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/structures/messages/ChannelChatClear/ChannelChatClearMessage.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelChatClearBroadcaster`](/api/eventsub/classes/channelchatclearbroadcaster/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelChatClear`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
