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

[twitchapi/packages/chatbot/src/types/FetchEmote.ts:7](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/chatbot/src/types/FetchEmote.ts#L7)
