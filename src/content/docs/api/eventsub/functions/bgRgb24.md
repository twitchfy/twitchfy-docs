---
editUrl: false
next: false
prev: false
title: "bgRgb24"
---

```ts
bgRgb24(str: string, color: number | Rgb): string
```

Set background color using 24bit rgb.
`color` can be a number in range `0x000000` to `0xffffff` or
an `Rgb`.

To produce the color magenta:

```ts
     import { bgRgb24 } from "./colors.ts";
     bgRgb24("foo", 0xff00ff);
     bgRgb24("foo", {r: 255, g: 0, b: 255});
```

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | text color to apply 24bit rgb to |
| `color` | `number` \| [`Rgb`](/api/eventsub/interfaces/rgb/) | code |

## Returns

`string`

## Source

[twitchapi/packages/eventsub/src/logger/colors.ts:450](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/logger/colors.ts#L450)
