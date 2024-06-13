---
editUrl: false
next: false
prev: false
title: "verifySignature"
---

```ts
function verifySignature(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, secret: string): boolean
```

Verifies the signature of the request secret to ensure a secure enviroment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> | The request to verify. |
| `secret` | `string` | The secret to use for the verification. |

## Returns

`boolean`

Whether the signature is valid.

## Source

twitchfy/packages/eventsub/src/webhook/util/verifySignature.ts:10
