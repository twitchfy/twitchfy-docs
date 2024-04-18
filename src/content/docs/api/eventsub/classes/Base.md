---
editUrl: false
next: false
prev: false
title: "Base"
---

## Extended by

- [`ChannelAdBreakBeginMessage`](/api/eventsub/classes/channeladbreakbeginmessage/)
- [`ChannelChatClearMessage`](/api/eventsub/classes/channelchatclearmessage/)
- [`ChannelChatClearUserMessagesMessage`](/api/eventsub/classes/channelchatclearusermessagesmessage/)
- [`ChannelFollowMessage`](/api/eventsub/classes/channelfollowmessage/)
- [`ChannelUpdateCategory`](/api/eventsub/classes/channelupdatecategory/)
- [`ChannelUpdateMessage`](/api/eventsub/classes/channelupdatemessage/)
- [`ChannelChatMessageMessage`](/api/eventsub/classes/channelchatmessagemessage/)
- [`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)
- [`BaseBroadcaster`](/api/eventsub/classes/basebroadcaster/)
- [`BaseRequester`](/api/eventsub/classes/baserequester/)
- [`BaseStream`](/api/eventsub/classes/basestream/)
- [`BaseUser`](/api/eventsub/classes/baseuser/)
- [`BaseMessage`](/api/eventsub/classes/basemessage/)

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | - |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new Base(connection, subscription)

```ts
new Base<T, K>(connection: K, subscription: SubscriptionType<T, K>): Base<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |

#### Returns

[`Base`](/api/eventsub/classes/base/)\<`T`, `K`\>

#### Source

[twitchapi/packages/eventsub/src/structures/messages/Base.ts:12](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/structures/messages/Base.ts#L12)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | `K` |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |
