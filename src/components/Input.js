import React from 'react';

function  Input (props) {

    return (
        <label className={`login-form__label ${props.form === 'registr'?'login-form__label_flex':null}`}>
            <div className="login-form__suptitle">{`${props.descript}`}</div>
            <input 
                ref={el => props.giveRef(el)}
                name={props.name}
                type={`${props.type}`} 
                className={`login-form__inp ${props.setClass}`}/>
        </label>
    )
}

export default Input