import React, {useState, useEffect} from 'react';
//{ botProfile, botStatesEN }
import {botStatesEN} from '../_config/botStates'

const BotMain = props => {
    const DEFAULT_BAR_WIDTH = 500;
    const [seconds, setSeconds] = useState(15);
    const [barWidth, setWidthBar] = useState(DEFAULT_BAR_WIDTH);
    // const [refreshBot, setRefreshBot] = useState(false);

    const [botState, setBotState] = useState(botStatesEN.default);

    //Timer
    // "effect is just executing once"
    useEffect(() => {
        const COUNT_DOWN_MILLISECONDS = 16000;
        const HALF_MILLISECONDS = 500;
        const TIMEOUT = 50;
        const timeStart = Date.now();
        const decrementBar = TIMEOUT * DEFAULT_BAR_WIDTH / COUNT_DOWN_MILLISECONDS;
        let emitUpdate = false;
        let count = 0;

        const fnTimeInterval = setInterval(() => {
            const elapsedTime = (Date.now() - timeStart) % COUNT_DOWN_MILLISECONDS;
            const displayTime = Math.floor((COUNT_DOWN_MILLISECONDS - elapsedTime) / 1000);
            // console.log(elapsedTime)
            setSeconds(displayTime);
            emitUpdate = elapsedTime + 50 >= COUNT_DOWN_MILLISECONDS && elapsedTime - 50 < COUNT_DOWN_MILLISECONDS;
            emitUpdate && setBotState(prevState => {
                count++;
                console.log('emitUpdate', emitUpdate, count);
                return botStatesEN[prevState.timeout
                    ? prevState.timeout[0]
                    : 'default']
            });

            setWidthBar(prevState => elapsedTime < HALF_MILLISECONDS
                ? DEFAULT_BAR_WIDTH
                : prevState - decrementBar);

        }, TIMEOUT);

        return () => {
            clearInterval(fnTimeInterval);
        }

    }, [DEFAULT_BAR_WIDTH]);

    // another useEffect?
    //
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
            console.log('something pressed');
            if (event.keyCode === 83) {

                console.log('stopping application for debugging purposes')

            } else if (event.keyCode === 82) {
                console.log('resuming application for debugging purposes')
            }

        };
        console.log('entered')
        // document.addEventListener('keydown', handleKeys);
        document.addEventListener('keyup', handleKeys)


        return document.removeEventListener("keydown", handleKeys);
    }, []);

    return <>
        <div className="container flex-container">
            <div>
                {seconds} s
                <hr className="countdown-line" style={{width: barWidth}}/>
            </div>
            <p className={"bot-question"}>
                {botState.question[0]}
            </p>
            <input className={'input-field'} type="text"/>

        </div>

    </>;
}
export default BotMain;