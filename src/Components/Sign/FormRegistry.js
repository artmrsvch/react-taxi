import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";
import { Form, Field } from "react-final-form";

function FormRegistry({ submit }) {
    const submitForm = obj => {
        submit(obj, "register");
    };
    const validateFields = values => {
        const errors = {};

        if (values.password) {
            if (values.password.length < 6) {
                errors.password = "Must be at least 6 characters.";
            }
        }

        return errors;
    };
    return (
        <Form
            onSubmit={submitForm}
            validate={validateFields}
            render={({ handleSubmit }) => (
                <form className="login-form" aria-label="registry" onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        descript="Адрес электронной почты"
                        type="email"
                        setClass="login-form__inp_userName"
                        component={Input}
                    />
                    <div className="login-form__name-block">
                        <Field
                            name="regName"
                            form="registr"
                            descript="Имя"
                            type="text"
                            setClass="login-form__inp_userName"
                            component={Input}
                        />
                        <Field
                            name="regLastName"
                            form="registr"
                            descript="Фамилия"
                            type="text"
                            setClass="login-form__inp_userLastName"
                            component={Input}
                        />
                    </div>
                    <Field
                        name="password"
                        descript="Пароль"
                        type="password"
                        setClass="login-form__inp_userPass"
                        component={Input}
                    />
                    <ButtonAutoriz forms="Зарегистрироваться" />
                </form>
            )}
        />
    );
}

FormRegistry.propTypes = {
    submit: PropTypes.func.isRequired
};

export default FormRegistry;
