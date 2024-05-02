---
editUrl: false
next: false
prev: false
title: "WebSocketConduit"
---

## Constructors

### new WebSocketConduit(options)

```ts
new WebSocketConduit(options?: Pick<WebSocketConnectionOptions, "proxy">): WebSocketConduit
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | `Pick`\<[`WebSocketConnectionOptions`](/api/eventsub/type-aliases/websocketconnectionoptions/), `"proxy"`\> |

#### Returns

[`WebSocketConduit`](/api/eventsub/classes/websocketconduit/)

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:26

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `proxy` | `readonly` | `string` |
| `ws` | `public` | [`WebSocketConduitConnector`](/api/eventsub/classes/websocketconduitconnector/) |

## Accessors

### conduitId

```ts
get conduitId(): string
```

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:41

***

### helixClient

```ts
get helixClient(): HelixClient
```

#### Returns

`HelixClient`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:46

***

### sessionId

```ts
get sessionId(): string
```

```ts
set sessionId(value: string): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:33

***

### shardId

```ts
get shardId(): string
```

#### Returns

`string`

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:50

## Methods

### connect()

```ts
connect(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:54

***

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

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:94

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

twitchfy/packages/eventsub/src/structures/WebSocketConduit.ts:98
