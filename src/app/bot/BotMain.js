import React, {useEffect, useState} from 'react';
import {botProfile, botStatesEN} from '../_config/botStates'
import {FaCheck} from "react-icons/fa";
import Button from "../__Components/Button/Button";
import useIntervalTimer from "../_common/__myHooks/useIntervalTimer";

function animateBar(props) {
    if (!props) return; //throw Error would be better in that case
    const {barWidth, seconds, currentBarWidth, refreshTime} = props;

    if (!barWidth || !seconds || !currentBarWidth || !refreshTime) //missing vital properties;
        return;

    const COUNT_DOWN_MILLISECONDS = seconds * 1000;
    //calculating how many pixels should be taken from the bar width
    const decrementBar = refreshTime * barWidth / COUNT_DOWN_MILLISECONDS;

    return currentBarWidth - decrementBar;
}

const BotMain = props => {
    const DEFAULT_BAR_WIDTH = 500;
    const [seconds, setSeconds] = useState(15);
    const [barWidth, setWidthBar] = useState(DEFAULT_BAR_WIDTH);
    const [stopApplication, setStopApplication] = useState(false);
    let intervals = [];

    // const [refreshBot, setRefreshBot] = useState(false);
    const [botState, setBotState] = useState(botStatesEN.default);
    const [username, setUsername] = useState(botProfile.userName);

    const update = (props) => {

        if (!props)
            return; //throw Error would be better in that case

        const {seconds, refreshTime, timer , elapsedTimeInAPeriod} = props;
        const COUNT_DOWN_MILLISECONDS = seconds * 1000;
        if (!seconds || !refreshTime) //missing vital properties;
            return;

        //setting next question
        // let emitUpdate = false;

        const _elapsedTimeInAPeriod = elapsedTimeInAPeriod();
        let emitUpdate = _elapsedTimeInAPeriod + refreshTime >= COUNT_DOWN_MILLISECONDS && _elapsedTimeInAPeriod - refreshTime < COUNT_DOWN_MILLISECONDS;
       //setting next question
         emitUpdate && setBotState(prevState => botStatesEN[prevState.timeout && prevState.timeout[0] || 'default']);

         //             intervals = [...intervals, {
        //                 'intervalId': fnTimeInterval,
        //                 elapsedTime, //to use with setTimeout to re-instate questions
        //                 'level': botState
        //             }];


        //setting Seconds
        setSeconds(timer());

        //setting WidthBar
        setWidthBar(prevState => {
            const currentBarWidth = emitUpdate ? barWidth : prevState;
            const barProps = {barWidth: DEFAULT_BAR_WIDTH, seconds, currentBarWidth, refreshTime};

            return animateBar(barProps);
        });

        //
    };

    const [intervalPause, intervalResume, intervalReset] = useIntervalTimer({
        arrayFunctions: [update],
        refreshTime: 50,
        seconds: 16,
    });

    //debugging
    useEffect(() => {
        const handleKeys = (event) => {
            if (event.shiftKey && event.ctrlKey) { //shift + ctrl + (S - stop) ||  + (R - resume)

                if (event.keyCode === 83) {
                    console.log('stopping application for debugging purposes');
                    setStopApplication(true);
                    intervals.forEach(intervalObj => clearInterval(intervalObj.intervalId))

                } else if (event.keyCode === 82) {
                    console.log('resuming application for debugging purposes');
                    setStopApplication(false);
                }

            }
        };
        document.addEventListener('keydown', handleKeys);

        return () => document.removeEventListener("keydown", handleKeys);
    }, []);
    //
    const handleClick = (event, next) => {

        //action has been clicked and next object has been provided
        if (next) {
            return setBotState(botStatesEN[next]);
        }

        //username not provided or botProfile username not set;
        if (!botProfile.userName && !username) {
            return;
        }
        botProfile.userName = username;

        // otherwise setBotState to the second element of the array.
        // @Todo improve botState for level 1 to explicitly use the proper way of show the next object to be explored instead
        // of using array positions that does not clearly  represent anything
        return setBotState(prevState => botStatesEN[(prevState.question[1]) || 'default']);

    };
    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    return <>
        <div className="container flex-container">
            {!stopApplication
                ? <>
                    <div>
                        {seconds} s
                        <hr className="countdown-line" style={{width: barWidth}}/>
                    </div>
                    <div className={"bot-question"}>
                        <span className="bot-face"> 🤖 </span>
                        <h1 className="inline-block">{botState.question[0]}</h1>
                    </div>
                    <div className="flex-container justify-center">
                        {botState.actions.length
                            ? botState.actions.map((action, index) =>
                                <Button onClick={event => handleClick(event, action.next)}
                                        key={index}> {action.text} </Button>
                            )

                            : <>
                                <input value={username} onChange={handleChange} className={'input-field mx-1'}
                                       type="text"/>
                                <FaCheck onClick={handleClick} className={'icon icon-ok'}/>
                            </>
                        }
                    </div>
                </>
                : "stopped"
            }

        </div>
    </>;
}
export default BotMain;