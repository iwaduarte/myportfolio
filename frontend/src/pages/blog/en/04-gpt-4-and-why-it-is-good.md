---
url: https://medium.com/@iwaduarte/gpt-4-and-why-it-is-good-for-chrome-to-crumble-e75f284f1f97
canonical_url: https://medium.com/@iwaduarte/gpt-4-and-why-it-is-good-for-chrome-to-crumble-e75f284f1f97
title: GPT 4 and Why it is Good for Chrome to Crumble
subtitle: A story about an extension and why I am against Manifest v3
slug: gpt-4-and-why-it-is-good-for-chrome-to-crumble
description: ""
tags:
- chatgpt
- google
- english
- extension
- javascript
author: Iwá Duarte
username: iwaduarte
---

# GPT 4 and Why it is Good for Chrome to Crumble

### A story about an extension and why I am against Manifest v3

A long time without writing. Yeah, in a world of noise, I do not want to be this prolific AI copy/pasta that we see everywhere. The goal is to be less lazy but still try to be original (try because the temptation is real). Every word from here is from my own troubled mind unless is corrected for mistakes (I use Grammarly or whatever is suited for that).

I will introduce an extension today. It is called **form-filler**. Basically, fill out forms. Nothing special, not intended for everyday use but for people looking for *jobs*.

You could use it for anything if configured properly but that is not the idea. I’m unemployed right now, which totally sucks. But hey, I like building stuff. So why not waste my time crafting crap that no one in their right mind would want?

Like the old adage: “Automate 1 minute worth of 2".

My plan is simple: Fill forms faster, mass apply automatically, land thousands of interviews, and get rich quicker. Also, help anyone in the same situation.

The uniqueness of form-filler is that without using any external service is capable of uploading **PDF files**. The idea is to automate so you apply in sites like *greenhouse.io*, *lever.co, workable.com* and so many others without even having to click and select thousands of files by yourself. Trust me mate is pretty neat.

Okay, great idea. Great time developing. Let’s input to *Chrome Web Store* and be done with it. Wait a minute… Shhhhhiiiiii****t: They do not accept ManifestV2 for new extensions.

# ManifestV2-V3-VX and why is that a problem?

I think it happens to all companies. They start nice. They found a unique idea and/or they are better than everyone else. They say to the world: Don’t be evil. They actually mean it the first time.

Everyone holds hands. It is like a scene from a Disney World movie with a rainbow at the end. Everyone is laughing. Popcorn, coke, pizza for everyone. Wow, what a dream company, what a future ahead of us.

Money comes in.

Pressure comes high. “Money” needs to be “escalated”. Don’t be evil they continue saying.

More money. More investors. More bad decisions.

A whole company culture can shift from making this world a nice one to:
Q1 did not profit so we need to achieve profit in Q2, in order to improve and increase and escalate for Q3 and Q4.

Elementary my dear reader, I am being simplistic. Of course, there are a lot of variables. But get this like a hyperbolic generalization of Google and its decisions over the years.

From **really cool** products and **great vision** turned into *ash* just because they did not earn enough or did not manage properly.
[https://killedbygoogle.com/](https://killedbygoogle.com/)

From **features** in services that were **free** and became **ugly**, **buggy**, and **less appealing**.
[https://www.androidpolice.com/2021/04/08/five-of-the-worst-things-google-has-ever-done/](https://www.androidpolice.com/2021/04/08/five-of-the-worst-things-google-has-ever-done/)
[https://arstechnica.com/gadgets/2021/03/the-new-google-pay-repeats-all-the-same-mistakes-of-google-allo/](https://arstechnica.com/gadgets/2021/03/the-new-google-pay-repeats-all-the-same-mistakes-of-google-allo/)

From** features that did not have the user interest at hand but profit**. And I am talking about you [Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/). You are a scam artist stunt that uses heavy words like **security**, **privacy**, and **performance**.

![Manifest V3 when Google is claiming its security](../../../assets/1*q_yR6Mn2dxwIPK6a0DPxuw.gif)

I am not the only one claiming that. Hundreds of people are saying the same.

[https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening)
[https://www.reddit.com/r/chrome/comments/xijfgk/manifest_v3_is_bad_for_users/](https://www.reddit.com/r/chrome/comments/xijfgk/manifest_v3_is_bad_for_users/)
[https://grantwinney.com/what-is-manifest-v3-and-why-is-google-pestering-me/](https://grantwinney.com/what-is-manifest-v3-and-why-is-google-pestering-me/)
[https://www.techrepublic.com/article/google-makes-the-perfect-case-for-why-you-shouldnt-use-chrome/](https://www.techrepublic.com/article/google-makes-the-perfect-case-for-why-you-shouldnt-use-chrome/)
[https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening](https://www.eff.org/deeplinks/2021/12/chrome-users-beware-manifest-v3-deceitful-and-threatening)

The problem is that Google holds the majority of the market share when it comes to browsers(~62%). They can decide to ignore our complaints, after all, what can we do?

Profit-first mentality means pushing the agenda without the user’s concern. It is not good for the community. But hey. It is cool. Just accept it already.

If you are the bully in school, no one dares to stand up against you. And you call all the shots, right? Right?

# The “Should be Open” company that is about gains too

I could restart here, new company **NON-profit**, make the world a better place, blah-blah-blah. 
Let’s create an **Open A**rtificial **I**ntelligence company blah-blah-blah. Nah mate we need to put food on the table. You know the gist.

However, these guys opened the Pandora box. Sam Altman, Ilya Sutskeve (the main responsible for the ChatGPT code) and its engineering team were responsible for this revolution.

And kudos to these guys. Amazing innovation. Great disruptive technology.

> If you lived under a rock and for some reason, you do not know what is chatGPT I will ask you to just come back to your rock. You have no quarrels here mate. Kidding. “Google” about it.

The idea was so great that shook the entire industry. Now you have a digital handyman that you pay nothing and you take all the credits. Love it.
Sign me up for it. And then millions did. Making the fastest-growing user base ever.

That alerted the attention of big players. The Call-Me-Evil-I-Do-Not-Care guys (aka Microsoft) joined the battle and started heavily investing in these technologies. I mean who would not want it? This is truly great technology.

And how the behemoth Google after being a prolific AI player did not have something similar?

The problem with making big bugs mentality is that innovation goes against it. Since innovation sometimes loses big bucks for no return at all. After all, innovation is research, development, testing, failures, and is not cheap at all.
We have seen before, thousands and thousands of companies that started to lose track even if did not look like it.

> Blockbuster Entertainment Inc., Xerox Holdings Corporation, Kodak, etc.
[https://www.forbes.com/sites/biancamillercole/2019/01/10/innovate-or-die-how-a-lack-of-innovation-can-cause-business-failure/?sh=382b33af2fcb](https://www.forbes.com/sites/biancamillercole/2019/01/10/innovate-or-die-how-a-lack-of-innovation-can-cause-business-failure/?sh=382b33af2fcb)

So **Microsoft** is amping the bets and **Google** is trying to recover, **Open.ai** is the new baby on the market. What does that have to do with ManifestV3?

> “A war is made of many battles, maybe when weak we need to retreat” — Cap. No One

When you are losing market. And the sentiment is that you are not cool anymore. When the youngest are shifting their habits. Sometimes you need to realize that being stubborn will not take you anywhere.

And even if you are stubborn the new solutions that come with the new disruptive technology will embrace the neglected. In short, users will get heard eventually because that is the beauty of competition, I guess.

Companies like **Firefox** and others to come can grab a substantial part of the market share if played right. Google is losing battles and losing the market (albeit slowly). And this perception is crucial to make the right play.

We all moved from Internet Explorer to Firefox and then to Google. Maybe is time to reverse shift and Google does not have any [**moat](https://www.semianalysis.com/p/google-we-have-no-moat-and-neither)** left.

### A sad feeling that it is all for nothing

Yep. So that is what I think will happen and that is why I am against Manifest V3 (those links are to be read Mr. Slacker). So I decided to not put my extension in the Google Web Store for the time being. However, I am aware that things can not go your way. And if I was great at predicting the market I would be rich (none is the case). Therefore, the feeling is just sadness.

You can still use my** form-filler** in Google though (Chromium-based browsers) and you can use it in **Firefox** if you already made the change. Everything is further explained here:
[https://github.com/iwaduarte/form-filler](https://github.com/iwaduarte/form-filler)

The worst part is that I have some ideas that could improve people’s daily lives and I could use the reach that Google has. But as the saying goes: If you can not win them, annoy them, criticize them, and then join them.
“Don’t be hypocritical”.

Also don’t get me wrong here. I do like money, a lot haha. It is not about margins or dividends but how you are smart about it. Google has amazing brain power. Every bright kid in the town (the world actually) wants to join it. But…politics, revenues, and short-sighted vision are making this ugly transition from the Google cool-kid to the Google bully-moronic and no one likes it.

Please be cool. Always. The coolest. Me.

![Everything is so astonishing when you are cool. (DALLE-2)](../../../assets/1*k79dm9Wr6b7Oc_edwi5Rbg.png)*Everything is so astonishing when you are cool. (DALLE-2)*


