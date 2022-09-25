import React from 'react';
import style from './Tag.module.css';

const { tag } = style;

const Tag = ({ name, backgroundColor, margin }) => (
  <button className={tag} title={name} style={{ backgroundColor, margin }}>
    {name}
  </button>
);

export default Tag;
