---
editUrl: false
next: false
prev: false
title: "StorageAdapter"
---

## Extended by

- [`RedisAdapter`](RedisAdapter.md)
- [`MongoAdapter`](MongoAdapter.md)

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](../type-aliases/ConnectionTypes.md) |

## Constructors

### new StorageAdapter()

```ts
new StorageAdapter<K>(): StorageAdapter<K>
```

#### Returns

[`StorageAdapter`](StorageAdapter.md)\<`K`\>

## Methods

### delete()

```ts
abstract delete(id: string): any
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`any`

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:14](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/storage/StorageAdapter.ts#L14)

***

### get()

```ts
abstract get<T>(id: string): StorageAdapterGet<K, T> | Promise<StorageAdapterGet<K, T>>
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

[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`, `T`\> \| `Promise`\<[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`, `T`\>\>

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:10](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/storage/StorageAdapter.ts#L10)

***

### getAll()

```ts
abstract getAll(): StorageAdapterGet<K>[] | Promise<StorageAdapterGet<K>[]>
```

#### Returns

[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`\>[] \| `Promise`\<[`StorageAdapterGet`](../type-aliases/StorageAdapterGet.md)\<`K`\>[]\>

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:12](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/storage/StorageAdapter.ts#L12)

***

### set()

```ts
abstract set<T>(id: string, subscription: SubscriptionType<T, K>): any
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

`any`

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:8](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/storage/StorageAdapter.ts#L8)
