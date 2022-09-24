import React from 'react';
import style from './BlogCard.module.css';

const { card, container, image } = style;

const article = 'This is an medium articleeee';

const BlogCard = ({ src = ``, alt = 'Avatar' }) => (
  <div className={card}>
    <div className={image}>{src && <img src={src} alt={alt} style={{ width: '100%' }} />}</div>
    <div className={container}>
      <h4>
        <b>{article}</b>
      </h4>
      <p>Architect & Engineer</p>
    </div>
  </div>
);

export default BlogCard;
