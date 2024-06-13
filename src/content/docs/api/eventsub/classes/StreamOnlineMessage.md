---
editUrl: false
next: false
prev: false
title: "StreamOnlineMessage"
---

The message received by the StreamOnline event.

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.StreamOnline`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` *extends* [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new StreamOnlineMessage()

```ts
new StreamOnlineMessage<K>(
   connection: K, 
   subscription: SubscriptionType<StreamOnline, K>, 
data: StreamOnlineEvent): StreamOnlineMessage<K>
```

Builds up a StreamOnline message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> | The subscription which trigger this message. |
| `data` | [`StreamOnlineEvent`](/api/eventsub/interfaces/streamonlineevent/) | The event data received with the subscription. |

#### Returns

[`StreamOnlineMessage`](/api/eventsub/classes/streamonlinemessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/StreamOnline/StreamOnlineMessage.ts:28

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`StreamOnline`, `K`\> | The broadcaster of the stream which went online. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `stream` | `readonly` | [`BaseStream`](/api/eventsub/classes/basestream/)\<`StreamOnline`, `K`\> | The stream which went online. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`StreamOnline`, `K`\> | The subscription which trigger this message. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

## Methods

### checkMessageType()

```ts
checkMessageType<U>(type: U): this is SubscriptionMessages<K>[U]
```

Checks whether the message is of a certain type.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` *extends* [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `type` | `U` | The type to check. |

#### Returns

`this is SubscriptionMessages<K>[U]`

Whether the message is of the type.

#### Inherited from

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`checkMessageType`](/api/eventsub/classes/basesubscriptionmessage/#checkmessagetype)

#### Source

twitchfy/packages/eventsub/src/structures/messages/BaseSubscriptionMessage.ts:24
