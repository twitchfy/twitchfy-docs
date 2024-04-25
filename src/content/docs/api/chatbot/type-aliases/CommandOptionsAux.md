---
editUrl: false
next: false
prev: false
title: "CommandOptionsAux"
---

```ts
type CommandOptionsAux<T, K>: K extends OptionsRecord ? { [U in keyof K]: K[U] extends NumberOption<infer V> ? number | V : K[U] extends StringOption<infer V> ? string | V : K[U] extends BooleanOption<infer V> ? boolean | V : K[U] extends MentionOption<null, infer V> ? V extends true ? Collection<T, BaseUser<T>> | null : BaseUser<T> | null : string | number | boolean | BaseUser<T> | Collection<T, BaseUser<T>> | null } : T;
```

Auxiliary type to define the options of a command.

## Type parameters

| Type parameter |
| :------ |
| `T` extends [`EventSubConnection`](/api/chatbot/enumerations/eventsubconnection/) |
| `K` |

## Source

[twitchapi/packages/chatbot/src/types/CommandOptionsAux.ts:8](https://github.com/pablornc/twitchapi//blob/3baa008ac8be1133cbb9253985d5d4cd48b4e780/packages/chatbot/src/types/CommandOptionsAux.ts#L8)
