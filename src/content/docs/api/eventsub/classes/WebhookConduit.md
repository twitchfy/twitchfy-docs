---
editUrl: false
next: false
prev: false
title: "WebhookConduit"
---

## Constructors

### new WebhookConduit(options, server)

```ts
new WebhookConduit(options: Pick<WebhookConnectionOptions, "baseURL" | "secret" | "startServer" | "subscriptionRoute">, server: Express): WebhookConduit
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options` | `Pick`\<[`WebhookConnectionOptions`](/api/eventsub/type-aliases/webhookconnectionoptions/), `"baseURL"` \| `"secret"` \| `"startServer"` \| `"subscriptionRoute"`\> |
| `server` | `Express` |

#### Returns

[`WebhookConduit`](/api/eventsub/classes/webhookconduit/)

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:31

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `baseURL` | `readonly` | `string` |
| `secret` | `readonly` | `string` |
| `server` | `readonly` | `Express` |
| `startServer` | `readonly` | `boolean` |
| `subscriptionRoute` | `readonly` | `string` |

## Accessors

### conduitId

```ts
get conduitId(): string
```

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:45

***

### helixClient

```ts
get helixClient(): HelixClient
```

#### Returns

`HelixClient`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:50

***

### shardId

```ts
get shardId(): string
```

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:54

## Methods

### makeDebug()

```ts
makeDebug(...args: any[]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `any`[] |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:108

***

### sendPacket()

```ts
sendPacket(packet: object): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | `object` |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:112

***

### start()

```ts
start(port?: number, callback?: () => void): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `port`? | `number` |
| `callback`? | () => `void` |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/WebhookConduit.ts:58
