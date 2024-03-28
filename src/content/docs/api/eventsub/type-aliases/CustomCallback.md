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
| `self` | [`Logger`](../classes/Logger.md) |
| `level` | [`LogLevels`](../enumerations/LogLevels.md) |
| `args` | `unknown`[] |

## Returns

`unknown`[]

## Source

twitchapi/packages/eventsub/src/logger/Logger.ts:49
