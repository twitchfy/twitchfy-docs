---
editUrl: false
next: false
prev: false
title: "WebhookSubscriptionCallbackManager"
---

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`SubscriptionTypes`](../enumerations/SubscriptionTypes.md) |

## Constructors

### new WebhookSubscriptionCallbackManager(connection)

```ts
new WebhookSubscriptionCallbackManager<T>(connection: WebhookConnection): WebhookSubscriptionCallbackManager<T>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | [`WebhookConnection`](WebhookConnection.md) |

#### Returns

[`WebhookSubscriptionCallbackManager`](WebhookSubscriptionCallbackManager.md)\<`T`\>

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:17](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L17)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `connection` | `public` | [`WebhookConnection`](WebhookConnection.md) |

## Methods

### add()

```ts
add(callback: WebhookSubscriptionCallback<T>): this
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `callback` | [`WebhookSubscriptionCallback`](../type-aliases/WebhookSubscriptionCallback.md)\<`T`\> |

#### Returns

`this`

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:24](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L24)

***

### execute()

```ts
execute(message: SubscriptionMessages<ConnectionTypes>[T]): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`SubscriptionMessages`](../interfaces/SubscriptionMessages.md)\<[`ConnectionTypes`](../type-aliases/ConnectionTypes.md)\>\[`T`\] |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts:32](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/webhook/structures/WebhookSubscriptionCallbackManager.ts#L32)
