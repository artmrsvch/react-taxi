import React from 'react';
import PropTypes from 'prop-types';

ButtonAutoriz.propTypes = {
    forms: PropTypes.oneOf(["Войти", "Зарегистрироваться"]).isRequired
}

function ButtonAutoriz (props){
    return (
        <div className="login-btn">
            <button className="login-btn__submit" type="submit">{`${props.forms}`}</button>
        </div>
    )
}

export default ButtonAutoriz