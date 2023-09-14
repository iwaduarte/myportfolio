import React from 'react';
import styles from './Boxes.module.css';
const { boxes, title, anchor } = styles;

const Boxes = ({ name, to = '#', className, ...otherProps }) => (
  <a href={to} className={`${boxes} ${title} ${anchor} ${styles[className]}`} {...otherProps}>
    {name}
  </a>
);

export default Boxes;
