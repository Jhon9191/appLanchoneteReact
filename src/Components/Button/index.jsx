import React from 'react';

import styles from './Button.css'

const Button = ({ children, name }) => {
    return(
        <div className="buttonForm" onClick={() => alert("olá")}>
            {children}
            {name}
        </div>
    );
}

export default Button;