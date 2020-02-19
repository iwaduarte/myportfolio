import React, {useState, useEffect} from 'react';

const BotMain = props => {
    const [seconds, setSeconds] = useState(15);
    const [widthStyle, setWidthStyle] = useState(500);
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

            console.log(updatedSeconds);
            // console.log(seconds);

        }, 1000);
        let timeout = {value: 50};
        const fnBarInterval = setInterval(() => {
        //fix magic numbers come up with proper calculus
            console.log('seconds' + seconds);
            console.log('updatedSeconds' + updatedSeconds);
            console.log('widthStyle' + widthStyle);
            const updatedWidth = updatedSeconds * widthStyle / seconds;
            console.log('updatedWidth' + updatedWidth);
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

    return <>
        <div className="container flex-container">

            <div>
                {seconds} s
                <hr className="countdown-line" style={{width: widthStyle}}/>

            </div>
            <p> Hi </p>
            <p> I'm Iwa's Assistant</p>
            <p>you?</p>
        </div>

    </>;
}
export default BotMain;