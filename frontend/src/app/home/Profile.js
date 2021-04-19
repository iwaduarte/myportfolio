import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
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
} from 'react-icons/fa';
import { DiJqueryLogo } from 'react-icons/di';
import { freelanceIcon, CIcon, Logo, HandlebarsIcon, SequelizeIcon } from '../_config/images';
import { projects, awsLinks } from '../_config/config';

const Profile = () => (
  <div className="profile ">
    <div className="profile-head">
      <div className="flex-container wrap">
        <div className="profile-image rounded">
          <img className="logo " src={Logo} alt={'Logo Profile'} />
        </div>
        <div className="profile-cv">
          <a target="blank" rel="noopener noreferrer" href={'/resume-Iwa-Duarte.pdf'}>
            <FaFile color="#0077B5" size="30" />
            <p className="mt-0 txt-align-center small-font">CV</p>
          </a>
        </div>
      </div>

      <div className="profile-description">
        <div className="profile-title">
          <a href="https://www.andyshora.com/full-stack-developers.html" target="_blank" rel="noopener noreferrer">
            <h2 className="inline-block  mb-0 mt-0">Full Stack Developer!?! </h2>{' '}
            <h6 className="inline-block mb-0 mt-0"> (link) </h6>
          </a>
        </div>
        <div className="flex-container wrap">
          <a className={'profile-links'} href="https://github.com/iwaduarte" target="blank">
            <GoMarkGithub color="black" size="32" />
          </a>
          <a className={'profile-links'} href="https://stackoverflow.com/users/7350853/iwaduarte" target="blank">
            <FaStackOverflow color="#F48024" size="32" />
          </a>
          <a className={'profile-links'} href="https://www.linkedin.com/in/iw%C3%A1-duarte-969a1a61/" target="blank">
            <FaLinkedin color="#0077B5" size="32" />
          </a>
          <a className={'profile-links'} href="https://www.freelancer.com/u/iwaduarte" target="blank">
            <img className="icon inline-block" src={freelanceIcon} alt={'Logo freelancer'} />
          </a>
        </div>
        <div className="profile-bio">
          A full stack developer with experience in several technologies... I also like to binge watch Netflix and talk
          about meaningful things that make me cry (:P).
        </div>
      </div>
    </div>

    <div className="profile-projects">
      <h2 className="mt-1 mb-0 inline-block">Github Projects:</h2>{' '}
      <span className="small-font mb-1 inline-block"> (projects below are under development...)</span>
      <div className="github flex-container wrap inline-block">
        {projects.map((project, index) => (
          <span key={index} className="profile-emoji" role="img" title={project.title} aria-label={project.label}>
            {project.icon}
          </span>
        ))}
      </div>
    </div>

    <div className="profile-languages">
      <h2 className="mt-1 mb-0"> Languages: </h2>
      <div className="flex-container">
        <span className="mr-1 small-font">
          {' '}
          <FaJs title="JavaScript" size="32" color="#F1DA4E" />{' '}
        </span>
        <span title="PHP" className="mr-1 small-font">
          {' '}
          <FaPhp size="32" color="#C4C9DF" />{' '}
        </span>
        <span title="Java" className="mr-1 small-font">
          {' '}
          <FaJava size="32" color="#0077B5" />{' '}
        </span>
        <span title="C" className="mr-1 small-font">
          {' '}
          <img className="icon inline-block" src={CIcon} alt={'Logo C Programming'} />{' '}
        </span>
      </div>
    </div>

    <div className="profile-stack flex-container wrap">
      <div className="mr-3">
        <h2 className="mt-1 mb-0 mr-1">Frontend: </h2>
        <FaReact title="React" size="40" color="#61dafb" />
        <FaHtml5 title="HTML5" size="40" color="#FE4C1C" />
        <FaCss3Alt title="CSS3" size="40" color="#1572B7" />
        <DiJqueryLogo title="jQuery" size="40" color="#0868AC" />
        <span className="mr-1">
          {' '}
          <img title="Handlebars" className="icon-md inline-block" src={HandlebarsIcon} alt={'Logo Handlebars'} />
        </span>
      </div>

      <div>
        <h2 className=" mt-1 mb-0 mr-1">Backend: </h2>
        <FaNode className="mr-1" title="Node" size="40" color="#43853d" />
        <span className="mr-1">
          {' '}
          <img
            title="Sequelize"
            className=" cursor-auto icon-md inline-block"
            src={SequelizeIcon}
            alt={'Logo Sequelize'}
          />
        </span>
      </div>
    </div>
    <div className="profile-cloud">
      <h2 className="mt-0 mx-0">Cloud: </h2>

      <div className="flex-container wrap">
        <FaAws className="justify-center" size="40" color="#FF9900" />
      </div>
      <div className="flex-container wrap">
        {awsLinks.map(({ href, title, alt, src }, index) => (
          <a key={index} className="no-link-style" target="blank" rel="noopener noreferrer" href={href}>
            <img title={title} src={src} alt={alt} className="icon-md inline-block" />
          </a>
        ))}
      </div>
    </div>
    <div className="profile-speaks">
      <h2 className="mt-1 mb-0"> Speaks: </h2>
      <p className="mt-0">Portuguese | English</p>
    </div>
  </div>
);

export default Profile;
