---
editUrl: false
next: false
prev: false
title: "Badge"
---

A badge which is assigned to an user.

## Constructors

### new Badge(data)

```ts
new Badge(data: BadgeData): Badge
```

Builds up a badge.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BadgeData`](/api/eventsub/interfaces/badgedata/) | The data of the badge. |

#### Returns

[`Badge`](/api/eventsub/classes/badge/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/Badge.ts:27

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `id` | `readonly` | `string` | The ID of the badge. |
| `info` | `readonly` | `string` | Additional information about the badge. This field is only presented in subscribed badges and contains the number of months the user has been subscribed for. |
| `setId` | `readonly` | `string` | The ID of the set which contains the badge. |
