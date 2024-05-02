---
editUrl: false
next: false
prev: false
title: "ConduitSubscriptionCallbackManager"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new ConduitSubscriptionCallbackManager(conduit)

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

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:12

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `conduit` | `public` | [`Conduit`](/api/eventsub/classes/conduit/) |

## Methods

### add()

```ts
add(callback: ConduitSubscriptionCallback<T>): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`ConduitSubscriptionCallback`](/api/eventsub/type-aliases/conduitsubscriptioncallback/)\<`T`\> |

#### Returns

`this`

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:19

***

### execute()

```ts
execute(message: SubscriptionMessages<ConnectionTypes>[T]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/)\>\[`T`\] |

#### Returns

`void`

#### Source

twitchfy/packages/eventsub/src/structures/ConduitSubscriptionCallbackManager.ts:27
