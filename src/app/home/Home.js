import React, {useState} from 'react';
import './Home.css';
import videosList from '../_config/videosList'
import Profile from "./Profile";
import Contact from "./Contact";
// import quoteAPIList from "../bot/QuoteAPIList"; //re use ?


const Home = props => {
    const [videoYT, setVideoYT] = useState({video: videosList[0], index: 0});
    //use Redux try out
    const loadVideo = (action) => {
        if (action === 'prev')
            return setVideoYT(prevState => prevState.index !== 0 ? {
                video: videosList[prevState.index - 1],
                index: prevState.index - 1
            } : prevState);
        if (action === 'next')
            return setVideoYT(prevState => videosList[prevState.index + 1] ? {
                video: videosList[prevState.index + 1],
                index: prevState.index + 1
            } : prevState);

        if (action === 'rand') {
            const index = Math.floor(Math.random() * Object.keys(videosList).length);
            console.log(index);
            setVideoYT({video: videosList[index], index});
        }

    };
    return <>
        <div className="home">
            <Profile/>
            <hr className="horizontal-rule"/>
            <div className="flex-container direction-colum space-between">


                <div className="videos">
                    <h2 className="color-red mt-0"> While you here why not get entertained a little?</h2>
                    <iframe width="560" height="315" src={videoYT.video} frameBorder="0"
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
        </div>
    </>
};

export default Home;