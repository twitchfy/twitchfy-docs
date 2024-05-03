---
editUrl: false
next: false
prev: false
title: "ChannelAdBreakBeginMessage"
---

The message received by the ChannelAdBreakBegin event.

## Extends

- [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/)\<`SubscriptionTypes.ChannelAdBreakBegin`, `K`\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `K` extends [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) | [`ConnectionTypes`](/api/eventsub/type-aliases/connectiontypes/) |

## Constructors

### new ChannelAdBreakBeginMessage(connection, subscription, data)

```ts
new ChannelAdBreakBeginMessage<K>(
   connection: K, 
   subscription: SubscriptionType<ChannelAdBreakBegin, K>, 
data: ChannelAdBreakBeginEvent): ChannelAdBreakBeginMessage<K>
```

Builds up a ChannelAdBreakBegin message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `connection` | `K` | The EventSub connection used. |
| `subscription` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> | The subscription which trigger this message. |
| `data` | `ChannelAdBreakBeginEvent` | The event data received with the subscription. |

#### Returns

[`ChannelAdBreakBeginMessage`](/api/eventsub/classes/channeladbreakbeginmessage/)\<`K`\>

#### Overrides

[`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).[`constructor`](/api/eventsub/classes/basesubscriptionmessage/#constructors)

#### Source

twitchfy/packages/eventsub/src/structures/messages/ChannelAdBreakBegin/ChannelAdBreakBeginMessage.ts:40

## Properties

| Property | Modifier | Type | Description | Inherited from |
| :------ | :------ | :------ | :------ | :------ |
| `broadcaster` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelAdBreakBegin`, `K`\> | The broadcaster of the channel where the ad was begun. | - |
| `connection` | `readonly` | `K` | The EventSub connection used. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`connection` |
| `duration` | `readonly` | `number` | The duration in seconds of the ad break. | - |
| `isAutomatic` | `readonly` | `boolean` | Whether the ad break was automatically triggered or was manually triggered by the broadcaster. | - |
| `requester` | `readonly` | [`BaseUser`](/api/eventsub/classes/baseuser/)\<`ChannelAdBreakBegin`, `K`\> | The user who requested the ad break. If the ad break was automatically triggered, this field is the broadcaster. | - |
| `startedAt` | `readonly` | `Date` | The Date object of when the ad break started. | - |
| `subscription` | `readonly` | [`SubscriptionType`](/api/eventsub/type-aliases/subscriptiontype/)\<`ChannelAdBreakBegin`, `K`\> | The subscription which trigger this message. | [`BaseSubscriptionMessage`](/api/eventsub/classes/basesubscriptionmessage/).`subscription` |

## Methods

### checkMessageType()

```ts
checkMessageType<U>(type: U): this is SubscriptionMessages<K>[U]
```

Checks whether the message is of a certain type.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `U` extends [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) | [`SubscriptionTypes`](/api/eventsub/enumerations/subscriptiontypes/) |

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
