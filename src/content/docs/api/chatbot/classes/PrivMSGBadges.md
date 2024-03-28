---
editUrl: false
next: false
prev: false
title: "PrivMSGBadges"
---

Represents the chat badges of a chatter.

## Constructors

### new PrivMSGBadges(tags)

```ts
new PrivMSGBadges(tags: PrivMSGTags): PrivMSGBadges
```

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `tags` | [`PrivMSGTags`](../interfaces/PrivMSGTags.md) |  |

#### Returns

[`PrivMSGBadges`](PrivMSGBadges.md)

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGBadges.ts:19](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGBadges.ts#L19)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `badges` | `public` | [`Badges`](../interfaces/Badges.md) | **Description**<br />The badges of the chatter. |

## Methods

### has()

```ts
has(badge: keyof Badges): boolean
```

Check if the chatter has this badge in his chat profile.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `badge` | keyof [`Badges`](../interfaces/Badges.md) | The name of the badge you want to check. |

#### Returns

`boolean`

A boolean that determines if the chatter has the badge in his chat profile.

#### Source

[twitchapi/packages/chatbot/src/structures/PrivMSG/PrivMSGBadges.ts:29](https://github.com/pablornc/twitchapi//blob/b274026/packages/chatbot/src/structures/PrivMSG/PrivMSGBadges.ts#L29)
