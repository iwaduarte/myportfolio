import React from 'react';
import style from './Tag.module.css';

const { tag } = style;

const Tag = ({ name, backgroundColor }) => (
  <button className={tag} style={{ backgroundColor }}>
    {name}
  </button>
);

export default Tag;
