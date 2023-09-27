import React from 'react';
import style from './Tag.module.css';

const { tag, text } = style;

const Tag = ({ name, backgroundColor, margin }) => {
  return (
    <button className={tag} title={name} style={{ margin }}>
      <span className={text}>{name}</span>
    </button>
  );
};

export default Tag;
