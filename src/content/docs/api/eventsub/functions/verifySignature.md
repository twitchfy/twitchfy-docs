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

[twitchapi/packages/eventsub/src/webhook/util/verifySignature.ts:4](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/eventsub/src/webhook/util/verifySignature.ts#L4)
