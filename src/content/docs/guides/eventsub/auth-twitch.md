---
title: Authorizing within Twitch
sidebar:
    order: 2
---

In order for starting to develop your application over EventSub you will need the proper authorization within Twitch.

If your aim is to develop an application based on a WebSocket connection you will need to generate an user token with valid `scopes` for the events you are going to listen.

:::warning
As you use an user token you will be only able to subscribe to events which the user of the token is the main target.

For example, we have two users, User A and B. If you have the user token from User A you can subscribe to events such `Channel Follow` or `Channel Subscribe` from User A but not from User B
:::

For further information about how to generate an user token you can see the [full example](../chatbot/auth-twitch) in the chatbot guide and adapt it for your needs.

If your aim is to develop an application based on Webhooks or Conduits you will only need to generate an app token. For subscribing to events which need scopes and authorization from an user you will need the user to be authorized within your app with valid scopes.

:::tip

You can generate an app token within Twitchfy using `@twitchfy/helix`

```ts showLineNumbers copy

import { HelixClient } from '@twitchfy/helix';

HelixClient.generateAppToken({
    clientId: 'yourClientId',
    clientSecret: 'yourClientSecret'
}).then((token) => console.log(`My token is ${token}`));
```