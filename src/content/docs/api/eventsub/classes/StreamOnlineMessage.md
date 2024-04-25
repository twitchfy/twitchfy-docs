---
editUrl: false
next: false
prev: false
title: "StreamOnlineMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new StreamOnlineMessage(connection, subscription, data)

```ts
new StreamOnlineMessage<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
data: StreamOnlineEvent): StreamOnlineMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> |
| `data` | [`StreamOnlineEvent`](/api/eventsub/interfaces/streamonlineevent/) |

#### Returns

[`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineMessage.ts:14](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineMessage.ts#L14)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`StreamOnlineBroadcaster`](/api/eventsub/classes/streamonlinebroadcaster/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `stream` | `public` | [`StreamOnlineStream`](/api/eventsub/classes/streamonlinestream/)\<`K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
