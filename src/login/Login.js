import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './login.scss';
import ButtonAutoriz from '../components/ButtonAutoriz'
import Input from '../components/Input'

Sign.propTypes = {
    type: PropTypes.string.isRequired
}

function Sign(props) {
    //const [und, setUnd] = useState(0);

    return (
        <section className="section-login">
            <div className="login">
                <div className="login-descript">
                    <h1 className="login-descript__title">{props.type === 'login'?'Войти':'Регистрация'}</h1>
                    <div className="login-descript__subtitle">
                        <span>{props.type === 'login'?'Новый пользователь? ':'Уже зарегистрирован? '}</span>
                        <button className="login-descript__subtitle_prefix">{props.type === 'login'?'Зарегистрируйтесь':'Войти'}</button>
                    </div>   
                </div>
                <form className="login-form" onSubmit={props.handle('map')}>
                    <Input descript="Имя пользователя*" type="text" setClass="login-form__inp_userName"/>
                    <Input descript="Пароль*" type="password" setClass="login-form__inp_userPass"/>
                    <ButtonAutoriz forms={props.type === 'login'?'Войти':'Зарегистрироваться'}/>
                </form>
            </div>
        </section>    
        /*<section className="section-login">
            <div className="login">
                <div className="login-descript">
                    <h1 className="login-descript__title">Войти</h1>
                    <button className="login-descript__subtitle">Зарегистрируйтесь</button>
                </div>
                <form className="login-form" onSubmit={props.handle('map')}>
                    <Input descript="Имя пользователя*" type="text" setClass="login-form__inp_userName"/>
                    <Input descript="Пароль*" type="password" setClass="login-form__inp_userPass"/>
                    <ButtonAutoriz forms="Войти" />
                </form>
            </div>
        </section>*/
    )
}


export default Sign