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

twitchfy/packages/chatbot/src/types/FetchEmote.ts:7
