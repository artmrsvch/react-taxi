import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";

function FormRegistry({ submit, getValue }) {
    const handleSubmit = e => {
        e.preventDefault();
        submit("register");
    }

    return (
        <form className="login-form" aria-label="registry" onSubmit={handleSubmit}>
            <Input
                name="email"
                descript="Адрес электронной почты"
                type="email"
                setClass="login-form__inp_userName"
                getValue={getValue}
            />
            <div className="login-form__name-block">
                <Input
                    name="regName"
                    form="registr"
                    descript="Имя"
                    type="text"
                    setClass="login-form__inp_userName"
                    getValue={getValue}
                />
                <Input
                    name="regLastName"
                    form="registr"
                    descript="Фамилия"
                    type="text"
                    setClass="login-form__inp_userLastName"
                    getValue={getValue}
                />
            </div>
            <Input
                name="password"
                descript="Пароль"
                type="password"
                setClass="login-form__inp_userPass"
                getValue={getValue}
            />
            <ButtonAutoriz forms="Зарегистрироваться" />
        </form>
    );
}

FormRegistry.propTypes = {
    submit: PropTypes.func.isRequired,
    getValue: PropTypes.func.isRequired
};

export default FormRegistry;
