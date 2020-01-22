import React from 'react';
import PropTypes from 'prop-types';
import ButtonAutoriz from './ButtonAutoriz';
import Input from './Input';

FormRegistry.propTypes = {
    submit: PropTypes.func.isRequired
}

function FormRegistry(props) {
    let node;

    return (
        <form ref={el => node = el} className="login-form" onSubmit={e=>props.submit(e, node)}>
            <Input name="regMail" descript="Адрес электронной почты" type="email" setClass="login-form__inp_userName"/>
            <div className="login-form__name-block">
                <Input name="regName" form="registr" descript="Имя" type="text" setClass="login-form__inp_userName"/>
                <Input name="regLastName" form="registr" descript="Фамилия" type="text" setClass="login-form__inp_userLastName"/>
            </div>
            <Input name="regPass" descript="Пароль" type="password" setClass="login-form__inp_userPass"/>
            <ButtonAutoriz forms="Зарегистрироваться"/>
        </form>
    )
}

export default FormRegistry 