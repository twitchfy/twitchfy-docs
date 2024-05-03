---
editUrl: false
next: false
prev: false
title: "StorageAdapter"
---

The base class for building up a storage adapter used for reloading subscriptions.

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

Deletes a subscription from the storage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription which will be deleted. |

#### Returns

`any`

#### Source

twitchfy/packages/eventsub/src/storage/StorageAdapter.ts:34

***

### get()

```ts
abstract get<T>(id: string): StorageAdapterGet<K, T> | Promise<StorageAdapterGet<K, T>>
```

Gets a subscription from the storage.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription which will be get. |

#### Returns

[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\> \| `Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\>\>

The basic data which will be needed to reload the subscription. You can attach other data to the object.

#### Source

twitchfy/packages/eventsub/src/storage/StorageAdapter.ts:23

***

### getAll()

```ts
abstract getAll(): StorageAdapterGet<K>[] | Promise<StorageAdapterGet<K>[]>
```

Gets all subscriptions from the storage.

#### Returns

[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`\>[] \| `Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`\>[]\>

#### Source

twitchfy/packages/eventsub/src/storage/StorageAdapter.ts:28

***

### set()

```ts
abstract set<T>(id: string, subscription: SubscriptionType<T, K>): any
```

Sets a subscription into the storage.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription which will be set. Probably you want to use the id as a key. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\> | The subscription which will be set. |

#### Returns

`any`

#### Source

twitchfy/packages/eventsub/src/storage/StorageAdapter.ts:16
