---
editUrl: false
next: false
prev: false
title: "UncompleteUser"
---

Represents a user that is not fully completed as it doesn't have connection and subscription fields from BaseUser.

## Constructors

### new UncompleteUser()

```ts
new UncompleteUser(data: BaseUserData): UncompleteUser
```

Builds up a user that is not fully complete.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | [`BaseUserData`](/api/eventsub/interfaces/baseuserdata/) | The data of the user. |

#### Returns

[`UncompleteUser`](/api/eventsub/classes/uncompleteuser/)

#### Source

twitchfy/packages/eventsub/src/structures/messages/UncompleteUser.ts:28

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `displayName` | `readonly` | `string` | The display name of the user. |
| `id` | `readonly` | `string` | The ID of the user. |
| `login` | `readonly` | `string` | The login name of the user. |
