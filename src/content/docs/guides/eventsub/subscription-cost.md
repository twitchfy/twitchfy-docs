---
title: Subscription Cost
---

## What is it?

The subscription cost is a pre-defined cost sent by Twitch when creating a subscription. This cost is used for limiting the creation of subscriptions in any type of connection. Althrough the cost in either WebSocket connection and Webhook connection is set the same, the maximum cost of the Webhook created subscription is highly more.

## How is set?

Twitch set a defined cost to each subscription when is created. It depends on various factors. Firslty, all the subscriptions which need to specify an user but does not need authorization to be created will cost `1`. Nevertheless, as authorization is needed, all the subscriptions which need authorization will cost `0`. 

:::note
If an user has authorized with your application there is no additional cost for subscriptions of that user which does not authorization.
:::

For example, you have created a `stream.online` subscription which does not need any authorization so the subscription will cost `1`. Then you have created a `channel.cheer` subscription which need a proper authorization with the `bits:read` scope so it will cost `0`. Finally, you have created another `stream.online` subscription but now the user who is the target of the subscription is the same you have used for creating the `channel.cheer` subscription so the cost will be `0`.

:::important
Subscription cost are updated automatically by Twitch so if you have a subscription which cost `1` but the user who is the target of that subscription has authorized within your application it will change it cost value to `0`. It is important to remark that the cost field in the subscription object will not be updated and will be the same as it was.
::: 

The total cost is the sum of all the cost of the subscriptions. In WebSockets it is the sum of all the subscriptions per user token while in Webhooks is the sum of all the subscriptions of each callback.
