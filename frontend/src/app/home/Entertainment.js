import React, { useState } from 'react';
import Articles from './Articles';
import Contact from './Contact';
import { videosList } from '../_config/config';
import { FaArrowRight, FaArrowLeft, FaRandom } from 'react-icons/fa';

const Entertainment = () => {
  const random = Math.floor(Math.random() * Object.keys(videosList).length);
  const [videoYT, setVideoYT] = useState({
    video: videosList[random],
    index: 0
  });

  const loadVideo = action => {
    if (action === 'prev')
      return setVideoYT(prevState =>
        prevState.index !== 0
          ? {
              video: videosList[prevState.index - 1],
              index: prevState.index - 1
            }
          : prevState
      );
    if (action === 'next')
      return setVideoYT(prevState =>
        videosList[prevState.index + 1]
          ? {
              video: videosList[prevState.index + 1],
              index: prevState.index + 1
            }
          : prevState
      );

    if (action === 'rand') {
      const index = Math.floor(Math.random() * Object.keys(videosList).length);
      console.log(index);
      setVideoYT({ video: videosList[index], index });
    }
  };

  return (
    <div className="entertainment flex-container direction-column space-between ">
      <div className="videos">
        <h2 className="txt-align-center  mt-0 "> While you here why not get entertained a little?</h2>
        <iframe
          title="youtube-iframe"
          className="self-center youtube-iframe"
          src={videoYT.video}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="videos-buttons self-center pointer ">
          <FaArrowLeft
            title="Previous"
            className="scale-hover"
            size="30"
            onClick={() => loadVideo('prev')}
            color="#fc5248"
          />
          <FaRandom
            title="Random"
            className="scale-hover"
            size="30"
            onClick={() => loadVideo('rand')}
            color="#fc5248"
          />
          <FaArrowRight
            title="Next"
            className="scale-hover"
            size="30"
            onClick={() => loadVideo('next')}
            color="#fc5248"
          />
        </div>
      </div>
      <div className="flex-container direction-column space-around flex-grow">
        <Articles />
        <Contact />
        <p className="small-font">
          **If you need to send me anything. This is your first line of contact! Please try to be short and direct. Ahh
          and sorry for the bot he is still learning :P
        </p>
      </div>
    </div>
  );
};

export default Entertainment;
