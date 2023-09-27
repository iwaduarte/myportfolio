import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import React from 'react';
import style from './Card.module.css';

const { card, body, tag, content, actions } = style;

const Card = ({ src, alt, tags = [], children, codeUrl = '', demoUrl = '' }) => {
  return (
    <div className={card}>
      <img src={src} alt={alt} />
      <div className={body}>
        <div className={tag}>
          {tags.map((tag, key) => {
            const [name] = Array.isArray(tag) ? tag : [tag];
            return <Tag name={name} key={key} />;
          })}
        </div>
        <div className={content}>{children}</div>
        <div className={actions}>
          {demoUrl && (
            <Button handleClick={() => (demoUrl !== 'self' ? window.open(demoUrl) : window.open('/'))}>
              View Demo{' '}
            </Button>
          )}
          {codeUrl && (
            <Button handleClick={() => window.open(codeUrl)} icon="/social-github.svg" lightBtn>
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
