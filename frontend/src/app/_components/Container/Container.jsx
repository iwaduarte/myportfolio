import React from 'react';
import style from './Container.module.css';

const { container } = style;

const Container = ({ children, className = '' }) => <div className={`${container} ${className}`}>{children}</div>;

export default Container;
