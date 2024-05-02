---
editUrl: false
next: false
prev: false
title: "StreamOnlineMessage"
---

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new StreamOnlineMessage(connection, subscription, data)

```ts
new StreamOnlineMessage<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
data: StreamOnlineEvent): StreamOnlineMessage<K>
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `connection` | `K` |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> |
| `data` | [`StreamOnlineEvent`](/api/eventsub/interfaces/streamonlineevent/) |

#### Returns

[`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineMessage.ts:14

## Properties

| Property | Modifier | Type | Inherited from |
| :------ | :------ | :------ | :------ |
| `broadcaster` | `public` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`StreamOnline`, `K`\> | - |
| `connection` | `public` | `K` | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `stream` | `public` | [`BaseStream`](/api/eventsub/classes/basestream/)\<`StreamOnline`, `K`\> | - |
| `subscription` | `public` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

## Methods

### checkSubscriptionType()

```ts
checkSubscriptionType<U>(type: U): this is SubscriptionMessages<K>[U]
```

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `type` | `U` |

#### Returns

`this is SubscriptionMessages<K>[U]`

#### Inherited from

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`checkSubscriptionType`](/api/eventsub/classes/basesubscriptionmessage/#checksubscriptiontype)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:11
