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

[twitchapi/packages/eventsub/src/webhook/util/verifySignature.ts:4](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/webhook/util/verifySignature.ts#L4)
