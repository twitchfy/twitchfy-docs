---
editUrl: false
next: false
prev: false
title: "verifySignature"
---

```ts
verifySignature(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, secret: string): boolean
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `secret` | `string` |

## Returns

`boolean`

## Source

[twitchapi/packages/eventsub/src/webhook/util/verifySignature.ts:4](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/util/verifySignature.ts#L4)
