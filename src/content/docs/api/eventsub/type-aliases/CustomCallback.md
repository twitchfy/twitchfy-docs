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

twitchfy/packages/eventsub/src/logger/Logger.ts:49
