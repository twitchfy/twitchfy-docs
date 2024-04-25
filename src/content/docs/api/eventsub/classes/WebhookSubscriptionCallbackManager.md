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

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:17](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L17)

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

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:24](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L24)

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

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:32](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L32)
