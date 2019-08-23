import React from 'react';
import {GoMarkGithub} from 'react-icons/go';
import {FaStackOverflow, FaLinkedinIn, FaLinkedin} from 'react-icons/fa/index'

const Home = props => <>
        <div className='home'>

            <div className="profile">

                <div className="profile-head">
                    <div className="rounded">

                        <img className="logo " src={'/images/profile-picture.png'} alt={'Logo Profile'}/>
                    </div>

                    <div className="flex">
                        <div>
                            Full Stack Developer
                        </div>
                        <GoMarkGithub />
                        <FaStackOverflow/>
                        <FaLinkedin value={{color:"blue"}}/>
                        <img className="icon" src={'/images/freelancer-icon.jpeg'} alt={'Logo freelancer'}/>

                        <div>
                            A full stack developer with experience in several technologies...
                            I also like to binge watch Netflix.
                            And talk about meaningful things and cry.
                        </div>
                    </div>


                </div>
                <div className="moreInfo">

                </div>

            </div>
        </div>
    </>
;

export default Home;