---
title: "PWS2 Update #2"
image: /img/blogs/update.png
date: 2026, 9, 28
num: 6
to: /blog/6
description: "Spoiler Alert: More of not getting much done"
---

Dear PWS2 heads,

I am once again writing to you about the updates for the sequel project of the century.

## Cryptography is hard

So in the last blog I talked about how I was learning cryptography in order to create the most secure way of authentication that I can. I was using Crypto101 as my resource which was pretty good but inside the book there were some TODO text and it seemed that the repo was inactive so it was not getting updated anytime soon. Unfortunately the more I progressed the frequency of the TODOs also increased and so did the amount of actual math theory which felt irrelevant to what I needed to know. So I decided to pivot to a different resource. I landed on _Serious Cryptography_ which is a much longer book but I really wanted to know what I am doing in terms of security. 

So where does that leave me? Well I "finished" Serious Cryptography. I put it in parenthesis because I skipped the last couple of chapters about cryptocurrencies and post-quantum computing. I also gave up on trying to actually learn all the mathematical concepts because that would take waaaaay too long.

Now that I am a cryptography genius, nothing can stop me from starting to actually write the auth for PWS2. I decided that I could use TLSv1.3 where both client and the server have to present a valid certificate so that we can prove the identity of both. The most used tool for doing everything TLS is OpenSSL, it was time to learn that.

## OpenSSL is hard

Most tools that I have had to learn have had pretty good documentation or you could find resources that explained it pretty well. The problem with OpenSSL is that it has too many features and commands and functions from its library and I don't really know what I am looking for and where to start. The docs are not really structured and are not there to teach you any concepts. Even though I had read an entire book about cryptography I realized that I did not know everything that I needed to know in order to implement what I was looking for. So now it was time to learn Public Key Infrastructure which would help me understand the command line.

## PKI is hard

To learn Public Key Infrastructure I have now started to read the book _Bulletproof TLS and PKI_ which also has a tutorial on OpenSSL in the end. There aren't many other books about these concepts so there aren't many other options. The first chapter is an overview of everything that I learned from _Serious Cryptography_ so I probably could have started with it and would have still learned all that I needed to learn. But I made my choice and now is not the time to regret it.

## Confusion

Some of you might have noticed the clever thing that I have done with the title of this section, which is that I have named it confusion instead of conclusion. That is because I am quite confused. I am confused because cryptography and security have so many branches and every time I feel like I know enough, I realize all I have done is scratch the surface.

I feel like I might as well get a security certification as well while I am learning all of this. Looking at the CompTIA Security+ objective I still have much to learn but could be an interesting thing to do a little bit later.

Another reason I did not get much done is that I have started to learn French so  I have less time to just focus on this type of thing. I have a pretty consistent schedule every day that I am not working so that has helped me be more productive during this relatively busy time for me. 

With all of this I think I am going to have the auth protocol written by the end of next month. The most devout PWS2 heads would point out that this is the same milestone I had put for myself last month, but this time I pray there will be no more distractions. Some of you might think that PWS2 is in development hell but you are wrong. How can it be in development hell if nothing has been developed yet?

Anyways I still have to go and learn about PKI so I am going to leave now. bye
