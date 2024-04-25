---
editUrl: false
next: false
prev: false
title: "ChannelUpdateMessage"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelUpdateMessage(connection, subscription, data)

```ts
new ChannelUpdateMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelUpdate, K>, 
data: ChannelUpdateEvent): ChannelUpdateMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> |
| `data` | [`ChannelUpdateEvent`](/api/eventsub/interfaces/channelupdateevent/) |

#### Returns

[`ChannelUpdateMessage`](/api/eventsub/classes/channelupdatemessage/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateMessage.ts:21

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`ChannelUpdateBroadcaster`](/api/eventsub/classes/channelupdatebroadcaster/)\<`K`\> | - |
| `category` | `public` | [`ChannelUpdateCategory`](/api/eventsub/classes/channelupdatecategory/)\<`K`\> | - |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `labels` | `public` | `string`[] | - |
| `language` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
| `title` | `public` | `string` | - |
