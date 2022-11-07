import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import style from './Icons.module.css';

const { icons, icon } = style;

const Icons = ({ onClick, size = 40, displayArrow = true, iconsColor = '#fff' }) => (
  <div className={icons}>
    {displayArrow && <MdArrowForwardIos onClick={onClick} className={`${icon}`} color="#fff" size={22} />}

    <a className={'profile-links'} href="https://stackoverflow.com/users/7350853/iwaduarte" target="blank">
      <FaStackOverflow className={icon} color={iconsColor} size={size} />
    </a>
    <a className={'profile-links'} href="https://github.com/iwaduarte" target="blank">
      <FaGithub className={icon} color={iconsColor} size={size} />
    </a>
    <a className={'profile-links'} href="https://www.linkedin.com/in/iw%C3%A1-duarte-969a1a61/" target="blank">
      <FaLinkedin className={icon} color={iconsColor} size={size} />
    </a>
    <a className={'profile-links'} href="https://medium.com/@iwaduarte" target="blank">
      <SiMedium className={icon} color={iconsColor} size={size} />
    </a>
  </div>
);

export default Icons;
