---
editUrl: false
next: false
prev: false
title: "Collection"
---

A collection of key-value pairs.

## Extends

- `Map`\<`T`, `V`\>

## Type parameters

| Type parameter |
| :------ |
| `T` extends `string` \| `number` \| `symbol` |
| `V` |

## Constructors

### new Collection(entries)

```ts
new Collection<T, V>(entries?: null | readonly readonly [T, V][]): Collection<T, V>
```

Creates a new collection.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `entries`? | `null` \| readonly readonly [`T`, `V`][] | The entries to set in the collection. |

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`T`, `V`\>

#### Overrides

`Map<T, V>.constructor`

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:11](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L11)

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `[toStringTag]` | `readonly` | `string` | - | `Map.[toStringTag]` |
| `size` | `readonly` | `number` |  | `Map.size` |
| `[species]` | `readonly` | `MapConstructor` | - | `Map.[species]` |

## Methods

### `[iterator]`()

```ts
iterator: IterableIterator<[T, V]>
```

Returns an iterable of entries in the map.

#### Returns

`IterableIterator`\<[`T`, `V`]\>

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
delete(key: T): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `T` |

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
entries(): IterableIterator<[T, V]>
```

Returns an iterable of key, value pairs for every entry in the map.

#### Returns

`IterableIterator`\<[`T`, `V`]\>

#### Inherited from

`Map.entries`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:124

***

### every()

```ts
every(fn: (value: V, key: T, collection: this) => boolean): boolean
```

Checks if every value satisfies the condition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `T`, `collection`: `this`) => `boolean` | The function to execute. |

#### Returns

`boolean`

Whether every value satisfies the condition.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:76](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L76)

***

### filter()

```ts
filter(fn: (value: V, key: T, collection: this) => boolean): Collection<T, V>
```

Filters the collection by a condition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `T`, `collection`: `this`) => `boolean` | The function to execute. |

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`T`, `V`\>

The filtered collection.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:34](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L34)

***

### find()

```ts
find(fn: (value: V, key: T, collection: this) => boolean): undefined | V
```

Finds the first value that satisfies the condition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `T`, `collection`: `this`) => `boolean` | The function to execute. |

#### Returns

`undefined` \| `V`

Returns the value if found, otherwise undefined.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:20](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L20)

***

### first()

```ts
first(): undefined | V
```

Returns the first value of the collection.

#### Returns

`undefined` \| `V`

The first value of the collection.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:103](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L103)

***

### forEach()

```ts
forEach(callbackfn: (value: V, key: T, map: Map<T, V>) => void, thisArg?: any): void
```

Executes a provided function once per each key/value pair in the Map, in insertion order.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `V`, `key`: `T`, `map`: `Map`\<`T`, `V`\>) => `void` |
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
get(key: T): undefined | V
```

Returns a specified element from the Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `T` |

#### Returns

`undefined` \| `V`

Returns the element associated with the specified key. If no element is associated with the specified key, undefined is returned.

#### Inherited from

`Map.get`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:33

***

### has()

```ts
has(key: T): boolean
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `T` |

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
keys(): IterableIterator<T>
```

Returns an iterable of keys in the map

#### Returns

`IterableIterator`\<`T`\>

#### Inherited from

`Map.keys`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:129

***

### map()

```ts
map<T2>(fn: (value: V, key: T, collection: this) => T2): Collection<T, T2>
```

Maps the collection.

#### Type parameters

| Type parameter |
| :------ |
| `T2` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `T`, `collection`: `this`) => `T2` | The function to execute. |

#### Returns

[`Collection`](/api/chatbot/classes/collection/)\<`T`, `T2`\>

The mapped collection.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:49](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L49)

***

### reduce()

```ts
reduce<T2>(fn: (accumulator: T2, value: V, key: T, collection: this) => T2, initial: T2): T2
```

Reduces the collection to a single value.

#### Type parameters

| Type parameter |
| :------ |
| `T2` |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`accumulator`: `T2`, `value`: `V`, `key`: `T`, `collection`: `this`) => `T2` | The function to execute. |
| `initial` | `T2` | The initial value. |

#### Returns

`T2`

The reduced value.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:91](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L91)

***

### set()

```ts
set(key: T, value: V): this
```

Adds a new element with a specified key and value to the Map. If an element with the same key already exists, the element will be updated.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `T` |
| `value` | `V` |

#### Returns

`this`

#### Inherited from

`Map.set`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.collection.d.ts:41

***

### some()

```ts
some(fn: (value: V, key: T, collection: this) => boolean): boolean
```

Checks if any value satisfies the condition.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`value`: `V`, `key`: `T`, `collection`: `this`) => `boolean` | The function to execute. |

#### Returns

`boolean`

Whether any value satisfies the condition.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:62](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L62)

***

### toArray()

```ts
toArray(): V[]
```

Transform the collection into an array containing the values of it.

#### Returns

`V`[]

The array containing the values of the collection.

#### Source

[twitchapi/packages/chatbot/src/structures/Collection.ts:111](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/structures/Collection.ts#L111)

***

### values()

```ts
values(): IterableIterator<V>
```

Returns an iterable of values in the map

#### Returns

`IterableIterator`\<`V`\>

#### Inherited from

`Map.values`

#### Source

node\_modules/.pnpm/typescript@5.4.5/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:134
