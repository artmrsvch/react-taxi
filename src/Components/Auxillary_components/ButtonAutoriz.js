import React from "react";
import PropTypes from "prop-types";

ButtonAutoriz.propTypes = {
    forms: PropTypes.oneOf(["Войти", "Зарегистрироваться"]).isRequired
};

function ButtonAutoriz({ forms }) {
    return (
        <div className="login-btn">
            <button className="login-btn__submit" type="submit">{`${forms}`}</button>
        </div>
    );
}

export default ButtonAutoriz;
