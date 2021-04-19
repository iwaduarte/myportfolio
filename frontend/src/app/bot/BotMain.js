import React, { useEffect, useState } from 'react';
import { loadBot } from '../_config/botStates';
import { FaCheck } from 'react-icons/fa';
import Button from '../__Components/Button/Button';
import useIntervalTimer from '../__myHooks/useIntervalTimer';
//fn's
import animateBar from './animateBar';
import clearScreen from './clearScreen';
import { Redirect } from 'react-router-dom';

const fnObj = { clearScreen, animateBar, Redirect };

const BotMain = props => {
  const DEFAULT_BAR_WIDTH = 500;
  const [seconds, setSeconds] = useState(10);
  const [barWidth, setWidthBar] = useState(DEFAULT_BAR_WIDTH);
  const [stopApplication, setStopApplication] = useState(false);
  // const [refreshBot, setRefreshBot] = useState(false);
  const [username, setUsername] = useState('');
  const [botProfile, botStatesEN] = loadBot(username);
  const [botState, setBotState] = useState(botStatesEN.default);
  const [image, setImage] = useState(0);
  const [redirect, setRedirect] = useState(false);

  const update = props => {
    if (!props) return; //throw Error would be better in that case
    const { seconds, refreshTime, timer, elapsedTimeInAPeriod } = props;
    const COUNT_DOWN_MILLISECONDS = seconds * 1000;
    if (!seconds || !refreshTime)
      //missing vital properties;
      return;
    //setting next question
    // let emitUpdate = false;
    const _elapsedTimeInAPeriod = elapsedTimeInAPeriod();
    let emitUpdate =
      _elapsedTimeInAPeriod + refreshTime >= COUNT_DOWN_MILLISECONDS &&
      _elapsedTimeInAPeriod - refreshTime < COUNT_DOWN_MILLISECONDS;
    //setting next question
    emitUpdate &&
      setBotState(prevState => {
        if (prevState.timeout.length) {
          //array is populated

          if (typeof prevState.timeout[0] === 'string') return botStatesEN[prevState.timeout[0]] || prevState;
          else if (typeof prevState.timeout[0] === 'object') {
            const next = prevState.timeout[0].next || {};
            if (next.type === 'redirect') {
              if (next.external) {
                setRedirect({ external: true, url: next.url });
              } else setRedirect(next.url);

              return prevState;
            }
          }
        }

        return prevState;
      });
    //setting Seconds
    setSeconds(timer());
    //setting WidthBar
    setWidthBar(prevState => {
      const currentBarWidth = emitUpdate ? barWidth : prevState;
      const barProps = {
        barWidth: DEFAULT_BAR_WIDTH,
        seconds,
        currentBarWidth,
        refreshTime
      };
      return animateBar(barProps);
    });
  };
  // intervalReset
  const [intervalPause, intervalResume] = useIntervalTimer({
    arrayFunctions: [update],
    refreshTime: 50,
    seconds: 11
  });
  //debugging
  useEffect(() => {
    const handleKeys = event => {
      if (event.altKey && event.ctrlKey) {
        //shift + ctrl + (S - stop) ||  + (R - resume)

        if (event.keyCode === 83) {
          console.log('stopping application for debugging purposes');
          setStopApplication(true);
          intervalPause();
        } else if (event.keyCode === 82) {
          console.log('resuming application for debugging purposes');
          setStopApplication(false);
          intervalResume();
        }
      }
    };
    document.addEventListener('keydown', handleKeys);

    return () => document.removeEventListener('keydown', handleKeys);
  }, [intervalPause, intervalResume]);
  //
  const handleClick = (event, next) => {
    //action has been clicked and next object has been provided
    if (next) {
      if (typeof next === 'string') return setBotState(botStatesEN[next]);
      if (typeof next === 'object') {
        if (next.type === 'load') {
          setImage(next);
        }
        if (next.type === 'run') {
          fnObj[next.fn]();
        }
        if (next.type === 'redirect') {
          setRedirect(next.url);
        }
      }
    }
    //username not provided or botProfile username not set;
    if (!botProfile.userName && !username) {
      return;
    }

    // otherwise setBotState to the second element of the array.
    // @Todo improve botState for level 1 to explicitly use the proper way of show the next object to be explored instead
    // of using array positions that does not clearly  represent anything
    return setBotState(prevState => botStatesEN[prevState.question[1] || 'default']);
  };
  const handleChange = event => {
    setUsername(event.target.value);
  };

  if (redirect) {
    return redirect.external ? window.location.assign(redirect.url) : <Redirect to={redirect} />;
  }
  return (
    <>
      <div className="bot-main container flex-container">
        {!stopApplication ? '' : <div className="m-auto">(Stopped)</div>}
        {image ? (
          <>
            {image.message && <h1 className="inline-block txt-align-center mt-0">{image.message}</h1>}
            <img className={'self-center img-meme'} src={image.data} alt="" />
          </>
        ) : (
          <>
            <div className="bot-timer">
              <div className="bot-seconds">{seconds} s</div>
              <hr className="countdown-line" style={{ width: barWidth }} />
              {/*<hr className="countdown-line" style={{width: '500px'}}/>*/}
            </div>
            <div className="bot-qa">
              <div className="bot-question">
                <span role="img" aria-label="bot-emoji" className="bot-face">
                  {' '}
                  🤖{' '}
                </span>
                <h1 className="inline-block">{botState.question[0]}</h1>
              </div>
              <div className="flex-container justify-center">
                {botState.actions.length ? (
                  botState.actions.map((action, index) => (
                    <Button onClick={event => handleClick(event, action.next)} key={index}>
                      {' '}
                      {action.text}{' '}
                    </Button>
                  ))
                ) : (
                  <>
                    <input value={username} onChange={handleChange} className={'input-field mx-1'} type="text" />
                    <FaCheck onClick={handleClick} className={'icon icon-ok d-block'} />
                  </>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default BotMain;
