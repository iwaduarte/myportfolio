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
                        <h2 className="inline-block color-orange mb-0 mt-0">
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

                <div className="profile-bio">
                    A full stack developer with experience in several technologies...
                    I also like to binge watch Netflix and talk about meaningful things that make me cry (:P).
                </div>
            </div>

        </div>
        <div className="more-info">

            <h2 className="mb-0">
                Github Projects:
            </h2>
            <div className="github flex-container inline-block">

                <span role="img" title="Web application using api" aria-label={"wink-tongue-emoji"}>
                     😜
                </span>
                <span role="img" title="Brochure site" aria-label={"zipper-face-emoji"}>
                    🤐
                </span>
                <span role="img" title="E-commerce site" aria-label={"bag-emoji"}>
                        💰
                </span>

                <span role="img" title="Personal portfolio" aria-label={"man-emoji"}>
                      🧔
                </span>
                <span role="img" title="Simple game" aria-label={"joystick-emoji"}>
                         🕹
                 </span>

                <span role="img" title="Movie search  (with hooks)" aria-label={"joystick-emoji"}>
                       🎥
                 </span>
                <span role="img" title="Build a chat app" aria-label={"joystick-emoji"}>
                        💬
                 </span> <span role="img" title="Beautiful weather app " aria-label={"joystick-emoji"}>
                        🌡
                 </span>
                <span role="img" title="Multi-language blog" aria-label={"joystick-emoji"}>
                         🌎
                 </span>
                <span role="img" title="Build an e-commerce shopping cart with Next.js " aria-label={"joystick-emoji"}>
                         🕹
                 </span>
                <span role="img" title="  Customizable Rich-Text Editor" aria-label={"joystick-emoji"}>
                         🕹
                 </span>
                <span role="img" title="CPU Activity Monitor" aria-label={"joystick-emoji"}>
                         🕹
                 </span>

                <span role="img" title="Spotify Music Clone" aria-label={"joystick-emoji"}>
                         🕹
                 </span>
                <span role="img" title="Calendar Application" aria-label={"joystick-emoji"}>
                         🕹
                 </span>
                <span role="img" title="Display and filter GitHub Repositories" aria-label={"joystick-emoji"}>
                         🕹
                 </span>
                <span role="img" title="Develop your own authentication middleware node js"
                      aria-label={"joystick-emoji"}>
                         🕹
                </span>
            </div>

            <h2 className="mb-0"> Languages: </h2>
            <div className="flex-container">
                <span className="mx-1"> - Javascript 8/10 </span>
                <span> - C, Java 5/10 </span>
            </div>


            <h2 className="mb-0">Cloud:</h2>
            <span className="d-block">AWS Stack Exposure:</span>
            - S3, EC2, SQS, SES, SNS, Lambda, CloudWatch Events, IAM, Organizations,
            <div className="flex-container">
                <h2 className="mb-0">Backend: </h2>
                <p> - Nodejs </p>

            </div>
            <h2 className="mb-0"> Speaks: </h2>
            <p className="mt-0">Portuguese | English</p>

        </div>

        < /div>;


            export default Profile;