---
editUrl: false
next: false
prev: false
title: "StorageAdapter"
---

## Extended by

- [`RedisAdapter`](/api/eventsub/classes/redisadapter/)
- [`MongoAdapter`](/api/eventsub/classes/mongoadapter/)

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new StorageAdapter()

```ts
new StorageAdapter<K>(): StorageAdapter<K>
```

#### Returns

[`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<`K`\>

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

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:14](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/StorageAdapter.ts#L14)

***

### get()

```ts
abstract get<T>(id: string): StorageAdapterGet<K, T> | Promise<StorageAdapterGet<K, T>>
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\> \| `Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\>\>

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:10](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/StorageAdapter.ts#L10)

***

### getAll()

```ts
abstract getAll(): StorageAdapterGet<K>[] | Promise<StorageAdapterGet<K>[]>
```

#### Returns

[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`\>[] \| `Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`\>[]\>

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:12](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/StorageAdapter.ts#L12)

***

### set()

```ts
abstract set<T>(id: string, subscription: SubscriptionType<T, K>): any
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `id` | `string` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> |

#### Returns

`any`

#### Source

[twitchapi/packages/eventsub/src/storage/StorageAdapter.ts:8](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/storage/StorageAdapter.ts#L8)
