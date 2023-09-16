import Tag from '../Tag/Tag';
import Button from '../Button/Button';
import React from 'react';
import style from './Card.module.css';

const { card, body, tag, content, actions } = style;

const colorMap = {
  moderate: '#009688',
  'react.js': '#2196F3',
  'styled-components': '#FF9800',
  formik: '#673AB7',
  hard: '#4CAF50',
  indexeddb: '#3F51B5',
  'chrome-extension': '#CDDC39',
  'firefox-extension': '#9C27B0',
  'express-sire': '#FF5722',
  generator: '#00BCD4',
  node: '#FFEB3B',
  npm: '#E91E63',
  cli: '#795548',
  'ci/cd': '#03A9F4',
  javascript: '#8BC34A',
  'node.js': '#9E9E9E',
  aws: '#FFC107',
  ses: '#607D8B',
  easy: '#E65100',
  'express.js': '#3D5AFE',
  graphQL: '#FF6F00',
  serverless: '#283593',
  'style-components': '#FFA000',
  fabricjs: '#1A237E',
  canvas: '#FFCA28',
  html: '#0D47A1',
  css: '#FFD54F',
  financejs: '#1976D2'
};
const Card = ({ src, alt, tags = [], children, codeUrl = '', demoUrl = '' }) => {
  return (
    <div className={card}>
      <img src={src} alt={alt} />
      <div className={body}>
        <div className={tag}>
          {tags.map((tag, key) => {
            const [name] = Array.isArray(tag) ? tag : [tag];
            return <Tag name={name} key={key} backgroundColor={colorMap[tag]} />;
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
