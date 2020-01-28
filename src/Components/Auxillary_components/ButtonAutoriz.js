import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

ButtonAutoriz.propTypes = {
    forms: PropTypes.oneOf(["Войти", "Зарегистрироваться"]).isRequired
};

function ButtonAutoriz({ forms }) {
    return (
        <div className="login-btn">
            <button
                className="login-btn__submit"
                aria-label={forms === "Войти" ? "loginBtn" : "registerBtn"}
                type="submit"
            >
                {forms}
            </button>
        </div>
    );
}

export default ButtonAutoriz;
