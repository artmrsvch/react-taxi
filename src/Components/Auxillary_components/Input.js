import React from 'react';
import PropTypes from 'prop-types';

Input.propTypes = {
    descript: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setClass: PropTypes.string
}

function  Input (props) {
    return (
        <label className={`login-form__label ${props.form === 'registr'?'login-form__label_flex':null}`}>
            <div className="login-form__suptitle">{`${props.descript}`}</div>
            <input 
                name={props.name}
                type={props.type}
                className={`login-form__inp ${props.setClass}`}/>
        </label>
    )
}

export default Input