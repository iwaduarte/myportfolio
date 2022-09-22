import React from 'react';
import styles from './Boxes.module.css';
import { Link } from 'react-router-dom';
const { boxes, title, 'm-trl': mTRL, anchor } = styles;

const Boxes = ({ name, to = '', className, ...otherProps }) => (
  <Link to={to} className={`${boxes} ${title} ${mTRL} ${anchor} ${styles[className]}`} {...otherProps}>
    {name}
  </Link>
);

export default Boxes;
