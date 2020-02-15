import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";

function FormLogin({ submit, getValue }) {
    const handleSubmit = e => {
        e.preventDefault();
        submit("login");
    }
    return (
        <form aria-label="login" className="login-form" onSubmit={handleSubmit}>
            <Input
                descript="Введите email*"
                name="email"
                type="email"
                setClass="login-form__inp_userName"
                getValue={getValue}
            />
            <Input
                descript="Пароль*"
                name="password"
                type="password"
                setClass="login-form__inp_userPass"
                getValue={getValue}
            />
            <ButtonAutoriz forms="Войти" />
        </form>
    );
}
FormLogin.propTypes = {
    submit: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired
};
export default FormLogin;
