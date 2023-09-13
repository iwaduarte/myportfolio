import React from 'react';
import style from './Logo.module.css';

const { text } = style;

const Logo = ({ className = [], extraBarCode = true }) => {
  return (
    <a href="/" className={`${className.join(' ')} ${text}`}>
      IWA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIII III I {extraBarCode && `III I II I&nbsp;&nbsp;I`}
    </a>
  );
};

export default Logo;
