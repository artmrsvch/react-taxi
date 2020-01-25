import React from "react";
import PropTypes from "prop-types";

function Input({ descript, name, type, setClass, form, getValue }) {
    const doIt = e => getValue(e.target.name, e.target.value);
    return (
        <label
            className={`login-form__label ${form === "registr" ? "login-form__label_flex" : null}`}
        >
            <div className="login-form__suptitle">{`${descript}`}</div>
            <input
                onChange={doIt}
                name={name}
                type={type}
                className={`login-form__inp ${setClass}`}
            />
        </label>
    );
}

Input.propTypes = {
    descript: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    setClass: PropTypes.string,
    form: PropTypes.string
};
export default Input;
