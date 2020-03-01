import React, {useState, useEffect} from 'react';
import {botStatesEN} from "../../_config/botStates";

// reset the interval (every action that it is not an timeout execution should reset the interval)
// pause the interval? (in case of debugging (dealt at the moment using the listeners (priority -> low)
// create new interval ? (not thinking of any case for that )

const useInterval = (intervalProperties) => {

    useEffect(() => {
        const {refreshTime = 50, seconds = 16, callbackFn = [() => console.log('none functions assigned')]} = intervalProperties;
        const timeStart = Date.now();
        const COUNT_DOWN_MILLISECONDS = seconds * 1000;

        // function animateBar(){
        //
        //     let emitUpdate = false;
        //     const decrementBar = refreshTime * DEFAULT_BAR_WIDTH / COUNT_DOWN_MILLISECONDS;
        //     const elapsedTime = (Date.now() - timeStart) % COUNT_DOWN_MILLISECONDS;
        //     const displayTime = Math.floor((COUNT_DOWN_MILLISECONDS - elapsedTime) / 1000);
        //     setSeconds(displayTime);
        //     emitUpdate = elapsedTime + 50 >= COUNT_DOWN_MILLISECONDS && elapsedTime - 50 < COUNT_DOWN_MILLISECONDS;
        //     emitUpdate && setBotState(prevState => {
        //     const botState = botStatesEN[prevState.timeout && prevState.timeout[0] || 'default'];
        //
        //
        //
        //                setWidthBar(prevState => emitUpdate
        //                 ? DEFAULT_BAR_WIDTH
        //                 : prevState - decrementBar);
        //
        //
        // }

        //function timer
        //

        const fnTimeInterval = setInterval(...callbackFn, refreshTime);
        return () => {
            clearInterval(fnTimeInterval);
        }

    }, []);

};

export default useInterval;