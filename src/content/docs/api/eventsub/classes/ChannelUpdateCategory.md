---
editUrl: false
next: false
prev: false
title: "ChannelUpdateCategory"
---

## Extends

- [`Base`](Base.md)\<`SubscriptionTypes.ChannelUpdate`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) | [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

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
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelUpdate`, `K`\> |
| `id` | `string` |
| `name` | `string` |

#### Returns

[`ChannelUpdateCategory`](ChannelUpdateCategory.md)\<`K`\>

#### Overrides

[`Base`](Base.md).[`constructor`](Base.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateCategory.ts:11](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/structures/messages/ChannelUpdate/ChannelUpdateCategory.ts#L11)

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `connection` | `public` | `K` | [`Base`](Base.md).`connection` |
| `id` | `public` | `string` | - |
| `name` | `public` | `string` | - |
| `subscription` | `public` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`ChannelUpdate`, `K`\> | [`Base`](Base.md).`subscription` |
