import React from 'react';
import { Link } from 'react-router-dom';
import style from './Logo.module.css';

const { text } = style;

const Logo = ({ className = [], extraBarCode = true }) => {
  return (
    <Link to="/" className={`${className.join(' ')} ${text}`}>
      IWA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;IIII III I {extraBarCode && `III I II I&nbsp;&nbsp;I`}
    </Link>
  );
};

export default Logo;
