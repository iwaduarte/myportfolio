import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import React from 'react';
import style from './Card.module.css';

const { card, body, tag, content, actions } = style;

const Card = ({ src, alt, tags = [], children, codeUrl = true, demoUrl = true }) => (
  <div className={card}>
    <img src={src} alt={alt} />
    <div className={body}>
      <div className={tag}>
        {tags.map((tag, key) => {
          const [name, color] = Array.isArray(tag) ? tag : [tag];
          return <Tag name={name} key={key} backgroundColor={color} />;
        })}
      </div>
      <div className={content}>{children}</div>
      <div className={actions}>
        {demoUrl && <Button> View Demo </Button>}
        {codeUrl && (
          <Button icon="social-github.svg" lightBtn>
            View Code
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default Card;
