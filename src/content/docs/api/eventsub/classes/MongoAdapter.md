---
editUrl: false
next: false
prev: false
title: "MongoAdapter"
---

The MongoDB storage adapter.

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

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:12

## Methods

### delete()

```ts
delete(id: string): Promise<void>
```

Deletes a subscription from the storage.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription which will be deleted. |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`delete`](/api/eventsub/classes/storageadapter/#delete)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:54

***

### get()

```ts
get<T>(id: string): Promise<StorageAdapterGet<K, T>>
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

`Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, `T`\>\>

The basic data which will be needed to reload the subscription. You can attach other data to the object.

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`get`](/api/eventsub/classes/storageadapter/#get)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:48

***

### getAll()

```ts
getAll(): Promise<StorageAdapterGet<K, SubscriptionTypes>[]>
```

Gets all subscriptions from the storage.

#### Returns

`Promise`\<[`StorageAdapterGet`](/api/eventsub/type-aliases/storageadapterget/)\<`K`, [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/)\>[]\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`getAll`](/api/eventsub/classes/storageadapter/#getall)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:62

***

### set()

```ts
set<T>(id: string, subscription: SubscriptionType<T, K>): Promise<void>
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

`Promise`\<`void`\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`set`](/api/eventsub/classes/storageadapter/#set)

#### Source

twitchfy/packages/eventsub/src/storage/adapters/MongoAdapter.ts:16
