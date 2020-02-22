import React, {useState, useEffect} from 'react';
import {botProfile,botStatesEN} from '../_config/botStates'

const BotMain = props => {
    const [seconds, setSeconds] = useState(15);
    const [widthStyle, setWidthStyle] = useState(500);
    const [refreshBot, setRefreshBot] = useState(false);

    const [botState, setBotState] = useState(botStatesEN.default);

    useEffect(() => {
        //Timer
        // "effect is just executing once"
        console.log('every time');
        let updatedSeconds;
        const fnTimeInterval = setInterval(() => {

            setSeconds(prevSeconds => {
                updatedSeconds = prevSeconds ? prevSeconds - 1 : seconds;
                return updatedSeconds;
            });

            if (!updatedSeconds) setBotState(prevState =>  botStatesEN[prevState.timeout[0]]);


                console.log(updatedSeconds);
            // console.log(seconds);

        }, 1000);
        let timeout = {value: 50};
        const fnBarInterval = setInterval(() => {
        //fix magic numbers come up with proper calculus
        //     console.log('seconds' + seconds);
        //     console.log('updatedSeconds' + updatedSeconds);
        //     console.log('widthStyle' + widthStyle);
            const updatedWidth = updatedSeconds * widthStyle / seconds;
            // console.log('updatedWidth' + updatedWidth);
            setWidthStyle(prevState => prevState <= 0 ? widthStyle : prevState - 1.568);
            timeout.value -= 1;

            // console.log(seconds);

        }, 50);

        return () => {
            clearInterval(fnTimeInterval);
            clearInterval(fnBarInterval);
            console.log('interval cleared')

        };


    }, []);

    // another useEffect?
    //
// useEffect(()=>{
//     if (refreshBot){
//         botCurrentState = botStatesEN[botCurrentState.timeout].question[0];
//         console.log(botCurrentState);
//         console.log('hey');
//         setRefreshBot(false);
//     }
//
//
//
//
// },[refreshBot])

    return <>
        <div className="container flex-container">

            <div>
                {seconds} s
                <hr className="countdown-line" style={{width: widthStyle}}/>

            </div>
            {/*<p> Hi </p>*/}
            {/*<p> I'm Iwa's Assistant</p>*/}
            {/*<p>you?</p>*/}
            {botState.question[0]}

        </div>

    </>;
}
export default BotMain;