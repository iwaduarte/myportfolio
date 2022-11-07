import React from 'react';
import style from './Dots.module.css';
const { dot, dots } = style;

const Dots = () => (
  <div className={dots} role="separator">
    <span className={dot}></span>
    <span className={dot}></span>
    <span className={dot}></span>
  </div>
);

export default Dots;
