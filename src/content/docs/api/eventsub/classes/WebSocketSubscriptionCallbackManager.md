---
editUrl: false
next: false
prev: false
title: "WebSocketSubscriptionCallbackManager"
---

The callback manager for a WebSocketSubscription.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new WebSocketSubscriptionCallbackManager(connection)

```ts
new WebSocketSubscriptionCallbackManager<T>(connection: WebSocketConnection): WebSocketSubscriptionCallbackManager<T>
```

Creates a new WebSocketSubscriptionCallbackManager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The connection that created this manager. |

#### Returns

[`WebSocketSubscriptionCallbackManager`](/api/eventsub/classes/websocketsubscriptioncallbackmanager/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:28

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `connection` | `readonly` | [`WebSocketConnection`](/api/eventsub/classes/websocketconnection/) | The connection that created this manager. |

## Methods

### add()

```ts
add(callback: WebSocketSubscriptionCallback<T>): this
```

Adds a callback to the manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`WebSocketSubscriptionCallback`](/api/eventsub/type-aliases/websocketsubscriptioncallback/)\<`T`\> | The callback to add. |

#### Returns

`this`

The manager.

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:40

***

### execute()

```ts
execute(message: SubscriptionMessages<WebSocketConnection>[T]): Promise<void>
```

Executes all the callbacks with the message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`WebSocketConnection`](/api/eventsub/classes/websocketconnection/)\>\[`T`\] | The message to execute the callbacks with. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/ws/structures/WebSocketSubscriptionCallbackManager.ts:52
