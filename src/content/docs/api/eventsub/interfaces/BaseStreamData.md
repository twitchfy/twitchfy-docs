---
editUrl: false
next: false
prev: false
title: "BaseStreamData"
---

The data needed to build up a BaseStream.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The ID of the stream. |
| `started_at` | `string` | The ISO String when the stream started. |
| `type` | [`StreamTypes`](/api/eventsub/type-aliases/streamtypes/) | The type of the stream. Currently, it can only be 'live'. |
