import React, {useState} from 'react';
import './Home.css';
import {FaStackOverflow, FaLinkedinIn, FaLinkedin} from 'react-icons/fa/index'
import videosList from '../_config/videosList'

import Profile from "./Profile";


const Home = props => {
    const [videoYT, setVideoYT] = useState(videosList[0]);
    //use Redux try out
    const loadVideo = (action) => {
        return setVideoYT(videosList[0]);
    };
    return <>
        <div className="home">
            <Profile/>
            <div className="videos">
                <span> While you here why not get entertained a little?</span>
                <iframe width="560" height="315" src={videoYT} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                <button onClick={() => loadVideo('prev')}>Prev</button>
                <button onClick={() => loadVideo('rand')}>Random</button>
                <button onClick={() => loadVideo('next')}>Next</button>
            </div>
        </div>
    </>
};

export default Home;