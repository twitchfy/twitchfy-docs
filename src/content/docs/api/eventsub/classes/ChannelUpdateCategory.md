---
editUrl: false
next: false
prev: false
title: "ChannelUpdateCategory"
---

The category of a channel which was updated in the ChannelUpdate event.

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelUpdateCategory()

```ts
new ChannelUpdateCategory<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelUpdate, K>, 
   id: string, 
name: string): ChannelUpdateCategory<K>
```

Builds up a ChannelUpdateCategory.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> | The subscription which trigger this message. |
| `id` | `string` | The ID of the category. |
| `name` | `string` | The name of the category. |

#### Returns

[`ChannelUpdateCategory`](/api/eventsub/classes/channelupdatecategory/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateCategory.ts:27

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`Base`](/api/eventsub/classes/base/).`connection` |
| `id` | `readonly` | `string` | The ID of the category. | - |
| `name` | `readonly` | `string` | The name of the category. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> | The subscription which trigger this message. | [`Base`](/api/eventsub/classes/base/).`subscription` |
