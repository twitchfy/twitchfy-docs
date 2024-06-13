---
editUrl: false
next: false
prev: false
title: "Body"
---

The body sent by Twitch in a post to the subscription route.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`BodyTypes`](/api/eventsub/type-aliases/bodytypes/) | [`BodyTypes`](/api/eventsub/type-aliases/bodytypes/) |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `challenge` | `T` *extends* `"webhook_callback_verification"` ? `string` : `never` | The challenge sent by Twitch when verifying a callback. |
| `event` | `T` *extends* `"notification"` ? `object` : `never` | The event data sent in a notification body. |
| `subscription` | `T` *extends* `"notification"` ? [`BodySubscription`](/api/eventsub/interfaces/bodysubscription/) : `never` | The subscription data sent in a notification body. |
