import React from 'react';
import "./Button.css"

const Button = props => {
    const {className, children} = props;

    return <button  {...props} className={`c-button ${className}`}>
        {children}
    </button>;

};


export default Button;