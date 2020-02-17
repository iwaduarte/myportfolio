import React from 'react';

import {GoMarkGithub} from 'react-icons/go';
import {FaLinkedin, FaStackOverflow} from "react-icons/fa";

const Profile = props =>
    <div className="profile ">

        <div className="profile-head">
            <div className="profile-image rounded">
                <img className="logo " src={'/images/profile-picture.png'} alt={'Logo Profile'}/>
            </div>
            <div className="profile-description">
                <div className="profile-title">
                    <a href="https://www.andyshora.com/full-stack-developers.html" target="_blank">
                        <h2 class="inline-block color-orange mb-0 mt-0">
                            Full Stack Developer!?! </h2> <h6 className="inline-block mb-0 mt-0"> (link) </h6>

                    </a>
                </div>
                <div className="flex-container">
                    <a className={"profile-links"} href="https://github.com/iwaduarte" target="blank"><GoMarkGithub
                        color="black"
                        size="32"/></a>
                    <a className={"profile-links"} href="https://stackoverflow.com/users/7350853/iwaduarte"
                       target="blank"><FaStackOverflow color="#F48024"
                                                       size="32"/></a>
                    <a className={"profile-links"} href="https://www.linkedin.com/in/iw%C3%A1-duarte-969a1a61/"
                       target="blank"><FaLinkedin color="#0077B5"
                                                  size="32"/></a>
                    <a className={"profile-links"} href="https://www.freelancer.com/u/iwaduarte" target="blank">
                        <img className="icon inline-block" src={'/images/freelancer-icon.jpeg'}
                             alt={'Logo freelancer'}/>

                    </a>
                </div>

                <div class="profile-bio">
                    A full stack developer with experience in several technologies...
                    I also like to binge watch Netflix and talk about meaningful things that make me cry (:P).
                </div>
            </div>

        </div>
        <div className="more-info">


            <h2>
                Github Projects:
            </h2>
            <div className="github flex-container">
                <p>1. Web application using api</p>
                <p> 2. Bronchure site</p>
                <p> 3. E-commerce site</p>
                <p> 4. Personal Portfolio</p>
                <p> 5. Simple game</p>
                <p> 6. Build a movie search app using React (with hooks)</p>
                <p> 7. Build a chat app </p>
                <p> X. Build a beautiful weather app </p>
                <p> X. Build a to-do app </p>
                <p> X. Build a to-do app </p>
                <p> X. Build an e-commerce shopping cart with Next.js </p>
                <p> X. Build a full blown multi-language blog </p>
                <p> X. Build a Social Media App </p>
                <p> X. Build an E-Commerce App </p>
                <p> X. Build an Entertainment App </p>
                <p> X. Build a Messaging App </p>
                <p> X. Customizable Rich-Text Editor </p>
                <p> X. CPU Activity Monitor </p>
                <p> X. Apple Music Clone </p>
                <p> X. Calendar Application</p>
                <p> X. Display and filter GitHub Repositories</p>
                <p> X. develop your own authentication middleware node js</p>
            </div>

            <h2> Languages: </h2>
            <p> - Javascript 8/10 </p>
            <p> - C, Java 5/10 </p>

            <h2>Cloud:</h2>
            <p>AWS Stack Exposure:</p>
            - S3, EC2, SQS, SES, SNS, Lambda, CloudWatch Events, IAM, Organizations,
            <h2>Backend: </h2>
            <p> - Nodejs </p>
            <h2> Speaks: </h2>
            <p>Portuguese | English</p>

        </div>

    </div>;


export default Profile;