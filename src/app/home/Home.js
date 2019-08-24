import React from 'react';
import './Home.css';
import {GoMarkGithub} from 'react-icons/go';
import {FaStackOverflow, FaLinkedinIn, FaLinkedin} from 'react-icons/fa/index'

const Home = props => <>
        <div className="home">


            <div className="profile flex">

                <div className="profile-head">
                    <div className="profile-image rounded">
                        <img className="logo " src={'/images/profile-picture.png'} alt={'Logo Profile'}/>
                    </div>
                    <div className="">
                        <div>
                            Full Stack Developer
                        </div>
                        <GoMarkGithub/>
                        <FaStackOverflow/>
                        <FaLinkedin value={{color: "blue"}}/>
                        <img className="icon" src={'/images/freelancer-icon.jpeg'} alt={'Logo freelancer'}/>

                        <div>
                            A full stack developer with experience in several technologies...
                            I also like to binge watch Netflix.
                            And talk about meaningful things and cry (hahaha).
                        </div>
                    </div>

                </div>
                <div className="moreInfo">

                </div>

            </div>


            <div className="flex">
                <span> While you here why not get entertained a little?</span>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/iG9CE55wbtY" frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen/>
            </div>
        </div>
    </>
;

export default Home;