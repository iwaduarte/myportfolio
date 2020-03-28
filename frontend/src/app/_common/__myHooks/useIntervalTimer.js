import  {useEffect,useCallback} from 'react';

// reset the interval (every action that it is not an timeout execution should reset the interval)
// pause the interval? (in case of debugging (dealt at the moment using the listeners (priority -> low)
// create new interval ? (not thinking of any case for that )
let fnTimeIntervalID, remainingSeconds;

const useIntervalTimer = (intervalProperties) => {

    const {refreshTime = 50, seconds = 16, arrayFunctions = [console.log('0 functions found')]} = intervalProperties;
    const timeStart = Date.now(); //should go inside intervalProperties

    const elapsedTimeInAPeriod = () => {
        // if (!props) return; //throw Error would be better in that case
        // const {timeStart, seconds} = props;
        if (!timeStart || !seconds) //missing vital properties;
            return;
        const COUNT_DOWN_MILLISECONDS = seconds * 1000;
        const elapsedTime = Date.now() - timeStart;
        // time elapsed in a range ( 1 second of 15 passed)
        return elapsedTime % COUNT_DOWN_MILLISECONDS;
    };

    const newArrayFunctions = [timer, ...arrayFunctions];
    const newProps = {elapsedTimeInAPeriod, timer, ...intervalProperties};

    const callbackFn = () => {
        // console.log('executing');
        // console.log(newArrayFunctions)
        newArrayFunctions.forEach(fn => fn(newProps));
    };


    function timer() {


        const elapsedTimeWithinAFrame = elapsedTimeInAPeriod();
        const COUNT_DOWN_MILLISECONDS = seconds * 1000;


        // display time in countdown way
        const displayTime = Math.floor((COUNT_DOWN_MILLISECONDS - elapsedTimeWithinAFrame) / 1000);

        // console.log('displayTime',displayTime);
        //setDisplayTimeInside ?  ----> setSeconds(displayTime);
        return displayTime;

    }

    useEffect(() => {

        fnTimeIntervalID = setInterval(callbackFn, refreshTime);

        return () => clearInterval(fnTimeIntervalID)

    }, []);

    const intervalPause = useCallback(() => {
        remainingSeconds = timer()* 1000;
        clearInterval(fnTimeIntervalID);
    },[]);

    const intervalResume = useCallback(() => {

        const resume = () => {
            fnTimeIntervalID = setInterval(callbackFn, refreshTime);
        };
        console.log(remainingSeconds);


        setTimeout(resume, remainingSeconds);
    },[]);

    const intervalReset = () => {

        intervalPause();
        fnTimeIntervalID = setInterval(callbackFn, refreshTime);

    };

    return [intervalPause, intervalResume, intervalReset];

};

export default useIntervalTimer;