import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Icons from '../Icons/Icons';

/* NavBar containing:
 - dark mode
 - language translation (to implement later in life )
 - search (to implement later in life) :P
 */
const size = 40;
const { navBar, arrow, lt, animateClose, animateOpen } = styles;

const NavBar = () => {
  const [showBar, setShowBar] = useState(true);
  const [animate, setAnimate] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(false);

  const closeBar = () => {
    setAnimate(true);
    setOpenNavBar(false);
    setTimeout(() => setShowBar(false), 1000);
  };

  return showBar ? (
    <div className={`${navBar} ${animate ? animateClose : ''}`}>
      <Icons onClick={closeBar} size={size} />
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
