import React from 'react';
import styles from './SideBar.module.css';
import Logo from '../../_components/Logo/Logo';

const { sidebar, outside } = styles;

const SideBar = () => (
  <div className={outside}>
    <Logo className={[sidebar]} />
  </div>
);

export default SideBar;
