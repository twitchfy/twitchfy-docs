---
editUrl: false
next: false
prev: false
title: "MentionUser"
---

Represents a user that was mentioned in a message included in a mention fragment. This is not represented by a BaseUser class as we want it to not have a connection or subscription property.

## Constructors

### new MentionUser(data)

```ts
new MentionUser(data: MentionUserData): MentionUser
```

Builds up a MentionUser.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`MentionUserData`](/api/eventsub/interfaces/mentionuserdata/) | The data for the user who was mentioned. |

#### Returns

[`MentionUser`](/api/eventsub/classes/mentionuser/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/MentionUser.ts:25

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `displayName` | `readonly` | `string` | The display name of the user who was mentioned. |
| `id` | `readonly` | `string` | The ID of the user who was mentioned. |
| `login` | `readonly` | `string` | The login name of the user who was mentioned. |
