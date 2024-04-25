---
editUrl: false
next: false
prev: false
title: "MongoAdapter"
---

## Extends

- [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<`K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new MongoAdapter()

```ts
new MongoAdapter<K>(): MongoAdapter<K>
```

#### Returns

[`MongoAdapter`](/api/eventsub/classes/mongoadapter/)\<`K`\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`constructor`](/api/eventsub/classes/storageadapter/#constructors)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:10

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

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`delete`](/api/eventsub/classes/storageadapter/#delete)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:52

***

### get()

```ts
get<T>(id: string): Promise<StorageAdapterGet<K, T>>
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

`Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\>\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`get`](/api/eventsub/classes/storageadapter/#get)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:46

***

### getAll()

```ts
getAll(): Promise<StorageAdapterGet<K, SubscriptionTypes>[]>
```

#### Returns

`Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>[]\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`getAll`](/api/eventsub/classes/storageadapter/#getall)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:60

***

### set()

```ts
set<T>(id: string, subscription: SubscriptionType<T, K>): Promise<void>
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

`Promise`\<`void`\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`set`](/api/eventsub/classes/storageadapter/#set)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:14
