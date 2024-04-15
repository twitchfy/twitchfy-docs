---
editUrl: false
next: false
prev: false
title: "ChatBotOptions"
---

The options to build up a chatbot.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` extends [`EventSubConnection`](../enumerations/EventSubConnection.md) | [`EventSubConnection`](../enumerations/EventSubConnection.md) |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `clientID` | `string` | The client ID of the Twitch's application. |
| `clientSecret` | `string` | The client secret of the Twitch's application. |
| `connectionType` | `T` | The eventsub connection type of the chatbot. See [EventSubConnection](../../api/chatbot/enumerations/eventsubconnection). |
| `eventsub` | [`EventSubOptions`](../type-aliases/EventSubOptions.md)\<`T`\> | The options to build up the eventsub connection. See [EventSubOptions](../../api/chatbot/type-aliases/eventsuboptions). |
| `helix?` | `Partial`\<`HelixClientOptions`\> | The options to build up the helix client. |
| `optionOperator?` | `string` | The operator to separate the options in the command. |
| `paths` | [`Paths`](Paths.md) | The paths of the diffrent resources of the chatbot. See [Paths](../../api/chatbot/interfaces/paths). |
| `prefix?` | (`message`: [`CommandContext`](../classes/CommandContext.md)\<`Object`, `T`\>) => `string`[] | A callback to set up the prefixes of the chatbot commands.<br /><br /> |
| `userToken` | `UserTokenAdapter`\<`boolean`\> | The user token of the chatbot Twitch account. |
