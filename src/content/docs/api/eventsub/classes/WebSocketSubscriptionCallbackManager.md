---
editUrl: false
next: false
prev: false
title: "WebSocketSubscriptionCallbackManager"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new WebSocketSubscriptionCallbackManager(connection)

```ts
new WebSocketSubscriptionCallbackManager<T>(connection: WebSocketConnection): WebSocketSubscriptionCallbackManager<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) |

#### Returns

[`WebSocketSubscriptionCallbackManager`](/api/eventsub/classes/websocketsubscriptioncallbackmanager/)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:15](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L15)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) |

## Methods

### add()

```ts
add(callback: WebSocketSubscriptionCallback<T>): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](/api/eventsub/type-aliases/websocketsubscriptioncallback/)\<`T`\> |

#### Returns

`this`

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:22](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L22)

***

### execute()

```ts
execute(message: SubscriptionMessages<WebSocketConnection>[T]): Promise<void>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>\[`T`\] |

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:30](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts#L30)
