import React from 'react';
import styles from './Main.module.css';
import Boxes from '../Boxes/Boxes';
const { main, line } = styles;

const Main = props => (
  <div>
    <div className={line} />
    <div className={main}>
      <Boxes to="about" name="ABOUT ME" />
      <Boxes name="VIDEOS" />
      <Boxes to="/articles" name="ARTICLES" />
      <Boxes to="/projects" name="PROJECTS" />
    </div>
  </div>
);
export default Main;
