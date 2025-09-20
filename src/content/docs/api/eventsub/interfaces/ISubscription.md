---
editUrl: false
next: false
prev: false
title: "ISubscription"
---

The interface of the schema for saving subscription within the MongoAdapter.

## Extends

- `Document`

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Properties

| Property | Type | Description | Overrides | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `$locals` | `Record`\<`string`, `unknown`\> | Empty object that you can use for storing properties on the document. This is handy for passing data to middleware without conflicting with Mongoose internals. | `Document.$locals` | `Document.$locals` |
| `$op` | `"save"` \| `"validate"` \| `"remove"` | A string containing the current operation that Mongoose is executing on this document. Can be `null`, `'save'`, `'validate'`, or `'remove'`. | `Document.$op` | `Document.$op` |
| `$where` | `Record`\<`string`, `unknown`\> | Set this property to add additional query filters when Mongoose saves this document and `isNew` is false. | `Document.$where` | `Document.$where` |
| `_id` | `unknown` | This documents _id. | `Document._id` | `Document._id` |
| `baseModelName?` | `string` | If this is a discriminator model, `baseModelName` is the name of the base model. | `Document.baseModelName` | `Document.baseModelName` |
| `collection` | `Collection`\<`Document`\> | Collection the model uses. | `Document.collection` | `Document.collection` |
| `db` | `Connection` | Connection the model uses. | `Document.db` | `Document.db` |
| `errors?` | `ValidationError` | Returns the current validation errors. | `Document.errors` | `Document.errors` |
| `id` | `string` | - | `Document.id` | `Document.id` |
| `isNew` | `boolean` | Boolean flag specifying if the document is new. | `Document.isNew` | `Document.isNew` |
| `nonce?` | `string` | - | - | - |
| `options` | [`SubscriptionTypeOptions`](/api/eventsub/interfaces/subscriptiontypeoptions/)\[`T`\] | - | - | - |
| `schema` | `Schema`\<`any`, `Model`\<`any`, `any`, `any`, `any`, `any`, `any`\>, `object`, `object`, `object`, `object`, `DefaultSchemaOptions`, `object`, `Document`\<`unknown`, `object`, `FlatRecord`\<`object`\>, `object`, `ResolveSchemaOptions`\<`DefaultSchemaOptions`\>\> & `FlatRecord`\<`object`\> & `Required`\<`object`\> & `object`\> | The document's schema. | `Document.schema` | `Document.schema` |
| `secret?` | `string` | - | - | - |
| `type` | `T` | - | - | - |

## Methods

### $assertPopulated()

```ts
$assertPopulated<Paths>(path: string | string[], values?: Partial<Paths>): Omit<ISubscription<T>, keyof Paths> & Paths
```

Assert that a given path or paths is populated. Throws an error if not populated.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Paths` | `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `values`? | `Partial`\<`Paths`\> |

#### Returns

`Omit`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, keyof `Paths`\> & `Paths`

#### Inherited from

`Document.$assertPopulated`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:28

***

### $clearModifiedPaths()

```ts
$clearModifiedPaths(): this
```

Clear the document's modified paths.

#### Returns

`this`

#### Inherited from

`Document.$clearModifiedPaths`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:31

***

### $clone()

```ts
$clone(): this
```

Returns a deep clone of this document

#### Returns

`this`

#### Inherited from

`Document.$clone`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:34

***

### $createModifiedPathsSnapshot()

```ts
$createModifiedPathsSnapshot(): ModifiedPathsSnapshot
```

Creates a snapshot of this document's internal change tracking state. You can later
reset this document's change tracking state using `$restoreModifiedPathsSnapshot()`.

#### Returns

`ModifiedPathsSnapshot`

#### Inherited from

`Document.$createModifiedPathsSnapshot`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:40

***

### $getAllSubdocs()

```ts
$getAllSubdocs(): Document<unknown, any, any, Record<string, any>, object>[]
```

#### Returns

`Document`\<`unknown`, `any`, `any`, `Record`\<`string`, `any`\>, `object`\>[]

#### Inherited from

`Document.$getAllSubdocs`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:43

***

### $getPopulatedDocs()

```ts
$getPopulatedDocs(): Document<unknown, any, any, Record<string, any>, object>[]
```

Returns an array of all populated documents associated with the query

#### Returns

`Document`\<`unknown`, `any`, `any`, `Record`\<`string`, `any`\>, `object`\>[]

#### Inherited from

`Document.$getPopulatedDocs`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:55

***

### $ignore()

```ts
$ignore(path: string): void
```

Don't run validation on this path or persist changes to this path.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

`Document.$ignore`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:46

***

### $inc()

```ts
$inc(path: string | string[], val?: number): this
```

Increments the numeric value at `path` by the given `val`.
When you call `save()` on this document, Mongoose will send a
`$inc` as opposed to a `$set`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |
| `val`? | `number` |

#### Returns

`this`

#### Inherited from

`Document.$inc`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:62

***

### $isDefault()

```ts
$isDefault(path?: string): boolean
```

Checks if a path is set to its default. If no path set, checks if any path is set to its default.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path`? | `string` |

#### Returns

`boolean`

#### Inherited from

`Document.$isDefault`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:49

***

### $isDeleted()

```ts
$isDeleted(val?: boolean): boolean
```

Getter/setter, determines whether the document was removed or not.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `val`? | `boolean` |

#### Returns

`boolean`

#### Inherited from

`Document.$isDeleted`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:52

***

### $isEmpty()

```ts
$isEmpty(path: string): boolean
```

Returns true if the given path is nullish or only contains empty objects.
Useful for determining whether this subdoc will get stripped out by the
[minimize option](/docs/guide.html#minimize).

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

`Document.$isEmpty`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:69

***

### $isValid()

```ts
$isValid(path: string): boolean
```

Checks if a path is invalid

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Inherited from

`Document.$isValid`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:72

***

### $markValid()

```ts
$markValid(path: string): void
```

Marks a path as valid, removing existing validation errors.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Inherited from

`Document.$markValid`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:82

***

### $model()

#### $model(name)

```ts
$model<ModelType>(name: string): ModelType
```

Returns the model with the given name on this document's associated connection.

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `ModelType` | `Model`\<`unknown`, `object`, `object`, `object`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`, `any`\> |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:85

#### $model()

```ts
$model<ModelType>(): ModelType
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `ModelType` | `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\> |

##### Returns

`ModelType`

##### Inherited from

`Document.$model`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:86

***

### $parent()

```ts
$parent(): Document<unknown, any, any, Record<string, any>, object>
```

If this document is a subdocument or populated document, returns the
document's parent. Returns undefined otherwise.

#### Returns

`Document`\<`unknown`, `any`, `any`, `Record`\<`string`, `any`\>, `object`\>

#### Inherited from

`Document.$parent`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:234

***

### $restoreModifiedPathsSnapshot()

```ts
$restoreModifiedPathsSnapshot(snapshot: ModifiedPathsSnapshot): this
```

Restore this document's change tracking state to the given snapshot.
Note that `$restoreModifiedPathsSnapshot()` does **not** modify the document's
properties, just resets the change tracking state.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `snapshot` | `ModifiedPathsSnapshot` |

#### Returns

`this`

#### Inherited from

`Document.$restoreModifiedPathsSnapshot`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:99

***

### $session()

```ts
$session(session?: ClientSession): ClientSession
```

Getter/setter around the session associated with this document. Used to
automatically set `session` if you `save()` a doc that you got from a
query with an associated session.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session`? | `ClientSession` |

#### Returns

`ClientSession`

#### Inherited from

`Document.$session`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:106

***

### $set()

#### $set(path, val, type, options)

```ts
$set(
   path: string | Record<string, any>, 
   val: any, 
   type: any, 
   options?: DocumentSetOptions): this
```

Alias for `set()`, used internally to avoid conflicts

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `type` | `any` |
| `options`? | `DocumentSetOptions` |

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:109

#### $set(path, val, options)

```ts
$set(
   path: string | Record<string, any>, 
   val: any, 
   options?: DocumentSetOptions): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `options`? | `DocumentSetOptions` |

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:110

#### $set(value)

```ts
$set(value: string | Record<string, any>): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` \| `Record`\<`string`, `any`\> |

##### Returns

`this`

##### Inherited from

`Document.$set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:111

***

### deleteOne()

```ts
deleteOne(options?: QueryOptions<unknown>): any
```

Removes this document from the db.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `QueryOptions`\<`unknown`\> |

#### Returns

`any`

#### Inherited from

`Document.deleteOne`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:126

***

### depopulate()

```ts
depopulate<Paths>(path?: string | string[]): MergeType<ISubscription<T>, Paths>
```

Takes a populated field and returns it to its unpopulated state. If called with
no arguments, then all populated fields are returned to their unpopulated state.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Paths` | `object` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path`? | `string` \| `string`[] |

#### Returns

`MergeType`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, `Paths`\>

#### Inherited from

`Document.depopulate`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:138

***

### directModifiedPaths()

```ts
directModifiedPaths(): string[]
```

Returns the list of paths that have been directly modified. A direct
modified path is a path that you explicitly set, whether via `doc.foo = 'bar'`,
`Object.assign(doc, { foo: 'bar' })`, or `doc.set('foo', 'bar')`.

#### Returns

`string`[]

#### Inherited from

`Document.directModifiedPaths`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:145

***

### equals()

```ts
equals(doc: Document<unknown, any, any, Record<string, any>, object>): boolean
```

Returns true if this document is equal to another document.

Documents are considered equal when they have matching `_id`s, unless neither
document has an `_id`, in which case this function falls back to using
`deepEqual()`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `doc` | `Document`\<`unknown`, `any`, `any`, `Record`\<`string`, `any`\>, `object`\> |

#### Returns

`boolean`

#### Inherited from

`Document.equals`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:154

***

### get()

#### get(path, type, options)

```ts
get<T>(
   path: T, 
   type?: any, 
   options?: any): any
```

Returns the value of a path.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |
| `type`? | `any` |
| `options`? | `any` |

##### Returns

`any`

##### Inherited from

`Document.get`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:160

#### get(path, type, options)

```ts
get(
   path: string, 
   type?: any, 
   options?: any): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |
| `type`? | `any` |
| `options`? | `any` |

##### Returns

`any`

##### Inherited from

`Document.get`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:161

***

### getChanges()

```ts
getChanges(): UpdateQuery<ISubscription<T>>
```

Returns the changes that happened to the document
in the format that will be sent to MongoDB.

#### Returns

`UpdateQuery`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>\>

#### Inherited from

`Document.getChanges`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:167

***

### increment()

```ts
increment(): this
```

Signal that we desire an increment of this documents version.

#### Returns

`this`

#### Inherited from

`Document.increment`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:173

***

### init()

```ts
init(obj: AnyObject, opts?: AnyObject): this
```

Initializes the document without setters or marking anything modified.
Called internally after a document is returned from mongodb. Normally,
you do **not** need to call this function on your own.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `obj` | `AnyObject` |
| `opts`? | `AnyObject` |

#### Returns

`this`

#### Inherited from

`Document.init`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:180

***

### invalidate()

#### invalidate(path, errorMsg, value, kind)

```ts
invalidate<T>(
   path: T, 
   errorMsg: string | NativeError, 
   value?: any, 
   kind?: string): NativeError
```

Marks a path as invalid, causing validation to fail.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |
| `errorMsg` | `string` \| `NativeError` |
| `value`? | `any` |
| `kind`? | `string` |

##### Returns

`NativeError`

##### Inherited from

`Document.invalidate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:183

#### invalidate(path, errorMsg, value, kind)

```ts
invalidate(
   path: string, 
   errorMsg: string | NativeError, 
   value?: any, 
   kind?: string): NativeError
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |
| `errorMsg` | `string` \| `NativeError` |
| `value`? | `any` |
| `kind`? | `string` |

##### Returns

`NativeError`

##### Inherited from

`Document.invalidate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:184

***

### isDirectModified()

#### isDirectModified(path)

```ts
isDirectModified<T>(path: T | T[]): boolean
```

Returns true if `path` was directly set and modified, else false.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` \| `T`[] |

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:187

#### isDirectModified(path)

```ts
isDirectModified(path: string | string[]): boolean
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `string`[] |

##### Returns

`boolean`

##### Inherited from

`Document.isDirectModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:188

***

### isDirectSelected()

#### isDirectSelected(path)

```ts
isDirectSelected<T>(path: T): boolean
```

Checks if `path` was explicitly selected. If no projection, always returns true.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:191

#### isDirectSelected(path)

```ts
isDirectSelected(path: string): boolean
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`boolean`

##### Inherited from

`Document.isDirectSelected`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:192

***

### isInit()

#### isInit(path)

```ts
isInit<T>(path: T): boolean
```

Checks if `path` is in the `init` state, that is, it was set by `Document#init()` and not modified since.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:195

#### isInit(path)

```ts
isInit(path: string): boolean
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`boolean`

##### Inherited from

`Document.isInit`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:196

***

### isModified()

#### isModified(path, options)

```ts
isModified<T>(path?: T | T[], options?: object): boolean
```

Returns true if any of the given paths are modified, else false. If no arguments, returns `true` if any path
in this document is modified.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path`? | `T` \| `T`[] |
| `options`? | `object` |
| `options.ignoreAtomics`? | `boolean` |

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:202

#### isModified(path, options)

```ts
isModified(path?: string | string[], options?: object): boolean
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path`? | `string` \| `string`[] |
| `options`? | `object` |
| `options.ignoreAtomics`? | `boolean` |

##### Returns

`boolean`

##### Inherited from

`Document.isModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:203

***

### isSelected()

#### isSelected(path)

```ts
isSelected<T>(path: T): boolean
```

Checks if `path` was selected in the source query which initialized this document.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:209

#### isSelected(path)

```ts
isSelected(path: string): boolean
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`boolean`

##### Inherited from

`Document.isSelected`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:210

***

### markModified()

#### markModified(path, scope)

```ts
markModified<T>(path: T, scope?: any): void
```

Marks the path as having pending changes to write to the db.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |
| `scope`? | `any` |

##### Returns

`void`

##### Inherited from

`Document.markModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:213

#### markModified(path, scope)

```ts
markModified(path: string, scope?: any): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |
| `scope`? | `any` |

##### Returns

`void`

##### Inherited from

`Document.markModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:214

***

### model()

#### model(name)

```ts
model<ModelType>(name: string): ModelType
```

Returns the model with the given name on this document's associated connection.

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `ModelType` | `Model`\<`unknown`, `object`, `object`, `object`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`, `any`\> |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

##### Returns

`ModelType`

##### Inherited from

`Document.model`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:217

#### model()

```ts
model<ModelType>(): ModelType
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `ModelType` | `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\> |

##### Returns

`ModelType`

##### Inherited from

`Document.model`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:218

***

### modifiedPaths()

```ts
modifiedPaths(options?: object): string[]
```

Returns the list of paths that have been modified.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `object` |
| `options.includeChildren`? | `boolean` |

#### Returns

`string`[]

#### Inherited from

`Document.modifiedPaths`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:221

***

### overwrite()

```ts
overwrite(obj: AnyObject): this
```

Overwrite all values in this document with the values of `obj`, except
for immutable properties. Behaves similarly to `set()`, except for it
unsets all properties that aren't in `obj`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `obj` | `AnyObject` |

#### Returns

`this`

#### Inherited from

`Document.overwrite`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:228

***

### populate()

#### populate(path)

```ts
populate<Paths>(path: string | PopulateOptions | (string | PopulateOptions)[]): Promise<MergeType<ISubscription<T>, Paths>>
```

Populates document references.

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Paths` | `object` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `PopulateOptions` \| (`string` \| `PopulateOptions`)[] |

##### Returns

`Promise`\<`MergeType`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, `Paths`\>\>

##### Inherited from

`Document.populate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:237

#### populate(path, select, model, match, options)

```ts
populate<Paths>(
   path: string, 
   select?: string | AnyObject, 
   model?: Model<any, object, object, object, any, any>, 
   match?: AnyObject, 
options?: PopulateOptions): Promise<MergeType<ISubscription<T>, Paths>>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `Paths` | `object` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |
| `select`? | `string` \| `AnyObject` |
| `model`? | `Model`\<`any`, `object`, `object`, `object`, `any`, `any`\> |
| `match`? | `AnyObject` |
| `options`? | `PopulateOptions` |

##### Returns

`Promise`\<`MergeType`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, `Paths`\>\>

##### Inherited from

`Document.populate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:238

***

### populated()

```ts
populated(path: string): any
```

Gets _id(s) used during population of the given `path`. If the path was not populated, returns `undefined`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`any`

#### Inherited from

`Document.populated`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:241

***

### replaceOne()

```ts
replaceOne(replacement?: AnyObject, options?: QueryOptions<unknown>): Query<any, ISubscription<T>, object, unknown, "find", Record<string, never>>
```

Sends a replaceOne command with this document `_id` as the query selector.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `replacement`? | `AnyObject` |
| `options`? | `QueryOptions`\<`unknown`\> |

#### Returns

`Query`\<`any`, [`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, `object`, `unknown`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Document.replaceOne`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:244

***

### save()

```ts
save(options?: SaveOptions): Promise<ISubscription<T>>
```

Saves this document by inserting a new document into the database if [document.isNew](/docs/api/document.html#document_Document-isNew) is `true`, or sends an [updateOne](/docs/api/document.html#document_Document-updateOne) operation with just the modified paths if `isNew` is `false`.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `SaveOptions` |

#### Returns

`Promise`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>\>

#### Inherited from

`Document.save`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:247

***

### set()

#### set(path, val, type, options)

```ts
set<T>(
   path: T, 
   val: any, 
   type: any, 
   options?: DocumentSetOptions): this
```

Sets the value of a path, or many paths.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |
| `val` | `any` |
| `type` | `any` |
| `options`? | `DocumentSetOptions` |

##### Returns

`this`

##### Inherited from

`Document.set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:253

#### set(path, val, type, options)

```ts
set(
   path: string | Record<string, any>, 
   val: any, 
   type: any, 
   options?: DocumentSetOptions): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `type` | `any` |
| `options`? | `DocumentSetOptions` |

##### Returns

`this`

##### Inherited from

`Document.set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:254

#### set(path, val, options)

```ts
set(
   path: string | Record<string, any>, 
   val: any, 
   options?: DocumentSetOptions): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` \| `Record`\<`string`, `any`\> |
| `val` | `any` |
| `options`? | `DocumentSetOptions` |

##### Returns

`this`

##### Inherited from

`Document.set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:255

#### set(value)

```ts
set(value: string | Record<string, any>): this
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` \| `Record`\<`string`, `any`\> |

##### Returns

`this`

##### Inherited from

`Document.set`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:256

***

### toJSON()

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<object, "__v">
```

The return value of this method is used in calls to JSON.stringify(doc).

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`object`, `"__v"`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:259

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): object
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`object`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:260

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:261

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): object
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`object`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:262

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:263

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:264

#### toJSON(options)

```ts
toJSON(options?: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): FlattenMaps<any>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`FlattenMaps`\<`any`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:265

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): FlattenMaps<any>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`FlattenMaps`\<`any`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:266

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): object
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`object`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:267

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:268

#### toJSON(options)

```ts
toJSON(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:269

#### toJSON(options)

```ts
toJSON<T>(options?: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): FlattenMaps<T>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`FlattenMaps`\<`T`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:271

#### toJSON(options)

```ts
toJSON<T>(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): FlattenMaps<T>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`FlattenMaps`\<`T`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:272

#### toJSON(options)

```ts
toJSON<T>(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): ObjectIdToString<FlattenMaps<T>>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`ObjectIdToString`\<`FlattenMaps`\<`T`\>\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:273

#### toJSON(options)

```ts
toJSON<T>(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): T
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`T`

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:274

#### toJSON(options)

```ts
toJSON<T>(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): ObjectIdToString<T>
```

##### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` | `any` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`ObjectIdToString`\<`T`\>

##### Inherited from

`Document.toJSON`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:275

***

### toObject()

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

Converts this document into a plain-old JavaScript object ([POJO](https://masteringjs.io/tutorials/fundamentals/pojo)).

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:278

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:279

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:280

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:281

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:282

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): Omit<any, "__v">
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`Omit`\<`any`, `"__v"`\>

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:283

#### toObject(options)

```ts
toObject(options: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object> & object): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> & `object` |

##### Returns

`any`

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:284

#### toObject(options)

```ts
toObject(options?: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object>): any
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> |

##### Returns

`any`

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:285

#### toObject(options)

```ts
toObject<T>(options?: ToObjectOptions<unknown, Document<unknown, object, unknown, object, object> & Required<object> & object>): Require_id<T> & object
```

##### Type parameters

| Type parameter |
| :------ |
| `T` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `ToObjectOptions`\<`unknown`, `Document`\<`unknown`, `object`, `unknown`, `object`, `object`\> & `Required`\<`object`\> & `object`\> |

##### Returns

`Require_id`\<`T`\> & `object`

##### Inherited from

`Document.toObject`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:286

***

### unmarkModified()

#### unmarkModified(path)

```ts
unmarkModified<T>(path: T): void
```

Clears the modified state on the specified path.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `T` |

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:289

#### unmarkModified(path)

```ts
unmarkModified(path: string): void
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `path` | `string` |

##### Returns

`void`

##### Inherited from

`Document.unmarkModified`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:290

***

### updateOne()

```ts
updateOne(update?: UpdateWithAggregationPipeline | UpdateQuery<ISubscription<T>>, options?: QueryOptions<unknown>): Query<any, ISubscription<T>, object, unknown, "find", Record<string, never>>
```

Sends an updateOne command with this document `_id` as the query selector.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `update`? | `UpdateWithAggregationPipeline` \| `UpdateQuery`\<[`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>\> |
| `options`? | `QueryOptions`\<`unknown`\> |

#### Returns

`Query`\<`any`, [`ISubscription`](/api/eventsub/interfaces/isubscription/)\<`T`\>, `object`, `unknown`, `"find"`, `Record`\<`string`, `never`\>\>

#### Inherited from

`Document.updateOne`

#### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:293

***

### validate()

#### validate(pathsToValidate, options)

```ts
validate<T>(pathsToValidate?: T | T[], options?: AnyObject): Promise<void>
```

Executes registered validation rules for this document.

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `pathsToValidate`? | `T` \| `T`[] |
| `options`? | `AnyObject` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:296

#### validate(pathsToValidate, options)

```ts
validate(pathsToValidate?: PathsToValidate, options?: AnyObject): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `pathsToValidate`? | `PathsToValidate` |
| `options`? | `AnyObject` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:297

#### validate(options)

```ts
validate(options: object): Promise<void>
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.pathsToSkip`? | `pathsToSkip` |

##### Returns

`Promise`\<`void`\>

##### Inherited from

`Document.validate`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:298

***

### validateSync()

#### validateSync(options)

```ts
validateSync(options: object): ValidationError
```

Executes registered validation rules (skipping asynchronous validators) for this document.

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `object` |
| `options.pathsToSkip`? | `pathsToSkip` |

##### Returns

`ValidationError`

##### Inherited from

`Document.validateSync`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:301

#### validateSync(pathsToValidate, options)

```ts
validateSync<T>(pathsToValidate?: T | T[], options?: AnyObject): ValidationError
```

##### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `string` \| `number` \| `symbol` |

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `pathsToValidate`? | `T` \| `T`[] |
| `options`? | `AnyObject` |

##### Returns

`ValidationError`

##### Inherited from

`Document.validateSync`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:302

#### validateSync(pathsToValidate, options)

```ts
validateSync(pathsToValidate?: PathsToValidate, options?: AnyObject): ValidationError
```

##### Parameters

| Parameter | Type |
| :------ | :------ |
| `pathsToValidate`? | `PathsToValidate` |
| `options`? | `AnyObject` |

##### Returns

`ValidationError`

##### Inherited from

`Document.validateSync`

##### Source

node\_modules/.pnpm/mongoose@8.18.1/node\_modules/mongoose/types/document.d.ts:303
