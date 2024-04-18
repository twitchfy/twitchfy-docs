---
title: Introduction
sidebar:
    order: 1
---

Twitch API is a powerful node library to interact with the developer resources all around Twitch.

In this guide we are going to be covering the first steps to build up a basic Twitch chatbot using EventSub.

## Why this package over others.

* As called before this package is build in EventSub API moving past the old IRC server which will be [progressive limited over the coming months](https://discuss.dev.twitch.com/t/giving-broadcasters-control-concurrent-join-limits-for-irc-and-eventsub/54997). Moreover Twitch encourage to use EventSub.

* Twitch API offers a reliable way of making command which diffrent options and has a great structure for scalable chatbots.

* Twitch API implements a way of listening to EventSub events within your chatbot. Moreover you can `directly` interact within the Twitch API. Making possible, for example, to ban users or change chat settings with only executing a simple function. 


:::note
Although this package has been built from draft some functions as the simple way of creating commands have been inspired by [Seyfert](https://seyfert.dev), a powerful library for interacting with the Discord API.
:::



