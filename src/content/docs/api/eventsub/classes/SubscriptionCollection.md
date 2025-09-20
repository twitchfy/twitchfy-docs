---
editUrl: false
next: false
prev: false
title: "SubscriptionCollection"
---

The collection of subscriptions. This is an extended class of Map.

## Extends

- `Map`\<`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new SubscriptionCollection()

```ts
new SubscriptionCollection<K, T>(entries?: readonly readonly [string, SubscriptionType<T, K>][]): SubscriptionCollection<K, T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `entries`? | readonly readonly [`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>][] |

#### Returns

[`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<`K`, `T`\>

#### Inherited from

`Map<string, SubscriptionType<T, K>>.constructor`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:50

### new SubscriptionCollection()

```ts
new SubscriptionCollection<K, T>(iterable?: Iterable<readonly [string, SubscriptionType<T, K>]>): SubscriptionCollection<K, T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `iterable`? | `Iterable`\<readonly [`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>]\> |

#### Returns

[`SubscriptionCollection`](/api/eventsub/classes/subscriptioncollection/)\<`K`, `T`\>

#### Inherited from

`Map<string, SubscriptionType<T, K>>.constructor`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:49

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | - | `Map.[toStringTag]` |
| `size` | `readonly` | `number` |  | `Map.size` |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` |

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[string, SubscriptionType<T, K>]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>]\>

#### Inherited from

`Map.[iterator]`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:119

***

### clear()

```ts
clear(): void
```

#### Returns

`void`

#### Inherited from

`Map.clear`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:20

***

### delete()

```ts
delete(key: string): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

true if an element in the Map existed and has been removed, or false if the element does not exist.

#### Inherited from

`Map.delete`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:24

***

### entries()

```ts
entries(): IterableIterator<[string, SubscriptionType<T, K>]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### exist()

```ts
exist<U>(type: U, options: SubscriptionTypeOptions[U]): SubscriptionType<U, K>
```

Checks whether a subscription exists in the collection by its type and options.

#### Type parameters

| Type parameter |
| :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type of the subscription. |
| `options` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`U`\] | The options used to create the subscription. |

#### Returns

[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`U`, `K`\>

Whether the subscription exists. If it exists, the subscription is returned.

#### Source

twitchfy/packages/eventsub/src/structures/SubscriptionCollection.ts:38

***

### forEach()

```ts
forEach(callbackfn: (value: SubscriptionType<T, K>, key: string, map: Map<string, SubscriptionType<T, K>>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>, `key`: `string`, `map`: `Map`\<`string`, [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>\>) => `void` |
| `thisArg`? | `any` |

#### Returns

`void`

#### Inherited from

`Map.forEach`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:28

***

### get()

```ts
get<U>(id: string): SubscriptionType<U, K>
```

Gets a subscription from the collection by its id.

#### Type parameters

| Type parameter |
| :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription. |

#### Returns

[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`U`, `K`\>

The subscription if it exists, otherwise undefined.

#### Overrides

`Map.get`

#### Source

twitchfy/packages/eventsub/src/structures/SubscriptionCollection.ts:18

***

### has()

```ts
has(key: string): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

boolean indicating whether an element with the specified key exists or not.

#### Inherited from

`Map.has`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:37

***

### keys()

```ts
keys(): IterableIterator<string>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`string`\>

#### Inherited from

`Map.keys`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### set()

```ts
set<U>(id: string, value: SubscriptionType<U, K>): this
```

Sets a subscription into collection.

#### Type parameters

| Type parameter |
| :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the subscription. |
| `value` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`U`, `K`\> | The subscription to set. |

#### Returns

`this`

The updated collection.

#### Overrides

`Map.set`

#### Source

twitchfy/packages/eventsub/src/structures/SubscriptionCollection.ts:28

***

### values()

```ts
values(): IterableIterator<SubscriptionType<T, K>>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<[`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`T`, `K`\>\>

#### Inherited from

`Map.values`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134
