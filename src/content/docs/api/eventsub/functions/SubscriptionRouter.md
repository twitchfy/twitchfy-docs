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

[twitchapi/packages/eventsub/src/webhook/routes/SubscriptionRoute.ts:9](https://github.com/pablornc/twitchapi//blob/8695acad106a836c1f0fc4c57a113f17adce41f0/packages/eventsub/src/webhook/routes/SubscriptionRoute.ts#L9)
