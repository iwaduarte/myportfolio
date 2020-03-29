# myportifolio

##### tl;dr - checkout the website:  
The final stack used it was React, HTML5, CSS3( vanilla).  
[iwaduarte.dev]

This repo consists of a website containing information about the author. There you could find its CV in a 
summarized format or as a regular pdf.You will also find a bot 🤖  that will protect you from access further until
the user goes to play with it. A section of articles and videos also are provided to offer the author's perspective and mentality🤯.  
_

Furthermore, I will be discussing in that __README__ the technologies 
and strategies used to build such a simple website.

#### Front-end:  
__React__ it was used as the view library with Hooks. Hooks it was chosen due its functional characteristic and ease to use.
It was used only raw css and no frameworks (bootstrap, ant, etc..) in order to keep the dependencies to a minimum.
(It is not responsive at the moment)

#### Back-end: 
Initially to have Node.js to run a small SQL database seemed overkill. So data structures were built to suffice the need of it.
However, considering we needed to implement a contact form and leaving sensitive data in the build it was out of question a lambda function
it was then created with use of __serverless__ framework and aws services.

#### DevOps
- GitHub Actions it was implemented to deal with __CI/CD__.
- The build page it was configured to be distributed globally via _CDN_ (CloudFront - aws).
- Also _gzip_ it will implemented to offer even faster delivery.

##### ✨ Interestings pickups :   
>Using _setTimeout_ and _setInterval_ has been proven challenging. Synchronizing two tasks as
>animation and timer in a asynchronous mono-threaded language had been tricky and fun.

>For the random  quote area in the bot section it was used 3 different APIs and one of it has demonstrated to be very erratic and therefore measures of
>__failsafe__ were implemented.

### 💛 Next:
- The repo is still under development although it has most of its Functionalities implemented.
- The proposed projects in the portfolio page are also under development
- The page protected by the bot is raw and easily guessable 
 
 
 Enjoy 😎 !





