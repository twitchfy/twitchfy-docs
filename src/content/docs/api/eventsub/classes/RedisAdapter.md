---
editUrl: false
next: false
prev: false
title: "RedisAdapter"
---

## Extends

- [`StorageAdapter`](/api/eventsub/classes/storageadapter/)\<`K`\>

## Type parameters

| Type parameter |
| :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

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

[`RedisAdapter`](/api/eventsub/classes/redisadapter/)\<`K`\>

#### Overrides

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`constructor`](/api/eventsub/classes/storageadapter/#constructors)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:14](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L14)

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

[`StorageAdapter`](/api/eventsub/classes/storageadapter/).[`delete`](/api/eventsub/classes/storageadapter/#delete)

#### Source

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:49](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L49)

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

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:43](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L43)

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

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:57](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L57)

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

[twitchapi/packages/eventsub/src/storage/adapters/RedisAdapter.ts:22](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/storage/adapters/RedisAdapter.ts#L22)
