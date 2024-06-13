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
| `T` *extends* [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) | [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `clientId` | `string` | The client Id of the Twitch's application. |
| `clientSecret` | `string` | The client secret of the Twitch's application. |
| `connectionType` | `T` | The eventsub connection type of the chatbot. See [EventSubConnection](../../api/chatbot/enumerations/eventsubconnection). |
| `eventsub` | [`EventSubOptions`](/api/chatbot/type-aliases/eventsuboptions/)\<`T`\> | The options to build up the eventsub connection. See [EventSubOptions](../../api/chatbot/type-aliases/eventsuboptions). |
| `helix?` | `Partial`\<`HelixClientOptions`\> | The options to build up the helix client. |
| `optionOperator?` | `string` | The operator to separate the options in the command. |
| `paths` | [`Paths`](/api/chatbot/interfaces/paths/) | The paths of the diffrent resources of the chatbot. See [Paths](../../api/chatbot/interfaces/paths). |
| `prefix?` | (`message`: [`TwitchContext`](/api/chatbot/classes/twitchcontext/)\<`object`, `T`\>) => `string`[] | <p>A callback to set up the prefixes of the chatbot commands.</p> |
| `userToken` | `UserTokenAdapter`\<`boolean`\> | The user token of the chatbot Twitch account. |
