import React from 'react';
import style from './BlogCard.module.css';
import Tag from '../Tag/Tag';

const { card, container, image, body, footer } = style;

const BlogCard = ({ src = ``, alt = 'Avatar', title = '', content = '', author, tags, link, order }) => (
  <div className={card} onClick={() => (window.location = link)} style={{ order }}>
    <div className={image}>{src && <img src={src} alt={alt} style={{ width: '100%' }} />}</div>
    <div className={container}>
      <div className={body}>
        <h4>
          <b>{title}</b>
        </h4>
        <p>{content}...</p>
      </div>
      <div className={footer}>
        {tags?.map((tag, key) => {
          const [name, color] = Array.isArray(tag) ? tag : [tag];
          return <Tag name={name} key={key} backgroundColor={color} margin="2px" />;
        })}
      </div>
    </div>
  </div>
);

export default BlogCard;
