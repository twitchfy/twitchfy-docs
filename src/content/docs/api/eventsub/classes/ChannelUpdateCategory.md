---
editUrl: false
next: false
prev: false
title: "ChannelUpdateCategory"
---

## Extends

- [`Base`](/api/eventsub/classes/base/)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelUpdateCategory(connection, subscription, id, name)

```ts
new ChannelUpdateCategory<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelUpdate, K>, 
   id: string, 
name: string): ChannelUpdateCategory<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> |
| `id` | `string` |
| `name` | `string` |

#### Returns

[`ChannelUpdateCategory`](/api/eventsub/classes/channelupdatecategory/)\<`K`\>

#### Overrides

[`Base`](/api/eventsub/classes/base/).[`constructor`](/api/eventsub/classes/base/#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateCategory.ts:11](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateCategory.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](/api/eventsub/classes/base/).`connection` |
| `id` | `public` | `string` | - |
| `name` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelUpdate`, `K`\> | [`Base`](/api/eventsub/classes/base/).`subscription` |
