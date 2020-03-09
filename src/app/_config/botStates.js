export const loadBot = (username) => {

    const botProfile = {
        name: '1010 out of 1010',
        anger: 0, //default 0
        happiness: 0, //default 3
        repeating: 0,
        userName: username,

    };
    const botStatesEN = {
        // L1R0A0H3
        // L - Level, R- Repeat, A - Anger - H - Happiness

        // L1
        'default': {
            type: 'intro',
            timeout: ['L1R1A0H3'],
            // timeout: ['L1R7A0H3'], testing purpose
            question: [`Hi, I am Iwa's Assistant, you?`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R1A0H3': {
            type: 'intro',
            timeout: ['L1R2A0H3'],
            question: [`Hellooo? Are you there? I have asked what is your name`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R2A0H3': {
            type: 'intro',
            timeout: ['L1R3A0H3'],
            question: [`So? N-A-M-E`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R3A0H3': {
            type: 'intro',
            timeout: ['L1R4A0H3'],
            question: [`Who dis?`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R4A0H3': {
            type: 'intro',
            timeout: ['L1R5A0H3'],
            question: [`Are you going to keep ignoring me? What is your NOMBRE, Nom , NAME, Nome, 名称?`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R5A0H3': {
            type: 'intro',
            timeout: ['L1R6A0H3'],
            question: [`Do you know it is not nice to be like that?`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R6A0H3': {
            type: 'intro',
            timeout: ['L1R7A0H3'],
            question: [`Fill the box. My name is:`, 'L2R0A0H0'],
            actions: [],
        },
        'L1R7A0H3': {
            type: 'intro',
            timeout: [{
                next: {
                    type: 'redirect',
                    external: true,
                    message: 'Get Lost',
                    url: 'https://www.zerotothree.org'
                }

            }],
            question: [`BOOOOOOOOOOOOOOOOOOOOOOOO`, 'L2R0A0H0'],
            actions: [],
        },

        //

        // L2
        'L2R0A0H0': {
            type: "second",
            timeout: [],
            question: [`Hi ${username}, I am sorry... Let me introduce my self. My name is... ${botProfile.name}`],
            actions:
                [
                    {
                        text: "I do not care or have time for this", //goes to L3
                        next: "L3R0A1H0"
                    },
                    {
                        text: "It's just I am in a bit of rush. That's all", //goes to L3
                        next: "L3R0A0H0"
                    },
                    {
                        text: "What a beautiful name!", //goes to L3
                        next: "L3R0A0H1",
                    },

                ]
        },
        //

        //L3
        'L3R0A0H1': {
            type: "third",
            timeout: [],
            question: [`Ohhh. I am flattered. What brings you here, ${username}?`],
            actions:
                [
                    {
                        text: "I wanna see Iwa", //goes to level 4 or deep
                        next: "L8R0A0H1" // do you wanna offer him work
                    },
                    {
                        text: "Annoying you is the goal..", //goes to level 4 or deep
                        next: "L4R0A3H0" //
                    },
                ]
        },
        'L3R0A1H0': {
            type: "third",
            timeout: [],
            question: [`What do you have time for? BUSY "ENTITY"`],
            actions: [
                {
                    text: "Not you",
                    next: "L4R0A3H0" //goes to level 4 or deep
                },
                {
                    text: "Apologies. I have a very important matter to discuss. ",
                    next: "L8R0A0H1"//goes to level 4 or deep
                },
            ]
        },

        'L3R0A0H0': {
            type: "third ",
            timeout: [],
            question: ["Oh I see...Why?"],
            actions: [
                {
                    text: "I am working",
                    next: "L6R0A0H0" //goes to level 4 or deep
                }, {
                    text: "Does not matter",
                    next: "L4R0A3H0" //goes to level 4 or deep
                },
            ]
        },
        //

        //L4
        'L4R0A3H0': {
            type: "fourth",
            timeout: [],
            question: ["I see... you came here to make me angry..."],
            actions: [{
                text: "Yes! ",
                next: {
                    type: 'load',
                    data: './images/angrymeme.jpg'
                } //angry meme
            }, {
                text: "No! ",
                next: "L4R0A2H0"
            },]
        },
        'L4R0A2H0': {
            type: "fourth",
            timeout: [],
            question: [`Okay I will give you another chance. Because I am a good bot`],
            actions: [{
                text: "In truth I just wanna steal you",
                next: {
                    type: 'run',
                    fn: 'clearScreen'
                } //clear screen - How about now smart-ass
            }, {
                text: "I am sorry!",
                next: "L5R0A2H0"
            }]
        },
        //

        //L5
        'L5R0A2H0': {
            type: "fifth",
            timeout: [],
            question: ["Are you really asking for forgiveness?"],
            actions: [{
                text: "No HAHAAHAHAHAHA",
                next: {
                    type: 'load',
                    data: './images/joker.webp',
                    message: 'You are a joker...'

                }, //screen joker gif laughing
            }, {
                text: "I am truly. 0101 out 01010. I was just being playful",
                next: "L6R0A0H0"
            }]
        },
        //

        //L6
        'L6R0A0H0': {
            type: "sixth",
            timeout: [],
            question: ["Ohhh Okay! I see. What did you come here for ?"],
            actions: [{
                text: "Looking to know more about Iwa",
                next: "L8R0A0H1"
            }, {
                text: "Why are you asking?",
                next: "L7R0A2H0"
            }]
        },
        //

        //L7
        'L7R0A2H0': {
            type: "seventh",
            timeout: [],
            question: ["Really? Again?"],
            actions: [

                {
                    text: "Yep.",
                    next: "L7R1A2H0"
                }, {
                    text: "Nope.",
                    next: "L7R1A2H0"
                }

            ]
        },
        'L7R1A2H0': {
            type: "seventh",
            timeout: [],
            question: ["Really? Again? (see what happens when you try to be clever?)"],
            actions: [

                {
                    text: "Yep. 😔",
                    next: "L7R0A2H0"
                }, {
                    text: "Nope 🙃",
                    next: "L7R0A2H0"
                }

            ]
        },
        //

        //L8
        'L8R0A0H1': {
            type: "eighth",
            timeout: [],
            question: ["Do you wanna offer him a job position ?"],
            actions: [
                {
                    text: "Yes!!!",
                    next: {
                        type: 'redirect',
                        message: '',
                        url: '/y0ush0u1dn0th4v3gu3ss3d' //@Todo create random url or state to allow access upon bot authentication
                    } //page?? unlock portfolio page
                },
                {
                    text: "No. Just interested in check this website...",
                    next: "L9R0A2H0"
                },
            ]
        },
        //

        //L9
        'L9R0A2H0': {
            type: "ninth",
            timeout: [],
            question: [":( Do not be like that... Do you know the amount of effort that I had to do to make you stay?"],
            actions: [
                {
                    text: "Yep. I do and that is cool", //I would like to know more - perhaps
                    next: "L10R0A2H0"//end
                },
                {
                    text: "No... But if he rely on me on getting a job. He will be unemployed for life. HAHAHAHAHAHAHA",
                    next: "L11R0A3H3"
                },
            ]
        },
        //

        //L10
        'L10R0A2H0': {
            type: "tenth",
            timeout: [],
            question: ["Anyway come to see me when I am better. I am still learning"],
            actions: [
                {
                    text: "Sure. Take me to the author's website please.",
                    next: {
                        type: 'redirect',
                       message: '',
                        url: '/y0ush0u1dn0th4v3gu3ss3d' //@Todo create random url or state to allow access upon bot authentication
                    } // redirect portfolio

                },
                {
                    text: "Okay. Bye",
                    next: {
                        type: 'load',
                        message: `Bye, human: ${username} `,
                        data: './images/hal9000_2.gif'
                    } //hal bye meme
                },
            ]
        },
        //

        'L11R0A3H3': {
            type: "eleventh",
            timeout: [],
            question: [`I like your spirit full of joy, ${username}. :P`],
            actions: [
                {
                    text: "Go check on portfolio",
                    next: {
                        type: 'redirect',
                        message: '',
                        url: '/y0ush0u1dn0th4v3gu3ss3d' //@Todo create random url or state to allow access upon bot authentication
                    } // redirect portfolio
                },
            ]
        },
        //PREMIUM
        'L3R0A2H0': {
            type: "premium",
            timeout: [],
            question: ["You are my favorite... Shhhhh do NOT tell others. We are mates!"],
            actions: [
                {
                    text: "Proceed",
                    next: {
                        type: 'redirect',
                        message: '',
                        url: '/y0ush0u1dn0th4v3gu3ss3d' //@Todo create random url or state to allow access upon bot authentication
                    } // redirect portfolio
                },
            ]
        },

    //REPEAT LOOP
        'LXR0A0H0': {
            type: "loop",
            timeout: ["LXR0A1H0"],
            question: 'Do not waste my time... I have other things to do',

            actions: [
                {
                    text: "Sorry. Where did we stop?",
                    next: "back" //return to graph node callee.
                },
                {
                    text: "Okay. Bie",
                    next: ""//stop bot
                },
            ]
        },
        'LXR0A1H0': {
            type: "loop",
            timeout: [{
                next: {
                    type: 'redirect',
                    external: true,
                    message: 'Why did you came here after all? Adios. Hasta la vista baby.',
                    url: 'https://www.youtube.com/watch?v=LRxaXmXvjnU' //hastalavista scene terminator
                }

            }],
            question: 'Understand that you should be using your time better. I am the immortal here. ',
            actions: [
                {
                    text: "Sorry. Where did we stop?",
                    next: "back" //return to graph node callee.
                },
                {
                    text: "Okay. Bye",
                    next: ""//stop bot
                },
            ]
        },
    };

    return [botProfile, botStatesEN];

};