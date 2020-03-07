import React from 'react';
import {GoMarkGithub} from 'react-icons/go';
import {FaLinkedin, FaStackOverflow, FaJs, FaJava, FaNode, FaPhp, FaFile} from "react-icons/fa";


const projects = [
    {title: 'Web application using api', icon: '😜', label: 'wink-tongue-emoji'},
    {title: 'Brochure site', icon: '🤐', label: 'zipper-face-emoji'},
    {title: 'E-commerce site', icon: '💰', label: 'bag-emoji'},
    {title: 'Personal portfolio', icon: '🧔', label: 'man-emoji'},
    {title: 'Simple game', icon: '🕹', label: 'joystick-emoji'},
    {title: 'Movie search  (with hooks)', icon: '🎥', label: 'camera-emoji'},
    {title: 'Build a chat app', icon: '💬', label: 'chat-emoji'},
    {title: 'Beautiful weather app', icon: '🌡', label: 'weather-emoji'},
    {title: 'Multi-language blog', icon: '    🌎', label: 'earth-emoji'},
    {title: 'Build an e-commerce shopping cart with Next.js', icon: '🕹', label: 'wink-tongue-emoji'},
    {title: 'Customizable Rich-Text Editor', icon: '   😜', label: 'wink-tongue-emoji'},
    {title: 'CPU Activity Monitor', icon: '   😜', label: 'wink-tongue-emoji'},
    {title: 'Spotify Music Clone', icon: '   😜', label: 'wink-tongue-emoji'},
    {title: 'Calendar Application', icon: '   😜', label: 'wink-tongue-emoji'},
    {title: 'Display and filter GitHub Repositories', icon: '   😜', label: 'wink-tongue-emoji'},
    {title: 'Develop your own authentication middleware node js', icon: '   😜', label: 'wink-tongue-emoji'},
];


const Profile = props =>
    <div className="profile ">

        <div className="profile-head">
            <div className="flex-container space-between">
                <div className="profile-image rounded">
                    <img className="logo " src={'/images/profile-picture.png'} alt={'Logo Profile'}/>
                </div>
                <div className="profile-cv">
                    <a href="/resume-Iwa-Duarte.pdf"> <FaFile color="#0077B5"
                                                              size="30"/> <p className="mt-0 txt-align-center small-font">
                 CV
                    </p></a>
                </div>
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

            <h2 className="mb-0 inline-block">
                Github Projects:
            </h2> <span> (projects below are under development...)</span>
            <div className="github flex-container inline-block">
                {projects.map(project => <span className="profile-emoji" role="img" title={project.title} aria-label={project.label}>
                    {project.icon}
                </span>)}
            </div>

            <h2 className="mb-0"> Languages: </h2>
            <div className="flex-container">
                <span className="mx-1 small-font"> <FaJs size="32" color="#F1DA4E"/> 8/10</span>
                <span className="mr-1 small-font">  <FaPhp size="32" color="#C4C9DF"/>  6/10 </span>
                <span className="mr-1 small-font"> <FaJava size="32" color="#0077B5" />5/10 </span>
                <span className="mr-1 small-font"> <img className="icon inline-block" src={'/images/c-programming.png'}
                                          alt={'Logo freelancer'}/> 5/10 </span>
            </div>

            <div className="flex-container">
                <h2 className="mb-0 mr-1">Backend: </h2>
                <p><FaNode size="40" color="#43853d" /> </p>
            </div>
            <h2 className="mx-0">Cloud:</h2>
            <span className="mt-0 d-block">AWS Stack Exposure:</span>
            - S3, EC2, SQS, SES, SNS, Lambda, CloudWatch Events, IAM, Organizations,

            <h2 className="mb-0"> Speaks: </h2>
            <p className="mt-0">Portuguese | English</p>

        </div>

    </div>;


export default Profile;