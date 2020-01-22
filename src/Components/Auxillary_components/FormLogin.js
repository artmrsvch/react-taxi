import React from 'react';
import PropTypes from 'prop-types';
import ButtonAutoriz from './ButtonAutoriz';
import Input from './Input';

FormLogin.propTypes = {
    submit: PropTypes.func.isRequired
}

function FormLogin(props) {
    let node;

    return (
        <form name="login" ref={el=>node=el} className="login-form" onSubmit={e => props.submit(e, node)}>
            <Input 
                descript="Имя пользователя*"
                name="loginName" 
                type="text" 
                setClass="login-form__inp_userName"
            />
            <Input 
                descript="Пароль*"
                name="loginPass" 
                type="password" 
                setClass="login-form__inp_userPass"
            />
            <ButtonAutoriz forms="Войти"/>
        </form>
    )
}

export default FormLogin 