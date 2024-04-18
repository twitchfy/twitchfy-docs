---
editUrl: false
next: false
prev: false
title: "FetchEmote"
---

```ts
type FetchEmote<T, K>: K extends "global" ? GlobalEmote<T> : K extends "channel" ? ChannelEmote<T> : GlobalEmote<T> | ChannelEmote<T>;
```

The returned value when fetching an emote.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |
| `K` extends `"global"` \| `"channel"` |

## Source

[twitchapi/packages/chatbot/src/types/FetchEmote.ts:7](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/chatbot/src/types/FetchEmote.ts#L7)
