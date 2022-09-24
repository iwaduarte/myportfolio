import React from 'react';
import style from './Title.module.css';

const { title, line } = style;

const Title = ({ titleName }) => (
  <div className={title}>
    <h1>{titleName}</h1>
    <div className={line}></div>
  </div>
);
export default Title;
