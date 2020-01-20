import React from 'react';
import './login.scss';
import ButtonAutoriz from '../components/ButtonAutoriz'
import Input from '../components/Input'

class Login extends React.Component {
    render() {
        return (
            <section className="section-login">
                <div className="login">
                    <div className="login-descript">
                        <h1 className="login-descript__title">Войти</h1>
                        <button className="login-descript__subtitle">Зарегистрируйтесь</button>
                    </div>
                    <form className="login-form" onSubmit={()=>this.props.handle('map')}>
                        <Input descript="Имя пользователя*" type="text" setClass="login-form__inp_userName"/>
                        <Input descript="Пароль*" type="password" setClass="login-form__inp_userPass"/>
                        <ButtonAutoriz forms="Войти" />
                    </form>
                </div>
            </section>
        )
    }
}

export default Login