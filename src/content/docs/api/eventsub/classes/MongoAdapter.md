---
editUrl: false
next: false
prev: false
title: "MongoAdapter"
---

## Extends

- [`StorageAdapter`](StorageAdapter.md)\<`K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new MongoAdapter()

```ts
new MongoAdapter<K>(): MongoAdapter<K>
```

#### Returns

[`MongoAdapter`](MongoAdapter.md)\<`K`\>

#### Overrides

[`StorageAdapter`](StorageAdapter.md).[`constructor`](StorageAdapter.md#constructors)

#### Source

twitchapi/packages/eventsub/src/storage/adapters/MongoAdapter.ts:10

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

twitchapi/packages/eventsub/src/storage/adapters/MongoAdapter.ts:52

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

twitchapi/packages/eventsub/src/storage/adapters/MongoAdapter.ts:46

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

twitchapi/packages/eventsub/src/storage/adapters/MongoAdapter.ts:60

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

twitchapi/packages/eventsub/src/storage/adapters/MongoAdapter.ts:14
