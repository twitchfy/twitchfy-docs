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

[twitchapi/packages/eventsub/src/logger/Logger.ts:49](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/logger/Logger.ts#L49)
