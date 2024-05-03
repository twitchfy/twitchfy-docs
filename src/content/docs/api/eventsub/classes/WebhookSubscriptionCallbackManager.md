---
editUrl: false
next: false
prev: false
title: "WebhookSubscriptionCallbackManager"
---

The Webhook Subscription Callback Manager.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

## Constructors

### new WebhookSubscriptionCallbackManager(connection)

```ts
new WebhookSubscriptionCallbackManager<T>(connection: WebhookConnection): WebhookSubscriptionCallbackManager<T>
```

Builds up a new WebhookSubscriptionCallbackManager.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) | The connection used for this subscription. |

#### Returns

[`WebhookSubscriptionCallbackManager`](/api/eventsub/classes/webhooksubscriptioncallbackmanager/)\<`T`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:30

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `connection` | `readonly` | [`WebhookConnection`](/api/eventsub/classes/webhookconnection/) | The connection used for this subscription. |

## Methods

### add()

```ts
add(callback: WebhookSubscriptionCallback<T>): this
```

Adds a new callback to the subscription. This callback will be executed when a message within this subscription is received.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `callback` | [`WebhookSubscriptionCallback`](/api/eventsub/type-aliases/webhooksubscriptioncallback/)\<`T`\> | The callback to add. |

#### Returns

`this`

The manager.

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:42

***

### execute()

```ts
execute(message: SubscriptionMessages<ConnectionTypes>[T]): Promise<void>
```

Executes all the callbacks of the subscription.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `message` | [`SubscriptionMessages`](/api/eventsub/interfaces/subscriptionmessages/)\<[`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/)\>\[`T`\] | The message to execute the callbacks with. |

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:55
