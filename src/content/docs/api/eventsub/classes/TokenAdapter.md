---
editUrl: false
next: false
prev: false
title: "TokenAdapter"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `TokenTypes` | `TokenTypes` |
| `K` *extends* `boolean` | `T` *extends* `"code"` \| `"app"` \| `"device"` ? `true` : `never` |

## Constructors

### new TokenAdapter()

```ts
new TokenAdapter<T, K>(options: TokenAdapterOptions<T, K>): TokenAdapter<T, K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `TokenAdapterOptions`\<`T`, `K`\> |

#### Returns

[`TokenAdapter`](/api/eventsub/classes/tokenadapter/)\<`T`, `K`\>

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.9/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:7

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `refresh` | `readonly` | `T` *extends* `"code"` \| `"app"` \| `"device"` ? `K` : `never` |
| `refreshToken` | `public` | `T` *extends* `"code"` \| `"device"` ? `K` *extends* `true` ? `string` : `never` : `never` |
| `token` | `public` | `string` |
| `type` | `readonly` | `T` |

## Methods

### isAppToken()

```ts
isAppToken(): boolean
```

#### Returns

`boolean`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.9/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:11

***

### isUserToken()

```ts
isUserToken(): boolean
```

#### Returns

`boolean`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.9/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:10

***

### setRefreshToken()

```ts
setRefreshToken(refreshToken: string): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `refreshToken` | `string` |

#### Returns

`this`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.9/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:9

***

### setToken()

```ts
setToken(token: string): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`this`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.9/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:8
