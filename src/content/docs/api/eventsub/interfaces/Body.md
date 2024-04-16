---
editUrl: false
next: false
prev: false
title: "Body"
---

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`BodyTypes`](/api/eventsub/type-aliases/bodytypes/) | [`BodyTypes`](/api/eventsub/type-aliases/bodytypes/) |

## Properties

| Property | Type |
| :------ | :------ |
| `challenge` | `T` extends `"webhook_callback_verification"` ? `string` : `never` |
| `event` | `T` extends `"notification"` ? `object` : `never` |
| `subscription` | [`BodySubscription`](/api/eventsub/interfaces/bodysubscription/) |
