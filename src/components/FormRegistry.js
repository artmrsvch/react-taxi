import React, {useState} from 'react';
import PropTypes from 'prop-types';
import ButtonAutoriz from './ButtonAutoriz';
import Input from './Input';

FormRegistry.propTypes = {
    handle: PropTypes.func.isRequired
}

function FormRegistry(props) {
    return (
        <form className="login-form" onSubmit={props.handle('map')}>
            <Input descript="Адрес электронной почты" type="email" setClass="login-form__inp_userName"/>
            <div className="login-form__name-block">
                <Input form="registr" descript="Имя" type="text" setClass="login-form__inp_userName"/>
                <Input form="registr" descript="Фамилия" type="text" setClass="login-form__inp_userLastName"/>
            </div>
            <Input descript="Пароль" type="password" setClass="login-form__inp_userPass"/>
            <ButtonAutoriz forms="Зарегистрироваться"/>
        </form>
    )
}

export default FormRegistry 