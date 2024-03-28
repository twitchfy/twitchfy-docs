---
editUrl: false
next: false
prev: false
title: "Logger"
---

Represents a logger utility for logging messages with various log levels.

## Constructors

### new Logger(options)

```ts
new Logger(options: LoggerOptions): Logger
```

Constructs a new Logger instance with the provided options.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `options` | [`LoggerOptions`](../type-aliases/LoggerOptions.md) | The options for configuring the logger. |

#### Returns

[`Logger`](Logger.md)

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:94](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L94)

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `options` | `readonly` | `Required`\<[`LoggerOptions`](../type-aliases/LoggerOptions.md)\> | The options for configuring the logger. |
| `DEFAULT_OPTIONS` | `static` | `Required`\<[`LoggerOptions`](../type-aliases/LoggerOptions.md)\> | The default options for the logger. |
| `colorFunctions` | `static` | `Map`\<[`LogLevels`](../enumerations/LogLevels.md), (`str`: `string`) => `string`\> | A map containing color functions for different log levels. |
| `dirname` | `static` | `string` | - |
| `prefixes` | `static` | `Map`\<[`LogLevels`](../enumerations/LogLevels.md), `string`\> | A map containing prefixes for different log levels. |
| `saveOnFile?` | `static` | `string`[] \| `"all"` | - |
| `streams` | `static` | `Partial`\<`Record`\<`string`, `WriteStream`\>\> | - |

## Accessors

### active

```ts
get active(): boolean
```

Gets whether the logger is active or not.

```ts
set active(active: boolean): void
```

Sets whether the logger is active or not.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`boolean`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:130](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L130)

***

### level

```ts
get level(): LogLevels
```

Gets the log level of the logger.

```ts
set level(level: LogLevels): void
```

Sets the log level of the logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `level` | [`LogLevels`](../enumerations/LogLevels.md) |

#### Returns

[`LogLevels`](../enumerations/LogLevels.md)

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:108](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L108)

***

### name

```ts
get name(): string
```

Gets the name of the logger.

```ts
set name(name: string): void
```

Sets the name of the logger.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`string`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:144](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L144)

***

### saveOnFile

```ts
get saveOnFile(): boolean
```

```ts
set saveOnFile(saveOnFile: boolean): void
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `saveOnFile` | `boolean` |

#### Returns

`boolean`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:116](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L116)

## Methods

### debug()

```ts
debug(...args: any[]): void
```

Logs a debug message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:182](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L182)

***

### error()

```ts
error(...args: any[]): void
```

Logs an error message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:206](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L206)

***

### fatal()

```ts
fatal(...args: any[]): void
```

Logs a fatal error message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:214](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L214)

***

### info()

```ts
info(...args: any[]): void
```

Logs an info message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:190](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L190)

***

### rawLog()

```ts
rawLog(level: LogLevels, ...args: unknown[]): void
```

Logs a message with the specified log level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LogLevels`](../enumerations/LogLevels.md) | The log level. |
| ...`args` | `unknown`[] | The arguments to log. |

#### Returns

`void`

The logged message.

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:154](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L154)

***

### warn()

```ts
warn(...args: any[]): void
```

Logs a warning message.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| ...`args` | `any`[] | The arguments to log. |

#### Returns

`void`

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:198](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L198)

***

### clearLogs()

```ts
static clearLogs(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:82](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L82)

***

### customize()

```ts
static customize(cb: CustomCallback): void
```

Allows customization of the logging behavior by providing a custom callback function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`CustomCallback`](../type-aliases/CustomCallback.md) | The custom callback function for logging. |

#### Returns

`void`

#### Example

```ts
Logger.customize((logger, level, args) => {
    // Custom logging implementation
});
```

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:78](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L78)

***

### noColor()

```ts
static noColor(msg: string): string
```

A function that returns the input string as is, without any color modification.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `msg` | `string` | The message to log. |

#### Returns

`string`

The input message as is.

#### Source

[twitchapi/packages/eventsub/src/logger/Logger.ts:248](https://github.com/pablornc/twitchapi//blob/b274026/packages/eventsub/src/logger/Logger.ts#L248)
