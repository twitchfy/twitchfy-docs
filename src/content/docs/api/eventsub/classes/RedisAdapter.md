---
editUrl: false
next: false
prev: false
title: "RedisAdapter"
---

## Extends

- [`StorageAdapter`](StorageAdapter.md)\<`K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new RedisAdapter(data)

```ts
new RedisAdapter<K>(data: Object | Object | Object): RedisAdapter<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Object` \| `Object` \| `Object` |

#### Returns

[`RedisAdapter`](RedisAdapter.md)\<`K`\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`constructor`](StorageAdapter.md#constructors)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:14](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L14)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `client` | `public` | `Redis` |

## Methods

### delete()

```ts
delete(id: string): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`delete`](StorageAdapter.md#delete)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:49](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L49)

***

### get()

```ts
get<T>(id: string): Promise<StorageAdapterGet<K, T>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`, `T`\>\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`get`](StorageAdapter.md#get)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:43](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L43)

***

### getAll()

```ts
getAll(): Promise<StorageAdapterGet<K, SubscriptionTypes>[]>
```

#### Returns

`Promise`\<[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`, [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md)\>[]\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`getAll`](StorageAdapter.md#getall)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:57](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L57)

***

### set()

```ts
set<T>(id: string, subscription: SubscriptionType<T, K>): Promise<void>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) | [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `subscription` | [`SubscriptionType`](../type-aliases/SubscriptionType.md)\<`T`, `K`\> |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`set`](StorageAdapter.md#set)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:22](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L22)
