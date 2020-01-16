import React from 'react';
import './login.scss';

class Login extends React.Component {

    render() {

        return (
            <div className="Login">
                <h1 className="Login-title">Login</h1>
                <div className="Login-inputs">
                    <input type="text" className="Login-inputs__userName" placeholder="Введите логин"/>
                    <input type="text" className="Login-inputs__userPass" placeholder="Введите пароль"/>
                </div>
            </div>
        )
    }
}

export default Login