botProfile = {
    name: '1010 out of 1010',
    anger: 0, //default 0
    happiness: 0, //default 3
    userName: '',

};

const botStatesEN = {


    'L1R0A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Hi, I am Iwa's Assistant, you?`, 'L2xxxx'],
        actions: [],
    },
    'L1R1A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Hellooo? Are you there? I have asked what is your name`, 'L2xxxx'],
        actions: [],
    },
    'L1R2A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`So? N-A-M-E`, 'L2xxxx'],
        actions: [],
    },
    'L1R3A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Who dis?`, 'L2xxxx'],
        actions: [],
    },
    'L1R4A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Are you going to keep ignoring me? What is your NOMBRE, Nom , NAME, Nome, 名称?`, 'L2xxxx'],
        actions: [],
    },
    'L1R5A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Do you know it is not nice to be like that?`, 'L2xxxx'],
        actions: [],
    },
    'L1R6A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        question: [`Fill the box. My name is:`, 'L2xxxx'],
        actions: [],
    },
    'L1R7A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],
        next: 'final',
        question: [`BOOOOOOOOOOOOOOOOOOOOOOOO`, 'L2xxxx'],
        actions: [],
    },
    'L1R8A0H3': {


        type: 'intro',
        timeout: ['L1R2A1H2'],

        question: [`Get lost`, 'L1FINAL'],
        actions: [],
    },
    'L1FINAL': {


        type: 'final',
        redirect: [`https://www.zerotothree.org`, `somechildsh url`],
    },


    'L2R0A0H0': {
        type: "second",
        timeout: [],
        question: ["Hi, I am sorry... Let me introduce my self.My name is:"],
        actions:
            [
                {
                    text: "I do not care or have time for this",
                    next: ""
                },
                {
                    text: "It's just I am in a bit of rush. That's all",
                    next: ""
                },

            ]
    },
    'LXR0A0H0': {
        type: "third Interaction",
        timeout: [],
        question: ["Okay I will give you another chance", "My name is:"],
        actions: []
    }

};
