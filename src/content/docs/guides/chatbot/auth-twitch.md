---
title: Authorizing within Twitch
sidebar:
  order: 2
---

## Creating a Twitch Application.

First of all we have to create a `Twitch Application` for interacting within the Twitch API and being able to create our own custom chatbot. We can create it going through the [Twitch Developer Console](https://dev.twitch.tv/console).

Having created a Twitch Application you will have to get and save the `Client-Id` and `Client Secret` in your application dashboard. 

## Creating an authorizing a chatbot account.

Chatbots on Twitch are essentially user accounts designed to execute actions programmatically. Its recommended to create an unique account for running your chatbot. 

After creating your chatbot account you will need to authorize and get an `user access token` to perform bot actions and join to diffrent chatrooms over Twitch. It's highly recommended to get an user access token from the `Authorization Code Grant Flow` as tokens generated with this flows could be refreshed and this library handle that automatically. For further information about generating user access tokens see the official [Twitch API documentation](https://dev.twitch.tv/docs/authentication/).

:::danger
The basic scope which the user token needs for joining channels is `user:read:chat`. If you are building your chatbot using Webhooks, for the EventSub connection, it adittionally requires `user:bot` scope.

Notice than if you want to perform actions such banning users or edit chat settings you will need specific scopes so, despite isn't highly recommended you can generate an user token with all scopes.
:::

:::note
To get the user access token you will need the `Client-Id` and `Client Secret` you have stored in the step above.
:::

:::tip
If you are using the `Authorization Code Grant Flow` you will receive a `code` field for later generating the user token with a request.
Within Twitchfy you can generate rapidly generate the token.

```ts showLineNumbers copy wrap

import { HelixClient } from '@twitchfy/helix';

const userToken = await HelixClient.generateUserToken({
  clientID: 'myClientID',
  clientSecret: 'myClientSecret',
  code: 'mycode',
  redirectURI: 'redirectURI'
});
//returns a TokenAdapter which is used when declaring the chatbot, if you want the raw data change raw option into true, default is false.
```
:::
s
:::tip

After generating your user token, it's crucial to store it securely, whether in a database or a file. It's important to note that tokens expire, but if you're using a user access token generated with the Authorization Code Grant Flow, it will be automatically refreshed by the package. However, you still need to persist it to retrieve it at the beginning of your application in case it stops functioning suddenly.

To handle token refreshes, you can define a custom callback `onUserTokenRefresh` by overriding the Helix options like this:

```ts showLineNumbers copy wrap

const chatbot = new ChatBot({
  //other options
  ...opts,
  helix: {
    callbacks: {
      onUserTokenRefresh(oldToken, newToken){
        console.log(`User Token refreshed (${oldToken.token}). New one is ${newToken.token}`)
      }
    }
  }
})
```
:::