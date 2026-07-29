---
title: PWS2 Announcement
image: /img/blogs/pws-announce/thumbnail.png
date: 2026, 7, 29
num: 4
to: /blog/4
description: You were waiting for it... But now, you will no longer wait for it... Because it is here now
---

So in my [first blog](/blog/2#what-now) I talked about what PWS was and how I planned to 'rewrite' it. I am going to call it a sequel from now on because that describes it better. After giving it a lot of thought I have figured out what I actually want to make.

## PWS 2: The Sequel Everyone Asked For

Before actually starting to put in resources to develop the sequel I decided to ask current PWS users if they would want a sequel to be made to their beloved sftp clone. So I made the survey and left it for a couple days, only expecting a couple of responses. When the results came in even I couldn't believe it. I'll let you have a look at it yourself. 

![Survey Results](/img/blogs/pws-announce/survey.png)

That's right! %100 of current PWS users would want a sequel! Such a thing is unheard of in the history of surveys. It means that the entirety of humanity has united under one banner for the first time in a long time. All of this support has motivated me to make the best possible PWS 2 that I can. I just hope that I am strong enough to not crumble under such immense pressure.


## What it's going to be

There are some things that I have identified as the soul of the original PWS that should not be changed.
- Client should be multi-platform.
- Should have something to do with my Raspberry Pi server that I use to self-host my applications.
- Should have Something to do with cloud.

With these requirements the final idea that I have come up with is a project deployment platform. So what that means is if you have a project in your github and you want to deploy it quickly on your own server you can use PWS 2 to do that.

It is going to have 2 components:
- The server that is going to run on a Linux machine.
- The TUI client that is going to allow connection to that server.

I have made a [notion document](https://apricot-swamp-da3.notion.site/initial-ideas?source=copy_link) with all the possible features that it could have that I'm going to keep updating when more ideas come to me. Core features are currently the ones that are red. There you can also see that I quickly gave up on other ideas once this idea fully formed in my head.

Also one project that I have found that is an inspiration for me in terms of the TUI design for his app is [lazydocker](https://github.com/jesseduffield/lazydocker).

## Why am I making this

I have been using a Raspberry Pi at home to self-host a lot of my projects. In fact this very website that you are on right now is on my tiny home server.

Every time that I host a web dev project I have to:
1. ssh into the server
2. Clone the repo
3. Build it if it needs to be built
4. Run it in the background using pm2
5. Add the port to nginx
6. Run certbot to get the ssl certificate

I have made bash scripts to make it faster to do some of these but still I would love it if there was an app that did all of these automatically. So I have decided to make PWS 2 which will make it so much faster to self-host.

## C++ update #2

I am very hard at work learning the language that I will make this whole application in. I am done learning all C++ concepts (pun intended). I decided that I will not try to completely learn all of the syntax by practicing every concept with mini projects as I usually do, instead I am going to learn the concepts and use the _Tour of C++_ book as reference when I am implementing them. What could go wrong? 

I have still some ways to go in order to learn the C++ standard libraries though so I will keep developing the ideas for features of the app concurrently while I continue to learn it all. There are some other things that I have to learn before starting to code like CMake(I only used gnu make before) and FTXUI which is the library that I am going to use in order to develop the TUI interface for the client.

So I have a couple more weeks to go before I can start coding. In the meantime I am still going to try to post some blogs about other stuff that I like that makes me seem smart.

Until next time... keep on PWSing.
