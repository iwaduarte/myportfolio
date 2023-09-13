---
url: https://medium.com/@iwaduarte/applying-laziness-to-the-extreme-a-new-code-generator-for-node-js-bc2cd5376ff7
canonical_url: https://medium.com/@iwaduarte/applying-laziness-to-the-extreme-a-new-code-generator-for-node-js-bc2cd5376ff7
title: 'Applying laziness to the extreme: A new code generator for Node.js'
subtitle: Goodbye express-generator and hello express-sire!
slug: applying-laziness-to-the-extreme-a-new-code-generator-for-node-js
description: ""
tags:
- javascript
- nodejs
- expressjs
- javascript-development
- english
author: Iwá Duarte
username: iwaduarte
---

# Applying laziness to the extreme: A new code generator for Node.js

Goodbye **express-generator** and hello **express-sire**!

![Hello Sire! (DALLE-2)](../../../assets/1*lnh8K8jTmm0xMJS_SafUxw.png)*Hello Sire! (DALLE-2)*

In my dev journey, I have always “clicked” the lazy button. Lazy is the way pretty much like [Dudeism](https://en.wikipedia.org/wiki/Dudeism) is. Going with the flow and taking it easy until your boss is yelling at you about the bloody **deadline**.

Instantly, you wake up and rush to do the things you are supposed to. You are running behind schedule and your panic button starts buzzing. “The new project”, they said. In an attempt to give yourself hope, you shake your head look at the clock, and think: “I am so fuck**d”.

Fear not, my brave comrade. Here at Chaos Company Unlimited, we have your back.

I present to you the short version of this tutorial **(tl;dr)**:
[https://www.npmjs.com/package/express-sire](https://www.npmjs.com/package/express-sire)

Go there, use it, and speed up the skeleton of your Node.js projects. Leave feedback, comments, and rages on the [GitHub page](https://github.com/iwaduarte/express-sire) (or not, be your own master MUAHAHAHA).

### The long story is also called:

# The Wizard, The Revolutionist, and The Draughtsman

When I was a baby…kidding.

The year is 2009 and a mate called [Ryan](https://en.wikipedia.org/wiki/Ryan_Dahl) is fed up with how JavaScript is being treated. A lot of bullies from their high-bloated OOP castles, throwing rocks and saying: “Java? — Script developers, please”. “Scum”. “Deserve to die, no less”

They chant at all corners with a little sense of pride. Not anymore. A magician at Google is creating a powerful engine. In the distant future, that engine name will baptize cars.

Ryan is young and naive and thinks all the time about revolutions. He hates complexity and bloated configurations. He heard that the wizard Lars Bak and his musketeers are making the potion engine available.

Quickly, he grabs the engine papers and starts developing his revolution. With time and to his surprise, millions would join his cause and he would be responsible for creating a massive battalion. The Node battalion. Fuck***g Node.js. By many historians the greatest battalion of all time.

In a tavern, a few hours from there a new designer for the black arts would have his moment to shine. He would join Ryan's army and help that naive crusade, he would be responsible for a decent part of Ryan’s battalion victories and fame.

And his name: 
TJ Holowaychuk. (Pause here, I have to google every time to get this name right).

> They killed, cursed and left their battalion afterward, but that is not the point…

Node is the runtime that powers everything. And that is all matter for now… *(Deno and Bun are watching)*

# Back to TJ

TJ created thousands of packages* (a “little” exaggeration to increase the narrative)*, things like [express](https://expressjs.com/).js, [commander](https://tj.github.io/commander.js/).js, [stylus](https://stylus-lang.com/), [koa](https://koajs.com/) so on and forth.

The guy was so prolific that had people questioning if he was not a team instead of a person. He started as a designer with a level novice to become a one-of-a-kind developer.

> That is the living proof that with dedication you can reach everything. (Bullshit. You cannot. But let’s give a hopeful vibe to that text).

Our mate created our beloved [express-generator](https://expressjs.com/en/starter/generator.html) as well. What does it? 
*(See? I told you cannot reach everything).* It generates a web **server with the express framework**. An easy and simple server created rapidly.

Express-generator generates files for you. Generates a web server for you. It generates all the boilerplate code so you do not have to type and create files and configure everything from scratch.

You can from there think about the logic. The business. The actual code. Instead of configuring things. It is simple enough that will not force you to write in a certain way or put through gigantic documentation so you can learn how to generate the “right way”. (Criticism intended)

It is good because `express****` is good and simple. Therefore, it generates more of the simple. It is good for beginners and good for seasoned developers too.

### What happened then? Why did you create express-sire?

I wanted to use a scaffold to increase my productivity. I want to be fast and lazy and the same time. Having configurations been done for me that I knew it would be the same for the thousandth time.

I looked at the solutions out there. Like a true JavaScript developer, I did not like it. No. They are not worse than mine. They are probably way more complex than what I did and that is why I like what I have done even more.

I have looked at [yeoman](https://yeoman.io/) and the express ones out here and nothing met my criteria, which are:

* Be simple.

* Up to date.

* Simple

* Stupid

* Did I say simple?

* Oh, working like a lego block is a must too.

You would choose what you wanted to be installed. If you want it this way okay. If you wanted that way, okay. I want this with that and that. Okay got it.
That is the whole idea. To provide a “click buttons generator that lets you choose what kind of delicious ingredients you want”

And simple and stupid enough like express-generator. So, I went there for wisdom. Ohh boy. It gets interesting…

# The steps in building

The thing with `express-generator`**** is that it is getting old. And `code` gets old. It gets legacy. Because it is not as successful as it should **9.000 weekly downloads** against **21.000.000** (**express**) it did not adhere to the current practices.

*It still uses templating and pure/raw/old SSR*. In an era of SPA, SSG, modern SSR, and micro-frontends the old way with templating is not as used anymore.

*Still uses CJS ([CommonJS](https://en.wikipedia.org/wiki/CommonJS))*. Node and packages are moving to [ESM](https://en.wikipedia.org/wiki/Embedded_System_Module). It is a messy and painful process but still, it is coming and nothing can prevent it. JavaScript language is evolving (for the best or worse) and new practices are being adopted every year.

*It does not offer the lego block*. It is minimalist and I love this simple tool. But I am greedy and lazy and want everything done by a computer so I can get the credit.

With all that, I went and created a mutated version of this minimal tool.

I wanted to create the same way express-generator did. It creates templates by delegating some “options” to a templating engine in this case **EJS.**

> **EJS** is a simple templating language that lets you generate HTML markup with plain JavaScript. ([**source**](https://ejs.co/))

A template file (app.js.ejs) inside the express-generator module would look like this:

![](../../../assets/1*4ZkOzaqVSVy1vPe1t_lpSA.png)

Although EJS is used to generate HTML files, the strategy here is to use the same templating but to build a .js file. An elegant and great solution at the time. Nowadays it seems off.

EJS uses a method `render` to render and parse and everything else and it is a big library. It uses a lot of [regex](https://github.com/mde/ejs/blob/main/lib/utils.js) and functions and if and else's and it is a “complicated way” to create files. Especially in a world of [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).

> Note: I am not saying that EJS is bad. Far from that. I am saying that for our task is overkill.

We did not need any of the above. JavaScript built-in feature would carry us away and deliver the message. The idea is to create a file from this powerful sorcery (template literals) and others had the same concept too ([here](https://github.com/postmanlabs/postman-code-generators/issues/516), [here,](https://www.npmjs.com/package/graphql-tag) and [here](https://www.npmjs.com/package/@ahmadnassri/template-literals-engine)).

With template literals being the choice now we need to define how would be the best way of “parsing” the string template into an actual JavaScript object. Some strategies were thought of.

First approach. Requiring the file:

![source: https://stackoverflow.com/a/42881547/7350853](../../../assets/1*nba8dzeP__nV8RWNUbhYkw.png)

Second approach. Combining it with regex:

![source: https://stackoverflow.com/a/71090080/7350853](../../../assets/1*qjoX--6C-YrhwXlPShpZHA.png)

Third and final. Using eval:

![source: https://stackoverflow.com/a/55475107/7350853](../../../assets/1*2ItnhNMWnWsVreK6CdfyIg.png)

You can guess. I choose eval. “Wait did you say eval?” Yep. Eval.
“But..But.. Eval is E-V-I-L”. My comrade, avoid generalization and read the response above.

I will make it clear:

>> Although it can be dangerous to run JS code like this, if the templates are files that are in your control and written by you. I guess it can be done.

And that is how I did. Apart from that, I found an awesome explanation from Safia Abdalla. She wrote a short but interesting text about how template literals work under the hood. I will not spoil it because it is easy to read and get the gist of it.

[https://dev.to/captainsafia/how-do-template-literals-in-javascript-work-under-the-hood-4g2b](https://dev.to/captainsafia/how-do-template-literals-in-javascript-work-under-the-hood-4g2b)

Okay. Templates done. What else?

We need to provide users with an interface, so they can install or provide commands inside a terminal. For that, I have tried to keep the minimum possible number of dependencies without having to reinvent the wheel. It is always the same approach: less work and simplicity, yielding big results.

I have followed a few tutorials on the internet and I have read the express-generator codebase.

[https://www.twilio.com/blog/how-to-build-a-cli-with-node-js](https://www.twilio.com/blog/how-to-build-a-cli-with-node-js)

[https://medium.com/henriquekuwai/criando-sua-cli-com-node-js-d6dee7d03110](https://medium.com/henriquekuwai/criando-sua-cli-com-node-js-d6dee7d03110) (Portuguese)

[https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/](https://www.sitepoint.com/javascript-command-line-interface-cli-node-js/)

I did not follow their tutorial exactly but I got a good understanding of how it works and how it should work.

I worked with these beautiful libraries myself (as you can see in the [package.json](https://github.com/iwaduarte/express-sire/blob/master/package.json))

* [Chalk](https://github.com/chalk/chalk#readme): to have beautiful colors.

* [Inquirer](https://github.com/SBoudrias/Inquirer.js/#documentation): to ask questions to the user.

* [Figlet](https://github.com/patorjk/figlet.js): to have a badass ASCII lettering

* [Minimist](https://www.npmjs.com/package/minimist): to parse cli input arguments.

I have also tried to keep the package so low on new JavaScript features that Node users from v10 could adopt it and use it, but that did not work as expected and I had to revert to support Node v12.

The package also installs things that I completely think are necessary but completely optional like:

* ESM Modules or CJS

* Git

* [Compression](https://github.com/expressjs/compression)

* [Helmet](https://github.com/helmetjs/helmet)

* [Sequelize](https://sequelize.org/docs/v6/)

I have made a few decisions related to adding [Prettier](https://prettier.io/) as a default installation. Because it annoys me that people are still arguing over things that I think are [bike-shedding](https://en.wikipedia.org/wiki/Law_of_triviality) and code formatting is one of them.

All decisions apart I think this project is great and has a lot of paths to grow. I can (and will) implement more optional features so the user has everything it needs by lunch when the boss is yelling at the door and 15 minutes later, they are smiling with a project built to the awe of the audience.

See? I told you I would get your back covered. Fear not mate. We are here for each other.

Cheers.

More (external) reading:

[Efficient, reusable application templates and scaffolding](https://medium.com/blue-harvest-tech-blog/refining-efficient-approaches-to-build-reusable-templates-and-a-scaffold-for-the-application-f1459edc3f74)
[Start New Projects Faster: 10 Scaffolding Web Dev Tools](https://www.sitepoint.com/start-new-projects-faster/)


