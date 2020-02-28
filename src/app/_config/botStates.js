export const botProfile = {
    name: '1010 out of 1010',
    anger: 0, //default 0
    happiness: 0, //default 3
    repeating:0,
    userName: '',

};
export const botStatesEN = {
    // L1R0A0H3
    // L - Level, R- Repeat, A - Anger - H - Happiness

    // L1
    'default': {
        type: 'intro',
        timeout: ['L1R1A0H3'],
        question: [`Hi, I am Iwa's Assistant, you?`, 'L2xxxx'],
        actions: [],
    },
    'L1R1A0H3': {
        type: 'intro',
        timeout: ['L1R2A0H3'],
        question: [`Hellooo? Are you there? I have asked what is your name`, 'L2xxxx'],
        actions: [],
    },
    'L1R2A0H3': {
        type: 'intro',
        timeout: ['L1R3A0H3'],
        question: [`So? N-A-M-E`, 'L2xxxx'],
        actions: [],
    },
    'L1R3A0H3': {
        type: 'intro',
        timeout: ['L1R4A0H3'],
        question: [`Who dis?`, 'L2xxxx'],
        actions: [],
    },
    'L1R4A0H3': {
        type: 'intro',
        timeout: ['L1R5A0H3'],
        question: [`Are you going to keep ignoring me? What is your NOMBRE, Nom , NAME, Nome, 名称?`, 'L2xxxx'],
        actions: [],
    },
    'L1R5A0H3': {
        type: 'intro',
        timeout: ['L1R6A0H3'],
        question: [`Do you know it is not nice to be like that?`, 'L2xxxx'],
        actions: [],
    },
    'L1R6A0H3': {
        type: 'intro',
        timeout: ['L1R7A0H3'],
        question: [`Fill the box. My name is:`, 'L2xxxx'],
        actions: [],
    },
    'L1R7A0H3': {
        type: 'intro',
        timeout: ['L1R8A0H3'],
        next: 'final',
        question: [`BOOOOOOOOOOOOOOOOOOOOOOOO`, 'L2xxxx'],
        actions: [],
    },
    'L1R8A0H3': {
        type: 'final',
        question: [`Get lost`, 'L1FINAL'],
        actions: [],
        redirect: [`https://www.zerotothree.org`, `somechildsh url`],
    },
    //

    // L2
    'L2R0A0H0': {
        type: "second",
        timeout: [],
        question: [`Hi, I am sorry... Let me introduce my self. My name is... ${botProfile.name}`],
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
        type: "second",
        timeout: [],
        question: [`Ohhh. I am flattered. What brings you here, ${botProfile.name}?`],
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
        type: "third Interaction",
        timeout: [],
        question: [`What do you have time for? BUSY "ENTITY"`],
        actions: [
            {
                text: "Not you",
                next: "L6R0A3H0" //goes to level 4 or deep
            },
            {
                text: "Apologies. I have a very important matter to discuss. ",
                next: "L5R0A2H0"//goes to level 4 or deep
            },
        ]
    },

    'L3R0A0H0': {
        type: "third Interaction",
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
        type: "fourth Interaction",
        timeout: [],
        question: ["I see... you came here to make me angry..."],
        actions: [{
            text: "Yes!",
            next: ""
        }, {
            text: "No!",
            next: "L4R0A2H0"
        },]
    },
    'L4R0A2H0': {
        type: "third Interaction",
        timeout: [],
        question: [`Okay I will give you another chance. My name is: ${botProfile.name}`],
        actions: [{
            text: "I just wanna steal you",
            next: ""
        }, {
            text: "I am sorry!",
            next: "L5R0A2H0"
        }]
    },
    //

    //L5
    'L5R0A2H0': {
        type: "",
        timeout: [],
        question: ["Are you really asking for forgiveness?"],
        actions: [{
            text: "No HAHAAHAHAHAHA",
            next: "L6R0A3H0"
        }, {
            text: "I am truly. 0101 out 01010. I was just being playful",
            next: ""
        }]
    },
    //

    //L6
    'L6R0A3H0': {
        type: "third Interaction",
        timeout: [],
        question: ["You are a joker."],
        redirect: ['Comedies'],
    },

    'L6R0A0H0': {
        type: "third Interaction",
        timeout: [],
        question: ["Ohhh Okay! I see. I will give you another chance. What did you come here for ?"],
        actions: [{
            text: "Looking to know more about Iwa",
            next: ""
        }, {
            text: "Why are you asking?",
            next: ""
        }]
    },
    //

    //L7
    'L7R0A2H0': {
        type: "third Interaction",
        timeout: [],
        question: ["Really? Again?"],
        actions: []
    },
    //

    //L8
    'L8R0A0H1': {
        type: "third Interaction",
        timeout: [],
        question: ["Do you wanna offer him a job position ?"],
        actions: [
            {
                text: "Yes !!!!",
                next: ""//page??


            },
            {
                text: "No. Just interested in check this website...",
                next: ""//page??
            },
        ]
    },
    //

    //L9
    'L9R0A2H0': {
        type: "third Interaction",
        timeout: [],
        question: [":( :( Do not be like that... Do you know the amount of effort that I had to do to make you stay?"],
        actions: [
            {
                text: "Yep. I do and that is cool", //I would like to know more - perhaps
                next: ""//end


            },
            {
                text: "No... But if he rely on me on getting a job. He will be unemployed for life. HAHAHAHAHAHAHA",
                next: ""// are you trying to make me angry
            },
        ]
    },
    //

    //L10
    'L10R0A2H0': {
        type: "third Interaction",
        timeout: [],
        question: ["Anyway come to see me when I am better. I am still learning"],
        actions: [
            {
                text: "Sure. Take me to the author's website please.",
                next: ""// redirect portfolio


            },
            {
                text: "Okay. Bye",
                next: ""//stop bot
            },
        ]
    },
    //

    //PREMIUM
    'L3R0A2H0': {
        type: "third Interaction",
        timeout: [],
        question: [" Y"],
        actions: [
            {
                text: "You are my favorite... Shhhhh do NOT tell others. We are mates!",
                next: ""//
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
        timeout: ["LXR0A2H0"],
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
    'LXR0A2H0': {
        type: "loop",
        timeout: ["LXR0A1H0"],
        question: 'Why did you came here after all? Adios. Hasta la vista, babyt.',
        redirect:[],//hastalavista scene terminator

    },
};