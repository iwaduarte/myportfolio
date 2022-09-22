import React from 'react';
import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';

const { sidebar, text, outside } = styles;

const SideBar = () => (
  <div className={outside}>
    <Link to="/" className={`${sidebar} ${text}`}>
      IWA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIII III I II I&nbsp;&nbsp;I
    </Link>
  </div>
);

export default SideBar;
