---
editUrl: false
next: false
prev: false
title: "SubscriptionRouter"
---

```ts
SubscriptionRouter(
   req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, 
   res: Response<any, Record<string, any>, number>, 
   next: NextFunction): void
```

## Parameters

| Parameter | Type |
| :------ | :------ |
| `req` | `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`\<`string`, `any`\>\> |
| `res` | `Response`\<`any`, `Record`\<`string`, `any`\>, `number`\> |
| `next` | `NextFunction` |

## Returns

`void`

## Source

twitchfy/packages/eventsub/src/webhook/routes/SubscriptionRoute.ts:9
