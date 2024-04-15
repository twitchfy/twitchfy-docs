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

[twitchapi/packages/eventsub/src/webhook/routes/SubscriptionRoute.ts:9](https://github.com/pablornc/twitchapi//blob/f8a75ccd701e54db4c91e2b0128974da23f25d14/packages/eventsub/src/webhook/routes/SubscriptionRoute.ts#L9)
