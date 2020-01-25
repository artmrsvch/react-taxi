import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";

function FormLogin({ submit, getValue }) {
    const handleSubmit = e => submit(e, "login");

    return (
        <form name="login" className="login-form" onSubmit={handleSubmit}>
            <Input
                descript="Имя пользователя*"
                name="loginName"
                type="text"
                setClass="login-form__inp_userName"
                getValue={getValue}
            />
            <Input
                descript="Пароль*"
                name="loginPass"
                type="password"
                setClass="login-form__inp_userPass"
                getValue={getValue}
            />
            <ButtonAutoriz forms="Войти" />
        </form>
    );
}
FormLogin.propTypes = {
    submit: PropTypes.func.isRequired
};
export default FormLogin;
