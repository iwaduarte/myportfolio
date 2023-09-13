import React from 'react';
import style from './Title.module.css';

const { title, line } = style;

const Title = ({ titleName, to = '#' }) => (
  <a className={title} href={to}>
    <h1>{titleName}</h1>
    <div className={line}></div>
  </a>
);
export default Title;
