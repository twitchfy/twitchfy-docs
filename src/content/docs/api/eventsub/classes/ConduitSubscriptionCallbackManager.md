---
editUrl: false
next: false
prev: false
title: "ConduitSubscriptionCallbackManager"
---

The callback manager for a ConduitSubscription.

## Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new ConduitSubscriptionCallbackManager()

```ts
new ConduitSubscriptionCallbackManager<T>(conduit: Conduit): ConduitSubscriptionCallbackManager<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `conduit` | [`Conduit`](/api/eventsub/classes/conduit/) |

#### Returns

[`ConduitSubscriptionCallbackManager`](/api/eventsub/classes/conduitsubscriptioncallbackmanager/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:21

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `conduit` | `readonly` | [`Conduit`](/api/eventsub/classes/conduit/) | The Conduit that created this manager. |

## Methods

### add()

```ts
add(callback: ConduitSubscriptionCallback<T>): this
```

Adds a callback to the manager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`ConduitSubscriptionCallback`](/api/eventsub/type-aliases/conduitsubscriptioncallback/)\<`T`\> | The callback to add. |

#### Returns

`this`

The manager.

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:33

***

### execute()

```ts
execute(message: SubscriptionMessages<ConnectionTypes>[T]): Promise<void>
```

Executes all the callbacks with the message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/)\>\[`T`\] | The message to execute the callbacks with. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:45
