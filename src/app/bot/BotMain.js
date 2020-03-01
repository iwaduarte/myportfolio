import React, {useState, useEffect} from 'react';
//{ botProfile, botStatesEN }
import {botStatesEN, botProfile} from '../_config/botStates'
import {FaCheck} from "react-icons/fa";

const BotMain = props => {
    const DEFAULT_BAR_WIDTH = 500;
    const [seconds, setSeconds] = useState(15);
    const [barWidth, setWidthBar] = useState(DEFAULT_BAR_WIDTH);
    const [stopApplication, setStopApplication] = useState(false);
    let intervals = [];
    // const [refreshBot, setRefreshBot] = useState(false);
    const [botState, setBotState] = useState(botStatesEN.default);
    const [username, setUsername] = useState(botProfile.userName);

    //Timer
    // "effect is just executing once"
    useEffect(() => {
        const TIMEOUT = 50;
        const timeStart = Date.now();
        const COUNT_DOWN_MILLISECONDS = 16000;
        const decrementBar = TIMEOUT * DEFAULT_BAR_WIDTH / COUNT_DOWN_MILLISECONDS;
        let emitUpdate = false;

        const fnTimeInterval = setInterval(() => {
            const elapsedTime = (Date.now() - timeStart) % COUNT_DOWN_MILLISECONDS;
            const displayTime = Math.floor((COUNT_DOWN_MILLISECONDS - elapsedTime) / 1000);
            // console.log(elapsedTime)
            setSeconds(displayTime);
            emitUpdate = elapsedTime + 50 >= COUNT_DOWN_MILLISECONDS && elapsedTime - 50 < COUNT_DOWN_MILLISECONDS;
            emitUpdate && setBotState(prevState => {

                const botState = botStatesEN[prevState.timeout && prevState.timeout[0] || 'default'];

                intervals = [...intervals, {
                    'intervalId': fnTimeInterval,
                    elapsedTime, //to use with setTimeout to re-instate questions
                    'level': botState
                }];
                return botState


            });

            setWidthBar(prevState => emitUpdate
                ? DEFAULT_BAR_WIDTH
                : prevState - decrementBar);

        }, TIMEOUT);

        return () => {
            clearInterval(fnTimeInterval);
        }

    }, [DEFAULT_BAR_WIDTH]);

    // another useEffect?
    // useEffect(()=>{
    //     if (refreshBot){
    //         botCurrentState = botStatesEN[botCurrentState.timeout].question[0];
    //         console.log(botCurrentState);
    //         console.log('hey');
    //         setRefreshBot(false);
    //     }
    // },[refreshBot])

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
       return  setBotState(prevState => botStatesEN[(prevState.question[1]) || 'default']);

    };

    function handleChange(event) {

        setUsername(event.target.value);
    }

    return <>
        <div className="container flex-container">

            {!stopApplication
                ? <>


                    <div>
                        {seconds} s
                        <hr className="countdown-line" style={{width: barWidth}}/>
                    </div>

                    <p className={"bot-question"}>
                        <span className="bot-face">
                                                 🤖
                        </span>
                        {botState.question[0]}
                    </p>
                    <div>
                        {botState.actions.length
                            ? botState.actions.map((action, index) =>
                                <span onClick={event => handleClick(event, action.next)}
                                      key={index}>{action.text}</span>)
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