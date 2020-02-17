import React, {useState} from 'react';
import './Home.css';
import {FaStackOverflow, FaLinkedinIn, FaLinkedin} from 'react-icons/fa/index'
import videosList from '../_config/videosList'

import Profile from "./Profile";
import Contact from "./Contact";


const Home = props => {
    const [videoYT, setVideoYT] = useState(videosList[0]);
    //use Redux try out
    const loadVideo = (action) => {
        return setVideoYT(videosList[0]);
    };
    return <>
        <div className="home">
            <Profile/>
          <hr className="horizontal-rule"/>
            <div className="videos">
                <h2 class="color-red mt-0"> While you here why not get entertained a little?</h2>
                <iframe width="560" height="315" src={videoYT} frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
                        <div className="videos-buttons">
                            <button className="videos-button" onClick={() => loadVideo('prev')}>Previous</button>
                            <button className="videos-button" onClick={() => loadVideo('rand')}>Random</button>
                            <button className="videos-button" onClick={() => loadVideo('next')}>Next</button>

                        </div>


            </div>
            <Contact/>

        </div>
    </>
};

export default Home;