---
editUrl: false
next: false
prev: false
title: "ConduitSubscriptionRouter"
---

```ts
function ConduitSubscriptionRouter(
   req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, 
   res: Response<any, Record<string, any>, number>, 
   next: NextFunction): void
```

The router for the conduit subscription route.

## Parameters

| Parameter | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\> |
| `next` | `NextFunction` |

## Returns

`void`

## Source

twitchfy/packages/eventsub/src/util/ConduitSubscriptionRoute.ts:16
