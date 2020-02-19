import React from "react";
import PropTypes from "prop-types";
import ButtonAutoriz from "./ButtonAutoriz";
import Input from "./Input";
import { Form, Field } from "react-final-form";

function FormLogin({ submit }) {
    const submitForm = obj => {
        submit(obj, "login");
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
                <form aria-label="login" className="login-form" onSubmit={handleSubmit}>
                    <Field
                        descript="Введите email*"
                        name="email"
                        type="email"
                        setClass="login-form__inp_userName"
                        component={Input}
                    />
                    <Field
                        descript="Пароль*"
                        name="password"
                        type="password"
                        setClass="login-form__inp_userPass"
                        component={Input}
                    />
                    <ButtonAutoriz forms="Войти" />
                </form>
            )}
        />
    );
}
FormLogin.propTypes = {
    submit: PropTypes.func.isRequired
};
export default FormLogin;
