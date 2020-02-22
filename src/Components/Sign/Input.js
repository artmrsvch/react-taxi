import React from "react";
import PropTypes from "prop-types";

function Input({ descript, input, setClass, meta, form }) {
    return (
        <label
            className={`login-form__label ${form === "registr" ? "login-form__label_flex" : null}`}
        >
            <div className="login-form__suptitle">{`${descript}`}</div>
            <input
                {...input}
                aria-label={input.name}
                className={`login-form__inp ${setClass}`}
                required
            />
            {meta.error && meta.visited && !meta.active && (
                <div style={{ fontSize: "12px", color: "red" }}>{meta.error}</div>
            )}
        </label>
    );
}

Input.propTypes = {
    descript: PropTypes.string.isRequired,
    setClass: PropTypes.string,
    form: PropTypes.string
};
Input.defaultProps = {
    setClass: null
};
export default Input;
