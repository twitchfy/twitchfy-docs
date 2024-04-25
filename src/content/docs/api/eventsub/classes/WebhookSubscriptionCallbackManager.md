---
editUrl: false
next: false
prev: false
title: "WebhookSubscriptionCallbackManager"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new WebhookSubscriptionCallbackManager(connection)

```ts
new WebhookSubscriptionCallbackManager<T>(connection: WebhookConnection): WebhookSubscriptionCallbackManager<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) |

#### Returns

[`WebhookSubscriptionCallbackManager`](/api/eventsub/classes/webhooksubscriptioncallbackmanager/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:17

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) |

## Methods

### add()

```ts
add(callback: WebhookSubscriptionCallback<T>): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebhookSubscriptionCallback`](/api/eventsub/type-aliases/webhooksubscriptioncallback/)\<`T`\> |

#### Returns

`this`

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:24

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

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:32
