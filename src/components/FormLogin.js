import React, {useContext} from 'react';
import ButtonAutoriz from './ButtonAutoriz';
import Input from './Input';
import {Status} from '../App'

function FormLogin(props) {
    const context = useContext(Status);
    let inputName;
    let inputPassword;

    const getRefs = (node) => {
        
       node.getAttribute('name') === 'loginName' ? inputName = node : inputPassword = node
       console.log(inputName, inputPassword)
    }
    const submit = (email, pass) => () => {
        context.login(email.value, pass.value);
    }
    return (
        <form className="login-form" onSubmit={submit(inputName, inputPassword)}>
            <Input 
                descript="Имя пользователя*"
                name="loginName" 
                type="text" 
                setClass="login-form__inp_userName"
                giveRef={getRefs}
            />
            <Input 
                descript="Пароль*"
                name="loginPass" 
                type="password" 
                setClass="login-form__inp_userPass"
                giveRef={getRefs}
            />
            <ButtonAutoriz forms="Войти"/>
        </form>
    )
}

export default FormLogin 