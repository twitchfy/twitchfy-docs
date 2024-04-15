---
editUrl: false
next: false
prev: false
title: "WebSocketSubscriptionCallbackManager"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Constructors

### new WebSocketSubscriptionCallbackManager(connection)

```ts
new WebSocketSubscriptionCallbackManager<T>(connection: WebSocketConnection): WebSocketSubscriptionCallbackManager<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebSocketConnection`](WebSocketConnection.md) |

#### Returns

[`WebSocketSubscriptionCallbackManager`](WebSocketSubscriptionCallbackManager.md)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:15](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L15)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | [`WebSocketConnection`](WebSocketConnection.md) |

## Methods

### add()

```ts
add(callback: WebSocketSubscriptionCallback<T>): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](../type-aliases/WebSocketSubscriptionCallback.md)\<`T`\> |

#### Returns

`this`

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:22](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L22)

***

### execute()

```ts
execute(message: SubscriptionMessages<WebSocketConnection>[T]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](../interfaces/SubscriptionMessages.md)\<[`WebSocketConnection`](WebSocketConnection.md)\>\[`T`\] |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:30](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L30)
