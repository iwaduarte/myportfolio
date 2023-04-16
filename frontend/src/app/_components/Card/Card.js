import Tag from '../Tag/Tag';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';
import React from 'react';
import style from './Card.module.css';

const { card, body, tag, content, actions } = style;

const colorMap = {
  moderate: '#FFC107',
  'react.js': '#61DAFB',
  'styled-components': '#DB7093',
  formik: '#F15A29',
  hard: '#DC3545',
  indexeddb: '#28A745',
  'chrome-extension': '#17A2B8',
  'firefox-extension': '#007BFF',
  'express-sire': '#FFA07A',
  generator: '#8B0000',
  node: '#3CB371',
  npm: '#2E8B57',
  cli: '#20B2AA',
  'ci/cd': '#008B8B',
  javascript: '#F0E68C',
  'node.js': '#7CFC00',
  aws: '#32CD32',
  ses: '#ADFF2F',
  easy: '#228B22',
  'express.js': '#6B8E23',
  graphQL: '#808000',
  serverless: '#556B2F',
  'style-components': '#9ACD32'
};

const Card = ({ src, alt, tags = [], children, codeUrl = '', demoUrl = '' }) => {
  const navigate = useNavigate();

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
            <Button handleClick={() => (demoUrl !== 'self' ? window.open(demoUrl) : navigate('/'))}> View Demo </Button>
          )}
          {codeUrl && (
            <Button handleClick={() => window.open(codeUrl)} icon="social-github.svg" lightBtn>
              View Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
