import React from 'react';
import style from './Button.module.css';
const { button, light } = style;

const Button = ({ children, icon = '', lightBtn = false }) => (
  <button className={`${button} ${lightBtn ? light : ''}`}>
    {children} {icon && <img src={icon} alt="Icon" />}
  </button>
);

export default Button;
