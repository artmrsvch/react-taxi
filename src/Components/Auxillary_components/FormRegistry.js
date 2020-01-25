import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";

function FormRegistry({ submit, getValue }) {
    const handleSubmit = e => submit(e, "registr");

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <Input
                name="regMail"
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
                name="regPass"
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
