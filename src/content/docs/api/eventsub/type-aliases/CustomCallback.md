---
editUrl: false
next: false
prev: false
title: "CustomCallback"
---

```ts
type CustomCallback: (self: Logger, level: LogLevels, args: unknown[]) => unknown[];
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `self` | [`Logger`](/api/eventsub/classes/logger/) |
| `level` | [`LogLevels`](/api/eventsub/enumerations/loglevels/) |
| `args` | `unknown`[] |

## Returns

`unknown`[]

## Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:49](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/logger/Logger.ts#L49)
