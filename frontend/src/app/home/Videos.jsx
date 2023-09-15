import React, { useState } from 'react';
import videosList from './videosList';
import styles from './Videos.module.css';

const { modal, closeModal, videos, buttons } = styles;
const random = Math.floor(Math.random() * videosList.length);

const Videos = ({ onClick }) => {
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
          : { video: videosList[videosList.length - 1], index: videosList.length - 1 }
      );
    if (action === 'next')
      return setVideoYT(prevState =>
        videosList[prevState.index + 1]
          ? {
              video: videosList[prevState.index + 1],
              index: prevState.index + 1
            }
          : {
              video: videosList[0],
              index: 0
            }
      );

    if (action === 'rand') {
      const index = Math.floor(Math.random() * videosList.length);
      return setVideoYT({ video: videosList[index], index });
    }
  };

  return (
    <div className={modal} onClick={onClick}>
      <div
        className={closeModal}
        onClick={() => {
          console.log('clicked');
          onClick();
        }}
      >
        X
      </div>
      <div className={videos}>
        <div
          title="Previous"
          className={buttons}
          onClick={e => {
            loadVideo('prev');
            e.stopPropagation();
          }}
          color="#fc5248"
        >
          &lt;
        </div>
        <iframe
          title="youtube-iframe"
          className=" youtube-iframe"
          width="660"
          height="415"
          src={videoYT.video}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div
          title="Next"
          className={buttons}
          onClick={e => {
            loadVideo('next');
            e.stopPropagation();
          }}
          color="#fc5248"
        >
          &gt;
        </div>
      </div>
      <div className="videos-buttons self-center pointer ">
        <div title="Random" className="scale-hover" onClick={() => loadVideo('rand')} color="#fc5248">
          ∞
        </div>
      </div>
    </div>
  );
};

export default Videos;
