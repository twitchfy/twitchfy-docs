---
editUrl: false
next: false
prev: false
title: "verifySignature"
---

```ts
function verifySignature(
   headers: IncomingHttpHeaders, 
   body: any, 
   secret: string): boolean
```

Verifies the signature of the request secret to ensure a secure enviroment.

## Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `headers` | `IncomingHttpHeaders` | The headers sent by Twitch. |
| `body` | `any` | The body of the request. |
| `secret` | `string` | The secret to use for the verification. |

## Returns

`boolean`

Whether the signature is valid.

## Source

twitchfy/packages/eventsub/src/webhook/util/verifySignature.ts:12
