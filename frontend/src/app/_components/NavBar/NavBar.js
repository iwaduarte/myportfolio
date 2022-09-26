import React, { useState } from 'react';
import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiMedium } from 'react-icons/si';
import { MdArrowForwardIos } from 'react-icons/md';
import styles from './NavBar.module.css';

/* NavBar containing:
 - dark mode

 The NavBar has to have a X component that will close to the side. ( X => < )
 The Nav will be sticky/fixed positioned on the right top corner of the screen

 - language translation (to implement later in life )
 - search (to implement later in life) :P
 */

const { navBar, arrow, lt, animateClose, animateOpen, icon, icons } = styles;

const NavBar = () => {
  const [showBar, setShowBar] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);
  const size = 40;

  const closeBar = () => {
    setAnimate(true);
    setOpenNavBar(false);
    setTimeout(() => setShowBar(false), 1000);
  };

  return showBar ? (
    <div className={`${navBar} ${animate ? animateClose : ''}`}>
      <div className={icons}>
        <MdArrowForwardIos onClick={closeBar} className={icon} color="#fff" size={22} />
        <a className={'profile-links'} href="https://stackoverflow.com/users/7350853/iwaduarte" target="blank">
          <FaStackOverflow className={icon} color="#fff" size={size} />
        </a>
        <a className={'profile-links'} href="https://github.com/iwaduarte" target="blank">
          <FaGithub className={icon} color="white" size={size} />
        </a>
        <a className={'profile-links'} href="https://www.linkedin.com/in/iw%C3%A1-duarte-969a1a61/" target="blank">
          <FaLinkedin className={icon} color="#fff" size={size} />
        </a>
        <a className={'profile-links'} href="https://medium.com/@iwaduarte" target="blank">
          <SiMedium className={icon} color="#fff" size={size} />
        </a>
      </div>
    </div>
  ) : (
    <div
      className={`${arrow} ${openNavBar ? animateOpen : ''}`}
      onClick={() => {
        setAnimate(false);
        setOpenNavBar(true);
        setTimeout(() => setShowBar(true), 1200);
      }}
    >
      <div className={lt}>&lt;</div>
    </div>
  );
};

export default NavBar;
