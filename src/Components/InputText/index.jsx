import React from 'react';
import './InputText.css';

const InputText = ({ children, placeholder, type, funcao }) => {

    return (
        <div>
            {children}
            <input className="input" onChange={funcao} placeholder={placeholder} type={type}/>
        </div>
    );
}

export default InputText;