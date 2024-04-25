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
| `options` | [`LoggerOptions`](/api/eventsub/type-aliases/loggeroptions/) | The options for configuring the logger. |

#### Returns

[`Logger`](/api/eventsub/classes/logger/)

#### Source

twitchfy/packages/eventsub/src/logger/Logger.ts:94

## Properties

| Property | Modifier | Type | Description |
| :------ | :------ | :------ | :------ |
| `options` | `readonly` | `Required`\<[`LoggerOptions`](/api/eventsub/type-aliases/loggeroptions/)\> | The options for configuring the logger. |
| `DEFAULT_OPTIONS` | `static` | `Required`\<[`LoggerOptions`](/api/eventsub/type-aliases/loggeroptions/)\> | The default options for the logger. |
| `colorFunctions` | `static` | `Map`\<[`LogLevels`](/api/eventsub/enumerations/loglevels/), (`str`: `string`) => `string`\> | A map containing color functions for different log levels. |
| `dirname` | `static` | `string` | - |
| `prefixes` | `static` | `Map`\<[`LogLevels`](/api/eventsub/enumerations/loglevels/), `string`\> | A map containing prefixes for different log levels. |
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

twitchfy/packages/eventsub/src/logger/Logger.ts:130

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
| `level` | [`LogLevels`](/api/eventsub/enumerations/loglevels/) |

#### Returns

[`LogLevels`](/api/eventsub/enumerations/loglevels/)

#### Source

twitchfy/packages/eventsub/src/logger/Logger.ts:108

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

twitchfy/packages/eventsub/src/logger/Logger.ts:144

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

twitchfy/packages/eventsub/src/logger/Logger.ts:116

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

twitchfy/packages/eventsub/src/logger/Logger.ts:182

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

twitchfy/packages/eventsub/src/logger/Logger.ts:206

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

twitchfy/packages/eventsub/src/logger/Logger.ts:214

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

twitchfy/packages/eventsub/src/logger/Logger.ts:190

***

### rawLog()

```ts
rawLog(level: LogLevels, ...args: unknown[]): void
```

Logs a message with the specified log level.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `level` | [`LogLevels`](/api/eventsub/enumerations/loglevels/) | The log level. |
| ...`args` | `unknown`[] | The arguments to log. |

#### Returns

`void`

The logged message.

#### Source

twitchfy/packages/eventsub/src/logger/Logger.ts:154

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

twitchfy/packages/eventsub/src/logger/Logger.ts:198

***

### clearLogs()

```ts
static clearLogs(): Promise<void>
```

#### Returns

`Promise`\<`void`\>

#### Source

twitchfy/packages/eventsub/src/logger/Logger.ts:82

***

### customize()

```ts
static customize(cb: CustomCallback): void
```

Allows customization of the logging behavior by providing a custom callback function.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `cb` | [`CustomCallback`](/api/eventsub/type-aliases/customcallback/) | The custom callback function for logging. |

#### Returns

`void`

#### Example

```ts
Logger.customize((logger, level, args) => {
    // Custom logging implementation
});
```

#### Source

twitchfy/packages/eventsub/src/logger/Logger.ts:78

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

twitchfy/packages/eventsub/src/logger/Logger.ts:248
