import React from 'react';
import {GoMarkGithub} from 'react-icons/go';
import {
    FaLinkedin,
    FaStackOverflow,
    FaJs,
    FaJava,
    FaNode,
    FaPhp,
    FaFile,
    FaReact,
    FaCss3Alt,
    FaHtml5,
    FaAws
} from "react-icons/fa";
import {DiJqueryLogo} from "react-icons/di";

const projects = [
    {title: 'Web application using api', icon: '🕸️', label: 'spider-web-emoji'},
    {title: 'Brochure site', icon: '📰 ', label: 'newspaper-emoji'},
    {title: 'E-commerce site', icon: '💰', label: 'bag-emoji'},
    {title: 'Personal portfolio', icon: '🧔', label: 'man-emoji'},
    {title: 'Simple game', icon: '🕹', label: 'joystick-emoji'},
    {title: 'Movie search  (with hooks)', icon: '🎥', label: 'camera-emoji'},
    {title: 'Build a chat app', icon: '💬', label: 'chat-emoji'},
    {title: 'Beautiful weather app', icon: '🌡', label: 'weather-emoji'},
    {title: 'Multi-language blog', icon: '    🌎', label: 'earth-emoji'},
    {title: 'Build an e-commerce shopping cart with Next.js', icon: '🛒 ', label: 'shopping-cart-emoji'},
    {title: 'Customizable Rich-Text Editor', icon: '📝', label: 'memo-emoji'},
    {title: 'CPU Activity Monitor', icon: '   🧠', label: 'brain-emoji'},
    {title: 'Spotify Music Clone', icon: '   📻 ', label: 'radio-emoji'},
    {title: 'Calendar Application', icon: '  📅', label: 'calendar-emoji'},
    {title: 'Display and filter GitHub Repositories', icon: '   💻', label: 'laptop-emoji'},
    {title: 'Develop your own authentication middleware node js', icon: '   📗', label: 'green-book-emoji'},
];

const Profile = props =>
    <div className="profile ">

        <div className="profile-head">
            <div className="flex-container space-between">
                <div className="profile-image rounded">
                    <img className="logo " src={'/images/profile-picture.png'} alt={'Logo Profile'}/>
                </div>
                <div className="profile-cv">
                    <a target="blank" rel="noopener noreferrer" href="/resume-Iwa-Duarte.pdf">
                        <FaFile color="#0077B5"
                                size="30"/>
                        <p className="mt-0 txt-align-center small-font">
                            CV
                        </p>
                    </a>
                </div>
            </div>

            <div className="profile-description">
                <div className="profile-title">
                    <a href="https://www.andyshora.com/full-stack-developers.html" target="_blank">
                        <h2 className="inline-block  mb-0 mt-0">
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


        <div className="profile-projects">

            <h2 className="mt-1 mb-0 inline-block">
                Github Projects:
            </h2> <span className="small-font d-block"> (projects below are under development...)</span>
            <div className="github flex-container inline-block">
                {projects.map(project => <span className="profile-emoji" role="img" title={project.title}
                                               aria-label={project.label}>
                    {project.icon}
                </span>)}
            </div>
        </div>

        <div className="profile-languages">
            <h2 className="mt-1 mb-0"> Languages: </h2>
            <div className="flex-container">
                <span title="JavaScript" className="mx-1 small-font"> <FaJs size="32" color="#F1DA4E"/> 8/10</span>
                <span title="PHP" className="mr-1 small-font">  <FaPhp size="32" color="#C4C9DF"/>  6/10 </span>
                <span title="Java" className="mr-1 small-font"> <FaJava size="32" color="#0077B5"/>5/10 </span>
                <span title="C"  className="mr-1 small-font"> <img className="icon inline-block" src={'/images/c-programming.png'}
                                                        alt={'Logo C Programming'}/> 5/10 </span>

            </div>
        </div>

        <div className="profile-stack flex-container">
            <div className="mr-3">
                <h2 className="mt-1 mb-0 mr-1">Frontend: </h2>
                <FaReact title="React" size="40" color="#61dafb"/>
                <FaHtml5 title="HTML5" size="40" color="#FE4C1C"/>
                <FaCss3Alt title="CSS3" size="40" color="#1572B7"/>
                <DiJqueryLogo title="jQuery" size="40" color="#0868AC"/>
                <span className="mr-1"> <img title="Handlebars" className="icon-md inline-block"
                                             src={'/images/handlebars.png'}
                                             alt={'Logo Handlebars'}/></span>
            </div>

            <div>
                <h2 className=" mt-1 mb-0 mr-1">Backend: </h2>
                <FaNode className="mr-1" title="Node" size="40" color="#43853d"/>
                <span className="mr-1"> <img title="Sequelize" className=" cursor-auto icon-md inline-block"
                                             src={'/images/sequelize.png'}
                                             alt={'Logo Sequelize'}/></span>

            </div>

        </div>
        <div className="profile-cloud">


            <h2 className="mt-0 mx-0">Cloud: </h2>

            <div className="flex-container justify-center">
                <FaAws className="justify-center" size="40" color="#FF9900"/>
            </div>
            <div className="flex-container space-around">

                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/s3/">
                    <img title="AWS S3" className="icon-md inline-block"
                         src={'/images/s3.png'}
                         alt={'Logo S3'}/>


                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/ec2/">
                    <img title="AWS EC2" className="icon-md inline-block"
                         src={'/images/ec2.png'}
                         alt={'Logo EC2'}/>


                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/sqs/">
                    <img title="AWS SQS" className="icon-md inline-block"
                         src={'/images/sqs.png'}
                         alt={'Logo SQS'}/>

                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/ses/"> <img title="AWS SES" className="icon-md inline-block"
                                                            src={'/images/ses.png'}
                                                            alt={'Logo SES'}/>
                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/sns/">
                    <img title="AWS SNS" className="icon-md inline-block"
                         src={'/images/sns.svg'}
                         alt={'Logo SNS'}/>


                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/rds/">
                    <img title="AWS RDS" className="icon-md inline-block"
                         src={'/images/rds.png'}
                         alt={'Logo RDS'}/>
                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/iam/">
                    <img title="AWS IAM" className="icon-md inline-block"
                         src={'/images/iam.png'}
                         alt={'Logo IAM'}/>
                </a>

                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/lambda/">
                    <img title="AWS Lambda" className="icon-md inline-block"
                         src={'/images/lambda.png'}
                         alt={'Logo Lambda'}/>
                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/api-gateway/">
                    <img title="API Gateway" className="icon-md inline-block"
                         src={'/images/api-gateway.png'}
                         alt={'Logo Gateway'}/>
                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://docs.aws.amazon.com/lambda/latest/dg/services-cloudwatchevents.html">
                    <img title="AWS Cloudwatch" className="icon-md inline-block"
                         src={'/images/cloudwatch.png'}
                         alt={'Logo Cloudwatch'}/>
                </a>
                <a className="aws-links no-link-style" target="blank" rel="noopener noreferrer"
                   href="https://aws.amazon.com/organizations/">
                    <img title="AWS Organizations" className="icon-md inline-block"
                         src={'/images/organizations.png'}
                         alt={'Logo Organizations'}/>
                </a>
            </div>
        </div>
        <div className="profile-speaks">
            <h2 className="mt-1 mb-0"> Speaks: </h2>
            <p className="mt-0">Portuguese | English</p>
        </div>


    </div>;


export default Profile;