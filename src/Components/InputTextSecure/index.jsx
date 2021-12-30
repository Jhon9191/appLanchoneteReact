import React from 'react';
import './InputTextSecure.css';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const InputTextSecure = ({ children, placeholder, funcao, hasIcon, secure, onChange }) => {

    return (
        <div>
            <div className="input">
                <input autocomplete="off" onChange={onChange} placeholder={placeholder} type={secure == true ? "password" : "text"} />
                {children}
                {secure === true ? (
                    <AiFillEyeInvisible className="button" onClick={funcao} size={20} color="rgba(215, 0, 82)" />
                ) : (
                    <AiFillEye className="button" onClick={funcao} size={20} color="rgba(215, 0, 82)" />
                )}
            </div>

        </div>
    );
}

{/* <div className="input">
{children}
<spam>{placeholder}</spam>
{construct === true ? (
    <AiFillEyeInvisible className="button" onClick={retorna} size={20} color="rgba(215, 0, 82)" />
) : (
    <AiFillEye className="button" onClick={retorna} size={20} color="rgba(215, 0, 82)" />
)}
</div> */}

export default InputTextSecure;