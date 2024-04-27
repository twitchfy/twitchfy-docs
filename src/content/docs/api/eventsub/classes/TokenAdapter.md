---
editUrl: false
next: false
prev: false
title: "TokenAdapter"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends `TokenTypes` | `TokenTypes` |
| `K` extends `boolean` | `T` extends `"code"` \| `"app"` ? `true` : `never` |

## Constructors

### new TokenAdapter(options)

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

node\_modules/.pnpm/@twitchfy+helix@1.0.1/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:7

## Properties

| Property | Type |
| :------ | :------ |
| `refresh` | `T` extends `"app"` \| `"code"` ? `K` : `never` |
| `refreshToken` | `T` extends `"code"` ? `K` extends `true` ? `string` : `never` : `never` |
| `token` | `string` |
| `type` | `T` |

## Methods

### isAppToken()

```ts
isAppToken(): boolean
```

#### Returns

`boolean`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.1/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:11

***

### isUserToken()

```ts
isUserToken(): boolean
```

#### Returns

`boolean`

#### Source

node\_modules/.pnpm/@twitchfy+helix@1.0.1/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:10

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

node\_modules/.pnpm/@twitchfy+helix@1.0.1/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:9

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

node\_modules/.pnpm/@twitchfy+helix@1.0.1/node\_modules/@twitchfy/helix/dist/structures/TokenAdapter.d.ts:8
